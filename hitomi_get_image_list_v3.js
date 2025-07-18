// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 1088:
case 2870:
case 3911:
case 667:
case 1565:
case 344:
case 3482:
case 605:
case 2173:
case 3034:
case 2577:
case 2471:
case 2562:
case 2775:
case 1972:
case 3852:
case 3264:
case 3004:
case 3194:
case 526:
case 851:
case 519:
case 2160:
case 967:
case 59:
case 3979:
case 1859:
case 905:
case 3351:
case 3380:
case 921:
case 1728:
case 3553:
case 3247:
case 57:
case 1101:
case 1091:
case 3779:
case 2286:
case 272:
case 2023:
case 751:
case 1216:
case 3830:
case 887:
case 1457:
case 3705:
case 2369:
case 1580:
case 1551:
case 3537:
case 1056:
case 3093:
case 2654:
case 3507:
case 4008:
case 3735:
case 1913:
case 1045:
case 2112:
case 114:
case 816:
case 3627:
case 208:
case 2697:
case 1494:
case 2115:
case 1739:
case 4041:
case 2713:
case 68:
case 108:
case 3171:
case 1783:
case 201:
case 225:
case 1112:
case 1939:
case 3377:
case 2045:
case 2913:
case 3362:
case 1909:
case 1983:
case 3932:
case 3861:
case 1074:
case 2551:
case 1369:
case 2676:
case 2457:
case 3902:
case 1510:
case 1326:
case 2353:
case 3732:
case 1817:
case 172:
case 758:
case 2887:
case 2216:
case 3460:
case 1023:
case 2944:
case 86:
case 3846:
case 2728:
case 2131:
case 1863:
case 2596:
case 2433:
case 3310:
case 2744:
case 366:
case 2337:
case 2859:
case 426:
case 3569:
case 932:
case 4095:
case 3021:
case 2928:
case 1290:
case 1160:
case 1258:
case 49:
case 4029:
case 3606:
case 3750:
case 1577:
case 2772:
case 3412:
case 47:
case 632:
case 3950:
case 2758:
case 2682:
case 2549:
case 1612:
case 3556:
case 1593:
case 1436:
case 2958:
case 3051:
case 2615:
case 4059:
case 779:
case 3720:
case 52:
case 457:
case 283:
case 146:
case 844:
case 991:
case 799:
case 1244:
case 3920:
case 635:
case 3619:
case 351:
case 1892:
case 1154:
case 131:
case 1660:
case 3205:
case 3065:
case 643:
case 238:
case 2342:
case 3884:
case 640:
case 3235:
case 588:
case 316:
case 329:
case 2786:
case 222:
case 1716:
case 545:
case 1838:
case 1534:
case 2468:
case 3454:
case 1624:
case 2069:
case 2209:
case 2374:
case 195:
case 387:
case 2239:
case 1356:
case 2323:
case 2:
case 1673:
case 1648:
case 481:
case 3096:
case 3106:
case 2648:
case 275:
case 1841:
case 1427:
case 2356:
case 1026:
case 2213:
case 986:
case 1440:
case 1283:
case 1468:
case 2534:
case 2504:
case 3202:
case 3657:
case 1631:
case 581:
case 4017:
case 3814:
case 3518:
case 917:
case 231:
case 1342:
case 686:
case 138:
case 3542:
case 4063:
case 358:
case 2244:
case 3603:
case 3689:
case 2154:
case 476:
case 3168:
case 1318:
case 1790:
case 602:
case 998:
case 1895:
case 180:
case 2228:
case 978:
case 42:
case 3574:
case 2272:
case 1615:
case 2267:
case 3843:
case 2007:
case 2391:
case 1682:
case 3127:
case 164:
case 1758:
case 4070:
case 3523:
case 3250:
case 3281:
case 678:
case 1432:
case 3198:
case 2901:
case 3008:
case 479:
case 3552:
case 2862:
case 757:
case 1402:
case 2877:
case 2931:
case 2435:
case 2686:
case 1960:
case 1084:
case 2570:
case 2731:
case 2128:
case 2014:
case 3387:
case 1330:
case 2167:
case 2297:
case 3853:
case 1896:
case 3227:
case 107:
case 3240:
case 3483:
case 1773:
case 274:
case 3664:
case 2658:
case 1985:
case 566:
case 4004:
case 2915:
case 1851:
case 2078:
case 3837:
case 444:
case 3500:
case 1912:
case 1139:
case 2346:
case 2715:
case 989:
case 2411:
case 3530:
case 1587:
case 1450:
case 1481:
case 2113:
case 1498:
case 769:
case 3647:
case 3092:
case 2022:
case 3719:
case 927:
case 2690:
case 3733:
case 1690:
case 2352:
case 303:
case 1479:
case 3135:
case 1022:
case 300:
case 3789:
case 466:
case 3933:
case 968:
case 2025:
case 3444:
case 830:
case 3370:
case 3903:
case 82:
case 1411:
case 2183:
case 1517:
case 2450:
case 2587:
case 896:
case 1982:
case 1715:
case 37:
case 2139:
case 2912:
case 3467:
case 2880:
case 3561:
case 668:
case 1810:
case 745:
case 2985:
case 3206:
case 876:
case 1915:
case 1043:
case 3029:
case 730:
case 579:
case 733:
case 265:
case 3826:
case 3869:
case 2559:
case 1361:
case 2175:
case 1297:
case 1167:
case 3546:
case 2300:
case 2896:
case 1563:
case 934:
case 3041:
case 2948:
case 2330:
case 599:
case 3317:
case 4049:
case 2960:
case 776:
case 1014:
case 1128:
case 1405:
case 3757:
case 1701:
case 2865:
case 2276:
case 796:
case 2402:
case 634:
case 1862:
case 2432:
case 1144:
case 3968:
case 2061:
case 2954:
case 2201:
case 1893:
case 918:
case 262:
case 137:
case 429:
case 416:
case 2754:
case 1030:
case 3605:
case 1776:
case 1000:
case 1260:
case 1158:
case 618:
case 2997:
case 1273:
case 842:
case 3845:
case 2595:
case 3308:
case 253:
case 487:
case 3338:
case 1613:
case 2683:
case 2609:
case 1672:
case 2215:
case 4080:
case 4051:
case 1508:
case 3271:
case 1052:
case 677:
case 1667:
case 3888:
case 224:
case 215:
case 1325:
case 3392:
case 3611:
case 451:
case 3219:
case 1644:
case 2447:
case 3891:
case 977:
case 357:
case 2821:
case 3679:
case 2378:
case 1186:
case 2628:
case 1116:
case 1821:
case 396:
case 87:
case 1541:
case 1447:
case 2644:
case 3203:
case 3698:
case 3063:
case 1420:
case 3681:
case 1055:
case 3736:
case 551:
case 3070:
case 826:
case 3706:
case 1675:
case 3514:
case 3818:
case 2212:
case 2052:
case 2508:
case 3936:
case 4010:
case 3906:
case 2285:
case 2672:
case 46:
case 32:
case 2834:
case 1215:
case 1322:
case 2224:
case 3522:
case 150:
case 1683:
case 1639:
case 153:
case 604:
case 345:
case 1997:
case 2384:
case 611:
case 77:
case 388:
case 2248:
case 516:
case 3842:
case 3164:
case 3294:
case 2000:
case 2190:
case 3823:
case 3341:
case 2030:
case 1566:
case 2976:
case 719:
case 3257:
case 1231:
case 911:
case 4062:
case 237:
case 3578:
case 1954:
case 3874:
case 1201:
case 1061:
case 587:
case 2065:
case 3986:
case 2205:
case 2884:
case 216:
case 2235:
case 1202:
case 3786:
case 322:
case 3601:
case 2454:
case 3440:
case 3283:
case 3239:
case 453:
case 287:
case 2393:
case 892:
case 2136:
case 1349:
case 3841:
case 3323:
case 2497:
case 1694:
case 647:
case 1250:
case 1281:
case 3682:
case 1127:
case 2899:
case 364:
case 2764:
case 424:
case 1523:
case 2556:
case 2964:
case 1010:
case 16:
case 3615:
case 2747:
case 2545:
case 792:
case 2304:
case 383:
case 2279:
case 2947:
case 2619:
case 2920:
case 1689:
case 1298:
case 251:
case 515:
case 1619:
case 151:
case 524:
case 3154:
case 2603:
case 1825:
case 1947:
case 1720:
case 1279:
case 1304:
case 1334:
case 1747:
case 3272:
case 2574:
case 1080:
case 1051:
case 2878:
case 3037:
case 3406:
case 1556:
case 725:
case 714:
case 2843:
case 3267:
case 2321:
case 4052:
case 1764:
case 909:
case 701:
case 2281:
case 2250:
case 913:
case 1211:
case 375:
case 1096:
case 2694:
case 2349:
case 3673:
case 3356:
case 3624:
case 955:
case 553:
case 3534:
case 1454:
case 2232:
case 2062:
case 3808:
case 3504:
case 2657:
case 550:
case 2518:
case 1235:
case 2814:
case 116:
case 814:
case 331:
case 1065:
case 3916:
case 4000:
case 2905:
case 3286:
case 1702:
case 2830:
case 984:
case 2800:
case 299:
case 1732:
case 1861:
case 2537:
case 2431:
case 8:
case 3510:
case 2133:
case 780:
case 2668:
case 3654:
case 2189:
case 2103:
case 1119:
case 2401:
case 279:
case 2507:
case 838:
case 1362:
case 684:
case 3909:
case 3983:
case 3939:
case 2627:
case 1473:
case 3042:
case 764:
case 1171:
case 3709:
case 2365:
case 3739:
case 1448:
case 3870:
case 1950:
case 880:
case 3124:
case 2911:
case 1412:
case 3975:
case 1855:
case 494:
case 883:
case 2482:
case 244:
case 3173:
case 1750:
case 2711:
case 3577:
case 2194:
case 3258:
case 2415:
case 3775:
case 864:
case 2380:
case 2979:
case 3863:
case 731:
case 3944:
case 3403:
case 3489:
case 1220:
case 594:
case 3091:
case 2998:
case 1779:
case 3131:
case 1157:
case 3596:
case 1553:
case 1247:
case 2310:
case 2569:
case 1380:
case 1351:
case 3337:
case 3928:
case 3307:
case 3972:
case 1264:
case 1194:
case 2485:
case 639:
case 795:
case 3967:
case 1034:
case 3772:
case 3565:
case 144:
case 846:
case 1482:
case 2981:
case 1911:
case 3767:
case 11:
case 3115:
case 2448:
case 549:
case 2171:
case 2377:
case 325:
case 465:
case 3182:
case 3913:
case 3045:
case 1640:
case 1668:
case 2932:
case 2902:
case 1431:
case 3457:
case 3551:
case 3580:
case 1396:
case 1800:
case 3353:
case 199:
case 2702:
case 1905:
case 2460:
case 2049:
case 1830:
case 1906:
case 3464:
case 130:
case 641:
case 2584:
case 1070:
case 1706:
case 3282:
case 3675:
case 315:
case 464:
case 1681:
case 2611:
case 176:
case 3046:
case 1203:
case 1698:
case 3420:
case 3541:
case 2891:
case 3821:
case 894:
case 1329:
case 483:
case 1366:
case 2679:
case 480:
case 3378:
case 1874:
case 3201:
case 936:
case 3061:
case 670:
case 1632:
case 1120:
case 362:
case 3566:
case 1147:
case 1543:
case 2599:
case 1017:
case 1823:
case 575:
case 1341:
case 269:
case 2087:
case 693:
case 2605:
case 188:
case 636:
case 281:
case 2525:
case 794:
case 3314:
case 973:
case 849:
case 2845:
case 3639:
case 353:
case 3595:
case 990:
case 4069:
case 350:
case 1522:
case 3797:
case 774:
case 3609:
case 2522:
case 3224:
case 3613:
case 1338:
case 245:
case 495:
case 1525:
case 2842:
case 4053:
case 288:
case 3248:
case 2164:
case 475:
case 3592:
case 181:
case 1605:
case 2416:
case 3190:
case 807:
case 3000:
case 5:
case 3260:
case 431:
case 2017:
case 3030:
case 169:
case 1635:
case 712:
case 2147:
case 3893:
case 1856:
case 3976:
case 2257:
case 2578:
case 2120:
case 1490:
case 3186:
case 1059:
case 296:
case 157:
case 2329:
case 446:
case 2233:
case 3644:
case 2063:
case 2289:
case 564:
case 2681:
case 2706:
case 1584:
case 3325:
case 2514:
case 2395:
case 3804:
case 4007:
case 765:
case 3052:
case 648:
case 233:
case 580:
case 812:
case 3667:
case 3285:
case 1458:
case 230:
case 3834:
case 4037:
case 1066:
case 1206:
case 3782:
case 374:
case 982:
case 3078:
case 2971:
case 3810:
case 1236:
case 394:
case 2500:
case 17:
case 2771:
case 3411:
case 954:
case 2530:
case 2132:
case 1903:
case 1933:
case 2102:
case 2647:
case 3355:
case 3479:
case 762:
case 1135:
case 126:
case 824:
case 119:
case 1789:
case 1428:
case 103:
case 514:
case 3862:
case 3254:
case 3931:
case 2038:
case 492:
case 3435:
case 3701:
case 620:
case 3570:
case 850:
case 623:
case 1757:
case 3731:
case 1041:
case 1317:
case 3297:
case 724:
case 862:
case 4042:
case 2853:
case 408:
case 715:
case 3563:
case 1826:
case 93:
case 1869:
case 2227:
case 2409:
case 1111:
case 2181:
case 307:
case 2111:
case 1483:
case 1150:
case 3748:
case 414:
case 365:
case 1227:
case 3559:
case 401:
case 2546:
case 3724:
case 572:
case 3973:
case 3896:
case 837:
case 3300:
case 1387:
case 3084:
case 142:
case 3402:
case 1038:
case 2957:
case 3432:
case 1198:
case 1008:
case 1268:
case 4056:
case 2733:
case 1647:
case 1092:
case 312:
case 1620:
case 4091:
case 2989:
case 2903:
case 2370:
case 2444:
case 3183:
case 1771:
case 3450:
case 3785:
case 2363:
case 3912:
case 1475:
case 2561:
case 3851:
case 3880:
case 1837:
case 2236:
case 1664:
case 3985:
case 2066:
case 2029:
case 29:
case 2472:
case 4013:
case 3376:
case 2445:
case 3024:
case 957:
case 3073:
case 491:
case 2134:
case 2094:
case 2941:
case 598:
case 1665:
case 1423:
case 827:
case 3200:
case 2886:
case 1708:
case 1474:
case 1340:
case 578:
case 2662:
case 2677:
case 2456:
case 1327:
case 3527:
case 4028:
case 443:
case 293:
case 1149:
case 2306:
case 3540:
case 290:
case 3725:
case 440:
case 3174:
case 1992:
case 2795:
case 517:
case 3820:
case 2033:
case 2089:
case 2003:
case 3847:
case 1019:
case 3925:
case 981:
case 1418:
case 3999:
case 3012:
case 761:
case 969:
case 586:
case 3142:
case 318:
case 3607:
case 3799:
case 3568:
case 4067:
case 2858:
case 1071:
case 3252:
case 236:
case 2610:
case 1576:
case 2966:
case 688:
case 3943:
case 136:
case 1966:
case 2576:
case 2651:
case 3434:
case 311:
case 1729:
case 304:
case 3778:
case 2418:
case 3255:
case 1263:
case 1003:
case 1193:
case 3722:
case 2019:
case 3246:
case 1491:
case 173:
case 1033:
case 190:
case 1995:
case 1336:
case 2149:
case 1677:
case 92:
case 933:
case 2938:
case 3714:
case 2474:
case 3506:
case 571:
case 2816:
case 2708:
case 1886:
case 3914:
case 2121:
case 591:
case 2423:
case 976:
case 2696:
case 1104:
case 62:
case 630:
case 248:
case 498:
case 85:
case 4039:
case 2368:
case 1741:
case 1445:
case 3669:
case 4009:
case 4083:
case 285:
case 356:
case 1469:
case 2357:
case 1027:
case 718:
case 2809:
case 2883:
case 405:
case 361:
case 3519:
case 2180:
case 2453:
case 2649:
case 3373:
case 254:
case 3348:
case 2917:
case 3076:
case 532:
case 1787:
case 1208:
case 3656:
case 2717:
case 282:
case 1371:
case 2165:
case 1959:
case 3879:
case 58:
case 3385:
case 2763:
case 206:
case 220:
case 23:
case 1828:
case 1759:
case 642:
case 2963:
case 3691:
case 3312:
case 3225:
case 1177:
case 3126:
case 2333:
case 3752:
case 3169:
case 3299:
case 1319:
case 3811:
case 2303:
case 2389:
case 1560:
case 2531:
case 1867:
case 1604:
case 2266:
case 2196:
case 3243:
case 4058:
case 1531:
case 3480:
case 3451:
case 1437:
case 1770:
case 756:
case 3153:
case 2634:
case 1036:
case 2872:
case 48:
case 2319:
case 3881:
case 1303:
case 1389:
case 1333:
case 3618:
case 1875:
case 2177:
case 2292:
case 2162:
case 811:
case 1763:
case 3746:
case 13:
case 804:
case 106:
case 2371:
case 1295:
case 182:
case 2208:
case 2693:
case 2238:
case 35:
case 567:
case 3832:
case 2585:
case 626:
case 619:
case 600:
case 3761:
case 3623:
case 4086:
case 1649:
case 856:
case 154:
case 1151:
case 1241:
case 3503:
case 368:
case 3097:
case 926:
case 711:
case 67:
case 2426:
case 2469:
case 2040:
case 504:
case 2098:
case 2108:
case 3044:
case 2138:
case 987:
case 340:
case 616:
case 629:
case 1659:
case 511:
case 343:
case 3466:
case 4085:
case 2210:
case 1443:
case 3072:
case 1904:
case 1280:
case 3067:
case 1478:
case 418:
case 687:
case 1516:
case 1704:
case 4012:
case 916:
case 2586:
case 1011:
case 3988:
case 1347:
case 1296:
case 1166:
case 3253:
case 4048:
case 951:
case 391:
case 477:
case 3520:
case 247:
case 335:
case 3956:
case 1876:
case 1993:
case 821:
case 556:
case 2192:
case 2854:
case 2558:
case 3868:
case 3564:
case 1035:
case 3122:
case 109:
case 1793:
case 3756:
case 2617:
case 2484:
case 4060:
case 113:
case 3600:
case 1414:
case 1005:
case 1949:
case 577:
case 2195:
case 2005:
case 2414:
case 3774:
case 213:
case 1617:
case 3723:
case 4031:
case 1854:
case 1262:
case 1002:
case 1192:
case 1032:
case 3408:
case 4001:
case 658:
case 2993:
case 2876:
case 147:
case 3269:
case 456:
case 3083:
case 3009:
case 3199:
case 3226:
case 378:
case 3742:
case 1590:
case 3039:
case 2166:
case 2296:
case 66:
case 317:
case 2734:
case 2011:
case 2347:
case 3655:
case 1050:
case 404:
case 2516:
case 2320:
case 3075:
case 1670:
case 2478:
case 411:
case 3718:
case 732:
case 2280:
case 4015:
case 255:
case 518:
case 3358:
case 2422:
case 2079:
case 88:
case 1721:
case 1425:
case 91:
case 3161:
case 3291:
case 679:
case 3625:
case 1692:
case 1047:
case 1311:
case 2583:
case 1117:
case 2695:
case 735:
case 2221:
case 2910:
case 252:
case 979:
case 2666:
case 3871:
case 1204:
case 1980:
case 1064:
case 1234:
case 791:
case 3470:
case 3737:
case 1780:
case 1751:
case 999:
case 3505:
case 1455:
case 1812:
case 284:
case 1996:
case 1335:
case 139:
case 321:
case 1305:
case 1544:
case 1170:
case 1796:
case 1824:
case 644:
case 2332:
case 3579:
case 427:
case 3155:
case 3245:
case 55:
case 1461:
case 3146:
case 3256:
case 1293:
case 1638:
case 740:
case 4076:
case 1765:
case 3511:
case 3417:
case 871:
case 3016:
case 2575:
case 2762:
case 1249:
case 3086:
case 1575:
case 878:
case 561:
case 1159:
case 666:
case 1777:
case 3487:
case 1430:
case 3550:
case 2638:
case 898:
case 2572:
case 1962:
case 2461:
case 3857:
case 4054:
case 2567:
case 786:
case 2293:
case 3969:
case 3926:
case 2796:
case 2824:
case 3769:
case 3598:
case 2305:
case 3152:
case 589:
case 2544:
case 3726:
case 2848:
case 717:
case 2873:
case 2455:
case 3218:
case 184:
case 1710:
case 1398:
case 798:
case 2780:
case 2751:
case 2885:
case 1910:
case 778:
case 1666:
case 152:
case 3090:
case 1539:
case 2117:
case 1583:
case 3622:
case 160:
case 3130:
case 1187:
case 702:
case 2047:
case 1350:
case 2311:
case 3375:
case 2020:
case 2879:
case 3295:
case 3621:
case 2385:
case 649:
case 1746:
case 320:
case 306:
case 1898:
case 1382:
case 80:
case 1946:
case 3333:
case 893:
case 2688:
case 2299:
case 2169:
case 2752:
case 2811:
case 949:
case 1881:
case 3970:
case 741:
case 3303:
case 3389:
case 3036:
case 1755:
case 1278:
case 1243:
case 3531:
case 1480:
case 3266:
case 870:
case 3770:
case 2410:
case 1153:
case 70:
case 736:
case 3357:
case 2645:
case 3839:
case 227:
case 694:
case 2360:
case 261:
case 1642:
case 3151:
case 1496:
case 1533:
case 2835:
case 1214:
case 3649:
case 289:
case 354:
case 2284:
case 770:
case 2900:
case 3582:
case 2373:
case 2348:
case 994:
case 539:
case 3515:
case 2324:
case 15:
case 2462:
case 1832:
case 1674:
case 790:
case 2477:
case 3717:
case 2656:
case 1054:
case 2571:
case 1730:
case 3068:
case 3208:
case 25:
case 1462:
case 1324:
case 3238:
case 1700:
case 1076:
case 3585:
case 1930:
case 3987:
case 189:
case 2623:
case 1900:
case 885:
case 2496:
case 2503:
case 1519:
case 2642:
case 2097:
case 268:
case 2301:
case 3426:
case 127:
case 3040:
case 2243:
case 3634:
case 3872:
case 665:
case 1811:
case 2850:
case 1126:
case 607:
case 1752:
case 2955:
case 1169:
case 1299:
case 2382:
case 234:
case 2946:
case 1312:
case 1225:
case 3759:
case 3548:
case 965:
case 1385:
case 2222:
case 3371:
case 907:
case 1879:
case 2421:
case 2123:
case 3336:
case 3306:
case 2725:
case 390:
case 2540:
case 662:
case 3033:
case 2820:
case 1156:
case 3263:
case 2847:
case 3089:
case 3003:
case 3193:
case 2925:
case 3597:
case 1778:
case 3729:
case 2012:
case 1743:
case 806:
case 104:
case 3766:
case 83:
case 962:
case 2142:
case 1434:
case 2799:
case 2568:
case 30:
case 3966:
case 2085:
case 1669:
case 2376:
case 1188:
case 2024:
case 447:
case 1626:
case 624:
case 3741:
case 513:
case 2073:
case 277:
case 3094:
case 2048:
case 510:
case 509:
case 882:
case 1914:
case 1397:
case 2984:
case 2200:
case 2449:
case 4002:
case 73:
case 720:
case 2784:
case 3456:
case 723:
case 1536:
case 1493:
case 4032:
case 1261:
case 2493:
case 2536:
case 2001:
case 3340:
case 3938:
case 2506:
case 1230:
case 3287:
case 410:
case 409:
case 413:
case 3121:
case 2397:
case 2914:
case 3665:
case 3423:
case 1200:
case 1653:
case 3696:
case 1048:
case 3442:
case 1073:
case 348:
case 177:
case 2354:
case 2188:
case 2669:
case 2626:
case 385:
case 1118:
case 2943:
case 1637:
case 3576:
case 1085:
case 1142:
case 118:
case 2978:
case 211:
case 2434:
case 1012:
case 2082:
case 204:
case 2255:
case 4011:
case 3418:
case 1999:
case 2156:
case 2246:
case 3992:
case 1820:
case 4079:
case 3792:
case 1527:
case 1421:
case 455:
case 1123:
case 2953:
case 3641:
case 1769:
case 1598:
case 221:
case 1152:
case 1242:
case 1726:
case 3332:
case 205:
case 132:
case 1969:
case 1926:
case 2245:
case 482:
case 1857:
case 3977:
case 3831:
case 2313:
case 3801:
case 1487:
case 1550:
case 454:
case 3249:
case 1614:
case 1086:
case 2684:
case 1833:
case 2625:
case 1889:
case 3381:
case 692:
case 406:
case 2372:
case 1130:
case 3695:
case 1090:
case 3539:
case 423:
case 2367:
case 1459:
case 747:
case 4006:
case 3666:
case 1532:
case 3815:
case 2907:
case 3398:
case 972:
case 259:
case 3882:
case 384:
case 2288:
case 2218:
case 159:
case 1707:
case 3812:
case 1470:
case 614:
case 3780:
case 1907:
case 1328:
case 28:
case 3885:
case 523:
case 2678:
case 2643:
case 520:
case 2502:
case 3951:
case 3980:
case 3064:
case 1372:
case 925:
case 3513:
case 914:
case 2622:
case 3692:
case 709:
case 3047:
case 3311:
case 1819:
case 3446:
case 713:
case 1463:
case 3965:
case 2550:
case 2487:
case 3638:
case 3567:
case 4068:
case 2857:
case 3461:
case 2339:
case 1256:
case 1579:
case 232:
case 4040:
case 582:
case 810:
case 3824:
case 4027:
case 121:
case 554:
case 3305:
case 2769:
case 228:
case 3544:
case 2242:
case 64:
case 3873:
case 2547:
case 2441:
case 784:
case 3897:
case 2143:
case 441:
case 1386:
case 2316:
case 198:
case 3590:
case 980:
case 2827:
case 347:
case 271:
case 1199:
case 1226:
case 1742:
case 2013:
case 3032:
case 1125:
case 763:
case 3277:
case 2564:
case 760:
case 3558:
case 1974:
case 3854:
case 3262:
case 102:
case 1438:
case 2630:
case 2122:
case 2756:
case 680:
case 3949:
case 3484:
case 1923:
case 2600:
case 548:
case 1774:
case 3663:
case 3108:
case 3425:
case 4089:
case 4003:
case 4033:
case 9:
case 1492:
case 240:
case 2791:
case 2495:
case 884:
case 243:
case 3921:
case 3210:
case 2207:
case 922:
case 2067:
case 2788:
case 6:
case 1390:
case 1806:
case 3586:
case 1075:
case 860:
case 3670:
case 1918:
case 1655:
case 938:
case 2988:
case 3050:
case 3011:
case 931:
case 3734:
case 573:
case 739:
case 570:
case 695:
case 3516:
case 1067:
case 4071:
case 3934:
case 3478:
case 593:
case 3141:
case 2836:
case 3280:
case 631:
case 1028:
case 355:
case 286:
case 1791:
case 3079:
case 995:
case 3364:
case 3422:
case 2358:
case 50:
case 536:
case 1991:
case 1044:
case 310:
case 1630:
case 1756:
case 2723:
case 2438:
case 2974:
case 1564:
case 2125:
case 2408:
case 135:
case 839:
case 1956:
case 3993:
case 2199:
case 485:
case 2083:
case 2269:
case 1827:
case 278:
case 946:
case 2039:
case 1745:
case 448:
case 1441:
case 3166:
case 1547:
case 1253:
case 3129:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752814802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,];
var gg_b = "1752814802/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
