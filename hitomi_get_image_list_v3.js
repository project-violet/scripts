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
case 245:
case 384:
case 3780:
case 3119:
case 2298:
case 3517:
case 3270:
case 1831:
case 2016:
case 1085:
case 2820:
case 139:
case 3289:
case 3499:
case 463:
case 1372:
case 3073:
case 3433:
case 1097:
case 2752:
case 99:
case 677:
case 4091:
case 2732:
case 2843:
case 3418:
case 3453:
case 694:
case 1757:
case 3086:
case 3764:
case 2377:
case 3949:
case 2219:
case 3668:
case 3301:
case 4066:
case 1851:
case 2170:
case 2175:
case 2960:
case 3578:
case 2590:
case 3388:
case 2951:
case 1138:
case 88:
case 2244:
case 404:
case 1459:
case 2399:
case 3057:
case 954:
case 1064:
case 1786:
case 3037:
case 7:
case 3144:
case 1909:
case 946:
case 470:
case 422:
case 2024:
case 1079:
case 1439:
case 3797:
case 2984:
case 2353:
case 3891:
case 2825:
case 333:
case 118:
case 1920:
case 2931:
case 1158:
case 3785:
case 2090:
case 219:
case 53:
case 27:
case 3908:
case 266:
case 2712:
case 2605:
case 1721:
case 1201:
case 2730:
case 2483:
case 1862:
case 3557:
case 3159:
case 1827:
case 2172:
case 241:
case 2239:
case 60:
case 2304:
case 1444:
case 2524:
case 3272:
case 1579:
case 1177:
case 2822:
case 3193:
case 2259:
case 2867:
case 3782:
case 1389:
case 970:
case 613:
case 2796:
case 2848:
case 826:
case 329:
case 162:
case 2761:
case 1580:
case 1717:
case 1419:
case 1585:
case 2516:
case 1375:
case 3573:
case 1597:
case 3383:
case 3954:
case 1133:
case 1082:
case 2911:
case 1922:
case 331:
case 2629:
case 1118:
case 3934:
case 2646:
case 3404:
case 965:
case 2087:
case 257:
case 527:
case 2313:
case 238:
case 1680:
case 3420:
case 451:
case 2728:
case 244:
case 130:
case 901:
case 152:
case 385:
case 2833:
case 1977:
case 3409:
case 2742:
case 3939:
case 2899:
case 693:
case 3366:
case 464:
case 695:
case 2002:
case 2853:
case 3443:
case 1194:
case 1664:
case 1768:
case 2325:
case 256:
case 526:
case 1841:
case 1414:
case 2941:
case 2320:
case 2500:
case 3181:
case 1331:
case 267:
case 955:
case 1918:
case 3134:
case 1384:
case 3047:
case 2127:
case 4088:
case 2162:
case 2529:
case 2692:
case 3686:
case 1426:
case 405:
case 3211:
case 447:
case 2343:
case 1933:
case 3154:
case 2111:
case 41:
case 953:
case 479:
case 3673:
case 1569:
case 1351:
case 3801:
case 878:
case 2771:
case 1360:
case 827:
case 2616:
case 2000:
case 1875:
case 2970:
case 2695:
case 2203:
case 455:
case 1434:
case 614:
case 3126:
case 905:
case 3149:
case 8:
case 2394:
case 1069:
case 3876:
case 1682:
case 2249:
case 2706:
case 2226:
case 1454:
case 979:
case 453:
case 691:
case 372:
case 3919:
case 742:
case 288:
case 3265:
case 3617:
case 3260:
case 1120:
case 951:
case 102:
case 2131:
case 2745:
case 3251:
case 2214:
case 676:
case 66:
case 3769:
case 1109:
case 2367:
case 3774:
case 2804:
case 1311:
case 964:
case 3494:
case 1889:
case 2975:
case 3231:
case 206:
case 1408:
case 2348:
case 4076:
case 1938:
case 542:
case 2005:
case 3114:
case 2638:
case 3405:
case 1560:
case 3821:
case 2895:
case 346:
case 2271:
case 1675:
case 828:
case 849:
case 448:
case 2094:
case 3762:
case 3727:
case 3207:
case 1956:
case 3683:
case 2887:
case 2734:
case 361:
case 2509:
case 1406:
case 4078:
case 1584:
case 1882:
case 1440:
case 2300:
case 2520:
case 3955:
case 3171:
case 2613:
case 268:
case 576:
case 56:
case 3961:
case 1268:
case 3591:
case 1445:
case 2305:
case 3996:
case 2067:
case 2022:
case 68:
case 2836:
case 1011:
case 2982:
case 3142:
case 2604:
case 1027:
case 1062:
case 3429:
case 1689:
case 2856:
case 3446:
case 3930:
case 1995:
case 1670:
case 85:
case 2890:
case 3912:
case 150:
case 431:
case 3878:
case 3400:
case 39:
case 2228:
case 3091:
case 1880:
case 540:
case 174:
case 365:
case 3731:
case 3145:
case 4086:
case 815:
case 2997:
case 2302:
case 2699:
case 2169:
case 2567:
case 2824:
case 1879:
case 1511:
case 1992:
case 1146:
case 3857:
case 1562:
case 3269:
case 1129:
case 1527:
case 2653:
case 2714:
case 197:
case 363:
case 3751:
case 1065:
case 2468:
case 80:
case 100:
case 931:
case 3760:
case 1051:
case 2240:
case 4037:
case 287:
case 1060:
case 740:
case 116:
case 370:
case 169:
case 3402:
case 2206:
case 1263:
case 3952:
case 1766:
case 1084:
case 3106:
case 3347:
case 2979:
case 2703:
case 2009:
case 1897:
case 2677:
case 304:
case 3601:
case 1791:
case 1885:
case 2020:
case 212:
case 2816:
case 4057:
case 795:
case 117:
case 1412:
case 1430:
case 515:
case 3285:
case 2421:
case 2805:
case 840:
case 2004:
case 472:
case 3115:
case 1273:
case 3297:
case 1192:
case 2518:
case 1662:
case 1089:
case 1783:
case 1929:
case 2974:
case 171:
case 2667:
case 2197:
case 1286:
case 934:
case 2356:
case 2744:
case 2533:
case 1116:
case 50:
case 1461:
case 3588:
case 2648:
case 3945:
case 513:
case 481:
case 1455:
case 2013:
case 2719:
case 292:
case 715:
case 2180:
case 3501:
case 3321:
case 208:
case 1257:
case 2179:
case 3264:
case 3436:
case 2210:
case 2232:
case 2846:
case 2164:
case 3456:
case 3279:
case 1572:
case 2252:
case 1874:
case 3789:
case 1382:
case 3132:
case 3923:
case 985:
case 4063:
case 2800:
case 159:
case 713:
case 2478:
case 3490:
case 1435:
case 1075:
case 3317:
case 814:
case 258:
case 528:
case 364:
case 2620:
case 3971:
case 175:
case 577:
case 511:
case 483:
case 1684:
case 1452:
case 2437:
case 2392:
case 2609:
case 1136:
case 2077:
case 3847:
case 2643:
case 3583:
case 1902:
case 3373:
case 891:
case 1397:
case 1432:
case 2255:
case 1651:
case 6:
case 2538:
case 594:
case 1190:
case 3135:
case 3741:
case 3130:
case 1195:
case 303:
case 1217:
case 347:
case 777:
case 876:
case 379:
case 160:
case 1041:
case 728:
case 749:
case 1187:
case 3337:
case 3282:
case 2486:
case 2296:
case 920:
case 972:
case 3772:
case 711:
case 2324:
case 1379:
case 2504:
case 2053:
case 2473:
case 434:
case 2033:
case 2182:
case 2099:
case 2793:
case 1364:
case 4047:
case 2230:
case 2625:
case 3691:
case 1701:
case 3161:
case 305:
case 55:
case 981:
case 3088:
case 707:
case 3575:
case 1868:
case 3651:
case 373:
case 743:
case 3660:
case 1741:
case 1135:
case 3385:
case 3902:
case 902:
case 3156:
case 1847:
case 3397:
case 3432:
case 2718:
case 3410:
case 430:
case 1373:
case 452:
case 3452:
case 2039:
case 2842:
case 2544:
case 2256:
case 3684:
case 3136:
case 3278:
case 3788:
case 2480:
case 745:
case 3631:
case 375:
case 2295:
case 1161:
case 1691:
case 3701:
case 2485:
case 2871:
case 1088:
case 507:
case 543:
case 1150:
case 2497:
case 1196:
case 1666:
case 2777:
case 489:
case 3807:
case 2603:
case 1357:
case 658:
case 2626:
case 3415:
case 3589:
case 1282:
case 1492:
case 2947:
case 3217:
case 2598:
case 2121:
case 103:
case 545:
case 3041:
case 360:
case 227:
case 1588:
case 4074:
case 3116:
case 155:
case 2758:
case 2713:
case 3496:
case 3611:
case 2173:
case 2482:
case 1863:
case 2806:
case 1487:
case 2823:
case 3662:
case 3192:
case 2186:
case 3273:
case 741:
case 2634:
case 608:
case 3783:
case 692:
case 3946:
case 3430:
case 867:
case 1495:
case 2681:
case 317:
case 3412:
case 2098:
case 1775:
case 34:
case 2355:
case 719:
case 766:
case 738:
case 3905:
case 856:
case 3075:
case 1317:
case 757:
case 396:
case 1280:
case 899:
case 2559:
case 402:
case 3572:
case 1456:
case 1110:
case 952:
case 3237:
case 1132:
case 1264:
case 1152:
case 1906:
case 2539:
case 1076:
case 844:
case 2845:
case 2371:
case 756:
case 163:
case 300:
case 857:
case 3100:
case 2534:
case 2986:
case 2743:
case 2049:
case 1915:
case 3562:
case 1857:
case 3527:
case 3146:
case 612:
case 2973:
case 1066:
case 925:
case 3511:
case 2229:
case 2709:
case 2003:
case 1091:
case 3916:
case 3428:
case 1688:
case 1145:
case 2200:
case 1601:
case 104:
case 3885:
case 226:
case 3031:
case 2639:
case 2407:
case 3924:
case 3084:
case 1873:
case 2693:
case 3897:
case 418:
case 2957:
case 1402:
case 2659:
case 3672:
case 767:
case 3105:
case 3051:
case 2014:
case 4079:
case 170:
case 122:
case 316:
case 819:
case 87:
case 1955:
case 506:
case 2850:
case 3531:
case 154:
case 242:
case 1817:
case 2722:
case 3374:
case 3584:
case 3102:
case 1727:
case 918:
case 462:
case 1683:
case 3423:
case 1405:
case 921:
case 28:
case 3560:
case 2812:
case 3675:
case 2008:
case 710:
case 1821:
case 2830:
case 3551:
case 807:
case 350:
case 1912:
case 2921:
case 2698:
case 19:
case 4082:
case 3565:
case 588:
case 1400:
case 3027:
case 3062:
case 2794:
case 423:
case 1446:
case 668:
case 2306:
case 2526:
case 2474:
case 2549:
case 2147:
case 2054:
case 425:
case 2469:
case 1142:
case 3247:
case 1566:
case 1591:
case 2619:
case 1128:
case 3268:
case 2045:
case 768:
case 2650:
case 82:
case 1617:
case 4089:
case 2528:
case 2191:
case 471:
case 1265:
case 417:
case 606:
case 2166:
case 2696:
case 960:
case 2844:
case 2542:
case 1422:
case 3434:
case 2427:
case 3904:
case 2462:
case 1126:
case 181:
case 276:
case 2225:
case 3481:
case 2705:
case 2612:
case 3875:
case 3408:
case 2700:
case 3938:
case 2898:
case 2983:
case 2354:
case 2023:
case 2209:
case 1774:
case 291:
case 3143:
case 3889:
case 975:
case 688:
case 1284:
case 1063:
case 3362:
case 610:
case 2976:
case 459:
case 909:
case 2334:
case 2006:
case 4075:
case 2243:
case 3913:
case 1260:
case 3958:
case 2381:
case 398:
case 2655:
case 1251:
case 2040:
case 183:
case 2460:
case 1391:
case 3768:
case 1108:
case 512:
case 2451:
case 3747:
case 2610:
case 1959:
case 475:
case 3194:
case 1443:
case 2303:
case 2523:
case 2326:
case 2506:
case 959:
case 473:
case 1637:
case 3977:
case 1409:
case 996:
case 2652:
case 1563:
case 1939:
case 2294:
case 2071:
case 3680:
case 3365:
case 2431:
case 352:
case 330:
case 185:
case 4072:
case 587:
case 2988:
case 712:
case 2314:
case 1801:
case 3360:
case 3685:
case 1425:
case 2545:
case 3999:
case 917:
case 3167:
case 1707:
case 3697:
case 2893:
case 3122:
case 3933:
case 1047:
case 3918:
case 3384:
case 3953:
case 1686:
case 3872:
case 2267:
case 2859:
case 2222:
case 134:
case 1068:
case 2248:
case 293:
case 389:
case 3331:
case 812:
case 3717:
case 2055:
case 2640:
case 1193:
case 1663:
case 3444:
case 3811:
case 2854:
case 916:
case 3389:
case 1139:
case 1782:
case 1537:
case 3564:
case 0:
case 1557:
case 2623:
case 3827:
case 2787:
case 3994:
case 2834:
case 2881:
case 1908:
case 887:
case 2035:
case 786:
case 3721:
case 2795:
case 1438:
case 2319:
case 592:
case 2790:
case 213:
case 2808:
case 1586:
case 2299:
case 3118:
case 3674:
case 3153:
case 1934:
case 2233:
case 1376:
case 2344:
case 2218:
case 3669:
case 450:
case 2736:
case 619:
case 666:
case 997:
case 2096:
case 3967:
case 131:
case 3922:
case 900:
case 1383:
case 215:
case 1241:
case 586:
case 641:
case 2188:
case 3419:
case 3375:
case 1017:
case 2061:
case 323:
case 2814:
case 2441:
case 1301:
case 1521:
case 3851:
case 2530:
case 52:
case 25:
case 2339:
case 1453:
case 474:
case 1764:
case 1086:
case 1949:
case 3757:
case 497:
case 2642:
case 3582:
case 3097:
case 2204:
case 1073:
case 1517:
case 758:
case 3831:
case 339:
case 3085:
case 836:
case 1270:
case 3925:
case 2991:
case 1275:
case 3158:
case 72:
case 133:
case 318:
case 2555:
case 1785:
case 2238:
case 1866:
case 1477:
case 690:
case 1037:
case 2176:
case 2052:
case 2803:
case 3439:
case 3607:
case 469:
case 4060:
case 3079:
case 643:
case 2849:
case 2032:
case 3064:
case 4084:
case 558:
case 228:
case 249:
case 2258:
case 1388:
case 3138:
case 537:
case 2535:
case 135:
case 380:
case 2762:
case 2683:
case 3781:
case 2405:
case 18:
case 1978:
case 880:
case 1830:
case 1748:
case 2955:
case 1850:
case 3520:
case 368:
case 524:
case 3613:
case 2817:
case 3658:
case 818:
case 4090:
case 3346:
case 632:
case 1202:
case 1644:
case 1054:
case 3836:
case 3982:
case 1323:
case 3067:
case 3022:
case 990:
case 2566:
case 3048:
case 2961:
case 839:
case 1917:
case 3525:
case 702:
case 2950:
case 4087:
case 1835:
case 724:
case 1081:
case 3890:
case 2930:
case 1921:
case 1168:
case 3228:
case 2878:
case 1794:
case 3604:
case 945:
case 3856:
case 1526:
case 1034:
case 2446:
case 2429:
case 1147:
case 957:
case 3633:
case 490:
case 2784:
case 3997:
case 2066:
case 3824:
case 669:
case 1246:
case 3302:
case 1709:
case 1229:
case 407:
case 1852:
case 2091:
case 3025:
case 823:
case 3985:
case 3548:
case 265:
case 2145:
case 1200:
case 3714:
case 2751:
case 2760:
case 3468:
case 825:
case 1534:
case 1026:
case 445:
case 1810:
case 1832:
case 3618:
case 3174:
case 2269:
case 3447:
case 3653:
case 1957:
case 3206:
case 3749:
case 2402:
case 3043:
case 3964:
case 3892:
case 2123:
case 1659:
case 1815:
case 2932:
case 2886:
case 1328:
case 1508:
case 1014:
case 4024:
case 552:
case 222:
case 530:
case 270:
case 387:
case 941:
case 1205:
case 862:
case 126:
case 1639:
case 1407:
case 919:
case 2952:
case 966:
case 2106:
case 3677:
case 1693:
case 1163:
case 3009:
case 3553:
case 1823:
case 1186:
case 3336:
case 2115:
case 1634:
case 488:
case 3421:
case 1681:
case 1098:
case 2775:
case 1355:
case 3417:
case 4029:
case 2588:
case 3648:
case 3390:
case 525:
case 3185:
case 2945:
case 1758:
case 410:
case 3197:
case 1292:
case 2863:
case 1482:
case 3622:
case 696:
case 967:
case 1806:
case 3356:
case 3744:
case 3577:
case 406:
case 3179:
case 2264:
case 617:
case 2152:
case 999:
case 2906:
case 3387:
case 1137:
case 3232:
case 64:
case 1963:
case 4005:
case 956:
case 852:
case 830:
case 13:
case 723:
case 1845:
case 308:
case 1312:
case 3058:
case 392:
case 562:
case 3800:
case 3478:
case 2770:
case 3038:
case 2317:
case 3798:
case 1608:
case 3829:
case 3846:
case 682:
case 1224:
case 2279:
case 1704:
case 3694:
case 2083:
case 1039:
case 499:
case 1842:
case 1733:
case 906:
case 2424:
case 1256:
case 1544:
case 2386:
case 3077:
case 3437:
case 1093:
case 3609:
case 2155:
case 2001:
case 739:
case 3558:
case 1828:
case 4002:
case 1290:
case 3620:
case 2971:
case 3235:
case 2868:
case 3255:
case 518:
case 1178:
case 3316:
case 2741:
case 3538:
case 251:
case 1464:
case 3643:
case 3457:
case 1753:
case 444:
case 1626:
case 3296:
case 2337:
case 2492:
case 1649:
case 1352:
case 2772:
case 1947:
case 3324:
case 2112:
case 780:
case 1121:
case 279:
case 539:
case 3250:
case 2416:
case 3230:
case 3625:
case 2691:
case 1295:
case 3212:
case 2088:
case 205:
case 3033:
case 3182:
case 3739:
case 1310:
case 673:
case 2196:
case 910:
case 1777:
case 2942:
case 721:
case 3099:
case 1:
case 3793:
case 1603:
case 2903:
case 1596:
case 2289:
case 1359:
case 1204:
case 2779:
case 1724:
case 2073:
case 680:
case 3298:
case 2119:
case 3488:
case 2517:
case 1561:
case 3016:
case 560:
case 1991:
case 2521:
case 1814:
case 621:
case 3219:
case 2198:
case 390:
case 3965:
case 832:
case 3170:
case 1339:
case 3732:
case 2418:
case 3587:
case 3710:
case 2086:
case 2764:
case 1183:
case 3333:
case 1849:
case 3244:
case 1010:
case 111:
case 968:
case 639:
case 1792:
case 3175:
case 3960:
case 575:
case 1535:
case 3590:
case 1671:
case 3825:
case 509:
case 2785:
case 1716:
case 1238:
case 2037:
case 1176:
case 487:
case 3318:
case 3353:
case 3024:
case 3536:
case 3172:
case 771:
case 1277:
case 341:
case 3483:
case 3293:
case 3239:
case 1787:
case 1834:
case 1510:
case 623:
case 3056:
case 869:
case 816:
case 1881:
case 3090:
case 319:
case 1035:
case 2908:
case 366:
case 1795:
case 3750:
case 4094:
case 559:
case 248:
case 596:
case 1055:
case 782:
case 1640:
case 3822:
case 2193:
case 3259:
case 3476:
case 3867:
case 3304:
case 2139:
case 987:
case 1218:
case 1253:
case 1096:
case 571:
case 2383:
case 3911:
case 3516:
case 1188:
case 517:
case 54:
case 3755:
case 1061:
case 357:
case 4067:
case 10:
case 3141:
case 582:
case 1790:
case 2021:
case 113:
case 1808:
case 3313:
case 897:
case 1470:
case 2981:
case 1515:
case 436:
case 662:
case 3646:
case 3629:
case 1299:
case 4048:
case 2934:
case 1233:
case 2376:
case 2993:
case 1326:
case 1652:
case 2563:
case 1484:
case 3624:
case 1071:
case 3208:
case 3728:
case 2420:
case 1431:
case 516:
case 774:
case 285:
case 1901:
case 2888:
case 1460:
case 700:
case 896:
case 1451:
case 3972:
case 3002:
case 3853:
case 992:
case 1523:
case 437:
case 2657:
case 3818:
case 2047:
case 3546:
case 652:
case 2686:
case 630:
case 42:
case 1859:
case 3162:
case 3529:
case 3309:
case 1702:
case 574:
case 234:
case 769:
case 716:
case 3941:
case 2068:
case 4033:
case 367:
case 1248:
case 817:
case 3320:
case 2181:
case 195:
case 3771:
case 3616:
case 3281:
case 3491:
case 2425:
case 882:
case 4053:
case 986:
case 3234:
case 1042:
case 1839:
case 2707:
case 2227:
case 1893:
case 3877:
case 2673:
case 3989:
case 3046:
case 602:
case 3029:
case 3723:
case 3203:
case 698:
case 1427:
case 2149:
case 281:
case 2126:
case 92:
case 860:
case 16:
case 3000:
case 1630:
case 3695:
case 1705:
case 1225:
case 3165:
case 1612:
case 2568:
case 220:
case 532:
case 272:
case 2919:
case 4004:
case 3858:
case 1308:
case 1528:
case 3740:
case 1661:
case 2265:
case 1191:
case 3394:
case 3706:
case 1166:
case 624:
case 1844:
case 1411:
case 2876:
case 3249:
case 1542:
case 2063:
case 4038:
case 3636:
case 1334:
case 1006:
case 1243:
case 1381:
case 3131:
case 1819:
case 114:
case 2251:
case 1220:
case 3975:
case 306:
case 3151:
case 3005:
case 2678:
case 2114:
case 958:
case 3804:
case 1023:
case 3322:
case 191:
case 1209:
case 3502:
case 4013:
case 937:
case 1394:
case 3542:
case 2454:
case 3696:
case 3411:
case 3045:
case 1740:
case 188:
case 3191:
case 3661:
case 3528:
case 1813:
case 3308:
case 376:
case 36:
case 746:
case 879:
case 9:
case 2875:
case 847:
case 3225:
case 3705:
case 1970:
case 1695:
case 2074:
case 1203:
case 1723:
case 1046:
case 761:
case 2434:
case 2266:
case 2904:
case 3462:
case 3209:
case 1322:
case 620:
case 3354:
case 672:
case 43:
case 1804:
case 1656:
case 851:
case 2143:
case 1690:
case 3700:
case 1975:
case 2870:
case 1348:
case 554:
case 4044:
case 298:
case 2913:
case 2120:
case 546:
case 3040:
case 3571:
case 1636:
case 3976:
case 2507:
case 3243:
case 561:
case 3334:
case 3006:
case 1184:
case 1972:
case 801:
case 3523:
case 2664:
case 2194:
case 199:
case 2768:
case 3460:
case 1325:
case 1505:
case 156:
case 3451:
case 2414:
case 763:
case 2841:
case 4093:
case 3540:
case 765:
case 2680:
case 2365:
case 3431:
case 1728:
case 4059:
case 3901:
case 230:
case 144:
case 3349:
case 1833:
case 3326:
case 634:
case 3294:
case 3652:
case 1899:
case 1343:
case 3839:
case 2999:
case 2933:
case 1877:
case 2167:
case 2697:
case 2122:
case 563:
case 3988:
case 2351:
case 3314:
case 3028:
case 1771:
case 855:
case 2148:
case 704:
case 1281:
case 3545:
case 853:
case 1941:
case 770:
case 1500:
case 1320:
case 289:
case 565:
case 2331:
case 167:
case 3248:
case 4:
case 393:
case 2918:
case 2384:
case 2953:
case 3859:
case 1692:
case 2574:
case 3222:
case 978:
case 685:
case 2579:
case 1524:
case 48:
case 2811:
case 2444:
case 1036:
case 3854:
case 2177:
case 1867:
case 1259:
case 4008:
case 2389:
case 501:
case 1796:
case 2370:
case 3101:
case 1761:
case 3640:
case 2580:
case 753:
case 1090:
case 3881:
case 17:
case 3035:
case 119:
case 822:
case 3319:
case 2201:
case 1605:
case 1293:
case 1483:
case 3623:
case 2827:
case 2564:
case 1172:
case 141:
case 442:
case 3834:
case 926:
case 1056:
case 3510:
case 3787:
case 2118:
case 3299:
case 2674:
case 2153:
case 1894:
case 629:
case 701:
case 1646:
case 3756:
case 1927:
case 3233:
case 555:
case 1600:
case 3790:
case 4054:
case 2498:
case 157:
case 3012:
case 1358:
case 3030:
case 2778:
case 1095:
case 313:
case 1338:
case 865:
case 2585:
case 3645:
case 1516:
case 4034:
case 1755:
case 2199:
case 1911:
case 3096:
case 1710:
case 1843:
case 1732:
case 1189:
case 2757:
case 751:
case 2104:
case 1377:
case 3015:
case 190:
case 3512:
case 107:
case 4003:
case 1170:
case 145:
case 3561:
case 4026:
case 3628:
case 1488:
case 4049:
case 547:
case 2925:
case 3991:
case 1016:
case 579:
case 239:
case 1820:
case 3642:
case 2582:
case 2097:
case 3359:
case 2493:
case 2283:
case 221:
case 2909:
case 2773:
case 2079:
case 3052:
case 1318:
case 3803:
case 1353:
case 2607:
case 1825:
case 218:
case 1931:
case 854:
case 3716:
case 3213:
case 1175:
case 846:
case 779:
case 564:
case 1590:
case 703:
case 1951:
case 3010:
case 1244:
case 311:
case 3826:
case 1333:
case 1602:
case 3792:
case 1715:
case 942:
case 2943:
case 1457:
case 2902:
case 3464:
case 2156:
case 2410:
case 3236:
case 3753:
case 3059:
case 1255:
case 533:
case 2660:
case 2190:
case 2385:
case 991:
case 158:
case 1620:
case 784:
case 2788:
case 3544:
case 2684:
case 2452:
case 647:
case 3039:
case 3093:
case 1437:
case 3799:
case 679:
case 1077:
case 3315:
case 3310:
case 440:
case 1473:
case 3497:
case 3287:
case 1739:
case 3332:
case 2807:
case 493:
case 3:
case 1793:
case 3603:
case 3117:
case 1230:
case 2701:
case 3485:
case 872:
case 1261:
case 4042:
case 3968:
case 2041:
case 881:
case 495:
case 4028:
case 1504:
case 1324:
case 3352:
case 1053:
case 1802:
case 1197:
case 1667:
case 3482:
case 1622:
case 1599:
case 2496:
case 2611:
case 3173:
case 2776:
case 993:
case 1533:
case 1390:
case 282:
case 1417:
case 1648:
case 3758:
case 729:
case 2450:
case 748:
case 601:
case 217:
case 3216:
case 186:
case 2541:
case 24:
case 3355:
case 1805:
case 834:
case 2900:
case 3186:
case 1004:
case 4045:
case 1553:
case 2662:
case 1518:
case 995:
case 3634:
case 1694:
case 1164:
case 1252:
case 1829:
case 3157:
case 2237:
case 2382:
case 3396:
case 529:
case 1800:
case 4006:
case 2435:
case 883:
case 1798:
case 3608:
case 2455:
case 3845:
case 4023:
case 885:
case 1719:
case 1180:
case 1395:
case 2869:
case 3593:
case 2257:
case 2124:
case 731:
case 1210:
case 3044:
case 3137:
case 3832:
case 3743:
case 3049:
case 604:
case 2146:
case 2562:
case 1618:
case 2307:
case 1447:
case 2527:
case 297:
case 3371:
case 1245:
case 534:
case 1025:
case 2880:
case 4015:
case 2428:
case 90:
case 3973:
case 3229:
case 1169:
case 1699:
case 3852:
case 3003:
case 622:
case 3639:
case 2924:
case 3163:
case 477:
case 2897:
case 1677:
case 3205:
case 2791:
case 411:
case 3725:
case 1816:
case 326:
case 2031:
case 2471:
case 829:
case 848:
case 2105:
case 3508:
case 187:
case 4052:
case 585:
case 2060:
case 269:
case 216:
case 3342:
case 1964:
case 3957:
case 1726:
case 1892:
case 3659:
case 2374:
case 1509:
case 3202:
case 1107:
case 4035:
case 928:
case 949:
case 1346:
case 1754:
case 3644:
case 3896:
case 69:
case 2936:
case 977:
case 911:
case 2531:
case 1300:
case 3748:
case 1613:
case 1658:
case 720:
case 772:
case 342:
case 1895:
case 2675:
case 3008:
case 781:
case 1094:
case 2369:
case 2423:
case 1543:
case 994:
case 1734:
case 3794:
case 4050:
case 415:
case 2027:
case 2689:
case 1242:
case 3549:
case 3147:
case 4061:
case 2670:
case 2995:
case 3835:
case 250:
case 1890:
case 3698:
case 3917:
case 884:
case 2445:
case 1525:
case 661:
case 1067:
case 3503:
case 3054:
case 1982:
case 1836:
case 413:
case 95:
case 2247:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744992002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,];
var gg_b = "1744992002/";

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
