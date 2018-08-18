# fairseq-transliteration-data

This dataset is used by [deeplanguageclass/fairseq-transliteration.ipynb](https://github.com/deeplanguageclass/fairseq-transliteration.ipynb) via [fairseq-transliteration/blob/master/examples/translation/prepare-translit.sh](https://github.com/deeplanguageclass/fairseq-transliteration/blob/master/examples/translation/prepare-translit.sh).

The data are simply parallel corpora for transliteration.

For example, for Armenian in Latin script to Armenian in Armenian script:
```
tar zxvf la-hy.train.tar.gz

head train/*
```

The result will be:
```
==> train/translit.la-hy.hy <==
    Վիքիպեդիա
      Մեդիա
      Սպասարկող
      Քննարկում
      Մասնակից
      Մասնակցի քննարկում
      Վիքիպեդիա
      Վիքիպեդիայի քննարկում
      Պատկեր
      Պատկերի քննարկում

==> train/translit.la-hy.la <==
    Viqipedia
      Media
      Spasarkox
      Qnnarkum
      Masnakic
      Masnakci qnnarkum
      Viqipedia
      Viqipediayi qnnarkum
      Patker
      Patkeri qnnarkum
```

## Generating new data

We can generate a parallel corpus from an unlabelled monolingual corpus in the *target* language.

### Data file

Any text in the target language will work.  It can contain noise - words or lines in the source language or third languages.

For example you can use a Wikipedia dump, cleaned and de-duped.

### Transliteration rules

`transliteration.json` is a mapping from target character sequences to source character sequence options.

### Run
```
node generate.js data.txt 
```
This will yield `data.txt.src` and `data.txt.trg`, which will have the same length.

Note that it cuts long rows and removes invalid rows, so they may not have exactly same length as data.txt.
