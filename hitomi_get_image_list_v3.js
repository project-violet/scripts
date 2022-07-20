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
case 3646:
case 1571:
case 737:
case 1566:
case 2464:
case 469:
case 3773:
case 3591:
case 3329:
case 1153:
case 3509:
case 804:
case 788:
case 3557:
case 3035:
case 562:
case 502:
case 943:
case 1407:
case 1107:
case 3951:
case 365:
case 2980:
case 3593:
case 946:
case 2071:
case 2645:
case 74:
case 2843:
case 1532:
case 2260:
case 2749:
case 3082:
case 1505:
case 2607:
case 2275:
case 434:
case 1958:
case 485:
case 2587:
case 273:
case 752:
case 78:
case 3193:
case 3038:
case 2612:
case 3012:
case 371:
case 3626:
case 3464:
case 358:
case 1381:
case 3219:
case 3890:
case 2414:
case 2931:
case 1192:
case 749:
case 2839:
case 1786:
case 282:
case 4088:
case 117:
case 1497:
case 3642:
case 2287:
case 1581:
case 228:
case 1633:
case 333:
case 2007:
case 1631:
case 31:
case 2859:
case 171:
case 2361:
case 3173:
case 1211:
case 1829:
case 1624:
case 1709:
case 2118:
case 3164:
case 1317:
case 3126:
case 175:
case 521:
case 1048:
case 2753:
case 956:
case 3913:
case 3886:
case 3795:
case 3080:
case 555:
case 3807:
case 2586:
case 1306:
case 980:
case 505:
case 1931:
case 1871:
case 2883:
case 2741:
case 1238:
case 3354:
case 2295:
case 1128:
case 511:
case 1374:
case 411:
case 3581:
case 1996:
case 747:
case 3428:
case 3116:
case 2809:
case 1798:
case 2338:
case 602:
case 3848:
case 849:
case 1037:
case 3677:
case 2340:
case 93:
case 1674:
case 2097:
case 2382:
case 1663:
case 2094:
case 3895:
case 165:
case 622:
case 2001:
case 1831:
case 183:
case 2907:
case 3515:
case 1232:
case 1691:
case 2299:
case 1167:
case 1531:
case 857:
case 3971:
case 2954:
case 2503:
case 1568:
case 2417:
case 1952:
case 367:
case 213:
case 3894:
case 4080:
case 1764:
case 2940:
case 1143:
case 1756:
case 1988:
case 3903:
case 3867:
case 1094:
case 2076:
case 732:
case 3349:
case 3282:
case 1206:
case 1834:
case 2309:
case 3255:
case 1622:
case 429:
case 1807:
case 3518:
case 3862:
case 2779:
case 64:
case 884:
case 1586:
case 157:
case 2617:
case 3290:
case 3783:
case 2873:
case 3401:
case 639:
case 1874:
case 3397:
case 1400:
case 65:
case 3437:
case 817:
case 1973:
case 1875:
case 2455:
case 3975:
case 329:
case 1721:
case 155:
case 613:
case 2467:
case 3664:
case 988:
case 2154:
case 72:
case 2281:
case 4037:
case 2893:
case 2021:
case 762:
case 2938:
case 3836:
case 3780:
case 764:
case 3270:
case 1656:
case 3524:
case 394:
case 2425:
case 3482:
case 3630:
case 2424:
case 1234:
case 91:
case 1944:
case 653:
case 3648:
case 3246:
case 1099:
case 3377:
case 2707:
case 2277:
case 1599:
case 933:
case 3361:
case 3061:
case 1443:
case 2075:
case 2243:
case 1717:
case 516:
case 3514:
case 3018:
case 4070:
case 2670:
case 3999:
case 3374:
case 1068:
case 3043:
case 1634:
case 3226:
case 1780:
case 1453:
case 1637:
case 966:
case 3956:
case 2314:
case 2505:
case 519:
case 2119:
case 3840:
case 3550:
case 1027:
case 3014:
case 744:
case 3328:
case 1964:
case 617:
case 3091:
case 1787:
case 2229:
case 1112:
case 1974:
case 3230:
case 1458:
case 3395:
case 3762:
case 90:
case 3306:
case 2273:
case 2072:
case 4065:
case 1409:
case 2995:
case 791:
case 742:
case 1632:
case 3442:
case 1351:
case 1847:
case 393:
case 2261:
case 3389:
case 3278:
case 2477:
case 1882:
case 2267:
case 2932:
case 1481:
case 2623:
case 872:
case 1024:
case 1261:
case 1666:
case 3513:
case 4025:
case 2674:
case 4007:
case 1723:
case 531:
case 700:
case 3826:
case 2831:
case 2600:
case 2369:
case 509:
case 3121:
case 686:
case 1341:
case 379:
case 1625:
case 4013:
case 2781:
case 2453:
case 3948:
case 3856:
case 1170:
case 212:
case 265:
case 3069:
case 3032:
case 3614:
case 343:
case 1272:
case 2092:
case 911:
case 1816:
case 3623:
case 4015:
case 1876:
case 402:
case 790:
case 3597:
case 0:
case 3965:
case 2145:
case 3506:
case 561:
case 3345:
case 2397:
case 975:
case 2706:
case 3543:
case 4058:
case 3123:
case 230:
case 3678:
case 2342:
case 3498:
case 1148:
case 1380:
case 2249:
case 1051:
case 2163:
case 1199:
case 1384:
case 2436:
case 2780:
case 1144:
case 1096:
case 2297:
case 3108:
case 1569:
case 2160:
case 3298:
case 3638:
case 3191:
case 2846:
case 3095:
case 1308:
case 1447:
case 2111:
case 2829:
case 2420:
case 2551:
case 717:
case 3601:
case 2521:
case 3893:
case 3015:
case 1139:
case 844:
case 3023:
case 1217:
case 1311:
case 116:
case 4089:
case 3324:
case 256:
case 2192:
case 948:
case 1975:
case 370:
case 2548:
case 2345:
case 959:
case 286:
case 3406:
case 3554:
case 1376:
case 318:
case 2615:
case 2573:
case 231:
case 726:
case 3967:
case 2678:
case 1693:
case 2881:
case 80:
case 1266:
case 637:
case 1585:
case 1836:
case 202:
case 3225:
case 3743:
case 176:
case 928:
case 2880:
case 2634:
case 2886:
case 3627:
case 1797:
case 1045:
case 2132:
case 3454:
case 1379:
case 1404:
case 2174:
case 2238:
case 2423:
case 973:
case 3103:
case 1255:
case 3348:
case 3311:
case 2877:
case 2341:
case 3292:
case 1920:
case 968:
case 1095:
case 1414:
case 2169:
case 2828:
case 2653:
case 2928:
case 2580:
case 1765:
case 480:
case 473:
case 284:
case 3553:
case 699:
case 1906:
case 251:
case 4062:
case 646:
case 719:
case 266:
case 1343:
case 81:
case 1171:
case 641:
case 634:
case 584:
case 2649:
case 1576:
case 888:
case 1334:
case 800:
case 2046:
case 3065:
case 3310:
case 1768:
case 2370:
case 3207:
case 1052:
case 2293:
case 1626:
case 2422:
case 1210:
case 3484:
case 441:
case 3256:
case 2429:
case 1275:
case 2730:
case 1672:
case 3204:
case 1703:
case 710:
case 4046:
case 3257:
case 904:
case 1869:
case 671:
case 909:
case 1558:
case 3013:
case 1710:
case 315:
case 3276:
case 2735:
case 159:
case 1545:
case 1491:
case 937:
case 3584:
case 3002:
case 3475:
case 586:
case 2213:
case 745:
case 1855:
case 147:
case 4038:
case 3064:
case 3122:
case 2187:
case 1246:
case 1547:
case 3657:
case 1636:
case 3713:
case 2063:
case 552:
case 1653:
case 625:
case 1796:
case 2082:
case 1619:
case 2971:
case 3076:
case 490:
case 447:
case 1613:
case 831:
case 2288:
case 1616:
case 18:
case 1644:
case 497:
case 68:
case 2045:
case 384:
case 281:
case 92:
case 3309:
case 554:
case 780:
case 2558:
case 2517:
case 891:
case 2137:
case 2381:
case 3434:
case 1157:
case 1664:
case 3492:
case 841:
case 3889:
case 1236:
case 3566:
case 406:
case 2804:
case 1392:
case 3004:
case 3125:
case 1249:
case 1286:
case 3118:
case 20:
case 3136:
case 798:
case 3551:
case 3814:
case 1557:
case 1881:
case 2863:
case 2112:
case 2235:
case 964:
case 952:
case 2791:
case 222:
case 2292:
case 2694:
case 1108:
case 3422:
case 504:
case 2802:
case 3315:
case 923:
case 2501:
case 3427:
case 2673:
case 1300:
case 2962:
case 1005:
case 548:
case 2725:
case 499:
case 3192:
case 2740:
case 3692:
case 1972:
case 629:
case 1998:
case 3110:
case 2547:
case 3112:
case 2181:
case 2040:
case 140:
case 3194:
case 1784:
case 1258:
case 29:
case 1245:
case 715:
case 1546:
case 2135:
case 1667:
case 1562:
case 2110:
case 1743:
case 2371:
case 901:
case 56:
case 3296:
case 2738:
case 2692:
case 528:
case 4034:
case 4041:
case 2841:
case 2759:
case 3905:
case 828:
case 1431:
case 269:
case 2313:
case 4033:
case 145:
case 2085:
case 1280:
case 491:
case 1646:
case 1929:
case 238:
case 2672:
case 2592:
case 2963:
case 1985:
case 3259:
case 2472:
case 1472:
case 2803:
case 2584:
case 3154:
case 2078:
case 610:
case 2582:
case 2713:
case 2621:
case 348:
case 702:
case 1124:
case 1726:
case 2462:
case 1070:
case 2194:
case 1665:
case 3589:
case 250:
case 1473:
case 4036:
case 1195:
case 746:
case 706:
case 1452:
case 606:
case 2640:
case 2172:
case 374:
case 196:
case 1252:
case 237:
case 1607:
case 3615:
case 3114:
case 2916:
case 2109:
case 2714:
case 2492:
case 3649:
case 3105:
case 430:
case 2494:
case 3993:
case 3148:
case 2510:
case 1799:
case 3294:
case 917:
case 1282:
case 3871:
case 3093:
case 1270:
case 3411:
case 1209:
case 2242:
case 2291:
case 2984:
case 477:
case 1424:
case 1951:
case 1260:
case 3788:
case 1134:
case 240:
case 3074:
case 103:
case 2159:
case 3716:
case 976:
case 2200:
case 2421:
case 3736:
case 1014:
case 1818:
case 3176:
case 900:
case 3062:
case 1012:
case 518:
case 3088:
case 3714:
case 2591:
case 2372:
case 921:
case 3955:
case 569:
case 3705:
case 3323:
case 1824:
case 1587:
case 46:
case 1423:
case 1253:
case 3367:
case 1789:
case 2443:
case 3090:
case 813:
case 3408:
case 1885:
case 77:
case 2666:
case 2513:
case 1893:
case 4048:
case 1319:
case 2479:
case 3416:
case 833:
case 4084:
case 4044:
case 2304:
case 2765:
case 3778:
case 1757:
case 733:
case 3738:
case 326:
case 665:
case 66:
case 119:
case 3809:
case 1927:
case 3768:
case 510:
case 913:
case 1777:
case 3847:
case 2168:
case 2323:
case 1852:
case 3992:
case 42:
case 1794:
case 1467:
case 1601:
case 308:
case 410:
case 3467:
case 3924:
case 2038:
case 2191:
case 3942:
case 1960:
case 2101:
case 756:
case 396:
case 2605:
case 1285:
case 1921:
case 3594:
case 3297:
case 1725:
case 3424:
case 995:
case 1939:
case 3342:
case 1514:
case 2024:
case 3410:
case 1651:
case 1904:
case 1413:
case 1530:
case 649:
case 2633:
case 4061:
case 583:
case 3540:
case 3988:
case 2062:
case 776:
case 663:
case 3258:
case 1902:
case 3693:
case 1146:
case 3039:
case 3210:
case 1469:
case 978:
case 969:
case 3049:
case 289:
case 3313:
case 2709:
case 2685:
case 375:
case 109:
case 2796:
case 1758:
case 1479:
case 1001:
case 2629:
case 926:
case 1604:
case 1629:
case 2152:
case 3769:
case 1828:
case 4004:
case 3952:
case 3003:
case 2815:
case 840:
case 1324:
case 1911:
case 317:
case 2658:
case 138:
case 3325:
case 386:
case 1769:
case 1314:
case 3941:
case 1327:
case 1267:
case 3447:
case 1865:
case 2466:
case 4049:
case 3897:
case 2033:
case 1918:
case 894:
case 1226:
case 3149:
case 953:
case 2961:
case 3347:
case 3009:
case 4021:
case 3438:
case 2095:
case 547:
case 2820:
case 2043:
case 3221:
case 1572:
case 122:
case 464:
case 173:
case 59:
case 2540:
case 1583:
case 258:
case 1408:
case 3927:
case 227:
case 2538:
case 3016:
case 3508:
case 3183:
case 224:
case 127:
case 960:
case 2089:
case 4042:
case 1747:
case 285:
case 3068:
case 645:
case 2847:
case 524:
case 1118:
case 3507:
case 1105:
case 3698:
case 1690:
case 1145:
case 558:
case 3272:
case 2570:
case 290:
case 1078:
case 150:
case 3379:
case 3231:
case 3966:
case 105:
case 1701:
case 3885:
case 2211:
case 1712:
case 2996:
case 3073:
case 2011:
case 972:
case 3477:
case 3156:
case 2490:
case 2140:
case 2106:
case 2981:
case 3791:
case 2497:
case 3493:
case 3083:
case 596:
case 708:
case 2401:
case 3330:
case 3902:
case 1269:
case 353:
case 1905:
case 3538:
case 1910:
case 1962:
case 1120:
case 2131:
case 3818:
case 28:
case 874:
case 792:
case 3359:
case 3673:
case 992:
case 1670:
case 1299:
case 3211:
case 4059:
case 2280:
case 4008:
case 3619:
case 1451:
case 1746:
case 529:
case 1992:
case 1342:
case 566:
case 3981:
case 4001:
case 2389:
case 2768:
case 3017:
case 3702:
case 2776:
case 1570:
case 3220:
case 3471:
case 3876:
case 1276:
case 305:
case 2705:
case 664:
case 3172:
case 2124:
case 3604:
case 3701:
case 2036:
case 3052:
case 1064:
case 1580:
case 1101:
case 3579:
case 786:
case 2400:
case 2107:
case 1470:
case 1355:
case 121:
case 2457:
case 50:
case 3568:
case 2946:
case 1767:
case 3655:
case 2310:
case 713:
case 1948:
case 1518:
case 2766:
case 444:
case 3901:
case 2737:
case 2566:
case 2231:
case 1358:
case 8:
case 572:
case 3399:
case 2182:
case 1859:
case 1346:
case 414:
case 553:
case 2114:
case 3217:
case 1370:
case 2432:
case 1749:
case 2228:
case 492:
case 688:
case 1999:
case 3099:
case 17:
case 4020:
case 195:
case 149:
case 1305:
case 178:
case 540:
case 3793:
case 1737:
case 277:
case 476:
case 1850:
case 1401:
case 2866:
case 2258:
case 2852:
case 2028:
case 3319:
case 3891:
case 2405:
case 652:
case 3662:
case 2203:
case 1676:
case 2044:
case 2977:
case 2663:
case 582:
case 2512:
case 1223:
case 3844:
case 1949:
case 1956:
case 2282:
case 3334:
case 3155:
case 1320:
case 2305:
case 3652:
case 2220:
case 2647:
case 106:
case 2626:
case 1641:
case 3209:
case 459:
case 1465:
case 2029:
case 168:
case 3244:
case 3443:
case 439:
case 3250:
case 2445:
case 2378:
case 1196:
case 2767:
case 323:
case 2918:
case 623:
case 3305:
case 2609:
case 2745:
case 2966:
case 3715:
case 3495:
case 3751:
case 2426:
case 580:
case 2186:
case 3496:
case 1188:
case 2751:
case 1083:
case 3530:
case 2017:
case 2724:
case 2651:
case 3920:
case 192:
case 2336:
case 1526:
case 312:
case 2000:
case 3504:
case 1:
case 2047:
case 1007:
case 3222:
case 1993:
case 3731:
case 26:
case 771:
case 3033:
case 252:
case 2734:
case 321:
case 1677:
case 3213:
case 807:
case 3984:
case 1169:
case 3130:
case 2638:
case 3380:
case 2390:
case 201:
case 2250:
case 1477:
case 1643:
case 2025:
case 257:
case 2230:
case 1422:
case 1021:
case 1439:
case 801:
case 3577:
case 4024:
case 3322:
case 2715:
case 2702:
case 1523:
case 585:
case 1013:
case 3697:
case 1779:
case 4050:
case 3113:
case 3188:
case 3735:
case 1459:
case 3491:
case 181:
case 2127:
case 482:
case 3505:
case 2393:
case 332:
case 1627:
case 3803:
case 3921:
case 1652:
case 3536:
case 1011:
case 2444:
case 2618:
case 1154:
case 2686:
case 2574:
case 3202:
case 3174:
case 3729:
case 4023:
case 824:
case 1528:
case 2693:
case 2896:
case 2458:
case 3596:
case 226:
case 3094:
case 720:
case 851:
case 2922:
case 3240:
case 2581:
case 854:
case 1035:
case 3307:
case 1172:
case 214:
case 1135:
case 2395:
case 2845:
case 3040:
case 3056:
case 949:
case 1901:
case 574:
case 2761:
case 2920:
case 2248:
case 3441:
case 2757:
case 2450:
case 1610:
case 525:
case 2179:
case 2531:
case 3500:
case 1340:
case 2128:
case 3141:
case 680:
case 1383:
case 1106:
case 690:
case 454:
case 3253:
case 1074:
case 3249:
case 2959:
case 3879:
case 3531:
case 2997:
case 2868:
case 82:
case 38:
case 1823:
case 830:
case 1387:
case 3384:
case 260:
case 2430:
case 741:
case 3053:
case 3650:
case 1302:
case 2398:
case 736:
case 1657:
case 2409:
case 2919:
case 3969:
case 3338:
case 793:
case 1020:
case 3983:
case 3798:
case 3055:
case 1301:
case 1335:
case 1781:
case 3439:
case 3480:
case 2785:
case 2790:
case 2699:
case 2572:
case 1602:
case 316:
case 4055:
case 3641:
case 1759:
case 1102:
case 2635:
case 1926:
case 1669:
case 2575:
case 2346:
case 2319:
case 1079:
case 3680:
case 2656:
case 3632:
case 4010:
case 681:
case 366:
case 1606:
case 2905:
case 392:
case 246:
case 1736:
case 2105:
case 253:
case 3821:
case 1925:
case 621:
case 658:
case 3963:
case 3450:
case 2333:
case 1503:
case 1843:
case 2325:
case 845:
case 3726:
case 1510:
case 3874:
case 1307:
case 1720:
case 2272:
case 1648:
case 1323:
case 822:
case 1971:
case 2357:
case 1038:
case 651:
case 1936:
case 2642:
case 1177:
case 3583:
case 2374:
case 3970:
case 3996:
case 1212:
case 2362:
case 3761:
case 3882:
case 3982:
case 3932:
case 3436:
case 3459:
case 3265:
case 3908:
case 2958:
case 1100:
case 2534:
case 858:
case 87:
case 417:
case 3744:
case 514:
case 4092:
case 3784:
case 1559:
case 2523:
case 3512:
case 2120:
case 1018:
case 2695:
case 3979:
case 542:
case 1980:
case 1689:
case 494:
case 903:
case 3382:
case 3182:
case 426:
case 3351:
case 3802:
case 3096:
case 1903:
case 3393:
case 1411:
case 1180:
case 2308:
case 536:
case 3107:
case 67:
case 3914:
case 2897:
case 3672:
case 573:
case 2427:
case 3682:
case 1706:
case 1924:
case 2347:
case 2064:
case 2602:
case 465:
case 2061:
case 684:
case 2454:
case 799:
case 1860:
case 242:
case 135:
case 1825:
case 2161:
case 3684:
case 3494:
case 740:
case 962:
case 331:
case 2879:
case 1405:
case 3392:
case 3934:
case 3575:
case 2871:
case 407:
case 2708:
case 2860:
case 631:
case 2970:
case 2884:
case 3916:
case 1455:
case 3873:
case 2171:
case 1468:
case 2610:
case 2471:
case 914:
case 3824:
case 3387:
case 320:
case 2283:
case 3794:
case 356:
case 3605:
case 2202:
case 1109:
case 1279:
case 3169:
case 3573:
case 743:
case 1088:
case 2662:
case 3372:
case 1373:
case 89:
case 2664:
case 601:
case 2054:
case 3489:
case 941:
case 1496:
case 3486:
case 3050:
case 3042:
case 1594:
case 204:
case 676:
case 1659:
case 789:
case 2930:
case 2960:
case 2448:
case 3831:
case 3887:
case 35:
case 3864:
case 2133:
case 1772:
case 2546:
case 1410:
case 1978:
case 1890:
case 2329:
case 730:
case 1540:
case 3609:
case 2222:
case 3522:
case 1347:
case 2985:
case 551:
case 1897:
case 1485:
case 488:
case 3456:
case 897:
case 4064:
case 1963:
case 2769:
case 1595:
case 1121:
case 2758:
case 1357:
case 809:
case 837:
case 2742:
case 189:
case 1297:
case 2198:
case 2239:
case 3120:
case 882:
case 2554:
case 500:
case 1851:
case 1278:
case 2478:
case 3470:
case 3572:
case 1508:
case 324:
case 1385:
case 1402:
case 373:
case 2143:
case 2026:
case 902:
case 944:
case 1194:
case 73:
case 1268:
case 3676:
case 3829:
case 1420:
case 3571:
case 3144:
case 1968:
case 557:
case 344:
case 2819:
case 751:
case 3565:
case 2697:
case 376:
case 3519:
case 1535:
case 3728:
case 3520:
case 2677:
case 3405:
case 1883:
case 2806:
case 3378:
case 3699:
case 3216:
case 3806:
case 579:
case 3545:
case 2684:
case 3268:
case 614:
case 513:
case 795:
case 3685:
case 2889:
case 1761:
case 2330:
case 1504:
case 1753:
case 340:
case 3753:
case 493:
case 2676:
case 1009:
case 1089:
case 2830:
case 110:
case 3816:
case 3371:
case 2353:
case 167:
case 1810:
case 3994:
case 3976:
case 1805:
case 2840:
case 2010:
case 2564:
case 2117:
case 2646:
case 3758:
case 1445:
case 2459:
case 2552:
case 2285:
case 2998:
case 2014:
case 570:
case 3153:
case 2951:
case 2460:
case 885:
case 2850:
case 1826:
case 577:
case 761:
case 389:
case 2175:
case 927:
case 656:
case 2872:
case 3767:
case 1397:
case 219:
case 1393:
case 84:
case 1738:
case 1448:
case 3624:
case 169:
case 3343:
case 2793:
case 1243:
case 1983:
case 85:
case 526:
case 834:
case 2265:
case 2782:
case 2091:
case 887:
case 4078:
case 287:
case 1521:
case 1251:
case 753:
case 2799:
case 3472:
case 1187:
case 1550:
case 3635:
case 2197:
case 207:
case 3817:
case 1898:
case 1271:
case 1471:
case 1229:
case 3425:
case 3098:
case 243:
case 3131:
case 1000:
case 4:
case 3241:
case 3332:
case 2559:
case 2151:
case 2354:
case 2164:
case 1863:
case 1322:
case 1044:
case 1053:
case 2560:
case 3792:
case 2468:
case 1326:
case 3909:
case 3404:
case 2327:
case 3991:
case 803:
case 2821:
case 347:
case 2271:
case 4016:
case 3527:
case 1894:
case 1150:
case 533:
case 94:
case 2555:
case 3150:
case 2489:
case 2279:
case 3869:
case 3722:
case 268:
case 2898:
case 1513:
case 3386:
case 794:
case 1854:
case 292:
case 3151:
case 23:
case 3533:
case 1909:
case 2108:
case 197:
case 3667:
case 2578:
case 3001:
case 3950:
case 3756:
case 2876:
case 673:
case 3620:
case 711:
case 2388:
case 451:
case 468:
case 2669:
case 2208:
case 3197:
case 3679:
case 2968:
case 3383:
case 1244:
case 3746:
case 679:
case 3760:
case 1333:
case 2667:
case 1724:
case 276:
case 1795:
case 2406:
case 1516:
case 2579:
case 1316:
case 1160:
case 3629:
case 3782:
case 982:
case 779:
case 378:
case 1450:
case 979:
case 433:
case 2700:
case 2201:
case 2317:
case 428:
case 2023:
case 3152:
case 1019:
case 3940:
case 1771:
case 1235:
case 1325:
case 2446:
case 556:
case 701:
case 2516:
case 1966:
case 593:
case 1573:
case 934:
case 532:
case 2196:
case 3822:
case 33:
case 1264:
case 97:
case 3474:
case 1884:
case 293:
case 4022:
case 728:
case 1704:
case 1870:
case 1945:
case 2204:
case 3872:
case 3734:
case 1220:
case 130:
case 1115:
case 1778:
case 1857:
case 1499:
case 83:
case 2585:
case 1228:
case 823:
case 727:
case 2009:
case 1318:
case 3544:
case 3606:
case 463:
case 3857:
case 1394:
case 2687:
case 600:
case 3431:
case 126:
case 1248:
case 3391:
case 2910:
case 1908:
case 146:
case 1321:
case 2373:
case 3360:
case 322:
case 1363:
case 2797:
case 3953:
case 2212:
case 1446:
case 2386:
case 930:
case 2835:
case 581:
case 1735:
case 2404:
case 2366:
case 1440:
case 1328:
case 3444:
case 3587:
case 328:
case 1728:
case 3238:
case 1976:
case 3409:
case 2050:
case 427:
case 1416:
case 2147:
case 2300:
case 543:
case 3109:
case 1067:
case 3020:
case 3223:
case 3719:
case 965:
case 275:
case 2215:
case 503:
case 1774:
case 3092:
case 1872:
case 3961:
case 3178:
case 1858:
case 2865:
case 1093:
case 1541:
case 612:
case 3959:
case 2506:
case 1679:
case 954:
case 2661:
case 3643:
case 957:
case 2648:
case 2945:
case 2418:
case 377:
case 3621:
case 3670:
case 2274:
case 3962:
case 940:
case 2632:
case 3739:
case 2438:
case 1899:
case 2356:
case 3021:
case 3407:
case 1017:
case 880:
case 1492:
case 3198:
case 2461:
case 1006:
case 1519:
case 2712:
case 2162:
case 302:
case 3523:
case 707:
case 1984:
case 479:
case 1922:
case 899:
case 3810:
case 307:
case 2189:
case 4072:
case 3990:
case 3633:
case 1033:
case 3985:
case 362:
case 1552:
case 2173:
case 2874:
case 3752:
case 691:
case 3839:
case 1605:
case 2098:
case 3534:
case 1156:
case 1369:
case 2747:
case 3796:
case 1190:
case 3335:
case 3968:
case 2349:
case 2637:
case 2180:
case 2247:
case 1930:
case 1378:
case 1444:
case 88:
case 443:
case 2363:
case 2948:
case 6:
case 3260:
case 1912:
case 125:
case 2360:
case 3232:
case 460:
case 2628:
case 3127:
case 3138:
case 3452:
case 139:
case 990:
case 3066:
case 2475:
case 412:
case 1841:
case 611:
case 860:
case 3346:
case 364:
case 1163:
case 1501:
case 3420:
case 1986:
case 294:
case 3227:
case 3607:
case 883:
case 2074:
case 541:
case 1814:
case 875:
case 2533:
case 1919:
case 1812:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1658282401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,];
var gg_b = "1658282401/";

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
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
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
