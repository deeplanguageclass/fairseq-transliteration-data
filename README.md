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
