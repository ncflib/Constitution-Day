# Constitution Day
## New College of Florida - Digital Scholarship Studio

Constitution Day is an online exhibit featuring New College of Florida students' answers to *"What would you change about the Constitution?"*. It uses the amazing [MonumentLab/Proposals](https://github.com/MonumentLab/proposals) Jekyll theme. This fork does not have the original image resources. 

## Updating the website

Constitution Day uses Jekyll which is a powerful and simple static site generator. The static website lies under the *"\_site"* folder. Jekyll makes it really simple to update the website. You have to make sure that you have Jekyll installed on your device. If not, please check the [Installion Page](https://jekyllrb.com/docs/installation/).

- Update the constitution.csv file under "*\_data*" folder.
- Upload the thumbnails to "*assets/constitution/thumbs*" folder and the full images to "*assets/constitution/full*" folder.
- If some data is updated, you need to remove it from the "*collections/constitution*" folder or Jekyll will skip it.
- To update the website, there are 3 commands to run:
- - Run "bundle exec rake wax:pagemaster constitution" to generate the collection item pages.
- - Run "bundle exec rake wax:lunr"  to generate the Elasticlunr.js search index.
- - Run "bundle exec jekyll serve" to preview your site in progress. This will also generate the static website and update the *"\_site"* folder.

## Thanks

Special thanks to [MonumentLab/Proposals](https://github.com/MonumentLab) for making such a rocking theme. And to [Atalay Kutlay](https://atalaykutlay.com) for his patience and skill. 
