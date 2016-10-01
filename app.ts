'use strict';
/*
* Search #someString and add hostname
* Exemple, we have: Lorem #ipsum some string.
* after script work we will have Lorem <a href="http://example.com/#ipsum" title="ipsum">#ipsum</a> some string.
*/
/**
 * MakeHashTags
 */
class MakeHashTagsLinks {
    // Where we will be search hashtags
    searchArea: HTMLElement;
    // Content what area have
    searchAreaTextToArr: string[];
    // Url what we well add to hashtags
    addedUrlToHashtag: string;

    constructor(searchArea:string, baseUrl:string) {
        this.addedUrlToHashtag = baseUrl || location.hostname;
        this.searchArea = document.getElementById(searchArea);
        this.searchAreaTextToArr = document.getElementById(searchArea).innerHTML.split(' ');
    }

    letsMakeHashTags():any {
        let readyString: string = this.searchHashTags();
        this.searchArea.innerHTML = readyString;
    }

    private searchHashTags():string {
        for (let i = 0; i < this.searchAreaTextToArr.length; i++) {
            let selectedWord:string = this.searchAreaTextToArr[i];

            if (selectedWord.search('#') === 0) {
                this.searchAreaTextToArr[i] = this.addAttributes(selectedWord);
            }
        }
        return this.searchAreaTextToArr.join(' ');
    }

    private addAttributes(hashTag:string):string {
        let href:string = this.addedUrlToHashtag + "" + hashTag;
        let hashtagToLink:string = hashTag.link(href);

        //let link: HTMLElement = document.createElement('a');
        //link.href = this.addedUrlToHashtag + "" + hashTag;
        //link.innerHTML = hashTag;
        //link.title = link.text;

        return hashtagToLink;
    }

}
