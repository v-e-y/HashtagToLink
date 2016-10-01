'use strict';
/*
* Search #someString and add hostname
* Exemple, we have: Lorem #ipsum some string.
* after script work we will have Lorem <a href="http://example.com/#ipsum" title="ipsum">#ipsum</a> some string.
*/
class MakeHashTagsLinks {
    /*
    * @searchArea: write id element. If you hafe <div id="content", write, to searchArea, content.
    * @baseUrl: write full url, with http://example.com/
    */
    constructor(searchArea, baseUrl) {
        this.addedUrlToHashtag = baseUrl || location.hostname;
        this.searchArea = document.getElementById(searchArea);
        this.searchAreaTextToArr = document.getElementById(searchArea).innerHTML.split(' ');
    }
    letsMakeHashTags() {
        let readyString = this.searchHashTags();
        this.searchArea.innerHTML = readyString;
    }
    searchHashTags() {
        for (let i = 0; i < this.searchAreaTextToArr.length; i++) {
            let selectedWord = this.searchAreaTextToArr[i];
            if (selectedWord.search('#') === 0) {
                this.searchAreaTextToArr[i] = this.addAttributes(selectedWord);
            }
        }
        return this.searchAreaTextToArr.join(' ');
    }
    addAttributes(hashTag) {
        let href = this.addedUrlToHashtag + "" + hashTag;
        let hashtagToLink = hashTag.link(href);
        //let link: HTMLElement = document.createElement('a');
        //link.href = this.addedUrlToHashtag + "" + hashTag;
        //link.innerHTML = hashTag;
        //link.title = link.text;
        return hashtagToLink;
    }
}

window.onload = (function() {
    let letsMakeHashTagsLinks = new MakeHashTagsLinks('test', 'http://google.com/');
    letsMakeHashTagsLinks.letsMakeHashTags();
})();
//# sourceMappingURL=app.js.map