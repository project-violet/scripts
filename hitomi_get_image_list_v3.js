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
var o = 1;
switch (g) {
case 4079:
case 2335:
case 2026:
case 3285:
case 2449:
case 1227:
case 346:
case 2486:
case 1854:
case 43:
case 587:
case 2548:
case 2925:
case 789:
case 260:
case 3176:
case 2223:
case 214:
case 3700:
case 3030:
case 1131:
case 3634:
case 2809:
case 63:
case 3983:
case 2213:
case 2346:
case 937:
case 3952:
case 1261:
case 2389:
case 717:
case 2741:
case 519:
case 2850:
case 854:
case 3940:
case 2915:
case 1217:
case 1910:
case 1524:
case 4050:
case 710:
case 930:
case 3284:
case 3247:
case 2924:
case 107:
case 249:
case 3763:
case 580:
case 4009:
case 2971:
case 988:
case 3689:
case 1433:
case 2692:
case 1920:
case 1514:
case 267:
case 2866:
case 2914:
case 3770:
case 544:
case 455:
case 1203:
case 1570:
case 872:
case 201:
case 746:
case 1256:
case 829:
case 2521:
case 1412:
case 389:
case 2682:
case 1053:
case 3872:
case 1921:
case 3376:
case 234:
case 1736:
case 2963:
case 917:
case 3192:
case 2189:
case 2511:
case 3837:
case 1422:
case 317:
case 4051:
case 3294:
case 2146:
case 1082:
case 3724:
case 2574:
case 2728:
case 2567:
case 566:
case 248:
case 2265:
case 539:
case 3479:
case 1967:
case 161:
case 595:
case 871:
case 1458:
case 1260:
case 364:
case 2232:
case 3886:
case 730:
case 3138:
case 482:
case 3849:
case 1559:
case 910:
case 3941:
case 1904:
case 3409:
case 953:
case 682:
case 14:
case 2504:
case 3508:
case 2851:
case 2783:
case 1500:
case 2496:
case 1130:
case 3353:
case 3802:
case 2264:
case 3450:
case 2277:
case 1744:
case 481:
case 3701:
case 2551:
case 3164:
case 3177:
case 3262:
case 383:
case 80:
case 2613:
case 1023:
case 3549:
case 1859:
case 196:
case 1617:
case 3448:
case 2487:
case 2444:
case 3586:
case 591:
case 256:
case 165:
case 2017:
case 2758:
case 533:
case 451:
case 205:
case 3685:
case 592:
case 2875:
case 1343:
case 2347:
case 3388:
case 3234:
case 651:
case 220:
case 3897:
case 1013:
case 3132:
case 27:
case 4021:
case 3043:
case 79:
case 3165:
case 2805:
case 959:
case 2821:
case 685:
case 1870:
case 868:
case 2194:
case 3246:
case 227:
case 1428:
case 3313:
case 2445:
case 1088:
case 3080:
case 2867:
case 3684:
case 1519:
case 1181:
case 2688:
case 2874:
case 3647:
case 3107:
case 3933:
case 3420:
case 1190:
case 2712:
case 2811:
case 3537:
case 490:
case 3421:
case 1191:
case 2698:
case 3912:
case 3377:
case 1737:
case 3081:
case 783:
case 121:
case 2665:
case 2056:
case 1555:
case 3845:
case 1824:
case 1257:
case 847:
case 2395:
case 2566:
case 4048:
case 1656:
case 122:
case 1143:
case 3474:
case 513:
case 3729:
case 2579:
case 474:
case 3411:
case 3836:
case 2282:
case 836:
case 2184:
case 2607:
case 179:
case 3922:
case 674:
case 2509:
case 243:
case 1441:
case 3404:
case 3365:
case 1909:
case 1801:
case 3887:
case 2139:
case 3668:
case 1554:
case 2954:
case 3958:
case 1032:
case 3398:
case 1702:
case 2394:
case 1749:
case 1381:
case 3307:
case 1950:
case 1390:
case 324:
case 2276:
case 1493:
case 884:
case 2550:
case 1815:
case 3596:
case 2185:
case 2073:
case 399:
case 1722:
case 1805:
case 4000:
case 75:
case 1821:
case 3317:
case 3680:
case 3766:
case 2870:
case 3424:
case 3691:
case 1194:
case 1445:
case 1292:
case 3084:
case 3047:
case 3414:
case 1919:
case 808:
case 1688:
case 585:
case 1874:
case 2519:
case 1385:
case 3937:
case 2863:
case 3103:
case 3471:
case 3643:
case 1436:
case 1804:
case 2661:
case 2951:
case 2023:
case 2391:
case 692:
case 1613:
case 3230:
case 2617:
case 3986:
case 3425:
case 1195:
case 1487:
case 2226:
case 3949:
case 3085:
case 156:
case 3750:
case 492:
case 2440:
case 4070:
case 2627:
case 552:
case 1017:
case 1758:
case 1875:
case 491:
case 1384:
case 2452:
case 3039:
case 3709:
case 2013:
case 691:
case 120:
case 17:
case 735:
case 1509:
case 799:
case 143:
case 3883:
case 1408:
case 2441:
case 2909:
case 1677:
case 2825:
case 1060:
case 4014:
case 597:
case 1394:
case 2032:
case 2064:
case 2950:
case 3068:
case 2749:
case 2381:
case 2390:
case 1632:
case 2493:
case 1276:
case 2660:
case 376:
case 3840:
case 1550:
case 2786:
case 4024:
case 657:
case 3400:
case 3127:
case 1497:
case 1185:
case 3303:
case 3996:
case 3852:
case 1542:
case 1253:
case 1698:
case 2191:
case 1206:
case 3512:
case 613:
case 2737:
case 2007:
case 1368:
case 1003:
case 2555:
case 1810:
case 2824:
case 574:
case 413:
case 2979:
case 1566:
case 2143:
case 222:
case 998:
case 1478:
case 426:
case 2966:
case 2814:
case 1579:
case 2098:
case 3522:
case 2772:
case 590:
case 3360:
case 3681:
case 1184:
case 3690:
case 279:
case 2092:
case 3774:
case 1334:
case 1199:
case 1510:
case 207:
case 1924:
case 3046:
case 912:
case 1472:
case 480:
case 732:
case 793:
case 149:
case 644:
case 3243:
case 3812:
case 3721:
case 2571:
case 731:
case 3157:
case 911:
case 1437:
case 3326:
case 1971:
case 3035:
case 638:
case 3518:
case 1879:
case 2920:
case 2514:
case 4054:
case 877:
case 1520:
case 2330:
case 1914:
case 1362:
case 3280:
case 3944:
case 1026:
case 3987:
case 2616:
case 2525:
case 3775:
case 1449:
case 419:
case 1486:
case 1548:
case 3858:
case 2854:
case 2797:
case 3062:
case 3583:
case 870:
case 619:
case 114:
case 160:
case 1223:
case 2131:
case 98:
case 3630:
case 3552:
case 1842:
case 1389:
case 1741:
case 2708:
case 3034:
case 225:
case 1016:
case 1850:
case 2626:
case 2515:
case 4055:
case 1402:
case 53:
case 894:
case 2260:
case 2458:
case 186:
case 1740:
case 1232:
case 1959:
case 2559:
case 1134:
case 2904:
case 3908:
case 3116:
case 993:
case 24:
case 932:
case 3541:
case 712:
case 331:
case 418:
case 711:
case 3357:
case 3997:
case 2076:
case 304:
case 2130:
case 1575:
case 4029:
case 1277:
case 904:
case 2787:
case 3748:
case 582:
case 1718:
case 2829:
case 466:
case 506:
case 1970:
case 1135:
case 101:
case 439:
case 2331:
case 3290:
case 2412:
case 2905:
case 78:
case 3281:
case 1207:
case 1682:
case 2053:
case 134:
case 2736:
case 2006:
case 1963:
case 1511:
case 2911:
case 1146:
case 2082:
case 3099:
case 2563:
case 1728:
case 2819:
case 51:
case 555:
case 3710:
case 2974:
case 102:
case 3978:
case 3830:
case 1642:
case 3713:
case 1102:
case 1204:
case 2009:
case 1532:
case 2826:
case 1054:
case 507:
case 2050:
case 2964:
case 2816:
case 2431:
case 3293:
case 649:
case 144:
case 3658:
case 1577:
case 2654:
case 2573:
case 3723:
case 3995:
case 2200:
case 3355:
case 36:
case 1186:
case 180:
case 3096:
case 96:
case 1507:
case 3622:
case 2133:
case 2907:
case 835:
case 1903:
case 341:
case 1679:
case 4016:
case 941:
case 2556:
case 187:
case 2270:
case 1791:
case 3457:
case 2784:
case 4026:
case 2079:
case 2747:
case 3788:
case 1274:
case 525:
case 119:
case 342:
case 1267:
case 1565:
case 23:
case 2655:
case 2998:
case 1211:
case 3994:
case 500:
case 460:
case 2358:
case 2263:
case 1743:
case 1598:
case 309:
case 1853:
case 3543:
case 3798:
case 1302:
case 2619:
case 1029:
case 2224:
case 3228:
case 1489:
case 3947:
case 3765:
case 3984:
case 2629:
case 898:
case 1019:
case 3580:
case 3591:
case 1220:
case 1349:
case 3037:
case 3707:
case 1386:
case 3155:
case 1523:
case 2333:
case 648:
case 815:
case 1462:
case 2795:
case 2923:
case 2430:
case 206:
case 2225:
case 448:
case 1196:
case 3426:
case 2201:
case 402:
case 2768:
case 3985:
case 3049:
case 2527:
case 2215:
case 742:
case 1372:
case 3732:
case 166:
case 21:
case 876:
case 1876:
case 195:
case 561:
case 139:
case 1961:
case 2913:
case 434:
case 2158:
case 1651:
case 2561:
case 3258:
case 2254:
case 1675:
case 3363:
case 1378:
case 2734:
case 2004:
case 903:
case 32:
case 1823:
case 303:
case 2140:
case 3641:
case 627:
case 3473:
case 1242:
case 3125:
case 1495:
case 3097:
case 2762:
case 1813:
case 3531:
case 2817:
case 394:
case 2659:
case 2976:
case 427:
case 1250:
case 1576:
case 285:
case 2969:
case 2075:
case 2255:
case 3300:
case 251:
case 596:
case 1136:
case 2557:
case 1888:
case 3403:
case 1667:
case 3171:
case 620:
case 67:
case 2490:
case 1506:
case 812:
case 4061:
case 2481:
case 1553:
case 605:
case 420:
case 2021:
case 2906:
case 1611:
case 1063:
case 1605:
case 1145:
case 3124:
case 2128:
case 1621:
case 1494:
case 656:
case 2982:
case 377:
case 3880:
case 2670:
case 745:
case 2067:
case 2341:
case 2074:
case 3045:
case 1447:
case 2803:
case 3946:
case 3618:
case 1024:
case 297:
case 2799:
case 3782:
case 2340:
case 1807:
case 2443:
case 2671:
case 1178:
case 4073:
case 3890:
case 72:
case 3036:
case 3170:
case 1898:
case 1071:
case 1344:
case 2383:
case 2020:
case 1865:
case 1610:
case 3233:
case 2491:
case 3628:
case 2480:
case 3371:
case 1001:
case 3769:
case 1731:
case 3087:
case 521:
case 3427:
case 126:
case 274:
case 2193:
case 3530:
case 1538:
case 290:
case 3159:
case 579:
case 2873:
case 4003:
case 345:
case 1877:
case 1108:
case 1648:
case 1916:
case 2625:
case 2516:
case 945:
case 113:
case 3417:
case 1255:
case 2397:
case 2136:
case 2957:
case 830:
case 2070:
case 151:
case 291:
case 556:
case 2667:
case 2674:
case 1557:
case 2888:
case 1735:
case 3375:
case 1490:
case 2506:
case 1663:
case 1393:
case 2611:
case 1118:
case 2063:
case 696:
case 3110:
case 2145:
case 2605:
case 57:
case 2621:
case 1011:
case 3498:
case 520:
case 1982:
case 4023:
case 665:
case 496:
case 233:
case 3465:
case 928:
case 292:
case 1341:
case 1067:
case 527:
case 772:
case 3311:
case 2059:
case 3432:
case 3716:
case 1004:
case 2209:
case 2823:
case 1140:
case 678:
case 963:
case 3608:
case 3148:
case 2604:
case 3839:
case 2495:
case 363:
case 2730:
case 2242:
case 2813:
case 1762:
case 771:
case 1976:
case 3093:
case 1659:
case 1817:
case 2569:
case 954:
case 3464:
case 1183:
case 2250:
case 4088:
case 3305:
case 1075:
case 185:
case 3726:
case 4065:
case 422:
case 2485:
case 3249:
case 2197:
case 2832:
case 810:
case 679:
case 2025:
case 1526:
case 622:
case 3423:
case 1318:
case 853:
case 3175:
case 3320:
case 479:
case 3413:
case 3534:
case 2439:
case 3052:
case 2345:
case 3310:
case 421:
case 728:
case 2648:
case 2864:
case 1141:
case 2916:
case 2108:
case 3868:
case 3644:
case 213:
case 2015:
case 3040:
case 2620:
case 4077:
case 1856:
case 3546:
case 372:
case 4064:
case 257:
case 1803:
case 3488:
case 972:
case 3589:
case 1614:
case 929:
case 1799:
case 1340:
case 2178:
case 3167:
case 1443:
case 3174:
case 2807:
case 889:
case 3535:
case 2898:
case 3237:
case 2344:
case 2071:
case 763:
case 2387:
case 1383:
case 2865:
case 3105:
case 1020:
case 754:
case 2014:
case 1624:
case 1491:
case 4032:
case 971:
case 3453:
case 400:
case 625:
case 859:
case 3406:
case 3012:
case 2205:
case 3350:
case 2903:
case 968:
case 673:
case 425:
case 2892:
case 2780:
case 3846:
case 2055:
case 2666:
case 3342:
case 1270:
case 1747:
case 1079:
case 3278:
case 2274:
case 2172:
case 13:
case 1655:
case 2565:
case 2499:
case 1263:
case 3835:
case 3022:
case 2598:
case 740:
case 3594:
case 3366:
case 30:
case 238:
case 883:
case 2102:
case 3696:
case 1009:
case 1739:
case 549:
case 923:
case 2532:
case 1826:
case 1560:
case 3058:
case 2960:
case 2054:
case 975:
case 1964:
case 1816:
case 1050:
case 4092:
case 1977:
case 3469:
case 1312:
case 1431:
case 2275:
case 3476:
case 3727:
case 2577:
case 1654:
case 2564:
case 407:
case 769:
case 1573:
case 3297:
case 316:
case 3834:
case 3595:
case 2523:
case 3150:
case 534:
case 1795:
case 106:
case 2927:
case 3142:
case 3602:
case 2248:
case 3287:
case 2337:
case 1527:
case 501:
case 824:
case 2372:
case 2876:
case 384:
case 155:
case 2917:
case 3686:
case 11:
case 266:
case 462:
case 1517:
case 295:
case 239:
case 984:
case 1913:
case 662:
case 340:
case 4053:
case 1561:
case 3539:
case 1158:
case 2651:
case 3943:
case 2853:
case 1857:
case 3547:
case 2029:
case 2588:
case 4076:
case 347:
case 2446:
case 1224:
case 3245:
case 181:
case 1988:
case 2019:
case 1629:
case 3756:
case 1112:
case 2349:
case 936:
case 3236:
case 44:
case 336:
case 969:
case 2386:
case 108:
case 919:
case 1788:
case 68:
case 2278:
case 3267:
case 3743:
case 2022:
case 4062:
case 1354:
case 48:
case 1129:
case 2482:
case 3499:
case 1:
case 1622:
case 2012:
case 2981:
case 4034:
case 1119:
case 3507:
case 1581:
case 3055:
case 3666:
case 387:
case 3780:
case 546:
case 1457:
case 827:
case 987:
case 141:
case 3956:
case 3137:
case 3679:
case 3892:
case 2889:
case 1293:
case 2476:
case 612:
case 3564:
case 588:
case 2151:
case 2568:
case 4089:
case 805:
case 2469:
case 3149:
case 3838:
case 412:
case 2595:
case 1096:
case 1995:
case 216:
case 1355:
case 87:
case 2297:
case 2696:
case 1241:
case 718:
case 2379:
case 4035:
case 2761:
case 1830:
case 338:
case 20:
case 223:
case 3960:
case 2058:
case 2717:
case 3532:
case 856:
case 3869:
case 1831:
case 339:
case 1732:
case 3372:
case 284:
case 2760:
case 3651:
case 517:
case 2539:
case 3961:
case 1252:
case 2438:
case 2773:
case 1283:
case 3196:
case 3248:
case 1426:
case 787:
case 1049:
case 1777:
case 2585:
case 3927:
case 2703:
case 693:
case 1591:
case 3220:
case 632:
case 2980:
case 3019:
case 2351:
case 2672:
case 3882:
case 2236:
case 236:
case 493:
case 269:
case 3790:
case 2166:
case 318:
case 3806:
case 1543:
case 3853:
case 3302:
case 1798:
case 109:
case 2179:
case 738:
case 2245:
case 3210:
case 1984:
case 404:
case 510:
case 631:
case 1228:
case 2498:
case 1124:
case 3621:
case 3605:
case 2110:
case 3279:
case 2465:
case 4085:
case 3308:
case 713:
case 392:
case 333:
case 228:
case 3266:
case 2847:
case 391:
case 1403:
case 1171:
case 1456:
case 991:
case 3070:
case 3136:
case 1114:
case 1212:
case 849:
case 4039:
case 2120:
case 2375:
case 3553:
case 1370:
case 3730:
case 263:
case 1097:
case 499:
case 3604:
case 2839:
case 3144:
case 2608:
case 1101:
case 1641:
case 3250:
case 2464:
case 4084:
case 2726:
case 3576:
case 2305:
case 2931:
case 2321:
case 699:
case 3569:
case 2093:
case 3675:
case 2716:
case 1363:
case 1460:
case 1258:
case 2311:
case 1115:
case 103:
case 814:
case 3378:
case 2367:
case 1738:
case 2041:
case 2374:
case 3209:
case 3439:
case 2052:
case 1934:
case 2413:
case 1159:
case 2895:
case 2040:
case 313:
case 1417:
case 2868:
case 2104:
case 3864:
case 3916:
case 733:
case 3108:
case 2286:
case 3832:
case 326:
case 3197:
case 498:
case 791:
case 1776:
case 1640:
case 3731:
case 1371:
case 3926:
case 3485:
case 1530:
case 2175:
case 2320:
case 698:
case 2083:
case 3251:
case 4094:
case 1962:
case 3071:
case 3387:
case 2348:
case 3344:
case 1706:
case 1325:
case 3898:
case 2894:
case 1753:
case 2757:
case 2121:
case 848:
case 615:
case 524:
case 2105:
case 271:
case 3610:
case 1233:
case 957:
case 2589:
case 1946:
case 2111:
case 801:
case 2546:
case 272:
case 3620:
case 1045:
case 1989:
case 4068:
case 3447:
case 3484:
case 2174:
case 1881:
case 229:
case 3807:
case 2167:
case 1890:
case 676:
case 59:
case 1315:
case 800:
case 2370:
case 2097:
case 3762:
case 4043:
case 2641:
case 2473:
case 1608:
case 2101:
case 1464:
case 1477:
case 1931:
case 1726:
case 3659:
case 3976:
case 1321:
case 3817:
case 1885:
case 797:
case 3254:
case 4091:
case 4080:
case 1697:
case 3140:
case 3600:
case 270:
case 3004:
case 1374:
case 2738:
case 1041:
case 1367:
case 2008:
case 3128:
case 2124:
case 3982:
case 2999:
case 2222:
case 790:
case 1465:
case 3067:
case 2792:
case 3341:
case 3746:
case 352:
case 2891:
case 128:
case 2403:
case 1847:
case 3255:
case 2300:
case 351:
case 807:
case 3906:
case 3393:
case 3021:
case 3005:
case 1375:
case 3735:
case 2935:
case 1535:
case 2325:
case 2706:
case 1894:
case 576:
case 785:
case 2628:
case 1018:
case 2233:
case 171:
case 3020:
case 1105:
case 424:
case 2618:
case 3614:
case 1028:
case 3992:
case 2989:
case 3010:
case 1546:
case 172:
case 1488:
case 997:
case 2163:
case 55:
case 129:
case 1174:
case 515:
case 3799:
case 2315:
case 3340:
case 1272:
case 4090:
case 3873:
case 2461:
case 2683:
case 4081:
case 3938:
case 2934:
case 1534:
case 1413:
case 2159:
case 3516:
case 1202:
case 245:
case 752:
case 3601:
case 1644:
case 1286:
case 2640:
case 3615:
case 751:
case 458:
case 2769:
case 2087:
case 974:
case 1249:
case 1320:
case 2530:
case 2652:
case 1083:
case 658:
case 1423:
case 1930:
case 3193:
case 1476:
case 2293:
case 1568:
case 1727:
case 1151:
case 2658:
case 782:
case 3050:
case 3816:
case 3977:
case 1834:
case 630:
case 1595:
case 3042:
case 2995:
case 3200:
case 2723:
case 1297:
case 2355:
case 116:
case 2241:
case 688:
case 512:
case 1379:
case 10:
case 1366:
case 2830:
case 123:
case 1862:
case 3826:
case 865:
case 446:
case 3066:
case 33:
case 208:
case 3655:
case 3965:
case 71:
case 1309:
case 3079:
case 3747:
case 3784:
case 242:
case 93:
case 3263:
case 1022:
case 2612:
case 2994:
case 2:
case 3358:
case 1012:
case 3133:
case 2622:
case 1990:
case 1350:
case 3907:
case 58:
case 1453:
case 2119:
case 1846:
case 3270:
case 1342:
case 1889:
case 706:
case 382:
case 822:
case 653:
case 410:
case 1351:
case 1899:
case 1672:
case 136:
case 2037:
case 2707:
case 531:
case 664:
case 2072:
case 1637:
case 532:
case 1179:
case 1492:
case 3122:
case 2984:
case 2947:
case 4031:
case 1547:
case 3619:
case 1584:
case 147:
case 2228:
case 3224:
case 2831:
case 73:
case 1649:
case 955:
case 2002:
case 2732:
case 184:
case 689:
case 1686:
case 140:
case 3913:
case 1539:
case 2329:
case 1438:
case 2319:
case 3795:
case 3333:
case 1150:
case 2283:
case 2426:
case 3768:
case 2985:
case 2049:
case 2764:
case 2086:
case 1585:
case 3225:
case 1602:
case 2822:
case 211:
case 1536:
case 2326:
case 2936:
case 2721:
case 3571:
case 675:
case 1106:
case 1918:
case 1646:
case 188:
case 1770:
case 3330:
case 2291:
case 1153:
case 2419:
case 60:
case 3920:
case 2518:
case 1182:
case 2429:
case 3855:
case 851:
case 2046:
case 2774:
case 3910:
case 3524:
case 2767:
case 3778:
case 1284:
case 907:
case 1247:
case 2243:
case 2316:
case 74:
case 2812:
case 2711:
case 900:
case 2704:
case 1392:
case 3708:
case 5:
case 373:
case 137:
case 1662:
case 508:
case 925:
case 468:
case 3217:
case 542:
case 325:
case 3515:
case 885:
case 146:
case 3854:
case 2858:
case 3616:
case 1285:
case 3131:
case 1634:
case 4022:
case 1983:
case 2583:
case 1451:
case 2062:
case 890:
case 1295:
case 2357:
case 2997:
case 2126:
case 3273:
case 647:
case 231:
case 1268:
case 3744:
case 1701:
case 3787:
case 2748:
case 3130:
case 3076:
case 1993:
case 447:
case 1353:
case 707:
case 1849:
case 3559:
case 636:
case 164:
case 669:
case 874:
case 436:
case 293:
case 2116:
case 1941:
case 3904:
case 232:
case 509:
case 1409:
case 3911:
case 1294:
case 117:
case 700:
case 773:
case 3422:
case 1837:
case 1479:
case 361:
case 3967:
case 2710:
case 3974:
case 3657:
case 1724:
case 1466:
case 362:
case 3203:
case 3570:
case 2455:
case 897:
case 484:
case 3736:
case 3006:
case 2290:
case 1771:
case 684:
case 189:
case 3519:
case 1684:
case 3181:
case 1647:
case 1420:
case 1933:
case 3190:
case 1091:
case 3418:
case 594:
case 1755:
case 2327:
case 2103:
case 1235:
case 3863:
case 159:
case 2972:
case 654:
case 1572:
case 299:
case 235:
case 663:
case 1289:
case 978:
case 2779:
case 2361:
case 2047:
case 2084:
case 2766:
case 4093:
case 2680:
case 3428:
case 1198:
case 1685:
case 3216:
case 2415:
case 722:
case 1754:
case 3627:
case 1897:
case 3013:
case 1132:
case 3800:
case 2160:
case 3452:
case 2039:
case 2709:
case 1234:
case 183:
case 3951:
case 2742:
case 3023:
case 3796:
case 3483:
case 628:
case 1177:
case 1448:
case 2173:
case 2750:
case 2949:
case 2085:
case 365:
case 2986:
case 396:
case 2425:
case 721:
case 1123:
case 629:
case 3493:
case 2840:
case 81:
case 3660:
case 3077:
case 2068:
case 3749:
case 472:
case 3390:
case 2231:
case 1475:
case 2356:
case 2303:
case 2996:
case 2400:
case 3942:
case 2751:
case 2883:
case 2117:
case 1695:
case 806:
case 1398:
case 2459:
case 1113:
case 1887:
case 2558:
case 1844:
case 1668:
case 3554:
case 2818:
case 298:
case 158:
case 322:
case 1467:
case 3603:
case 545:
case 3871:
case 379:
case 4083:
case 2690:
case 3098:
case 2094:
case 1299:
case 1836:
case 979:
case 1090:
case 1912:
case 1405:
case 1081:
case 3737:
case 3007:
case 3180:
case 1694:
case 3191:
case 765:
case 3824:
case 2373:
case 881:
case 3555:
case 1845:
case 305:
case 2502:
case 528:
case 844:
case 3623:
case 37:
case 920:
case 3384:
case 1709:
case 3061:
case 3347:
case 97:
case 2234:
case 3238:
case 2262:
case 283:
case 838:
case 1742:
case 1230:
case 677:
case 3168:
case 2177:
case 2639:
case 3804:
case 1841:
case 3551:
case 2808:
case 3444:
case 1401:
case 2448:
case 1949:
case 2586:
case 1986:
case 477:
case 2549:
case 1425:
case 3195:
case 3874:
case 2107:
case 2684:
case 603:
case 819:
case 2933:
case 2420:
case 1414:
case 2323:
case 470:
case 3811:
case 563:
case 1327:
case 4008:
case 3385:
case 1937:
case 1103:
case 1471:
case 1972:
case 199:
case 2572:
case 3722:
case 3805:
case 135:
case 3292:
case 927:
case 3339:
case 1680:
case 3929:
case 887:
case 1766:
case 2313:
case 1691:
case 1424:
case 327:
case 2729:
case 3579:
case 4087:
case 258:
case 2474:
case 2467:
case 3478:
case 1463:
case 3607:
case 1681:
case 3147:
case 3184:
case 1690:
case 720:
case 2332:
case 3282:
case 2912:
case 2364:
case 2081:
case 3698:
case 3955:
case 2719:
case 3395:
case 3733:
case 3810:
case 3665:
case 3632:
case 3276:
case 2123:
case 176:
case 3550:
case 571:
case 895:
case 4045:
case 2307:
case 1068:
case 2475:
case 3185:
case 1303:
case 3073:
case 1852:
case 1095:
case 2596:
case 3497:
case 1751:
case 2404:
case 1883:
case 3408:
case 115:
case 529:
case 15:
case 2695:
case 2958:
case 3954:
case 3060:
case 1459:
case 727:
case 572:
case 2668:
case 1558:
case 3848:
case 3664:
case 2239:
case 3741:
case 1704:
case 1630:
case 3842:
case 1552:
case 3850:
case 3486:
case 2587:
case 3548:
case 568:
case 408:
case 3793:
case 3901:
case 1987:
case 6:
case 2285:
case 734:
case 2169:
case 1062:
case 2451:
case 1583:
case 2030:
case 2176:
case 360:
case 3223:
case 642:
case 1822:
case 1326:
case 1035:
case 3971:
case 1705:
case 516:
case 1721:
case 1157:
case 3520:
case 2770:
case 833:
case 1280:
case 2182:
case 3510:
case 2928:
case 2545:
case 1945:
case 1528:
case 1767:
case 3334:
case 891:
case 786:
case 3288:
case 2635:
case 1243:
case 2763:
case 949:
case 1711:
case 46:
case 50:
case 217:
case 3606:
case 3653:
case 1099:
case 540:
case 2837:
case 3189:
case 2192:
case 302:
case 1710:
case 4049:
case 3567:
case 4086:
case 2724:
case 2466:
case 902:
case 1720:
case 3135:
case 4002:
case 1455:
case 3718:
case 3970:
case 2699:
case 334:
case 3207:
case 289:
case 1281:
case 934:
case 1357:
case 2295:
case 536:
case 4072:
case 1997:
case 569:
case 2597:
case 131:
case 850:
case 3264:
case 1593:
case 104:
case 2306:
case 3575:
case 2725:
case 813:
case 3162:
case 3134:
case 1631:
case 2138:
case 826:
case 386:
case 3232:
case 3740:
case 2715:
case 264:
case 210:
case 3504:
case 193:
case 253:
case 132:
case 1116:
case 2941:
case 4037:
case 3752:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754283601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,];
var gg_b = "1754283601/";

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
