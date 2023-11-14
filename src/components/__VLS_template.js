import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, __VLS_slots } from './RoomPage.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {};
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).img; ({} as __VLS_IntrinsicElements).img;
({} as __VLS_IntrinsicElements).table; ({} as __VLS_IntrinsicElements).table;
({} as __VLS_IntrinsicElements).tbody; ({} as __VLS_IntrinsicElements).tbody;
({} as __VLS_IntrinsicElements).tr; ({} as __VLS_IntrinsicElements).tr; ({} as __VLS_IntrinsicElements).tr; ({} as __VLS_IntrinsicElements).tr; ({} as __VLS_IntrinsicElements).tr; ({} as __VLS_IntrinsicElements).tr; ({} as __VLS_IntrinsicElements).tr; ({} as __VLS_IntrinsicElements).tr;
({} as __VLS_IntrinsicElements).th; ({} as __VLS_IntrinsicElements).th; ({} as __VLS_IntrinsicElements).th; ({} as __VLS_IntrinsicElements).th; ({} as __VLS_IntrinsicElements).th; ({} as __VLS_IntrinsicElements).th; ({} as __VLS_IntrinsicElements).th; ({} as __VLS_IntrinsicElements).th;
({} as __VLS_IntrinsicElements).td; ({} as __VLS_IntrinsicElements).td; ({} as __VLS_IntrinsicElements).td; ({} as __VLS_IntrinsicElements).td; ({} as __VLS_IntrinsicElements).td; ({} as __VLS_IntrinsicElements).td; ({} as __VLS_IntrinsicElements).td; ({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i; ({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button; ({} as __VLS_IntrinsicElements).button;
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{ ...{}, class: ("container mt-4"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
const __VLS_4 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_6 = __VLS_5({ ...{ ...{}, class: ("row"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
for (const [room] of __VLS_getVForSourceType((__VLS_ctx.rooms)!)) {
{
const __VLS_8 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_10 = __VLS_9({ ...{ ...{}, key: ((room.id)), class: ("col-md-4 mb-4"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
{
const __VLS_12 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_14 = __VLS_13({ ...{ ...{}, class: ("card"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
{
const __VLS_16 = ({} as __VLS_IntrinsicElements)["img"];
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, {});
({} as __VLS_IntrinsicElements).img;
({} as __VLS_IntrinsicElements).img;
const __VLS_18 = __VLS_17({ ...{ ...{}, src: ((/assets/img / __VLS_ctx.rooms / 1)), VLS_ctx, : .jpg } }), alt: ("Room Image");
}
} __VLS_functionalComponentArgsRest(__VLS_17);;
const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
}
{
const __VLS_20 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_22 = __VLS_21({ ...{ ...{}, class: ("card-body"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
{
const __VLS_24 = ({} as __VLS_IntrinsicElements)["table"];
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, {});
({} as __VLS_IntrinsicElements).table;
({} as __VLS_IntrinsicElements).table;
const __VLS_26 = __VLS_25({ ...{ ...{}, class: ("table"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26)!;
{
const __VLS_28 = ({} as __VLS_IntrinsicElements)["tbody"];
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, {});
({} as __VLS_IntrinsicElements).tbody;
({} as __VLS_IntrinsicElements).tbody;
const __VLS_30 = __VLS_29({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_29));
const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
{
const __VLS_32 = ({} as __VLS_IntrinsicElements)["tr"];
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, {});
({} as __VLS_IntrinsicElements).tr;
({} as __VLS_IntrinsicElements).tr;
const __VLS_34 = __VLS_33({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34)!;
{
const __VLS_36 = ({} as __VLS_IntrinsicElements)["th"];
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, {});
({} as __VLS_IntrinsicElements).th;
({} as __VLS_IntrinsicElements).th;
const __VLS_38 = __VLS_37({ ...{ ...{}, scope: ("row"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
(__VLS_39.slots!).default;
}
{
const __VLS_40 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, {});
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_42 = __VLS_41({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_41));
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
(room.roomsNumber);
(__VLS_43.slots!).default;
}
(__VLS_35.slots!).default;
}
{
const __VLS_44 = ({} as __VLS_IntrinsicElements)["tr"];
const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, {});
({} as __VLS_IntrinsicElements).tr;
({} as __VLS_IntrinsicElements).tr;
const __VLS_46 = __VLS_45({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_45));
const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46)!;
{
const __VLS_48 = ({} as __VLS_IntrinsicElements)["th"];
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, {});
({} as __VLS_IntrinsicElements).th;
({} as __VLS_IntrinsicElements).th;
const __VLS_50 = __VLS_49({ ...{ ...{}, scope: ("row"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50)!;
(__VLS_51.slots!).default;
}
{
const __VLS_52 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, {});
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_54 = __VLS_53({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_53));
const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54)!;
{
const __VLS_56 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, {});
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_58 = __VLS_57({ ...{ ...{}, class: ("fas fa-bed"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_57));
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
}
(room.beds);
(__VLS_55.slots!).default;
}
(__VLS_47.slots!).default;
}
{
const __VLS_60 = ({} as __VLS_IntrinsicElements)["tr"];
const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, {});
({} as __VLS_IntrinsicElements).tr;
({} as __VLS_IntrinsicElements).tr;
const __VLS_62 = __VLS_61({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
{
const __VLS_64 = ({} as __VLS_IntrinsicElements)["th"];
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, {});
({} as __VLS_IntrinsicElements).th;
({} as __VLS_IntrinsicElements).th;
const __VLS_66 = __VLS_65({ ...{ ...{}, scope: ("row"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_65));
const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66)!;
(__VLS_67.slots!).default;
}
{
const __VLS_68 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, {});
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_70 = __VLS_69({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_69));
const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70)!;
{
const __VLS_72 = ({} as __VLS_IntrinsicElements)["i"];
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, {});
({} as __VLS_IntrinsicElements).i;
({} as __VLS_IntrinsicElements).i;
const __VLS_74 = __VLS_73({ ...{ ...{}, class: ("fas fa-euro-sign"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74)!;
}
(room.pricePerNight);
(__VLS_71.slots!).default;
}
(__VLS_63.slots!).default;
}
{
const __VLS_76 = ({} as __VLS_IntrinsicElements)["tr"];
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, {});
({} as __VLS_IntrinsicElements).tr;
({} as __VLS_IntrinsicElements).tr;
const __VLS_78 = __VLS_77({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_77));
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
{
const __VLS_80 = ({} as __VLS_IntrinsicElements)["th"];
const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, {});
({} as __VLS_IntrinsicElements).th;
({} as __VLS_IntrinsicElements).th;
const __VLS_82 = __VLS_81({ ...{ ...{}, scope: ("row"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_81));
const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82)!;
(__VLS_83.slots!).default;
}
{
const __VLS_84 = ({} as __VLS_IntrinsicElements)["td"];
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, {});
({} as __VLS_IntrinsicElements).td;
({} as __VLS_IntrinsicElements).td;
const __VLS_86 = __VLS_85({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_85));
const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86)!;
{
const __VLS_88 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_90 = __VLS_89({ ...{ ...{}, class: ("room-extras"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_89));
const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90)!;
for (const [extra, index] of __VLS_getVForSourceType((room.extras)!)) {
{
const __VLS_92 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_94 = __VLS_93({ ...{ ...{}, key: ((index)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_93));
const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94)!;
if (extra[Object.keys(extra)[0]] === 1) {
(index > 0 ? ' - ' : '');
(Object.keys(extra)[0]);
// @ts-ignore
[rooms, rooms, jpg,];
}
(__VLS_95.slots!).default;
}
}
(__VLS_91.slots!).default;
}
(__VLS_87.slots!).default;
}
(__VLS_79.slots!).default;
}
(__VLS_31.slots!).default;
}
(__VLS_27.slots!).default;
}
{
const __VLS_96 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_98 = __VLS_97({ ...{ ...{}, class: ("button-container"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_97));
const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98)!;
{
const __VLS_100 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, {});
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_102 = __VLS_101({ ...{ ...{ onClick: {} as any, }, class: ("btn btn-primary"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_101));
const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102)!;
let __VLS_104 = { 'click': __VLS_pickEvent(__VLS_103.emit!, 'click' as const, __VLS_componentProps(__VLS_101, __VLS_102).onClick) };
__VLS_104 = {
click: $event => {
__VLS_ctx.bookRoom(room.id, room.roomsName);
}
};
(__VLS_103.slots!).default;
}
{
const __VLS_105 = ({} as __VLS_IntrinsicElements)["button"];
const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, {});
({} as __VLS_IntrinsicElements).button;
({} as __VLS_IntrinsicElements).button;
const __VLS_107 = __VLS_106({ ...{ ...{ onClick: {} as any, }, class: ("btn btn-secondary"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_106));
const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107)!;
let __VLS_109 = { 'click': __VLS_pickEvent(__VLS_108.emit!, 'click' as const, __VLS_componentProps(__VLS_106, __VLS_107).onClick) };
__VLS_109 = {
click: $event => {
__VLS_ctx.bookRoom(room.id, room.roomsName);
}
};
(__VLS_108.slots!).default;
}
(__VLS_99.slots!).default;
}
(__VLS_23.slots!).default;
}
(__VLS_15.slots!).default;
}
(__VLS_11.slots!).default;
}
// @ts-ignore
[bookRoom, bookRoom,];
}
(__VLS_7.slots!).default;
}
