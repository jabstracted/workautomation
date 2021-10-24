let strRmv = ['Photos show any obvious wear. Please check measurements. NOTE: Vintage items sometimes have flaws not noticeable in photos. We do our best to disclose any flaws or damage in description. ',
    'Guaranteed Authentic', 'Trusted seller', 'Licensed Small Business in SLC, UT', 'Buy with confidence',
    'Condition: Pre-Owned Like New', 'Condition: Pre-Owned Good', 'Condition: Pre-Owned Fair',
    'Condition: Pre-owned: Like New', 'Condition: Pre-owned: Good', 'Condition: Pre-owned: Fair',
    'We do our best to disclose all flaws through photos and within the description.',
    'Most vintage clothing is pre-loved and has some natural wear simply due to it being 20+ years old.',
    'Size: Unisex 10', 'Size: Unisex 11', 'Size: Unisex 12', 'Size: Unisex 13',
    'Size: Unisex 14', 'Size: Unisex 15', 'Size: Unisex 16', 'Size: Unisex 17',
    'Size: Unisex 18', 'Size: Unisex 19', 'Size: Unisex 20', 'Size: Unisex 21',
    'Size: Unisex 22', 'Size: Unisex 23', 'Size: Unisex 24', 'Size: Unisex 25',
    'Size: Unisex 26', 'Size: Unisex 27', 'Size: Unisex 28', 'Size: Unisex 29',
    'Size: Unisex 30', 'Size: Unisex 31', 'Size: Unisex 32', 'Size: Unisex 33',
    'Size: Unisex 34', 'Size: Unisex 35', 'Size: Unisex 36', 'Size: Unisex 37',
    'Size: Unisex 38', 'Size: Unisex 39', 'Size: Unisex 40', 'Size: Unisex 41',
    'Size: Unisex 42', 'Size: Unisex 43', 'Size: Unisex 44', 'Size: Unisex 45',
    'Size: Unisex L', 'Size: Unisex Large', 'Size: Unisex XL', 'Size: Unisex XXL',
    'Size: Unisex XXXL', 'Size: Unisex M', 'Size: Unisex Medium', 'Size: Unisex S',
    'Size: Unisex Small', 'Size: Unisex XS', 'Size: 0', 'Size: 1', 'Size: 2',
    'Size: 3', 'Size: 4', 'Size: 5', 'Size: 6', 'Size: 7', 'Size: 8', 'Size: 9',
    'Size: 10', 'Size: 11', 'Size: 12', 'Size: 13', 'Size: 14', 'Size: 15', 'Size: 16',
    'Size: 17', 'Size: 18', 'Size: 19', 'Size: 20', 'Size: 21', 'Size: 22', 'Size: 23',
    'Size: 24', 'Size: 25', 'Size: 26', 'Size: 27', 'Size: 28', 'Size: 29', 'Size: 30',
    'Size: 31', 'Size: 32', 'Size: 33', 'Size: 34', 'Size: 35', 'Size: 36', 'Size: 37',
    'Size: 38', 'Size: 39', 'Size: 40', 'Size: 41', 'Size: 42', 'Size: 43', 'Size: 44',
    'Made in Mexico', 'Made in China', 'Made in Bangladesh', 'Made in USA\n' + '\n'];
let badFormat = "cm\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "For bundle deals please message us and we'd love to work out a deal!\n" + "\n" + "We ship out of the country regularly.\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "All sales are final - no returns or refunds for: \n" + "Accidental purchases\n" + "Buyer’s remorse\n" + "Etc. \n" + "If a mistake takes place on our end we always ensure our customers are taken care of.\n" + "\n" + "Please message us with any questions prior to purchasing, we are always glad to help.\n";
let fixedFormat = "cm\n" + "\n" + "For bundle deals please message us and we'd love to work out a deal!\n" + "\n" + "We ship out of the country regularly.\n" + "\n" + "All sales are final - no returns or refunds for: \n" + "Accidental purchases\n" + "Buyer’s remorse\n" + "Etc. \n" + "If a mistake takes place on our end we always ensure our customers are taken care of.\n" + "\n" + "Please message us with any questions prior to purchasing, we are always glad to help.\n";
let beforeMeasurements = ".\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "Measurements";
let fixedBeforeMeasurements = ".\n" + "\n" + "Measurements ";
let badSku = "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "#";
let fixedSku = "\n" + "#";
let description = document.querySelector('#description');
let i = 0;
let after = "cm\n" + "\n" + "\n" + "\n" + "\n" + "\n" + "\n";
let fixedAfter = "cm\n" + "\n";
let isRemoved = false;
let all = [];
all.push(badFormat, fixedFormat, beforeMeasurements, fixedBeforeMeasurements, badSku, fixedSku, after, fixedAfter);

function remove(){
    for (i = 0; i < strRmv.length; i++){
        if (description.value.includes(strRmv[i]) === true){
            description.value = description.value.replace(strRmv[i], '');
            isRemoved = true;
        }
        while (isRemoved === true)
        removeSpaces();
    }
}
var formatIsSpaced = false;
var beforeIsSpaced = false;
var skuIsSpaced = false;

function removeSpaces(){
    while (formatIsSpaced === false){
        if (description.value.includes(badFormat) === true) {
        description.value = description.value.replace(badFormat, fixedFormat);
        formatIsSpaced = true;
        }
    }
    while (beforeIsSpaced === false) {
        if (description.value.includes(beforeMeasurements) === true) {
            description.value = description.value.replace(beforeMeasurements, fixedBeforeMeasurements);
            beforeIsSpaced = true;
        }
    }
    while (skuIsSpaced === false) {
        if (description.value.includes(badSku) === true) {
            description.value = description.value.replace(badSku, fixedSku);
            skuIsSpaced = true;
        }
    }
}
