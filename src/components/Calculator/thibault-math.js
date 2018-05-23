export const distanceFromSolesOfTheFeetInThU = {
    POINT_X: { loc: "Point X", distance: 24, desc: "Endpoint of finger"},
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