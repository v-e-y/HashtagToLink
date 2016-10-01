'use strict';
/*
* Search #someString and add hostname
* Exemple, we have: Lorem #ipsum some string.
* after script work we will have Lorem <a href="http://example.com/#ipsum" title="ipsum">#ipsum</a> some string.
*/
/**
 * MakeHashTags
 */
var MakeHashTagsLinks = (function () {
    /*
    * @searchArea: write id element. If you hafe <div id="content", write, to searchArea, content.
    * @baseUrl: write full url, with http://.
    */
    function MakeHashTagsLinks(searchArea, baseUrl) {
        this.addedUrlToHashtag = baseUrl || location.hostname;
        this.searchArea = document.getElementById(searchArea);
        this.searchAreaTextToArr = document.getElementById(searchArea).innerHTML.split(' ');
    }
    MakeHashTagsLinks.prototype.letsMakeHashTags = function () {
        var readyString = this.searchHashTags();
        this.searchArea.innerHTML = readyString;
    };
    MakeHashTagsLinks.prototype.searchHashTags = function () {
        for (var i = 0; i < this.searchAreaTextToArr.length; i++) {
            var selectedWord = this.searchAreaTextToArr[i];
            if (selectedWord.search('#') === 0) {
                this.searchAreaTextToArr[i] = this.addAttributes(selectedWord);
            }
        }
        return this.searchAreaTextToArr.join(' ');
    };
    MakeHashTagsLinks.prototype.addAttributes = function (hashTag) {
        var href = this.addedUrlToHashtag + "" + hashTag;
        var hashtagToLink = hashTag.link(href);
        //let link: HTMLElement = document.createElement('a');
        //link.href = this.addedUrlToHashtag + "" + hashTag;
        //link.innerHTML = hashTag;
        //link.title = link.text;
        return hashtagToLink;
    };
    return MakeHashTagsLinks;
}());
//# sourceMappingURL=app.js.map