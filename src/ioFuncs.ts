import {IoProperty} from './voicemeeterUtils';

const ios:Record<string, Record<string, IoProperty>> = {
  strip: {
    name: {out: 'name', val: 'device.name', type: 'string'},
    mono: {out: 'mono', val: 'mono', type: 'float'},
    mute: {out: 'mute', val: 'mute', type: 'float'},
    solo: {out: 'solo', val: 'solo', type: 'float'},
    mc: {out: 'mc', val: 'mc', type: 'float'},
    gain: {out: 'gain', val: 'gain', type: 'float'},
    pan_x: {out: 'pan_x', val: 'pan_x', type: 'float'},
    pan_y: {out: 'pan_y', val: 'pan_y', type: 'float'},
    Color_x: {out: 'Color_x', val: 'Color_x', type: 'float'},
    Color_y: {out: 'Color_y', val: 'Color_y', type: 'float'},
    fx_x: {out: 'fx_x', val: 'fx_x', type: 'float'},
    fx_y: {out: 'fx_y', val: 'fx_y', type: 'float'},
    Audibility: {out: 'Audibility', val: 'Audibility', type: 'float'},
    comp: {out: 'comp', val: 'comp', type: 'float'},
    gate: {out: 'gate', val: 'gate', type: 'float'},
    Karaoke: {out: 'Karaoke', val: 'Karaoke', type: 'float'},
    Limit: {out: 'Limit', val: 'Limit', type: 'float'},
    EQGain1: {out: 'EQGain1', val: 'EQGain1', type: 'float'},
    EQGain2: {out: 'EQGain2', val: 'EQGain2', type: 'float'},
    Label: {out: 'Label', val: 'Label', type: 'string'},
    A1: {out: 'A1', val: 'A1', type: 'float'},
    A2: {out: 'A2', val: 'A2', type: 'float'},
    A3: {out: 'A3', val: 'A3', type: 'float'},
    A4: {out: 'A4', val: 'A4', type: 'float'},
    A5: {out: 'A5', val: 'A5', type: 'float'},
    B1: {out: 'B1', val: 'B1', type: 'float'},
    B2: {out: 'B2', val: 'B2', type: 'float'},
    B3: {out: 'B3', val: 'B3', type: 'float'},
    FadeTo: {out: 'FadeTo', val: 'FadeTo', type: 'float'},
    FadeBy: {out: 'FadeBy', val: 'FadeBy', type: 'float'},
    Reverb: {out: 'Reverb', val: 'Reverb', type: 'float'},
    Delay: {out: 'Delay', val: 'Delay', type: 'float'},
    Fx1: {out: 'Fx1', val: 'Fx1', type: 'float'},
    Fx2: {out: 'Fx2', val: 'Fx2', type: 'float'},
    PostReverb: {out: 'PostReverb', val: 'PostReverb', type: 'float'},
    PostDelay: {out: 'PostDelay', val: 'PostDelay', type: 'float'},
    PostFx1: {out: 'PostFx1', val: 'PostFx1', type: 'float'},
    PostFx2: {out: 'PostFx2', val: 'PostFx2', type: 'float'},
    Device: {out: 'device', val: 'device.name', type: 'string'},
    'GainLayer[0]': {out: 'GainLayer[0]', val: 'GainLayer[0]', type: 'float'},
    'GainLayer[1]': {out: 'GainLayer[1]', val: 'GainLayer[1]', type: 'float'},
    'GainLayer[2]': {out: 'GainLayer[2]', val: 'GainLayer[2]', type: 'float'},
    'GainLayer[3]': {out: 'GainLayer[3]', val: 'GainLayer[3]', type: 'float'},
    'GainLayer[4]': {out: 'GainLayer[4]', val: 'GainLayer[4]', type: 'float'},
    'GainLayer[5]': {out: 'GainLayer[5]', val: 'GainLayer[5]', type: 'float'},
    'GainLayer[6]': {out: 'GainLayer[6]', val: 'GainLayer[6]', type: 'float'},
    'GainLayer[7]': {out: 'GainLayer[7]', val: 'GainLayer[7]', type: 'float'},
  },
  bus: {
    name: {out: 'name', val: 'device.name', type: 'string'},
    mono: {out: 'mono', val: 'mono', type: 'float'},
    mute: {out: 'mute', val: 'mute', type: 'float'},
    EQon: {out: 'EQon', val: 'EQ.on', type: 'float'},
    EQAB: {out: 'EQAB', val: 'EQAB', type: 'float'},
    gain: {out: 'gain', val: 'gain', type: 'float'},
    modenormal: {out: 'modenormal', val: 'mode.normal', type: 'float'},
    modeAmix: {out: 'modeAmix', val: 'mode.Amix', type: 'float'},
    modeBmix: {out: 'modeBmix', val: 'mode.Bmix', type: 'float'},
    modeRepeat: {out: 'modeRepeat', val: 'mode.Repeat', type: 'float'},
    modeComposite: {out: 'modeComposite', val: 'mode.Composite', type: 'float'},
    modeTVMix: {out: 'modeTVMix', val: 'mode.TVMix', type: 'float'},
    modeUpMix21: {out: 'modeUpMix21', val: 'mode.UpMix21', type: 'float'},
    modeUpMix41: {out: 'modeUpMix41', val: 'mode.UpMix41', type: 'float'},
    modeUpMix61: {out: 'modeUpMix61', val: 'mode.UpMix61', type: 'float'},
    modeCenterOnly: {out: 'modeCenterOnly', val: 'mode.CenterOnly', type: 'float'},
    modeLFEOnly: {out: 'modeLFEOnly', val: 'mode.LFEOnly', type: 'float'},
    modeRearOnly: {out: 'modeRearOnly', val: 'mode.RearOnly', type: 'float'},
    device: {out: 'device', val: 'device', type: 'float'},
    ReverbOn: {out: 'ReverbOn', val: 'Reverb.On', type: 'float'},
    DelayOn: {out: 'DelayOn', val: 'Delay.On', type: 'float'},
    Sel: {out: 'Sel', val: 'Sel', type: 'float'}
  },
};
export = ios
