// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 2455:
case 3514:
case 966:
case 2062:
case 2880:
case 2615:
case 3713:
case 3027:
case 1165:
case 2986:
case 4031:
case 1406:
case 982:
case 965:
case 1700:
case 96:
case 2217:
case 3276:
case 1460:
case 3130:
case 406:
case 2860:
case 3241:
case 2188:
case 582:
case 4035:
case 814:
case 550:
case 2414:
case 315:
case 282:
case 813:
case 524:
case 1493:
case 2594:
case 2310:
case 1548:
case 1452:
case 287:
case 2253:
case 1116:
case 1658:
case 3189:
case 592:
case 2511:
case 2252:
case 3180:
case 886:
case 3733:
case 599:
case 397:
case 3720:
case 2054:
case 3735:
case 2322:
case 1439:
case 3660:
case 2695:
case 3296:
case 2233:
case 1979:
case 1655:
case 1583:
case 1237:
case 3754:
case 2848:
case 2209:
case 3894:
case 2571:
case 1156:
case 2720:
case 3933:
case 1118:
case 33:
case 1311:
case 3692:
case 1003:
case 3413:
case 1632:
case 2002:
case 4047:
case 2537:
case 3002:
case 2672:
case 2526:
case 728:
case 3145:
case 2631:
case 80:
case 2600:
case 3247:
case 1967:
case 4087:
case 2721:
case 514:
case 1050:
case 4045:
case 760:
case 136:
case 767:
case 3780:
case 1196:
case 2875:
case 3925:
case 614:
case 3121:
case 3177:
case 799:
case 2365:
case 1749:
case 3759:
case 552:
case 3135:
case 1902:
case 4051:
case 1163:
case 847:
case 2646:
case 2914:
case 890:
case 2516:
case 1565:
case 160:
case 3698:
case 1962:
case 1321:
case 203:
case 2935:
case 642:
case 4092:
case 2977:
case 2627:
case 1755:
case 2175:
case 2057:
case 1887:
case 1114:
case 488:
case 2162:
case 2956:
case 2650:
case 3511:
case 4029:
case 685:
case 37:
case 2658:
case 3209:
case 2745:
case 1428:
case 2528:
case 2508:
case 1420:
case 2728:
case 667:
case 2350:
case 2679:
case 1833:
case 3062:
case 1987:
case 625:
case 3453:
case 1856:
case 3089:
case 2915:
case 106:
case 22:
case 3842:
case 3133:
case 1238:
case 3173:
case 3715:
case 1704:
case 3321:
case 3392:
case 415:
case 1251:
case 3635:
case 3287:
case 2670:
case 1932:
case 3700:
case 2421:
case 1146:
case 909:
case 1537:
case 2160:
case 3879:
case 3117:
case 1272:
case 2033:
case 2752:
case 2061:
case 2044:
case 2407:
case 828:
case 2953:
case 1723:
case 998:
case 2723:
case 687:
case 180:
case 1360:
case 2878:
case 2390:
case 59:
case 645:
case 1665:
case 2556:
case 688:
case 647:
case 1448:
case 4052:
case 1926:
case 3283:
case 839:
case 239:
case 702:
case 434:
case 566:
case 1052:
case 1041:
case 3336:
case 426:
case 190:
case 2850:
case 1274:
case 1961:
case 3676:
case 1177:
case 1169:
case 2438:
case 1600:
case 2339:
case 1337:
case 3674:
case 980:
case 1682:
case 3763:
case 521:
case 2833:
case 2642:
case 926:
case 2314:
case 2206:
case 3382:
case 3170:
case 637:
case 1935:
case 2015:
case 2761:
case 88:
case 1122:
case 2923:
case 3559:
case 355:
case 1982:
case 2459:
case 3745:
case 829:
case 2562:
case 2072:
case 1025:
case 2576:
case 3076:
case 915:
case 1652:
case 2486:
case 1026:
case 3425:
case 3752:
case 57:
case 3738:
case 3099:
case 1201:
case 1630:
case 3199:
case 3297:
case 212:
case 92:
case 2492:
case 2419:
case 1862:
case 3902:
case 3916:
case 1598:
case 876:
case 7:
case 2465:
case 3042:
case 1624:
case 2213:
case 1220:
case 3108:
case 1558:
case 2123:
case 2235:
case 3120:
case 4027:
case 3349:
case 367:
case 1694:
case 3944:
case 493:
case 3500:
case 2189:
case 2798:
case 1943:
case 1176:
case 2803:
case 2934:
case 3311:
case 2918:
case 411:
case 1349:
case 1752:
case 3081:
case 1182:
case 2342:
case 459:
case 1408:
case 2369:
case 1985:
case 171:
case 2628:
case 2043:
case 900:
case 3090:
case 1276:
case 90:
case 3149:
case 1094:
case 3962:
case 1184:
case 3049:
case 1174:
case 2912:
case 549:
case 721:
case 2762:
case 2580:
case 780:
case 3111:
case 1924:
case 2678:
case 2479:
case 3034:
case 1361:
case 1789:
case 1382:
case 1878:
case 1934:
case 690:
case 123:
case 2565:
case 307:
case 2849:
case 231:
case 3518:
case 720:
case 2187:
case 466:
case 3951:
case 2126:
case 1062:
case 1930:
case 1089:
case 3649:
case 1634:
case 1901:
case 2277:
case 1899:
case 2696:
case 725:
case 21:
case 789:
case 930:
case 2274:
case 3805:
case 1036:
case 2288:
case 1765:
case 107:
case 2634:
case 922:
case 2777:
case 1228:
case 899:
case 3047:
case 1879:
case 2534:
case 2315:
case 4091:
case 641:
case 3694:
case 2004:
case 1641:
case 2577:
case 3150:
case 3622:
case 3739:
case 158:
case 1797:
case 3310:
case 3421:
case 1947:
case 2108:
case 1735:
case 3244:
case 3875:
case 3060:
case 169:
case 1209:
case 4038:
case 2748:
case 2759:
case 3970:
case 3989:
case 1248:
case 1541:
case 3571:
case 462:
case 4069:
case 2243:
case 1378:
case 1606:
case 2135:
case 208:
case 2867:
case 652:
case 3229:
case 666:
case 3985:
case 1467:
case 1181:
case 196:
case 2643:
case 296:
case 2351:
case 4015:
case 3814:
case 1815:
case 1551:
case 1234:
case 85:
case 1335:
case 1880:
case 1638:
case 204:
case 345:
case 2699:
case 1207:
case 3103:
case 2806:
case 1507:
case 32:
case 791:
case 3252:
case 2285:
case 1515:
case 2804:
case 773:
case 2993:
case 143:
case 3245:
case 1167:
case 1852:
case 3204:
case 1569:
case 1170:
case 656:
case 3884:
case 2398:
case 3510:
case 1310:
case 1472:
case 16:
case 527:
case 2320:
case 2916:
case 531:
case 2753:
case 3303:
case 731:
case 140:
case 3901:
case 1370:
case 903:
case 3396:
case 2118:
case 300:
case 1778:
case 1214:
case 1644:
case 2545:
case 3131:
case 4009:
case 1067:
case 3261:
case 1603:
case 3539:
case 3734:
case 3892:
case 1850:
case 1045:
case 1375:
case 1676:
case 3409:
case 2198:
case 935:
case 3250:
case 2795:
case 2897:
case 30:
case 1345:
case 3410:
case 200:
case 229:
case 2872:
case 392:
case 3690:
case 2998:
case 3887:
case 1032:
case 2259:
case 1109:
case 1937:
case 3054:
case 471:
case 217:
case 2997:
case 291:
case 1001:
case 675:
case 858:
case 2541:
case 4093:
case 2445:
case 3106:
case 193:
case 864:
case 145:
case 3025:
case 1367:
case 874:
case 425:
case 1550:
case 3677:
case 259:
case 1381:
case 124:
case 3422:
case 2930:
case 1587:
case 1692:
case 1772:
case 3536:
case 3420:
case 3258:
case 735:
case 3072:
case 2866:
case 3153:
case 3918:
case 1315:
case 809:
case 3830:
case 2183:
case 986:
case 3331:
case 2558:
case 155:
case 2975:
case 3932:
case 360:
case 362:
case 2854:
case 3176:
case 172:
case 1960:
case 3272:
case 3182:
case 1546:
case 3497:
case 113:
case 2981:
case 1014:
case 2246:
case 2032:
case 1016:
case 509:
case 1211:
case 2293:
case 4054:
case 2787:
case 1047:
case 508:
case 3939:
case 1445:
case 1649:
case 877:
case 1849:
case 873:
case 247:
case 1350:
case 54:
case 1992:
case 3221:
case 3201:
case 928:
case 3851:
case 175:
case 1857:
case 622:
case 815:
case 859:
case 1999:
case 1056:
case 2389:
case 1618:
case 3077:
case 352:
case 3435:
case 3481:
case 902:
case 2624:
case 794:
case 3709:
case 2512:
case 1040:
case 955:
case 332:
case 2172:
case 1143:
case 3038:
case 3599:
case 245:
case 1527:
case 3718:
case 1737:
case 1647:
case 3527:
case 1044:
case 3278:
case 3455:
case 718:
case 1726:
case 2157:
case 334:
case 2665:
case 363:
case 1075:
case 2327:
case 3030:
case 3662:
case 109:
case 3645:
case 385:
case 2154:
case 127:
case 661:
case 756:
case 1970:
case 2170:
case 3824:
case 602:
case 2952:
case 3860:
case 1906:
case 2734:
case 3990:
case 2599:
case 260:
case 2507:
case 2153:
case 1371:
case 220:
case 4043:
case 3506:
case 3479:
case 2228:
case 1171:
case 1544:
case 2081:
case 3596:
case 49:
case 3286:
case 3634:
case 1254:
case 3178:
case 3004:
case 2128:
case 2428:
case 2158:
case 3859:
case 207:
case 3227:
case 3724:
case 3312:
case 3999:
case 2039:
case 1837:
case 2071:
case 1477:
case 3347:
case 1250:
case 2219:
case 2273:
case 3873:
case 695:
case 381:
case 3447:
case 3704:
case 27:
case 2496:
case 2212:
case 4002:
case 3841:
case 1054:
case 1104:
case 1279:
case 2035:
case 851:
case 2751:
case 1944:
case 404:
case 1307:
case 2807:
case 741:
case 1784:
case 884:
case 1198:
case 1660:
case 2886:
case 804:
case 872:
case 1291:
case 3991:
case 4041:
case 1882:
case 3402:
case 3847:
case 445:
case 2822:
case 3828:
case 699:
case 3110:
case 3756:
case 4048:
case 3429:
case 118:
case 2861:
case 923:
case 342:
case 1168:
case 1292:
case 1255:
case 1332:
case 3368:
case 1115:
case 1559:
case 999:
case 2970:
case 187:
case 1531:
case 2892:
case 2478:
case 1776:
case 452:
case 2458:
case 1256:
case 2561:
case 3078:
case 820:
case 23:
case 568:
case 1948:
case 1635:
case 1609:
case 2530:
case 960:
case 2994:
case 441:
case 4034:
case 2299:
case 3175:
case 3987:
case 1733:
case 3354:
case 2142:
case 931:
case 2967:
case 3628:
case 1042:
case 178:
case 2563:
case 618:
case 1808:
case 3197:
case 1282:
case 2823:
case 2241:
case 573:
case 1142:
case 3948:
case 186:
case 2950:
case 1068:
case 3035:
case 2684:
case 3813:
case 1610:
case 3792:
case 2484:
case 802:
case 1433:
case 750:
case 396:
case 3998:
case 1103:
case 2191:
case 1762:
case 2757:
case 2295:
case 2654:
case 449:
case 2085:
case 1069:
case 2082:
case 141:
case 3271:
case 4039:
case 3616:
case 3728:
case 991:
case 1203:
case 3632:
case 4014:
case 4004:
case 2727:
case 2521:
case 1200:
case 2485:
case 3219:
case 3604:
case 2264:
case 3482:
case 1299:
case 3457:
case 2724:
case 116:
case 2941:
case 697:
case 1502:
case 3223:
case 2625:
case 2618:
case 3489:
case 226:
case 972:
case 3063:
case 2385:
case 2359:
case 2687:
case 346:
case 1083:
case 956:
case 2113:
case 461:
case 997:
case 3465:
case 832:
case 2:
case 1469:
case 3668:
case 2474:
case 3594:
case 3024:
case 3491:
case 1459:
case 3215:
case 2079:
case 892:
case 891:
case 3476:
case 3914:
case 1501:
case 2772:
case 299:
case 2311:
case 3139:
case 1628:
case 413:
case 3233:
case 3675:
case 3786:
case 852:
case 4068:
case 2790:
case 66:
case 2208:
case 444:
case 3513:
case 636:
case 1358:
case 805:
case 1562:
case 1112:
case 3665:
case 3681:
case 2851:
case 3723:
case 2173:
case 3767:
case 134:
case 457:
case 1607:
case 3398:
case 267:
case 520:
case 84:
case 2713:
case 3187:
case 2067:
case 4070:
case 1604:
case 1456:
case 1320:
case 295:
case 3001:
case 1053:
case 3639:
case 2096:
case 3222:
case 2218:
case 1284:
case 1221:
case 1108:
case 26:
case 1919:
case 3810:
case 2959:
case 407:
case 1222:
case 3208:
case 610:
case 2972:
case 845:
case 1744:
case 1650:
case 1306:
case 1409:
case 2660:
case 3560:
case 853:
case 3626:
case 600:
case 448:
case 2647:
case 1153:
case 3412:
case 2524:
case 2546:
case 125:
case 2764:
case 2470:
case 2280:
case 1455:
case 2361:
case 305:
case 306:
case 3437:
case 2334:
case 774:
case 3535:
case 228:
case 3903:
case 739:
case 223:
case 3053:
case 50:
case 1774:
case 25:
case 2231:
case 481:
case 3171:
case 1271:
case 458:
case 2966:
case 1620:
case 114:
case 1470:
case 93:
case 2333:
case 112:
case 496:
case 320:
case 2735:
case 1303:
case 1573:
case 2443:
case 2569:
case 1841:
case 3976:
case 1324:
case 423:
case 589:
case 418:
case 2838:
case 1811:
case 421:
case 1684:
case 1384:
case 3240:
case 205:
case 1659:
case 1761:
case 1494:
case 3788:
case 3057:
case 4032:
case 1802:
case 4028:
case 1701:
case 2260:
case 2491:
case 1340:
case 2159:
case 2760:
case 746:
case 1051:
case 2906:
case 1023:
case 3256:
case 1125:
case 388:
case 3019:
case 2099:
case 914:
case 3856:
case 2434:
case 1974:
case 786:
case 849:
case 3501:
case 359:
case 3619:
case 1552:
case 3216:
case 271:
case 1010:
case 1988:
case 3900:
case 2865:
case 2597:
case 1691:
case 456:
case 778:
case 2908:
case 371:
case 957:
case 1298:
case 1138:
case 4017:
case 2440:
case 1095:
case 2048:
case 0:
case 1029:
case 3059:
case 318:
case 701:
case 2417:
case 2548:
case 3179:
case 1510:
case 940:
case 3044:
case 1998:
case 1731:
case 3852:
case 3206:
case 1845:
case 1487:
case 633:
case 256:
case 2271:
case 1884:
case 1283:
case 3119:
case 2393:
case 68:
case 529:
case 3597:
case 949:
case 1671:
case 2022:
case 1149:
case 3167:
case 1416:
case 993:
case 1724:
case 3897:
case 1869:
case 591:
case 3207:
case 483:
case 2538:
case 2983:
case 3273:
case 3906:
case 3776:
case 3115:
case 1100:
case 2583:
case 1015:
case 2070:
case 4059:
case 1396:
case 224:
case 3590:
case 3414:
case 235:
case 3727:
case 1000:
case 3427:
case 1588:
case 1398:
case 3508:
case 2958:
case 766:
case 2606:
case 2176:
case 1861:
case 3290:
case 974:
case 2030:
case 2774:
case 3462:
case 131:
case 3996:
case 1909:
case 1708:
case 2567:
case 3844:
case 918:
case 1889:
case 1099:
case 1912:
case 1368:
case 2778:
case 4040:
case 3192:
case 2864:
case 1771:
case 712:
case 3334:
case 3360:
case 2780:
case 2992:
case 2741:
case 1136:
case 1908:
case 575:
case 176:
case 1800:
case 640:
case 3899:
case 1101:
case 3055:
case 1473:
case 1511:
case 3043:
case 2899:
case 3679:
case 2086:
case 2258:
case 3367:
case 357:
case 2633:
case 1480:
case 4053:
case 3846:
case 662:
case 2374:
case 379:
case 2171:
case 257:
case 338:
case 1703:
case 3351:
case 1240:
case 1295:
case 3265:
case 433:
case 1267:
case 3579:
case 3006:
case 3542:
case 3854:
case 2505:
case 3684:
case 2435:
case 1505:
case 3294:
case 110:
case 1346:
case 3838:
case 2898:
case 1157:
case 1087:
case 3361:
case 3471:
case 3721:
case 544:
case 952:
case 3973:
case 3371:
case 2619:
case 3000:
case 4089:
case 3702:
case 4071:
case 128:
case 1154:
case 28:
case 1668:
case 3959:
case 593:
case 3158:
case 1491:
case 3890:
case 992:
case 510:
case 2151:
case 495:
case 1245:
case 2919:
case 1008:
case 2722:
case 2405:
case 2475:
case 3419:
case 3568:
case 2539:
case 3397:
case 2662:
case 2325:
case 3284:
case 2250:
case 185:
case 1804:
case 3083:
case 2902:
case 2089:
case 548:
case 63:
case 3787:
case 783:
case 3466:
case 2506:
case 3259:
case 3880:
case 408:
case 1654:
case 2664:
case 2965:
case 898:
case 1578:
case 2884:
case 1028:
case 2942:
case 162:
case 2168:
case 683:
case 704:
case 479:
case 715:
case 1:
case 4006:
case 2768:
case 70:
case 3168:
case 139:
case 1523:
case 2009:
case 3806:
case 325:
case 3458:
case 2841:
case 605:
case 435:
case 2182:
case 246:
case 494:
case 1540:
case 1836:
case 17:
case 55:
case 387:
case 2771:
case 1572:
case 2100:
case 2500:
case 759:
case 2805:
case 3821:
case 2204:
case 2063:
case 990:
case 183:
case 1966:
case 46:
case 1710:
case 1393:
case 2147:
case 663:
case 2014:
case 1208:
case 808:
case 3526:
case 2137:
case 410:
case 503:
case 901:
case 1818:
case 2974:
case 489:
case 3937:
case 879:
case 398:
case 1329:
case 261:
case 781:
case 2946:
case 378:
case 3473:
case 2732:
case 1608:
case 1464:
case 534:
case 135:
case 1478:
case 3545:
case 1102:
case 3547:
case 1900:
case 3773:
case 1766:
case 227:
case 3555:
case 3142:
case 3281:
case 755:
case 719:
case 742:
case 3102:
case 3105:
case 3394:
case 377:
case 2889:
case 1768:
case 512:
case 3213:
case 121:
case 2360:
case 2146:
case 2638:
case 1746:
case 3366:
case 3979:
case 2275:
case 1145:
case 1790:
case 500:
case 2180:
case 2468:
case 2682:
case 3971:
case 2227:
case 1302:
case 1867:
case 4022:
case 1344:
case 1973:
case 4011:
case 749:
case 34:
case 871:
case 1230:
case 1594:
case 1678:
case 1281:
case 3910:
case 1076:
case 2051:
case 422:
case 3494:
case 1584:
case 2377:
case 2868:
case 3301:
case 4081:
case 1873:
case 1838:
case 20:
case 1293:
case 2693:
case 3198:
case 2588:
case 3762:
case 1380:
case 590:
case 3749:
case 3578:
case 147:
case 3601:
case 830:
case 3898:
case 3673:
case 1347:
case 1468:
case 2910:
case 331:
case 848:
case 703:
case 369:
case 672:
case 2697:
case 2666:
case 603:
case 1427:
case 3122:
case 518:
case 572:
case 126:
case 1323:
case 1753:
case 1217:
case 2371:
case 1512:
case 2494:
case 2810:
case 2161:
case 2040:
case 3980:
case 384:
case 133:
case 1536:
case 3249:
case 2955:
case 240:
case 3784:
case 2195:
case 234:
case 970:
case 1535:
case 1484:
case 1498:
case 2939:
case 3212:
case 3127:
case 293:
case 3373:
case 2155:
case 440:
case 313:
case 2236:
case 4073:
case 3436:
case 2387:
case 1928:
case 1195:
case 3917:
case 932:
case 1817:
case 2701:
case 2094:
case 3602:
case 2392:
case 2598:
case 2793:
case 3924:
case 3977:
case 3277:
case 2382:
case 798:
case 214:
case 3831:
case 3648:
case 2376:
case 2257:
case 403:
case 2639:
case 1529:
case 854:
case 2855:
case 763:
case 1657:
case 583:
case 3868:
case 3913:
case 1309:
case 2612:
case 480:
case 3652:
case 1453:
case 375:
case 499:
case 2547:
case 3521:
case 4063:
case 630:
case 2677:
case 2078:
case 2758:
case 3048:
case 1680:
case 3928:
case 3126:
case 3262:
case 1328:
case 105:
case 1140:
case 1322:
case 2712:
case 3159:
case 2553:
case 2397:
case 2117:
case 202:
case 2375:
case 3663:
case 3818:
case 3073:
case 2270:
case 668:
case 3318:
case 1997:
case 2337:
case 3747:
case 2269:
case 2341:
case 2412:
case 1975:
case 3356:
case 1689:
case 2963:
case 4001:
case 2862:
case 3162:
case 757:
case 2882:
case 1791:
case 3195:
case 2554:
case 3300:
case 3226:
case 215:
case 693:
case 1216:
case 1822:
case 1821:
case 2121:
case 2832:
case 1206:
case 2557:
case 482:
case 3605:
case 3253:
case 2202:
case 1132:
case 2743:
case 843:
case 2987:
case 1593:
case 3160:
case 4007:
case 3519:
case 31:
case 157:
case 563:
case 324:
case 3825:
case 691:
case 3289:
case 1972:
case 341:
case 2203:
case 3512:
case 1518:
case 1013:
case 748:
case 784:
case 3450:
case 3104:
case 2873:
case 2560:
case 948:
case 1730:
case 1185:
case 2783:
case 1446:
case 3920:
case 3196:
case 2410:
case 161:
case 1533:
case 1599:
case 1847:
case 1199:
case 2010:
case 532:
case 2354:
case 2451:
case 2717:
case 417:
case 3346:
case 2531:
case 3857:
case 1030:
case 3423:
case 3981:
case 238:
case 2305:
case 727:
case 1917:
case 2442:
case 2267:
case 189:
case 3952:
case 2613:
case 349:
case 1777:
case 698:
case 3862:
case 3861:
case 1270:
case 1586:
case 1497:
case 2237:
case 736:
case 2852:
case 944:
case 2944:
case 1993:
case 3282:
case 2453:
case 3335:
case 1331:
case 195:
case 670:
case 1233:
case 1348:
case 2292:
case 1662:
case 3785:
case 2742:
case 1685:
case 1124:
case 1079:
case 1773:
case 1297:
case 921:
case 744:
case 1232:
case 3317:
case 380:
case 3556:
case 427:
case 8:
case 3646:
case 1275:
case 1575:
case 339:
case 1134:
case 2943:
case 2403:
case 3403:
case 1918:
case 3058:
case 1981:
case 3070:
case 3563:
case 1986:
case 416:
case 3644:
case 1414:
case 111:
case 4061:
case 3144:
case 1922:
case 3777:
case 2936:
case 2655:
case 3766:
case 95:
case 3136:
case 1914:
case 1280:
case 694:
case 401:
case 740:
case 1162:
case 153:
case 3978:
case 2262:
case 290:
case 347:
case 1690:
case 213:
case 3686:
case 1534:
case 3032:
case 1623:
case 1860:
case 1570:
case 1683:
case 278:
case 883:
case 1080:
case 1859:
case 209:
case 283:
case 4074:
case 1353:
case 2926:
case 3655:
case 312:
case 2876:
case 104:
case 2207:
case 3016:
case 953:
case 1567:
case 896:
case 4066:
case 1318:
case 2630:
case 1686:
case 557:
case 897:
case 2779:
case 1027:
case 329:
case 578:
case 4008:
case 1260:
case 1278:
case 543:
case 361:
case 537:
case 564:
case 1807:
case 3468:
case 463:
case 262:
case 1418:
case 1977:
case 1313:
case 3417:
case 841:
case 1091:
case 3345:
case 3938:
case 2644:
case 2319:
case 218:
case 41:
case 2791:
case 2763:
case 3228:
case 2038:
case 2148:
case 2608:
case 2846:
case 3589:
case 1661:
case 1034:
case 1745:
case 2026:
case 1858:
case 3116:
case 3079:
case 3546:
case 2127:
case 3015:
case 522:
case 2423:
case 2519:
case 487:
case 2632:
case 2077:
case 3246:
case 1582:
case 596:
case 4083:
case 1716:
case 936:
case 1405:
case 2607:
case 498:
case 981:
case 486:
case 1339:
case 2119:
case 2016:
case 356:
case 3543:
case 3757:
case 869:
case 2497:
case 3428:
case 3670:
case 1504:
case 2415:
case 3931:
case 1611:
case 653:
case 3658:
case 1842:
case 4018:
case 2021:
case 1258:
case 400:
case 3285:
case 3606:
case 1903:
case 1242:
case 838:
case 3267:
case 2214:
case 1417:
case 2425:
case 3302:
case 389:
case 2301:
case 3379:
case 2842:
case 42:
case 2197:
case 94:
case 758:
case 453:
case 3084:
case 1300:
case 2840:
case 3636:
case 2957:
case 1767:
case 311:
case 3919:
case 3829:
case 2979:
case 745:
case 316:
case 581:
case 819:
case 1971:
case 517:
case 2200:
case 3298:
case 336:
case 1950:
case 2858:
case 3822:
case 3584:
case 4055:
case 1814:
case 137:
case 3664:
case 3808:
case 2636:
case 2454:
case 2473:
case 2904:
case 4078:
case 2525:
case 2681:
case 1033:
case 2483:
case 2676:
case 2726:
case 3393:
case 2746:
case 2416:
case 1412:
case 3406:
case 2008:
case 1093:
case 3633:
case 297:
case 1732:
case 643:
case 2042:
case 1148:
case 1633:
case 1517:
case 2114:
case 424:
case 3391:
case 2386:
case 1864:
case 2645:
case 9:
case 3164:
case 1637:
case 1387:
case 2216:
case 1951:
case 191:
case 1996:
case 1421:
case 2190:
case 2925:
case 3492:
case 924:
case 353:
case 1021:
case 3764:
case 1483:
case 1897:
case 3591:
case 3837:
case 1959:
case 2834:
case 627:
case 2131:
case 3565:
case 1779:
case 3432:
case 2116:
case 1769:
case 321:
case 1289:
case 382:
case 1946:
case 553:
case 1388:
case 2652:
case 154:
case 2165:
case 729:
case 1839:
case 163:
case 1764:
case 122:
case 870:
case 1457:
case 2591:
case 1159:
case 3236:
case 233:
case 863:
case 3790:
case 1722:
case 511:
case 1126:
case 1402:
case 1395:
case 1341:
case 1696:
case 2913:
case 2020:
case 947:
case 2396:
case 3611:
case 3188:
case 1086:
case 732:
case 3711:
case 855:
case 1542:
case 3603:
case 3815:
case 1503:
case 3911:
case 3376:
case 4057:
case 117:
case 2355:
case 2036:
case 428:
case 2989:
case 1249:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1735473614/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,];
var gg_b = "1735473614/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["hasavif"] == 1) rr["haswebp"] = 1;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      subdomainx = String.fromCharCode(97 + gg_m[x]);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
