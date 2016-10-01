'use strict';
/*
* Search #someString and add hostname
* Exemple, we have: Lorem #ipsum some string.
* after script work we will have Lorem <a href="http://example.com/#ipsum" title="ipsum">#ipsum</a> some string.
*/
class MakeHashTagsLinks {
    /*
    * @searchArea: write id element. If you hafe <div id="content", write, to searchArea, content.
    * @baseUrl: write full url, with http://.
    */
    constructor(searchArea, baseUrl) {
        if (!searchArea || !baseUrl || arguments.length < 2 || arguments.length > 2) {
            throw new Error('Write to the constructor all the necessary arguments (2).');
        }
        this.addedUrlToHashtag = baseUrl || location.hostname;
        this.searchArea = document.getElementById(searchArea);
        this.searchAreaTextToArr = document.getElementById(searchArea).innerHTML.split(' ');
    }
    letsMakeHashTags() {
        let readyString = this.searchHashTags();
        this.searchArea.innerHTML = readyString;
    }
    // This method search hashtag element in array
    // if have call addAttributes() after that
    // returns string 
    searchHashTags() {
        for (let i = 0; i < this.searchAreaTextToArr.length; i++) {
            let selectedWord = this.searchAreaTextToArr[i];
            // If selected word it hashtag
            if (selectedWord.search('#') === 0) {
                this.searchAreaTextToArr[i] = this.addAttributes(selectedWord);
            }
        }
        return this.searchAreaTextToArr.join(' ');
    }
    // Make link
    // arguments: hashtag (string)
    // returns: link (string)
    addAttributes(hashTag) {
        let href = this.addedUrlToHashtag + hashTag;
        let hashtagToLink = hashTag.link(href);
        return hashtagToLink;
    }
}
//# sourceMappingURL=app.js.map