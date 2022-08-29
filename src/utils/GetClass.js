export function getClass(i){
    if(i%5 === 0){
        return 'big';
    }else if(i % 6 === 0){
        return 'wide';
    }else{
        return "";
    }
}

// This function will return the class of the image depending on the index of the image.