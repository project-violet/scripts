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
var o = 1;
switch (g) {
case 80:
case 769:
case 195:
case 2632:
case 1125:
case 2442:
case 2298:
case 2453:
case 4058:
case 1269:
case 292:
case 99:
case 4064:
case 4028:
case 2062:
case 3935:
case 221:
case 2666:
case 2675:
case 2285:
case 1854:
case 2375:
case 178:
case 3575:
case 209:
case 2888:
case 2870:
case 839:
case 300:
case 1573:
case 3875:
case 1438:
case 3055:
case 2889:
case 764:
case 1652:
case 2570:
case 472:
case 2212:
case 1504:
case 3148:
case 3934:
case 2782:
case 1824:
case 1192:
case 956:
case 192:
case 1948:
case 3425:
case 1922:
case 3800:
case 2182:
case 1683:
case 2108:
case 208:
case 1358:
case 1946:
case 2993:
case 2778:
case 547:
case 4054:
case 1394:
case 2588:
case 2890:
case 3558:
case 2946:
case 811:
case 2943:
case 2003:
case 3463:
case 2958:
case 1526:
case 1480:
case 727:
case 1029:
case 1239:
case 3043:
case 2328:
case 2161:
case 3017:
case 3321:
case 3404:
case 2046:
case 1351:
case 45:
case 529:
case 3762:
case 1655:
case 1805:
case 3674:
case 4038:
case 1386:
case 3978:
case 1292:
case 3194:
case 2293:
case 2765:
case 3299:
case 2619:
case 3132:
case 1508:
case 1884:
case 160:
case 3247:
case 2178:
case 2858:
case 3967:
case 4004:
case 184:
case 3502:
case 1991:
case 1606:
case 609:
case 3989:
case 3217:
case 46:
case 2921:
case 2335:
case 575:
case 2098:
case 1714:
case 1036:
case 3621:
case 3954:
case 1509:
case 3911:
case 784:
case 1162:
case 1842:
case 2893:
case 834:
case 836:
case 1973:
case 352:
case 2876:
case 3189:
case 240:
case 3908:
case 688:
case 639:
case 3483:
case 496:
case 3138:
case 1031:
case 3253:
case 153:
case 1073:
case 4087:
case 3656:
case 2441:
case 1780:
case 2308:
case 2926:
case 1122:
case 125:
case 852:
case 17:
case 382:
case 3679:
case 1787:
case 2622:
case 840:
case 1761:
case 3269:
case 1177:
case 2014:
case 1582:
case 100:
case 1675:
case 1277:
case 317:
case 65:
case 3225:
case 1678:
case 2154:
case 1629:
case 2812:
case 3880:
case 1348:
case 3307:
case 2277:
case 1124:
case 2820:
case 863:
case 2798:
case 161:
case 3906:
case 3928:
case 1807:
case 4067:
case 3381:
case 819:
case 3625:
case 1540:
case 2175:
case 3457:
case 36:
case 2137:
case 2671:
case 1075:
case 1089:
case 1643:
case 1631:
case 47:
case 1986:
case 934:
case 1306:
case 3706:
case 951:
case 1185:
case 1814:
case 737:
case 3024:
case 3200:
case 1282:
case 2808:
case 2064:
case 1229:
case 3892:
case 360:
case 251:
case 2389:
case 3730:
case 2527:
case 694:
case 2231:
case 4031:
case 2198:
case 1298:
case 2719:
case 3932:
case 3449:
case 1916:
case 3542:
case 2258:
case 2:
case 1123:
case 1307:
case 1931:
case 3752:
case 3568:
case 2567:
case 629:
case 3272:
case 163:
case 2170:
case 2349:
case 2265:
case 2603:
case 952:
case 1972:
case 3582:
case 641:
case 3527:
case 1915:
case 2238:
case 603:
case 855:
case 1782:
case 713:
case 3676:
case 868:
case 1541:
case 3747:
case 3509:
case 763:
case 1194:
case 1574:
case 3836:
case 3775:
case 2980:
case 1420:
case 3968:
case 3050:
case 586:
case 2266:
case 3827:
case 2423:
case 180:
case 2500:
case 3488:
case 1219:
case 1957:
case 3931:
case 1572:
case 2499:
case 4042:
case 2869:
case 1144:
case 3918:
case 676:
case 4008:
case 1602:
case 1891:
case 1305:
case 3056:
case 1345:
case 658:
case 54:
case 3278:
case 3256:
case 171:
case 1430:
case 2164:
case 1783:
case 3439:
case 1234:
case 3612:
case 1339:
case 3941:
case 654:
case 775:
case 3390:
case 3291:
case 2132:
case 2157:
case 1583:
case 3850:
case 2228:
case 1725:
case 746:
case 2082:
case 2011:
case 561:
case 94:
case 521:
case 4081:
case 1789:
case 1830:
case 4033:
case 1699:
case 418:
case 2397:
case 2757:
case 623:
case 3429:
case 2532:
case 3491:
case 1997:
case 353:
case 1689:
case 1890:
case 1900:
case 2482:
case 457:
case 2929:
case 1428:
case 675:
case 3713:
case 2171:
case 1446:
case 3089:
case 583:
case 973:
case 1453:
case 1734:
case 270:
case 966:
case 4013:
case 2704:
case 1145:
case 3902:
case 841:
case 3011:
case 3981:
case 2550:
case 2421:
case 2697:
case 672:
case 1993:
case 1716:
case 846:
case 1975:
case 2414:
case 1713:
case 224:
case 2600:
case 5:
case 564:
case 1636:
case 1709:
case 1998:
case 1048:
case 2326:
case 2763:
case 2528:
case 410:
case 2324:
case 1686:
case 320:
case 1184:
case 3178:
case 2702:
case 2976:
case 1754:
case 2699:
case 2874:
case 942:
case 958:
case 1030:
case 3914:
case 4080:
case 1119:
case 3742:
case 117:
case 1621:
case 1404:
case 325:
case 1642:
case 3654:
case 3362:
case 1450:
case 777:
case 1153:
case 3296:
case 2398:
case 3746:
case 3793:
case 355:
case 2056:
case 2963:
case 387:
case 608:
case 3456:
case 2465:
case 726:
case 1415:
case 2345:
case 259:
case 2325:
case 832:
case 1749:
case 4093:
case 1104:
case 3146:
case 1309:
case 2638:
case 3943:
case 1803:
case 3690:
case 1341:
case 3300:
case 156:
case 2665:
case 2462:
case 1762:
case 2290:
case 2105:
case 2138:
case 3743:
case 2535:
case 9:
case 1206:
case 42:
case 2352:
case 1173:
case 2725:
case 2184:
case 351:
case 1645:
case 71:
case 1987:
case 207:
case 340:
case 3566:
case 2407:
case 2297:
case 3059:
case 425:
case 605:
case 743:
case 3605:
case 1197:
case 786:
case 3268:
case 2401:
case 3240:
case 1135:
case 2693:
case 2518:
case 306:
case 3951:
case 967:
case 1869:
case 473:
case 3652:
case 1724:
case 3701:
case 8:
case 1342:
case 52:
case 2359:
case 2519:
case 2119:
case 941:
case 2833:
case 1495:
case 2425:
case 607:
case 1613:
case 3788:
case 2026:
case 558:
case 1055:
case 3868:
case 3419:
case 3991:
case 1373:
case 735:
case 2539:
case 717:
case 3360:
case 3472:
case 2894:
case 2310:
case 1520:
case 513:
case 3567:
case 437:
case 2783:
case 3124:
case 1322:
case 2281:
case 1246:
case 3974:
case 3947:
case 3302:
case 41:
case 334:
case 1407:
case 338:
case 3287:
case 250:
case 3853:
case 109:
case 1254:
case 1707:
case 337:
case 3990:
case 2338:
case 1256:
case 273:
case 1939:
case 3561:
case 2165:
case 2776:
case 568:
case 3453:
case 3929:
case 990:
case 2739:
case 1012:
case 1072:
case 1587:
case 2501:
case 83:
case 2825:
case 341:
case 1971:
case 567:
case 626:
case 2709:
case 1698:
case 3884:
case 468:
case 2840:
case 2965:
case 755:
case 3416:
case 1897:
case 3141:
case 3096:
case 2881:
case 988:
case 173:
case 1223:
case 3329:
case 3675:
case 2244:
case 1093:
case 3543:
case 3695:
case 110:
case 1565:
case 258:
case 267:
case 3642:
case 3985:
case 3185:
case 1183:
case 2545:
case 2230:
case 2826:
case 1617:
case 3275:
case 1622:
case 3842:
case 3490:
case 2110:
case 843:
case 2045:
case 1217:
case 3276:
case 366:
case 906:
case 305:
case 793:
case 2490:
case 438:
case 4085:
case 2819:
case 2102:
case 3347:
case 1115:
case 1763:
case 2097:
case 2224:
case 864:
case 2879:
case 1376:
case 2435:
case 747:
case 3331:
case 2094:
case 2275:
case 141:
case 287:
case 1710:
case 375:
case 770:
case 2030:
case 1880:
case 3556:
case 3794:
case 1817:
case 3123:
case 2842:
case 822:
case 247:
case 1695:
case 1385:
case 3960:
case 4059:
case 2262:
case 1937:
case 1004:
case 1225:
case 2954:
case 1038:
case 3379:
case 1704:
case 3348:
case 597:
case 2316:
case 3294:
case 2388:
case 2371:
case 1432:
case 2234:
case 3423:
case 2404:
case 459:
case 1592:
case 1649:
case 3723:
case 698:
case 1408:
case 2975:
case 2237:
case 2806:
case 150:
case 2093:
case 2579:
case 2327:
case 1637:
case 4065:
case 1984:
case 2127:
case 429:
case 2736:
case 546:
case 3201:
case 982:
case 1839:
case 1193:
case 3234:
case 1934:
case 14:
case 111:
case 4083:
case 3304:
case 3699:
case 961:
case 3596:
case 785:
case 1392:
case 3671:
case 239:
case 924:
case 3158:
case 800:
case 1470:
case 2846:
case 2942:
case 2415:
case 3538:
case 1519:
case 844:
case 804:
case 103:
case 3957:
case 2784:
case 2387:
case 936:
case 3801:
case 2115:
case 2076:
case 2032:
case 1593:
case 1151:
case 596:
case 1062:
case 884:
case 1924:
case 2390:
case 642:
case 2791:
case 345:
case 2445:
case 3386:
case 1137:
case 3413:
case 701:
case 431:
case 2981:
case 157:
case 2823:
case 2348:
case 3327:
case 2053:
case 2761:
case 3732:
case 3672:
case 2891:
case 2617:
case 1393:
case 807:
case 2263:
case 2968:
case 2655:
case 2931:
case 3912:
case 1732:
case 3020:
case 3588:
case 3630:
case 419:
case 1046:
case 955:
case 4069:
case 1760:
case 2450:
case 4095:
case 3564:
case 730:
case 684:
case 4060:
case 444:
case 262:
case 2927:
case 3603:
case 2746:
case 1045:
case 2458:
case 4068:
case 228:
case 1514:
case 1456:
case 3830:
case 2169:
case 1236:
case 3691:
case 1478:
case 895:
case 3578:
case 2847:
case 2149:
case 1377:
case 3759:
case 2055:
case 2355:
case 284:
case 72:
case 2203:
case 1060:
case 2524:
case 2283:
case 3193:
case 3702:
case 3364:
case 1825:
case 1447:
case 3696:
case 206:
case 1353:
case 3444:
case 2591:
case 2287:
case 3478:
case 1333:
case 566:
case 1281:
case 1069:
case 2315:
case 302:
case 3401:
case 4079:
case 1109:
case 147:
case 1634:
case 560:
case 1195:
case 2974:
case 3452:
case 1920:
case 2042:
case 1290:
case 679:
case 3324:
case 3613:
case 27:
case 943:
case 2481:
case 2650:
case 1648:
case 3799:
case 113:
case 1283:
case 3615:
case 2057:
case 1840:
case 3798:
case 2416:
case 3319:
case 1999:
case 1764:
case 2051:
case 1235:
case 2967:
case 2180:
case 3626:
case 3142:
case 3359:
case 3791:
case 2525:
case 3102:
case 108:
case 1702:
case 745:
case 3949:
case 900:
case 3819:
case 511:
case 687:
case 333:
case 365:
case 2147:
case 409:
case 443:
case 405:
case 2542:
case 299:
case 98:
case 1360:
case 2241:
case 3021:
case 3513:
case 962:
case 2838:
case 182:
case 3738:
case 2795:
case 1126:
case 3579:
case 1802:
case 74:
case 897:
case 116:
case 576:
case 1646:
case 1661:
case 1996:
case 1381:
case 3188:
case 2029:
case 3098:
case 383:
case 3600:
case 3135:
case 2065:
case 2766:
case 4039:
case 2305:
case 385:
case 2636:
case 3029:
case 2694:
case 2732:
case 2700:
case 2139:
case 2163:
case 1258:
case 2081:
case 3789:
case 3643:
case 2788:
case 3636:
case 779:
case 1015:
case 1752:
case 3587:
case 594:
case 1595:
case 2800:
case 1618:
case 3016:
case 402:
case 2796:
case 889:
case 357:
case 1659:
case 3688:
case 917:
case 128:
case 3438:
case 1382:
case 43:
case 2589:
case 1846:
case 974:
case 3857:
case 55:
case 1912:
case 1411:
case 870:
case 3281:
case 3599:
case 348:
case 1042:
case 2649:
case 3262:
case 374:
case 849:
case 2278:
case 2551:
case 3184:
case 279:
case 3267:
case 368:
case 26:
case 3036:
case 2777:
case 2740:
case 1647:
case 344:
case 2720:
case 739:
case 2391:
case 275:
case 1077:
case 1150:
case 2803:
case 63:
case 105:
case 3545:
case 1425:
case 1170:
case 1247:
case 1493:
case 396:
case 3341:
case 2565:
case 2339:
case 2712:
case 3264:
case 611:
case 2113:
case 3815:
case 1099:
case 857:
case 501:
case 805:
case 3547:
case 550:
case 2508:
case 894:
case 2807:
case 1719:
case 1443:
case 3232:
case 2581:
case 573:
case 2131:
case 2041:
case 3510:
case 3274:
case 2634:
case 1849:
case 1726:
case 3786:
case 492:
case 1740:
case 3881:
case 614:
case 1132:
case 1935:
case 2340:
case 3839:
case 2767:
case 3326:
case 1525:
case 1426:
case 993:
case 3983:
case 2311:
case 3:
case 3653:
case 403:
case 3756:
case 2332:
case 2344:
case 2166:
case 4074:
case 3109:
case 3334:
case 1586:
case 449:
case 1041:
case 3950:
case 921:
case 2917:
case 1965:
case 704:
case 3409:
case 442:
case 1826:
case 2140:
case 2961:
case 81:
case 4018:
case 3655:
case 2810:
case 1914:
case 3921:
case 3924:
case 2384:
case 1444:
case 191:
case 826:
case 624:
case 1594:
case 1335:
case 3623:
case 2383:
case 660:
case 2380:
case 2771:
case 316:
case 205:
case 661:
case 1264:
case 3659:
case 3627:
case 3783:
case 3067:
case 2090:
case 229:
case 1097:
case 1739:
case 3034:
case 2152:
case 322:
case 2361:
case 2631:
case 3900:
case 3373:
case 1140:
case 1679:
case 227:
case 1226:
case 133:
case 1951:
case 1295:
case 399:
case 3994:
case 364:
case 3529:
case 3129:
case 2864:
case 406:
case 2604:
case 241:
case 3424:
case 2701:
case 2058:
case 3913:
case 842:
case 2400:
case 538:
case 2395:
case 3317:
case 3859:
case 3926:
case 2037:
case 3106:
case 411:
case 1835:
case 246:
case 3144:
case 3904:
case 1757:
case 1157:
case 1202:
case 1441:
case 3560:
case 1772:
case 3261:
case 3685:
case 968:
case 2484:
case 2624:
case 3224:
case 3787:
case 1715:
case 295:
case 3806:
case 3861:
case 2612:
case 1664:
case 665:
case 1241:
case 1663:
case 587:
case 765:
case 3955:
case 725:
case 1308:
case 3597:
case 1106:
case 3604:
case 918:
case 2013:
case 1315:
case 1120:
case 3805:
case 1081:
case 3777:
case 1076:
case 87:
case 1601:
case 1870:
case 3979:
case 590:
case 1128:
case 3374:
case 281:
case 2437:
case 283:
case 1539:
case 2235:
case 1923:
case 61:
case 3860:
case 1375:
case 3821:
case 1697:
case 1690:
case 3620:
case 2486:
case 3015:
case 1614:
case 1907:
case 3220:
case 1609:
case 1668:
case 1040:
case 3649:
case 3130:
case 3481:
case 3680:
case 1829:
case 2664:
case 3080:
case 1148:
case 3715:
case 1497:
case 3606:
case 3254:
case 3553:
case 2832:
case 1079:
case 3370:
case 1654:
case 1928:
case 2744:
case 2286:
case 3227:
case 2801:
case 1837:
case 101:
case 682:
case 3250:
case 1551:
case 3377:
case 2456:
case 1784:
case 3634:
case 2512:
case 554:
case 3418:
case 1791:
case 1252:
case 2009:
case 1461:
case 649:
case 1180:
case 3039:
case 2990:
case 2035:
case 1114:
case 518:
case 2979:
case 1250:
case 2925:
case 2268:
case 1139:
case 2875:
case 1515:
case 1300:
case 3496:
case 1037:
case 2676:
case 867:
case 2494:
case 2885:
case 1050:
case 1852:
case 768:
case 1366:
case 1781:
case 233:
case 3650:
case 2439:
case 837:
case 3442:
case 2117:
case 3594:
case 1149:
case 2000:
case 2552:
case 2721:
case 749:
case 2521:
case 3780:
case 1511:
case 1327:
case 621:
case 2438:
case 3027:
case 2218:
case 3514:
case 222:
case 2479:
case 3710:
case 2880:
case 3492:
case 3073:
case 2043:
case 3812:
case 3878:
case 451:
case 945:
case 1208:
case 2670:
case 346:
case 243:
case 3640:
case 2621:
case 482:
case 312:
case 2399:
case 3996:
case 1026:
case 3784:
case 3925:
case 245:
case 3053:
case 210:
case 2436:
case 3405:
case 2434:
case 2948:
case 286:
case 1953:
case 553:
case 2488:
case 2860:
case 3384:
case 1868:
case 3586:
case 2866:
case 1688:
case 3895:
case 127:
case 617:
case 1323:
case 802:
case 2160:
case 3984:
case 506:
case 32:
case 1585:
case 2022:
case 1657:
case 3678:
case 1288:
case 2172:
case 3948:
case 4037:
case 1885:
case 1562:
case 778:
case 2369:
case 2985:
case 1102:
case 2124:
case 3209:
case 301:
case 2644:
case 481:
case 3310:
case 816:
case 2584:
case 860:
case 2208:
case 1503:
case 2895:
case 455:
case 3885:
case 3552:
case 2887:
case 577:
case 3907:
case 1034:
case 347:
case 818:
case 414:
case 2523:
case 2333:
case 3088:
case 509:
case 3804:
case 1550:
case 1085:
case 3866:
case 1816:
case 3322:
case 466:
case 3917:
case 2953:
case 1794:
case 738:
case 3977:
case 1793:
case 1319:
case 1363:
case 3927:
case 1599:
case 3181:
case 143:
case 3239:
case 3559:
case 2804:
case 757:
case 3964:
case 2146:
case 1204:
case 2633:
case 193:
case 797:
case 1909:
case 3909:
case 890:
case 2427:
case 1844:
case 1222:
case 3658:
case 3198:
case 1152:
case 31:
case 3888:
case 122:
case 1501:
case 911:
case 1555:
case 2904:
case 574:
case 2221:
case 2698:
case 356:
case 1543:
case 1169:
case 1474:
case 3147:
case 3820:
case 416:
case 2299:
case 3128:
case 1933:
case 938:
case 3645:
case 2837:
case 1259:
case 2077:
case 930:
case 3173:
case 719:
case 2710:
case 3831:
case 1350:
case 2557:
case 1723:
case 555:
case 115:
case 3536:
case 616:
case 386:
case 172:
case 271:
case 477:
case 1462:
case 2831:
case 3393:
case 3708:
case 3459:
case 2273:
case 2601:
case 2814:
case 145:
case 2774:
case 2103:
case 3340:
case 3045:
case 1071:
case 470:
case 975:
case 3052:
case 397:
case 1788:
case 3385:
case 1620:
case 423:
case 645:
case 898:
case 1883:
case 2878:
case 2213:
case 1165:
case 3773:
case 3169:
case 2356:
case 3531:
case 1500:
case 1820:
case 3673:
case 3682:
case 476:
case 3113:
case 2952:
case 2941:
case 3711:
case 1458:
case 3101:
case 187:
case 1471:
case 3572:
case 2386:
case 815:
case 2223:
case 2044:
case 3391:
case 1843:
case 2276:
case 201:
case 297:
case 2025:
case 1544:
case 3318:
case 1213:
case 1753:
case 877:
case 3192:
case 3519:
case 2849:
case 2292:
case 2905:
case 2951:
case 1969:
case 2559:
case 515:
case 2707:
case 1098:
case 3309:
case 1633:
case 2977:
case 996:
case 2657:
case 2608:
case 1786:
case 272:
case 1455:
case 4002:
case 2420:
case 44:
case 2587:
case 458:
case 2370:
case 3154:
case 2049:
case 3306:
case 2125:
case 1561:
case 987:
case 2561:
case 969:
case 1273:
case 1505:
case 1304:
case 772:
case 3103:
case 3524:
case 3461:
case 2267:
case 1962:
case 4024:
case 3279:
case 3937:
case 435:
case 202:
case 11:
case 2393:
case 3378:
case 817:
case 1329:
case 2750:
case 2485:
case 3136:
case 1611:
case 3468:
case 1832:
case 413:
case 628:
case 2691:
case 970:
case 2130:
case 478:
case 1176:
case 390:
case 3505:
case 2233:
case 3963:
case 3164:
case 3494:
case 28:
case 3083:
case 771:
case 1685:
case 1059:
case 1680:
case 1237:
case 2543:
case 808:
case 3238:
case 3292:
case 1945:
case 903:
case 1857:
case 10:
case 3574:
case 1529:
case 959:
case 4011:
case 3592:
case 3882:
case 1113:
case 2284:
case 343:
case 908:
case 3350:
case 978:
case 3534:
case 686:
case 1778:
case 463:
case 2651:
case 4088:
case 1297:
case 3648:
case 2027:
case 3122:
case 70:
case 4000:
case 4071:
case 2574:
case 1107:
case 1512:
case 4005:
case 1172:
case 2408:
case 2296:
case 3397:
case 1084:
case 3060:
case 1936:
case 2497:
case 216:
case 3354:
case 2492:
case 2652:
case 2548:
case 3725:
case 3910:
case 821:
case 932:
case 2457:
case 3213:
case 2301:
case 372:
case 610:
case 493:
case 998:
case 1212:
case 2520:
case 1161:
case 3890:
case 1506:
case 95:
case 1681:
case 637:
case 1380:
case 1409:
case 977:
case 408:
case 3482:
case 1159:
case 2342:
case 96:
case 3342:
case 946:
case 1693:
case 4044:
case 2318:
case 1476:
case 430:
case 3389:
case 1673:
case 1448:
case 657:
case 4057:
case 2583:
case 3167:
case 378:
case 2839:
case 1346:
case 3105:
case 3000:
case 638:
case 3551:
case 604:
case 2582:
case 3246:
case 93:
case 773:
case 485:
case 1187:
case 2686:
case 3846:
case 540:
case 2928:
case 194:
case 1591:
case 1612:
case 486:
case 3473:
case 1416:
case 4030:
case 742:
case 1326:
case 1356:
case 2580:
case 2418:
case 530:
case 3758:
case 1488:
case 453:
case 1347:
case 1205:
case 534:
case 51:
case 1877:
case 126:
case 265:
case 2028:
case 3049:
case 794:
case 512:
case 926:
case 999:
case 3120:
case 2923:
case 646:
case 3980:
case 1919:
case 3259:
case 2364:
case 2595:
case 2156:
case 3760:
case 3873:
case 1607:
case 3727:
case 644:
case 307:
case 3006:
case 1276:
case 2816:
case 204:
case 1876:
case 3644:
case 370:
case 1464:
case 1397:
case 3199:
case 3489:
case 2211:
case 2576:
case 1316:
case 1801:
case 3311:
case 3870:
case 142:
case 1960:
case 971:
case 2913:
case 1947:
case 592:
case 741:
case 615:
case 2824:
case 960:
case 3898:
case 2564:
case 3175:
case 1860:
case 695:
case 883:
case 456:
case 342:
case 2015:
case 3785:
case 1013:
case 1014:
case 1978:
case 640:
case 3972:
case 1253:
case 781:
case 132:
case 1638:
case 1044:
case 3019:
case 2817:
case 1133:
case 2779:
case 134:
case 168:
case 422:
case 2480:
case 1863:
case 64:
case 2843:
case 1628:
case 935:
case 3848:
case 2662:
case 1433:
case 3624:
case 2069:
case 760:
case 3796:
case 1130:
case 944:
case 4021:
case 1653:
case 1625:
case 2309:
case 1850:
case 910:
case 2684:
case 2683:
case 393:
case 3076:
case 3686:
case 1765:
case 3755:
case 119:
case 392:
case 3428:
case 34:
case 3283:
case 1527:
case 1639:
case 358:
case 2906:
case 1524:
case 1473:
case 3477:
case 483:
case 3764:
case 3511:
case 2828:
case 3883:
case 2752:
case 1521:
case 1051:
case 3891:
case 1021:
case 1384:
case 648:
case 2933:
case 2911:
case 2443:
case 570:
case 1523:
case 1542:
case 3584:
case 2430:
case 1952:
case 1310:
case 3149:
case 310:
case 2079:
case 2083:
case 715:
case 3046:
case 1533:
case 1080:
case 2566:
case 450:
case 1554:
case 1596:
case 3270:
case 1105:
case 1750:
case 3728:
case 893:
case 865:
case 1988:
case 2472:
case 965:
case 3548:
case 2723:
case 2136:
case 1091:
case 3684:
case 1577:
case 859:
case 1257:
case 1427:
case 175:
case 3668:
case 1921:
case 1413:
case 696:
case 2002:
case 3814:
case 40:
case 1451:
case 314:
case 636:
case 2620:
case 1465:
case 2475:
case 2047:
case 1650:
case 1221:
case 3151:
case 1057:
case 164:
case 1286:
case 1365:
case 3440:
case 1406:
case 2886:
case 2109:
case 904:
case 562:
case 3965:
case 3277:
case 154:
case 1746:
case 1569:
case 1981:
case 3003:
case 4092:
case 3595:
case 1357:
case 2054:
case 2851:
case 3231:
case 736:
case 77:
case 102:
case 3420:
case 3323:
case 3351:
case 2187:
case 2852:
case 2145:
case 3023:
case 1020:
case 3768:
case 3987:
case 2663:
case 2133:
case 3550:
case 1010:
case 875:
case 1233:
case 1989:
case 1317:
case 2337:
case 1479:
case 2158:
case 1155:
case 3048:
case 69:
case 2144:
case 1336:
case 526:
case 3692:
case 3114:
case 121:
case 2841:
case 2096:
case 417:
case 3958:
case 2319:
case 264:
case 3410:
case 2836:
case 1796:
case 3998:
case 2190:
case 3295:
case 3431:
case 1906:
case 3388:
case 2674:
case 2112:
case 1468:
case 1214:
case 223:
case 3257:
case 21:
case 1449:
case 3614:
case 461:
case 4009:
case 2932:
case 584:
case 3263:
case 2078:
case 230:
case 2095:
case 3849:
case 1644:
case 196:
case 1435:
case 2688:
case 1671:
case 3127:
case 3905:
case 487:
case 2924:
case 50:
case 1866:
case 1775:
case 2474:
case 4026:
case 2008:
case 3774:
case 2250:
case 231:
case 2411:
case 861:
case 3325:
case 1546:
case 162:
case 2396:
case 578:
case 2060:
case 505:
case 2357:
case 1201:
case 3498:
case 2194:
case 856:
case 323:
case 1389:
case 151:
case 1759:
case 3729:
case 3091:
case 2897:
case 2196:
case 674:
case 3031:
case 2151:
case 1343:
case 2677:
case 1023:
case 862:
case 3288:
case 2426:
case 3633:
case 2947:
case 3573:
case 734:
case 1090:
case 3953:
case 699:
case 1742:
case 2672:
case 670:
case 2467:
case 1299:
case 1238:
case 1926:
case 2252:
case 2001:
case 2797:
case 106:
case 2572:
case 3161:
case 2491:
case 3230:
case 60:
case 1773:
case 3112:
case 3229:
case 2646:
case 1270:
case 3165:
case 350:
case 1804:
case 1398:
case 3248:
case 2460:
case 1006:
case 3993:
case 3736:
case 420:
case 90:
case 3862:
case 2682:
case 2547:
case 761:
case 3602:
case 928:
case 1790:
case 1082:
case 1721:
case 705:
case 3371:
case 4049:
case 2189:
case 2790:
case 3763:
case 3090:
case 2168:
case 2419:
case 2568:
case 321:
case 471:
case 2274:
case 2428:
case 3609:
case 3355:
case 1489:
case 35:
case 452:
case 2162:
case 225:
case 3670:
case 3462:
case 2738:
case 1074:
case 858:
case 1492:
case 2989:
case 2377:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1694858401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,];
var gg_b = "1694858401/";

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
