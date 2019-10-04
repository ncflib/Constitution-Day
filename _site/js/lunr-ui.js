$.getJSON("/constitution/js/lunr-index.json", function(index_json) {
window.index = new elasticlunr.Index;
window.store = index_json;
index.saveDocument(false);
index.setRef('lunr_id');
index.addField('pid');
index.addField('link');
index.addField('collection');
index.addField('lunr_id');
index.addField('topic');
index.addField('amendment');
index.addField('article');
index.addField('text');
index.addField('source');
index.addField('content');
// add docs
for (i in store){index.addDoc(store[i]);}
$('input#search').on('keyup', function() {
var results_div = $('#results');
var query = $(this).val();
var results = index.search(query, { boolean: 'AND', expand: true });
results_div.empty();
if (results.length > 10) {
results_div.prepend("<p><small>Displaying 10 of " + results.length + " results.</small></p>");
}
for (var r in results.slice(0, 9)) {
var ref = results[r].ref;
var item = store[ref];
var result = '<div class="result"><b><a href="/constitution/constitution/' + item.pid + '"><img class="sq-thumb-sm" src="/constitution/assets/constitution/thumbs/' + item.source.toUpperCase().replace('JPG','jpg').replace('PNG','png') + '"/>&nbsp;&nbsp;&nbsp;' + item.text.substring(0,50) + '...</a></b></p></div>';
results_div.append(result);
}
});
});