def tofile(content, filename):
    with open(filename, 'wt') as f:
        f.write(content)