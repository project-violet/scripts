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
case 2238:
case 2858:
case 2019:
case 2804:
case 3221:
case 636:
case 3922:
case 2139:
case 2275:
case 2106:
case 19:
case 1183:
case 2957:
case 4018:
case 910:
case 3882:
case 3286:
case 2647:
case 3295:
case 1084:
case 2428:
case 1098:
case 2487:
case 1375:
case 3369:
case 4020:
case 1244:
case 1338:
case 3303:
case 1345:
case 411:
case 2352:
case 3114:
case 1053:
case 3873:
case 2849:
case 3034:
case 1641:
case 3816:
case 3212:
case 3911:
case 1805:
case 2309:
case 2096:
case 568:
case 439:
case 933:
case 2677:
case 3327:
case 3702:
case 335:
case 789:
case 889:
case 131:
case 1719:
case 3778:
case 2893:
case 3133:
case 3013:
case 1951:
case 119:
case 2245:
case 3624:
case 3076:
case 1832:
case 2374:
case 712:
case 2123:
case 341:
case 3771:
case 1237:
case 1857:
case 3077:
case 3696:
case 3920:
case 2412:
case 182:
case 3167:
case 2725:
case 2566:
case 4022:
case 2533:
case 3381:
case 3817:
case 853:
case 3685:
case 1140:
case 956:
case 1589:
case 1488:
case 2791:
case 2676:
case 2097:
case 761:
case 1949:
case 3619:
case 1678:
case 2646:
case 948:
case 3539:
case 1724:
case 2350:
case 1469:
case 529:
case 1403:
case 56:
case 964:
case 3741:
case 653:
case 393:
case 1993:
case 4011:
case 1659:
case 661:
case 3228:
case 3129:
case 2851:
case 2959:
case 2902:
case 247:
case 466:
case 457:
case 769:
case 650:
case 3472:
case 498:
case 3574:
case 3181:
case 1414:
case 1800:
case 2877:
case 3509:
case 3367:
case 445:
case 7:
case 3408:
case 3552:
case 3536:
case 1433:
case 2240:
case 1466:
case 2323:
case 3730:
case 1301:
case 3673:
case 2588:
case 1022:
case 2080:
case 2935:
case 1946:
case 2527:
case 4091:
case 1913:
case 3051:
case 3757:
case 1586:
case 1780:
case 2468:
case 2503:
case 2307:
case 62:
case 2569:
case 850:
case 3442:
case 4025:
case 3544:
case 570:
case 2658:
case 3953:
case 268:
case 1934:
case 632:
case 244:
case 1717:
case 3079:
case 3103:
case 1859:
case 1065:
case 2043:
case 1342:
case 1138:
case 1018:
case 1510:
case 804:
case 3169:
case 1206:
case 1802:
case 1630:
case 1773:
case 1764:
case 3732:
case 1977:
case 1528:
case 2082:
case 2490:
case 58:
case 2099:
case 308:
case 2144:
case 3819:
case 3004:
case 607:
case 400:
case 3550:
case 273:
case 2846:
case 1835:
case 2941:
case 2174:
case 2813:
case 3925:
case 604:
case 139:
case 3366:
case 2720:
case 3333:
case 881:
case 2064:
case 2971:
case 628:
case 327:
case 3617:
case 111:
case 3093:
case 3885:
case 3289:
case 3896:
case 3960:
case 186:
case 2765:
case 901:
case 2834:
case 3049:
case 716:
case 3314:
case 2136:
case 26:
case 431:
case 2152:
case 1145:
case 3680:
case 2163:
case 1371:
case 2954:
case 2151:
case 3669:
case 3992:
case 1518:
case 3291:
case 3989:
case 2543:
case 3478:
case 645:
case 1130:
case 854:
case 1010:
case 3402:
case 1247:
case 3558:
case 397:
case 3504:
case 698:
case 358:
case 574:
case 97:
case 3050:
case 3459:
case 2498:
case 1520:
case 1781:
case 2271:
case 240:
case 2972:
case 2599:
case 666:
case 2582:
case 1028:
case 153:
case 432:
case 2026:
case 1496:
case 2241:
case 394:
case 3731:
case 902:
case 577:
case 2983:
case 1157:
case 2573:
case 3549:
case 2516:
case 3448:
case 963:
case 898:
case 3694:
case 3627:
case 112:
case 857:
case 798:
case 866:
case 2609:
case 1485:
case 766:
case 782:
case 1939:
case 2823:
case 3180:
case 1906:
case 1801:
case 21:
case 2652:
case 2636:
case 3915:
case 3262:
case 831:
case 3253:
case 3833:
case 2795:
case 416:
case 1156:
case 1132:
case 1012:
case 3385:
case 937:
case 2637:
case 719:
case 2193:
case 226:
case 3681:
case 205:
case 1497:
case 978:
case 2027:
case 2094:
case 3738:
case 2580:
case 3396:
case 1703:
case 2149:
case 3814:
case 481:
case 3052:
case 3116:
case 2003:
case 2278:
case 1302:
case 2235:
case 2855:
case 1788:
case 522:
case 3745:
case 1086:
case 2940:
case 4068:
case 619:
case 3551:
case 2712:
case 53:
case 1095:
case 3471:
case 1883:
case 320:
case 3182:
case 3199:
case 1511:
case 3298:
case 980:
case 218:
case 2346:
case 2158:
case 404:
case 371:
case 3319:
case 2901:
case 1631:
case 1305:
case 2014:
case 3987:
case 2931:
case 2863:
case 2256:
case 2836:
case 385:
case 323:
case 3742:
case 983:
case 925:
case 1950:
case 540:
case 1293:
case 3667:
case 1480:
case 1092:
case 2715:
case 906:
case 599:
case 1148:
case 436:
case 342:
case 2113:
case 703:
case 3783:
case 1560:
case 3218:
case 1591:
case 1178:
case 3430:
case 3265:
case 3039:
case 1279:
case 2844:
case 3006:
case 1135:
case 2146:
case 1015:
case 238:
case 2792:
case 686:
case 3399:
case 3382:
case 379:
case 4021:
case 3754:
case 51:
case 475:
case 639:
case 3220:
case 3772:
case 1838:
case 1102:
case 3869:
case 3343:
case 1909:
case 505:
case 2606:
case 2945:
case 1251:
case 1963:
case 2519:
case 1443:
case 2230:
case 2850:
case 2465:
case 3546:
case 960:
case 2418:
case 4087:
case 1974:
case 1090:
case 1061:
case 1584:
case 2351:
case 3211:
case 2029:
case 1171:
case 1598:
case 23:
case 461:
case 3380:
case 1672:
case 243:
case 3023:
case 1729:
case 3995:
case 3456:
case 3432:
case 959:
case 518:
case 453:
case 2067:
case 1357:
case 2257:
case 3405:
case 222:
case 3986:
case 3317:
case 3826:
case 3633:
case 3921:
case 3770:
case 1608:
case 2585:
case 412:
case 3124:
case 2975:
case 169:
case 3197:
case 2476:
case 1688:
case 1448:
case 2505:
case 1867:
case 947:
case 3341:
case 2122:
case 3939:
case 3485:
case 3801:
case 1180:
case 3906:
case 3645:
case 1968:
case 1324:
case 353:
case 146:
case 3496:
case 3277:
case 1037:
case 3300:
case 4023:
case 3840:
case 197:
case 158:
case 1504:
case 2391:
case 3726:
case 641:
case 2360:
case 1050:
case 3781:
case 4007:
case 3520:
case 2031:
case 1603:
case 533:
case 2446:
case 1989:
case 1992:
case 1435:
case 996:
case 1478:
case 2686:
case 3010:
case 3130:
case 3883:
case 2120:
case 3095:
case 1199:
case 2774:
case 4055:
case 567:
case 3335:
case 1319:
case 2628:
case 3923:
case 635:
case 3378:
case 2447:
case 1143:
case 973:
case 3302:
case 2118:
case 2038:
case 375:
case 3842:
case 4039:
case 1745:
case 2398:
case 3086:
case 230:
case 1551:
case 2384:
case 4006:
case 3769:
case 442:
case 3522:
case 336:
case 3497:
case 3424:
case 595:
case 1173:
case 3213:
case 735:
case 2362:
case 1063:
case 1036:
case 3105:
case 564:
case 3234:
case 3854:
case 1866:
case 1262:
case 1990:
case 485:
case 3808:
case 96:
case 3012:
case 548:
case 389:
case 2929:
case 3348:
case 1385:
case 2892:
case 1441:
case 1681:
case 2744:
case 304:
case 210:
case 1220:
case 992:
case 3525:
case 3714:
case 2571:
case 2886:
case 3258:
case 328:
case 1803:
case 3204:
case 2821:
case 1869:
case 1055:
case 2318:
case 2365:
case 1343:
case 3591:
case 615:
case 1218:
case 1039:
case 3279:
case 1430:
case 1119:
case 1265:
case 724:
case 3135:
case 2083:
case 1382:
case 2320:
case 708:
case 3670:
case 381:
case 233:
case 2739:
case 921:
case 4036:
case 1910:
case 1185:
case 3356:
case 3148:
case 970:
case 2273:
case 727:
case 2812:
case 209:
case 2216:
case 1577:
case 2153:
case 2072:
case 3601:
case 3845:
case 3417:
case 307:
case 1196:
case 1888:
case 1742:
case 3293:
case 1827:
case 3950:
case 1894:
case 672:
case 2692:
case 3416:
case 2689:
case 2040:
case 3100:
case 1576:
case 584:
case 1921:
case 1666:
case 1222:
case 1826:
case 1770:
case 2280:
case 790:
case 369:
case 1124:
case 2493:
case 3944:
case 3:
case 4037:
case 849:
case 256:
case 749:
case 1023:
case 3141:
case 2001:
case 3553:
case 3562:
case 2217:
case 3464:
case 70:
case 1456:
case 1432:
case 1701:
case 2559:
case 1007:
case 872:
case 2404:
case 248:
case 772:
case 2502:
case 3499:
case 458:
case 3974:
case 501:
case 497:
case 690:
case 350:
case 3584:
case 3171:
case 1211:
case 2311:
case 2668:
case 2828:
case 3251:
case 3831:
case 3963:
case 2615:
case 3952:
case 3683:
case 2578:
case 2994:
case 2070:
case 2927:
case 2535:
case 1546:
case 60:
case 225:
case 2192:
case 2288:
case 2746:
case 4049:
case 3600:
case 1778:
case 2294:
case 2048:
case 57:
case 2312:
case 3154:
case 1013:
case 974:
case 1133:
case 1864:
case 3252:
case 3236:
case 3832:
case 319:
case 3951:
case 3263:
case 75:
case 3345:
case 620:
case 85:
case 3481:
case 1114:
case 3805:
case 3641:
case 4093:
case 1327:
case 214:
case 1431:
case 551:
case 2734:
case 1369:
case 1507:
case 176:
case 3244:
case 563:
case 2865:
case 2625:
case 3338:
case 2002:
case 1303:
case 3785:
case 2203:
case 1221:
case 39:
case 65:
case 2115:
case 2035:
case 2980:
case 720:
case 2776:
case 2395:
case 1286:
case 1882:
case 1748:
case 2310:
case 1741:
case 646:
case 260:
case 193:
case 3250:
case 3993:
case 2444:
case 2698:
case 1555:
case 2542:
case 2161:
case 3025:
case 3659:
case 1287:
case 694:
case 1228:
case 1129:
case 3949:
case 2583:
case 897:
case 2916:
case 797:
case 858:
case 3797:
case 1475:
case 3170:
case 3403:
case 3515:
case 1445:
case 2508:
case 2452:
case 2409:
case 3140:
case 746:
case 40:
case 3494:
case 580:
case 3427:
case 0:
case 1918:
case 3589:
case 3648:
case 794:
case 345:
case 2662:
case 2226:
case 658:
case 357:
case 2747:
case 865:
case 141:
case 765:
case 3101:
case 1771:
case 922:
case 1920:
case 3857:
case 2281:
case 382:
case 1442:
case 3207:
case 2860:
case 1544:
case 3595:
case 4047:
case 3934:
case 1290:
case 517:
case 1953:
case 3011:
case 3131:
case 506:
case 172:
case 2618:
case 1643:
case 3871:
case 1483:
case 3780:
case 27:
case 3521:
case 2575:
case 2439:
case 2985:
case 149:
case 2751:
case 1367:
case 1509:
case 1454:
case 202:
case 3301:
case 3022:
case 1673:
case 91:
case 251:
case 1126:
case 514:
case 1824:
case 1664:
case 3223:
case 1897:
case 1984:
case 263:
case 1472:
case 1574:
case 3340:
case 2267:
case 3414:
case 4013:
case 1188:
case 1896:
case 115:
case 1194:
case 362:
case 1127:
case 386:
case 4076:
case 2853:
case 1440:
case 2862:
case 2266:
case 1314:
case 785:
case 2214:
case 560:
case 3782:
case 339:
case 3848:
case 1537:
case 1333:
case 1366:
case 2112:
case 2032:
case 2056:
case 2423:
case 311:
case 1617:
case 2758:
case 1885:
case 742:
case 1093:
case 2392:
case 842:
case 905:
case 2389:
case 3764:
case 1732:
case 1756:
case 476:
case 3977:
case 124:
case 2195:
case 3429:
case 3528:
case 2531:
case 1819:
case 1004:
case 2368:
case 108:
case 3878:
case 1550:
case 779:
case 3255:
case 1470:
case 2121:
case 3239:
case 3138:
case 3510:
case 3206:
case 3175:
case 2924:
case 1705:
case 3716:
case 2884:
case 2186:
case 4046:
case 3773:
case 1267:
case 4041:
case 2998:
case 2574:
case 3137:
case 2664:
case 3201:
case 2897:
case 2126:
case 664:
case 3489:
case 767:
case 3649:
case 1919:
case 355:
case 3978:
case 2730:
case 2454:
case 3240:
case 2552:
case 2563:
case 1545:
case 2367:
case 2509:
case 1057:
case 856:
case 3877:
case 249:
case 1985:
case 1030:
case 1575:
case 864:
case 764:
case 3679:
case 2643:
case 1665:
case 848:
case 3948:
case 1618:
case 895:
case 795:
case 344:
case 1229:
case 368:
case 3604:
case 460:
case 3658:
case 3150:
case 4071:
case 2544:
case 1891:
case 2442:
case 1455:
case 1860:
case 609:
case 134:
case 1186:
case 3283:
case 4078:
case 3651:
case 710:
case 2215:
case 3355:
case 3043:
case 2470:
case 2103:
case 1407:
case 1611:
case 3242:
case 3846:
case 3339:
case 975:
case 3144:
case 4002:
case 3461:
case 1758:
case 2885:
case 1423:
case 2401:
case 3876:
case 3272:
case 74:
case 1056:
case 406:
case 3581:
case 2333:
case 84:
case 610:
case 417:
case 733:
case 593:
case 1214:
case 3174:
case 833:
case 2680:
case 3163:
case 3016:
case 329:
case 36:
case 3136:
case 2314:
case 3208:
case 3109:
case 1233:
case 2049:
case 1266:
case 1862:
case 3834:
case 3254:
case 1779:
case 3765:
case 2194:
case 2127:
case 2896:
case 4048:
case 2960:
case 2991:
case 215:
case 2289:
case 2286:
case 2882:
case 392:
case 50:
case 1395:
case 904:
case 1776:
case 1820:
case 1660:
case 928:
case 1168:
case 3344:
case 2046:
case 1115:
case 1269:
case 3106:
case 1035:
case 549:
case 3139:
case 3858:
case 687:
case 2303:
case 784:
case 1002:
case 1865:
case 2369:
case 1818:
case 276:
case 730:
case 3753:
case 3529:
case 3762:
case 1734:
case 2431:
case 106:
case 981:
case 2702:
case 752:
case 2394:
case 3677:
case 321:
case 3096:
case 370:
case 3567:
case 3784:
case 2816:
case 2034:
case 3336:
case 3352:
case 1540:
case 713:
case 2076:
case 2697:
case 3245:
case 701:
case 2166:
case 2013:
case 1048:
case 684:
case 3893:
case 1294:
case 3085:
case 572:
case 1746:
case 1281:
case 2167:
case 2696:
case 2077:
case 451:
case 2771:
case 241:
case 2880:
case 1041:
case 3123:
case 1747:
case 969:
case 92:
case 524:
case 3634:
case 1226:
case 1822:
case 3097:
case 9:
case 3791:
case 402:
case 4057:
case 2965:
case 1943:
case 3337:
case 1409:
case 2685:
case 2445:
case 2817:
case 1436:
case 1452:
case 3533:
case 2381:
case 3566:
case 3350:
case 2539:
case 950:
case 1916:
case 3646:
case 1811:
case 1387:
case 1583:
case 2700:
case 47:
case 1328:
case 1071:
case 3231:
case 3851:
case 3932:
case 3495:
case 1777:
case 2228:
case 527:
case 1190:
case 2555:
case 3107:
case 1684:
case 293:
case 2667:
case 2827:
case 2894:
case 1541:
case 2742:
case 285:
case 931:
case 3349:
case 3852:
case 3232:
case 3623:
case 3863:
case 2987:
case 837:
case 1153:
case 3014:
case 401:
case 413:
case 634:
case 3113:
case 1273:
case 3033:
case 2364:
case 778:
case 487:
case 2910:
case 3422:
case 2185:
case 133:
case 3597:
case 1706:
case 3393:
case 3715:
case 14:
case 4075:
case 1320:
case 900:
case 2754:
case 2382:
case 1895:
case 4038:
case 1451:
case 338:
case 3304:
case 3146:
case 3844:
case 2265:
case 565:
case 2430:
case 377:
case 880:
case 2343:
case 2869:
case 1042:
case 780:
case 2055:
case 2803:
case 834:
case 1690:
case 1661:
case 99:
case 1282:
case 1299:
case 2220:
case 110:
case 546:
case 1535:
case 3418:
case 3465:
case 3230:
case 1479:
case 1927:
case 195:
case 1191:
case 3519:
case 1988:
case 3606:
case 1615:
case 1828:
case 2740:
case 1311:
case 2912:
case 87:
case 3029:
case 3351:
case 1458:
case 1404:
case 148:
case 1810:
case 391:
case 2007:
case 651:
case 3147:
case 2701:
case 1559:
case 1001:
case 343:
case 2380:
case 3596:
case 802:
case 945:
case 2614:
case 520:
case 2197:
case 1280:
case 957:
case 1969:
case 2124:
case 763:
case 863:
case 2770:
case 2633:
case 1903:
case 2666:
case 2317:
case 2881:
case 1040:
case 322:
case 1692:
case 3837:
case 3257:
case 1548:
case 1689:
case 982:
case 966:
case 1686:
case 2478:
case 2579:
case 3543:
case 2291:
case 2989:
case 3807:
case 2260:
case 4070:
case 760:
case 3151:
case 1966:
case 1890:
case 2603:
case 1933:
case 1861:
case 495:
case 3972:
case 1111:
case 1031:
case 340:
case 3271:
case 3644:
case 2225:
case 464:
case 1391:
case 258:
case 2504:
case 297:
case 2402:
case 3462:
case 1434:
case 3453:
case 456:
case 1556:
case 1532:
case 3787:
case 4001:
case 2731:
case 2037:
case 294:
case 2117:
case 3728:
case 3942:
case 1612:
case 3674:
case 3026:
case 467:
case 1224:
case 2915:
case 3636:
case 579:
case 1413:
case 2627:
case 2694:
case 3377:
case 1505:
case 2448:
case 2549:
case 3573:
case 1476:
case 1744:
case 4072:
case 2681:
case 326:
case 2441:
case 1892:
case 1889:
case 783:
case 2164:
case 3795:
case 883:
case 3517:
case 3376:
case 2961:
case 2866:
case 2262:
case 433:
case 2063:
case 1362:
case 44:
case 806:
case 1557:
case 2173:
case 2009:
case 2396:
case 1285:
case 3094:
case 187:
case 305:
case 3088:
case 2551:
case 1384:
case 1709:
case 3940:
case 1752:
case 1763:
case 2745:
case 3235:
case 3855:
case 3491:
case 714:
case 1038:
case 2143:
case 3003:
case 3806:
case 3202:
case 1447:
case 3901:
case 2319:
case 1868:
case 1628:
case 3346:
case 617:
case 3104:
case 3259:
case 1687:
case 2298:
case 3650:
case 2199:
case 2182:
case 1120:
case 220:
case 2284:
case 177:
case 3365:
case 2102:
case 3661:
case 2204:
case 228:
case 2159:
case 561:
case 3690:
case 2838:
case 2258:
case 3299:
case 3282:
case 3198:
case 2714:
case 553:
case 1607:
case 204:
case 1411:
case 2670:
case 2766:
case 629:
case 3320:
case 873:
case 3083:
case 3451:
case 1789:
case 2135:
case 976:
case 1358:
case 2015:
case 2560:
case 2591:
case 4027:
case 4094:
case 309:
case 3812:
case 1205:
case 1176:
case 1033:
case 1874:
case 2640:
case 1422:
case 3739:
case 3706:
case 1393:
case 2480:
case 34:
case 673:
case 2950:
case 2293:
case 3541:
case 86:
case 76:
case 426:
case 174:
case 1349:
case 2845:
case 2601:
case 1256:
case 3072:
case 3264:
case 1809:
case 1014:
case 3969:
case 1975:
case 269:
case 3280:
case 575:
case 41:
case 2100:
case 1837:
case 3689:
case 3692:
case 1761:
case 1790:
case 1067:
case 855:
case 2464:
case 2562:
case 668:
case 2553:
case 4026:
case 2729:
case 3001:
case 2672:
case 696:
case 4081:
case 1596:
case 2944:
case 3493:
case 1655:
case 2171:
case 2598:
case 2584:
case 1351:
case 2767:
case 2090:
case 2974:
case 3125:
case 2499:
case 3458:
case 440:
case 3502:
case 1147:
case 364:
case 191:
case 3559:
case 3723:
case 2330:
case 499:
case 993:
case 868:
case 1418:
case 3479:
case 3927:
case 3994:
case 2443:
case 3191:
case 3578:
case 395:
case 744:
case 2683:
case 3988:
case 2936:
case 2831:
case 1945:
case 2251:
case 3828:
case 896:
case 536:
case 3887:
case 2909:
case 422:
case 3297:
case 2645:
case 1663:
case 11:
case 1636:
case 2939:
case 3122:
case 2341:
case 3413:
case 1516:
case 1377:
case 3505:
case 3476:
case 78:
case 2157:
case 2840:
case 1462:
case 3434:
case 443:
case 949:
case 3556:
case 1564:
case 43:
case 261:
case 2277:
case 4067:
case 2955:
case 2496:
case 1942:
case 90:
case 3750:
case 1599:
case 2028:
case 140:
case 1271:
case 972:
case 516:
case 1484:
case 507:
case 3914:
case 1644:
case 2781:
case 2870:
case 3391:
case 3695:
case 2419:
case 2130:
case 3686:
case 1347:
case 1543:
case 1807:
case 3933:
case 3861:
case 3621:
case 3966:
case 3890:
case 1954:
case 2638:
case 2378:
case 1901:
case 1806:
case 1202:
case 2923:
case 3628:
case 1346:
case 892:
case 621:
case 532:
case 118:
case 3687:
case 792:
case 1104:
case 670:
case 788:
case 3967:
case 1650:
case 2095:
case 2883:
case 3120:
case 1712:
case 3709:
case 3384:
case 924:
case 330:
case 1940:
case 384:
case 3752:
case 1491:
case 1069:
case 1235:
case 1855:
case 3075:
case 1460:
case 2359:
case 908:
case 275:
case 3530:
case 1278:
case 2794:
case 3038:
case 3118:
case 2727:
case 1179:
case 3045:
case 1334:
case 3362:
case 352:
case 821:
case 1248:
case 1786:
case 2213:
case 1721:
case 1970:
case 2424:
case 387:
case 870:
case 4033:
case 770:
case 2522:
case 1088:
case 2769:
case 4066:
case 915:
case 474:
case 126:
case 1193:
case 313:
case 3296:
case 4014:
case 550:
case 2348:
case 1795:
case 1376:
case 1517:
case 2234:
case 3128:
case 2717:
case 2131:
case 3229:
case 2934:
case 1658:
case 1150:
case 196:
case 3455:
case 2207:
case 3620:
case 3860:
case 3891:
case 63:
case 3030:
case 1270:
case 3110:
case 1307:
case 3575:
case 1722:
case 997:
case 1569:
case 2521:
case 1503:
case 3406:
case 2586:
case 531:
case 3390:
case 622:
case 791:
case 2913:
case 1948:
case 1527:
case 1080:
case 2841:
case 2605:
case 1588:
case 1323:
case 2433:
case 1240:
case 2466:
case 302:
case 83:
case 4024:
case 843:
case 3751:
case 743:
case 1877:
case 2414:
case 2512:
case 1711:
case 2340:
case 1017:
case 1137:
case 2223:
case 1201:
case 2656:
case 2632:
case 500:
case 722:
case 351:
case 16:
case 1136:
case 3005:
case 1016:
case 129:
case 4085:
case 2372:
case 1208:
case 1834:
case 1073:
case 1765:
case 2743:
case 337:
case 262:
case 1718:
case 638:
case 2657:
case 874:
case 3389:
case 3704:
case 378:
case 677:
case 470:
case 95:
case 1272:
case 1064:
case 3056:
case 3112:
case 1971:
case 2308:
case 1581:
case 421:
case 1174:
case 2467:
case 1242:
case 2255:
case 566:
case 3407:
case 1339:
case 173:
case 2878:
case 1306:
case 1144:
case 2528:
case 1082:
case 1099:
case 1461:
case 838:
case 2429:
case 2020:
case 598:
case 557:
case 3898:
case 3186:
case 1900:
case 545:
case 3884:
case 1283:
case 877:
case 4019:
case 2716:
case 777:
case 488:
case 3924:
case 2206:
case 1651:
case 2175:
case 492:
case 2342:
case 1355:
case 2018:
case 971:
case 3121:
case 2065:
case 1374:
case 219:
case 2236:
case 2252:
case 2209:
case 726:
case 2154:
case 3312:
case 3048:
case 1085:
case 1930:
case 3227:
case 4016:
case 2719:
case 923:
case 3746:
case 3288:
case 3192:
case 3189:
case 325:
case 2426:
case 306:
case 4064:
case 618:
case 1784:
case 170:
case 942:
case 805:
case 3437:
case 705:
case 2274:
case 2345:
case 1363:
case 1336:
case 3321:
case 3002:
case 3625:
case 3450:
case 3059:
case 3818:
case 473:
case 1487:
case 1762:
case 3734:
case 1529:
case 2561:
case 200:
case 3917:
case 1647:
case 3395:
case 4043:
case 3820:
case 3660:
case 3691:
case 1957:
case 3570:
case 1106:
case 3980:
case 3035:
case 29:
case 1804:
case 1019:
case 1139:
case 1858:
case 3071:
case 2602:
case 3777:
case 496:
case 254:
case 3190:
case 511:
case 503:
case 3698:
case 2993:
case 2830:
case 3684:
case 799:
case 1107:
case 360:
case 3310:
case 899:
case 61:
case 2568:
case 2403:
case 2091:
case 740:
case 2060:
case 2724:
case 840:
case 1350:
case 3811:
case 3916:
case 2635:
case 562:
case 3387:
case 3583:
case 2949:
case 3973:
case 1024:
case 1676:
case 1791:
case 2494:
case 3943:
case 699:
case 359:
case 3000:
case 3452:
case 3463:
case 455:
case 1566:
case 640:
case 3982:
case 282:
case 266:
case 3999:
case 3281:
case 2237:
case 71:
case 81:
case 1514:
case 18:
case 1123:
case 3747:
case 257:
case 1634:
case 3822:
case 2904:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1771423202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,];
var gg_b = "1771423202/";

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
