const description = document.getElementById('description');
let d = description.value;
const sku = ['L A0', 'L A1', 'L A2', 'L A3', 'L A4', 'L A5', 'L A6', 'L A7', 'L A8',
    'L A9', 'L A10', 'L A11', 'L A12', 'L A13', 'L A14', 'L A15', 'L A16', 'L A17',
    'L A18', 'L A19', 'L A20', 'L A21', 'L A22', 'L A23', 'L A24', 'L A25', 'L A26',
    'L A27', 'L A28', 'L A29', 'L B0', 'L B1', 'L B2', 'L B3', 'L B4', 'L B5', 'L B6',
    'L B7', 'L B8', 'L B9', 'L B10', 'L B11', 'L B12', 'L B13', 'L B14', 'L B15', 'L B16',
    'L B17', 'L B18', 'L B19', 'L B20', 'L B21', 'L B22', 'L B23', 'L B24', 'L B25', 'L B26',
    'L B27', 'L B28', 'L B29', 'L C0', 'L C1', 'L C2', 'L C3', 'L C4', 'L C5', 'L C6', 'L C7',
    'L C8', 'L C9', 'L C10', 'L C11', 'L C12', 'L C13', 'L C14', 'L C15', 'L C16', 'L C17', 'L C18',
    'L C19', 'L C20', 'L C21', 'L C22', 'L C23', 'L C24', 'L C25', 'L C26', 'L C27', 'L C28', 'L C29',
    'L D0', 'L D1', 'L D2', 'L D3', 'L D4', 'L D5', 'L D6', 'L D7', 'L D8', 'L D9', 'L D10', 'L D11',
    'L D12', 'L D13', 'L D14', 'L D15', 'L D16', 'L D17', 'L D18', 'L D19', 'L D20', 'L D21', 'L D22',
    'L D23', 'L D24', 'L D25', 'L D26', 'L D27', 'L D28', 'L D29'];
const strings = ['Photos show any obvious wear. Please check measurements. NOTE: Vintage items sometimes have flaws not noticeable in photos. We do our best to disclose any flaws or damage in description.', 'Shirt is in great pre-owned condition.', 'Made in Nicaragua', 'Pre-Shrunk',
    "Photos show any obvious wear. Please check measurements. We do our best to disclose any flaws or damage in description. ", 'Guaranteed Authentic', 'Trusted seller', 'Licensed Small Business in SLC, UT', 'Buy with confidence',
    'Condition: Pre-Owned Like New', 'Condition: Pre-Owned Good', 'Condition: Pre-Owned Fair', 'Condition: New Without Tags',
    'Condition: Pre-owned: Like New', 'Condition: Pre-owned: Good', 'Condition: Pre-owned: Fair',
    'We do our best to disclose all flaws through photos and within the description.',
    'Most vintage clothing is pre-loved and has some natural wear simply due to it being 20+ years old.', 'No flaws.']
const size = ['Size: Unisex 10', 'Size: Unisex 11', 'Size: Unisex 12', 'Size: Unisex 13',
    'Size: Unisex 14', 'Size: Unisex 15', 'Size: Unisex 16', 'Size: Unisex 17',
    'Size: Unisex 18', 'Size: Unisex 19', 'Size: Unisex 20', 'Size: Unisex 21',
    'Size: Unisex 22', 'Size: Unisex 23', 'Size: Unisex 24', 'Size: Unisex 25',
    'Size: Unisex 26', 'Size: Unisex 27', 'Size: Unisex 28', 'Size: Unisex 29',
    'Size: Unisex 30', 'Size: Unisex 31', 'Size: Unisex 32', 'Size: Unisex 33',
    'Size: Unisex 34', 'Size: Unisex 35', 'Size: Unisex 36', 'Size: Unisex 37',
    'Size: Unisex 38', 'Size: Unisex 39', 'Size: Unisex 40', 'Size: Unisex 41',
    'Size: Unisex 42', 'Size: Unisex 43', 'Size: Unisex 44', 'Size: Unisex 45',
    'Size: Unisex L',  'Size: Unisex Large', 'Size: Unisex XL', 'Size: Unisex XXL',
    'Size: Unisex XXXL', 'Size: Unisex M', 'Size: Unisex Medium', 'Size: Unisex S',
    'Size: Unisex Small', 'Size: Unisex XS', "Size: Women's M", "Size: Women's S",
    'Size: 0,', 'Size: 1,', 'Size: 2,', 'Size: 3,', 'Size: 4,', 'Size: 5,', 'Size: 6,',
    'Size: 7,', 'Size: 8,', 'Size: 9,', 'Size: 10,', 'Size: 11,', 'Size: 12,', 'Size: 13,',
    'Size: 14,', 'Size: 15,', 'Size: 16,', 'Size: 17,', 'Size: 18,', 'Size: 19,', 'Size: 20,',
    'Size: 21,', 'Size: 22,', 'Size: 23,', 'Size: 24,', 'Size: 25,', 'Size: 26,', 'Size: 27,',
    'Size: 28,', 'Size: 29,', 'Size: 30,', 'Size: 31,', 'Size: 32,', 'Size: 33,', 'Size: 34,',
    'Size: 35,', 'Size: 36,', 'Size: 37,', 'Size: 38,', 'Size: 39,', 'Size: 40,', 'Size: 41,',
    'Size: 42,', 'Size: 43,', 'Size: 44'];
const madeIn = ['Made in Mexico', 'Made in China', 'Made in Bangladesh', 'Made in USA\n' + '\n',
    'Made in Indonesia', 'Made in Guatemala', 'Made in Republic of Korea', 'Made in Taiwan R.O.C.', 'Made in Sri Lanka',
    'Made in Pakistan'];
let i = 0;
let s = 0;
let m = 0;
let dc = 0;
let dl = description.value.length;
let isRemoved;
const badformat = ["cm\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n " + "\n" + "For", "regularly.\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "All", "of.\n" + "\n" + "\n" + "\n" + "L"];
const fixedformat = ["cm\n" + "\n" + "For", "regularly.\n" + "\n" + "All", "of.\n" + "\n" + "L"];
function fixFormat(){
    if (description.value.includes(badformat[0]))
        description.value = description.value.replace(badformat[0], fixedformat[0]);
    if (description.value.includes(badformat[1]))
        description.value = description.value.replace(badformat[1], fixedformat[1]);
    if (description.value.includes(badformat[2]))
        description.value = description.value.replace(badformat[2], fixedformat[2]);
}
function removeStringVals() {
    for (i = 0; i <= strings.length; i++)
        if (description.value.includes(strings[i]))
            description.value = description.value.replace(strings[i], '');
}
function removeSizeVals() {
    for (s = 0; s < size.length; s++)
        if (description.value.includes(size[s]))
            description.value = description.value.replace(size[s],'');
}
function removeMadeVals() {
    for (m = 0; m < madeIn.length; m++)
        if (description.value.includes(madeIn[m]))
            description.value = description.value.replace(madeIn[m],'');
}
function removeCheck(){
        removeSizeVals();
        removeStringVals();
        removeMadeVals();
        isRemoved = true;
}
function removal(){
   if (isRemoved === true && description.value.length > 1000) {
        description.value = description.value.replace("Please message us with any questions prior to purchasing, we are always glad to help.", '');
    }
}
removeCheck();
fixFormat();
removal();
