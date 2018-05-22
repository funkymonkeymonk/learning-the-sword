export const distanceFromSolesOfTheFeetInThU = {
    POINT_X: { distance: 24, name: "Endpoint of finger"},
    POINT_V: { distance: 19.69, name: "Top of head"},
    LINE_A: { distance: 19.243, name: "Top of the face"},
    LINE_B: { distance: 18, name: "End of nose"},
    LINE_C: { distance: 17.119, name: "Chin"},
    LINE_D: { distance: 16.8, name: "Adam's apple"},
    LINE_E: { distance: 16.566, name: "Top of the shoulders"},
    POINT_R: { distance: 16, name: "Top of the chest"},
    LINE_F: { distance: 15.364, name: "Armpits"},
    LINE_G: { distance: 15, name: "Nipples"},
    LINE_H: { distance: 14.4, name: "Middle of the chest"},
    LINE_I: { distance: 13.586, name: "Breastbone"},
    LINE_K: { distance: 13.314, name: "Floating ribs and diaphragm"},
    CENTER: { distance: 12, name: "Navel"},
    LINE_L: { distance: 10.686, name: "Top of the hipbone"},
    LINE_M: { distance: 10.414, name: "Perineum"},
    LINE_N: { distance: 9.6, name: "Penis"},
    LINE_O: { distance: 9, name: "Anus"},
    LINE_P: { distance: 8.636, name: "Top of the thigh"},
    POINT_H: { distance: 8, name: "Greatest thickness of the thigh"},
    POINT_H_ALTERNATE: { distance: 8, name: "End of fingers of hanging arm"},
    LINE_Q: { distance: 7.2, name: "Hollow of the thigh"},
    LINE_R: { distance: 6.881, name: "Bottom of the thigh"},
    LINE_S: { distance: 6, name: "Top of the knee"},
    LINE_T: { distance: 4.757, name: "Bottom of the knee"},
    POINT_E: { distance: 4.31, name: "Top of the shin"},
    LINE_V: { distance: 3.94, name: "Top of the thick part of the calf on the inside"},
    LINE_W: { distance: 3.364, name: "Top of the thick part of the calf on the outside"},
    LINE_X: { distance: 2.87, name: "Bottom of the thick part of the calf on the inside"},
    LINE_Y: { distance: 2.272, name: "Bottom of the shin"},
    LINE_Z: { distance: 0.89, name: "Ankle"},
    POINT_C: { distance: 0,  name: "Soles of the feet"},
}

export const GetThibaultUnitsFromHeight = height => height/19.69;
export const GetPartFromThU = ThU => ThU/10;
export const GetMinuteFromThU = ThU => ThU/100;

// TODO: This round method sucks and I need to find a better one
export const round2 = x => Math.round(x * 100) / 100