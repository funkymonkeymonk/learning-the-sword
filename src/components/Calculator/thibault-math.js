export const distanceFromSolesOfTheFeetInThU = {
    POINT_X: { loc: "Point X", distance: 24, desc: "Endpoint of finger"},
    DIAMETER: { loc: "Diameter", distance: 24, desc: "Diameter of the circle"},
    POINT_V: { loc: "Point V", distance: 19.69, desc: "Top of head"},
    LINE_A: { loc: "Line A", distance: 19.243, desc: "Top of the face"},
    LINE_B: { loc: "Line B", distance: 18, desc: "End of nose"},
    LINE_C: { loc: "Line C", distance: 17.119, desc: "Chin"},
    LINE_D: { loc: "Line D", distance: 16.8, desc: "Adam's apple"},
    LINE_E: { loc: "Line E", distance: 16.566, desc: "Top of the shoulders"},
    POINT_R: { loc: "Point R", distance: 16, desc: "Top of the chest"},
    LINE_F: { loc: "Line F", distance: 15.364, desc: "Armpits"},
    LINE_G: { loc: "Line G", distance: 15, desc: "Nipples"},
    LINE_H: { loc: "Line H", distance: 14.4, desc: "Middle of the chest"},
    LINE_I: { loc: "Line I", distance: 13.586, desc: "Breastbone"},
    LINE_K: { loc: "Line K", distance: 13.314, desc: "Floating ribs and diaphragm"},
    CENTER: { loc: "Center", distance: 12, desc: "Navel"},
    LINE_L: { loc: "Line L", distance: 10.686, desc: "Top of the hipbone"},
    LINE_M: { loc: "Line M", distance: 10.414, desc: "Perineum"},
    LINE_N: { loc: "Line N", distance: 9.6, desc: "Penis"},
    LINE_O: { loc: "Line O", distance: 9, desc: "Anus"},
    LINE_P: { loc: "Line P", distance: 8.636, desc: "Top of the thigh"},
    POINT_H: { loc: "Point H", distance: 8, desc: "Greatest thickness of the thigh"},
    POINT_H_ALTERNATE: { loc: "Point H", distance: 8, desc: "End of fingers of hanging arm"},
    LINE_Q: { loc: "Line Q", distance: 7.2, desc: "Hollow of the thigh"},
    LINE_R: { loc: "Line R", distance: 6.881, desc: "Bottom of the thigh"},
    LINE_S: { loc: "Line S", distance: 6, desc: "Top of the knee"},
    LINE_T: { loc: "Line T", distance: 4.757, desc: "Bottom of the knee"},
    POINT_E: { loc: "Point E", distance: 4.31, desc: "Top of the shin"},
    LINE_V: { loc: "Line V", distance: 3.94, desc: "Top of the thick part of the calf on the inside"},
    LINE_W: { loc: "Line W", distance: 3.364, desc: "Top of the thick part of the calf on the outside"},
    LINE_X: { loc: "Line X", distance: 2.87, desc: "Bottom of the thick part of the calf on the inside"},
    LINE_Y: { loc: "Line Y", distance: 2.272, desc: "Bottom of the shin"},
    LINE_Z: { loc: "Line Z", distance: 0.89, desc: "Ankle"},
    POINT_C: { loc: "Point C", distance: 0,  desc: "Soles of the feet"},
}

// TODO: This round method sucks and I need to find a better one
export const round2 = x => Math.round(x * 100) / 100

export const getDistanceFromSolesOfTheFeet = (loc, ThU) => round2(distanceFromSolesOfTheFeetInThU[loc].distance * ThU);

export const GetThibaultUnitsFromHeight = height => round2(height/distanceFromSolesOfTheFeetInThU['POINT_V'].distance);
export const GetPartFromThU = ThU => round2(ThU/10);
export const GetMinuteFromThU = ThU => round2(ThU/100);

const footLine = ThU => round2(2.485 * ThU);
export const getGripAndPommel = ThU => round2(1.757 * ThU);
export const getBladeLength = ThU =>  round2(getDistanceFromSolesOfTheFeet('DIAMETER', ThU)/2);
export const getQuillionLength = ThU => footLine(ThU);
export const getRicasso = ThU => round2(0.879 * ThU);


/*  ARGHHHHH - Going to need to do some serious digging for this maybe one of the other authors can give me some insight.
Thibault gives the detailed description of the pommel, gives some advice about the grip
and determines the proper measures of the hanger as well. However, because these
descriptions are not definitive we neglect to include them in this article, but we hope
that we will be able to investigate these questions in the future.
*/
//export const getGripLength = ThU => ThU // grip = 1/2 hand length = hand width
//export const getPommelLength = ThU => ThU; // grip = 1/2 hand length = hand width && grip + pommel = 1 hand length ???


// Footwork and distance
const getLengthOfFoot = ThU => footLine(ThU);
const getLinearStep = ThU => round2(7.864 * ThU);
const getCircularStepToe = ThU => round2(8.485 * ThU);
const getCircularStepHeel = ThU => round2(8.169 * ThU);

const firstInstance = ThU => getDistanceFromSolesOfTheFeet(DIAMETER,ThU);
const secondInstanceSquare = ThU => round2(18.97 * ThU);
const secondInstanceDiameter = ThU => round2(19.69 * ThU);
const thirdInstanceSquare = ThU => round2(16.97 * ThU);
const thirdInstanceDiameter = ThU => round2(16 * ThU);

//83 end of page
