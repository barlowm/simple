/*global elasticlunr getDocs saveIndex */

// get documents to be indexed.
const docs = getDocs();
const index = elasticlunr(function() {
  // Set fields to index.
  this.addField("name");
  this.addField("description");
  // Set the field used to identify documents.
  this.setRef("id");
  // Include product data with the index data.
  this.saveDocument(true);
  for (let doc of docs) {
    this.addDoc(doc);
  }
});
// Write the index file.
saveIndex(JSON.stringify(index));
