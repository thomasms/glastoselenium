from setuptools import setup


setup(name='glasto',
      version='0.0.3',
      description='The simple package to automate booking glastonbury tickets.',
      url='https://github.com/thomasms/glastoselenium',
      author='',
      author_email='stainer.tom@gmail.com',
      license='GPL-3.0',
      packages=[
          'glasto'
      ],
      install_requires=[
          'selenium'
      ],
      python_requires='>=3',
      scripts=['scripts/glasto2019.py'],
      zip_safe=False)
