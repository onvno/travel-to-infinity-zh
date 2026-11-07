"""Expand written numbers to unambiguous Mandarin for local TTS only."""
import re

DIGITS = '零一二三四五六七八九'


def integer_chinese(value):
    if value == 0:
        return '零'
    for unit, label in [(10**12, '万亿'), (10**8, '亿'), (10**4, '万')]:
        if value >= unit:
            upper, lower = divmod(value, unit)
            return integer_chinese(upper) + label + (('零' if lower < unit // 10 else '') + integer_chinese(lower) if lower else '')
    result = ''
    pending_zero = False
    for exponent in range(3, -1, -1):
        digit, value = divmod(value, 10**exponent)
        if digit:
            if pending_zero:
                result += '零'
            result += DIGITS[digit] + ['', '十', '百', '千'][exponent]
            pending_zero = False
        elif result and value:
            pending_zero = True
    return result[1:] if result.startswith('一十') else result


def number_chinese(token):
    token = token.replace(',', '')
    if '.' in token:
        whole, fraction = token.split('.')
        return integer_chinese(int(whole)) + '点' + ''.join(DIGITS[int(char)] for char in fraction)
    return integer_chinese(int(token))


def spoken_text(text):
    # Written years use individual digits, while quantities retain their place values.
    text = re.sub(r'(?<![\d,])(?:1[6-9]\d{2}|20\d{2})(?=\s*年(?!前))',
                  lambda match: ''.join(DIGITS[int(char)] for char in match[0]), text.strip())
    text = re.sub(r'[\d,]+(?:\.\d+)?\s*%',
                  lambda match: '百分之' + number_chinese(match[0].replace('%', '').strip()), text)
    text = re.sub(r'\d[\d,]*(?:\.\d+)?', lambda match: number_chinese(match[0]), text)
    # Spaces used for visual spacing around digits should not become pauses
    # once the numbers have been expanded to Chinese words.
    text = re.sub(r'(?<=[\u3400-\u9fff])\s+(?=[\u3400-\u9fff])', '', text)
    text = text.replace('DNA', 'D N A')
    if not text.endswith(('。', '！', '？')):
        text += '。'
    return text
