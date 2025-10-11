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
case 3442:
case 850:
case 749:
case 3466:
case 3340:
case 3595:
case 2582:
case 543:
case 2344:
case 2697:
case 84:
case 913:
case 3504:
case 4051:
case 2458:
case 3007:
case 1024:
case 405:
case 2975:
case 3478:
case 3625:
case 1975:
case 2527:
case 2024:
case 905:
case 2516:
case 2948:
case 618:
case 88:
case 3592:
case 236:
case 1585:
case 3842:
case 789:
case 2668:
case 3731:
case 1509:
case 0:
case 1516:
case 583:
case 3063:
case 1218:
case 1051:
case 105:
case 3952:
case 3353:
case 1236:
case 3622:
case 1538:
case 2676:
case 2858:
case 3349:
case 1972:
case 307:
case 205:
case 1373:
case 3878:
case 2051:
case 2580:
case 351:
case 1736:
case 1979:
case 1068:
case 3366:
case 1444:
case 3213:
case 3118:
case 3959:
case 2068:
case 1580:
case 3584:
case 2861:
case 2979:
case 3087:
case 286:
case 60:
case 1651:
case 2358:
case 516:
case 165:
case 1921:
case 1873:
case 192:
case 3022:
case 3671:
case 3231:
case 2502:
case 367:
case 1718:
case 2873:
case 2921:
case 3056:
case 1358:
case 3345:
case 1147:
case 1594:
case 2844:
case 1097:
case 2461:
case 4068:
case 246:
case 1461:
case 1844:
case 629:
case 2594:
case 897:
case 2097:
case 2970:
case 1624:
case 2473:
case 3453:
case 4076:
case 1954:
case 3950:
case 3449:
case 992:
case 2505:
case 2624:
case 2589:
case 3615:
case 2888:
case 2081:
case 2160:
case 3686:
case 677:
case 1995:
case 3010:
case 208:
case 3265:
case 1081:
case 3164:
case 1160:
case 833:
case 1888:
case 3383:
case 1904:
case 2237:
case 3900:
case 2330:
case 1555:
case 474:
case 2432:
case 460:
case 1764:
case 960:
case 3575:
case 2904:
case 747:
case 1330:
case 3334:
case 1393:
case 3612:
case 1488:
case 2696:
case 3141:
case 597:
case 4014:
case 3262:
case 408:
case 2488:
case 4081:
case 3246:
case 3467:
case 2393:
case 1552:
case 2526:
case 174:
case 2435:
case 1741:
case 3938:
case 1169:
case 2601:
case 3006:
case 2123:
case 274:
case 1526:
case 1435:
case 1228:
case 2832:
case 2552:
case 711:
case 2162:
case 124:
case 2728:
case 2984:
case 191:
case 1241:
case 3012:
case 968:
case 2839:
case 3691:
case 1543:
case 2893:
case 1893:
case 468:
case 3398:
case 1146:
case 1096:
case 291:
case 3980:
case 1162:
case 3483:
case 2911:
case 2999:
case 2430:
case 1808:
case 3303:
case 3902:
case 100:
case 3521:
case 1001:
case 2001:
case 1332:
case 200:
case 3762:
case 2808:
case 737:
case 1999:
case 424:
case 2264:
case 1990:
case 1439:
case 3015:
case 1388:
case 2737:
case 883:
case 1614:
case 268:
case 2388:
case 1681:
case 1264:
case 2990:
case 924:
case 3260:
case 2493:
case 1165:
case 37:
case 2574:
case 627:
case 3989:
case 3905:
case 400:
case 2335:
case 3057:
case 3834:
case 2408:
case 1550:
case 1408:
case 3137:
case 900:
case 2550:
case 11:
case 1574:
case 2084:
case 3912:
case 729:
case 2587:
case 3447:
case 3266:
case 3313:
case 1818:
case 2773:
case 1773:
case 2818:
case 3609:
case 3080:
case 3161:
case 82:
case 1587:
case 2761:
case 2149:
case 2258:
case 2099:
case 2836:
case 1153:
case 276:
case 2033:
case 1901:
case 3638:
case 3278:
case 710:
case 2901:
case 290:
case 1033:
case 1149:
case 1761:
case 1099:
case 1836:
case 1258:
case 3245:
case 3144:
case 3915:
case 3597:
case 401:
case 1695:
case 2695:
case 2090:
case 2140:
case 4084:
case 809:
case 3600:
case 3089:
case 2977:
case 1744:
case 814:
case 3740:
case 2436:
case 990:
case 2525:
case 612:
case 476:
case 2744:
case 2604:
case 1977:
case 70:
case 852:
case 1690:
case 3694:
case 3347:
case 2981:
case 689:
case 3240:
case 3413:
case 1095:
case 1145:
case 3910:
case 2095:
case 3082:
case 2145:
case 2914:
case 1004:
case 3524:
case 3745:
case 957:
case 457:
case 343:
case 76:
case 2507:
case 2529:
case 1611:
case 161:
case 2684:
case 1166:
case 2261:
case 998:
case 2758:
case 507:
case 1092:
case 4095:
case 226:
case 126:
case 1261:
case 649:
case 3009:
case 3680:
case 1684:
case 261:
case 2611:
case 3016:
case 1318:
case 3766:
case 4004:
case 3551:
case 2633:
case 383:
case 573:
case 3253:
case 257:
case 2571:
case 3038:
case 779:
case 2336:
case 1571:
case 87:
case 3158:
case 3906:
case 3919:
case 1633:
case 134:
case 3862:
case 2648:
case 1512:
case 3139:
case 3043:
case 3465:
case 2968:
case 552:
case 1708:
case 1648:
case 756:
case 3987:
case 2512:
case 234:
case 2437:
case 69:
case 3652:
case 3203:
case 1828:
case 1793:
case 350:
case 4054:
case 1739:
case 2976:
case 2793:
case 2021:
case 3956:
case 1515:
case 2730:
case 2183:
case 3617:
case 3734:
case 1730:
case 3360:
case 934:
case 1364:
case 3446:
case 2997:
case 2515:
case 611:
case 2070:
case 637:
case 3655:
case 2675:
case 1837:
case 1054:
case 2837:
case 3783:
case 1235:
case 3074:
case 1070:
case 3577:
case 2735:
case 3188:
case 3860:
case 1864:
case 459:
case 3017:
case 3514:
case 484:
case 3581:
case 959:
case 1167:
case 823:
case 244:
case 2670:
case 3907:
case 3423:
case 3055:
case 1924:
case 3650:
case 462:
case 2654:
case 3767:
case 1075:
case 962:
case 2924:
case 2788:
case 1670:
case 1293:
case 444:
case 2464:
case 2048:
case 2841:
case 284:
case 159:
case 3362:
case 184:
case 259:
case 1841:
case 777:
case 1464:
case 2679:
case 3460:
case 2293:
case 3963:
case 715:
case 1951:
case 195:
case 1103:
case 1621:
case 2072:
case 2328:
case 3823:
case 3869:
case 2621:
case 1328:
case 295:
case 3132:
case 2951:
case 2108:
case 1369:
case 1323:
case 4050:
case 3739:
case 3976:
case 3793:
case 24:
case 2626:
case 3672:
case 3232:
case 1626:
case 14:
case 250:
case 3437:
case 3512:
case 3341:
case 3079:
case 1862:
case 1193:
case 2465:
case 1139:
case 2298:
case 2596:
case 1846:
case 2846:
case 2193:
case 2043:
case 2862:
case 3708:
case 3648:
case 18:
case 3557:
case 1925:
case 94:
case 3837:
case 2783:
case 568:
case 1783:
case 3675:
case 3428:
case 3134:
case 2925:
case 3070:
case 1577:
case 28:
case 671:
case 2446:
case 2360:
case 2267:
case 51:
case 1865:
case 1617:
case 3288:
case 2734:
case 4059:
case 813:
case 3730:
case 3183:
case 2617:
case 3364:
case 1360:
case 4052:
case 2135:
case 3924:
case 1920:
case 2674:
case 653:
case 1423:
case 3654:
case 2767:
case 508:
case 23:
case 13:
case 2650:
case 1767:
case 3337:
case 2423:
case 2907:
case 1234:
case 3670:
case 1188:
case 666:
case 2283:
case 344:
case 2365:
case 1017:
case 1514:
case 1860:
case 1581:
case 2860:
case 3167:
case 621:
case 158:
case 395:
case 2869:
case 2026:
case 1026:
case 3519:
case 43:
case 1823:
case 1971:
case 3506:
case 717:
case 1798:
case 1132:
case 2052:
case 2346:
case 775:
case 3239:
case 2929:
case 1643:
case 1703:
case 4017:
case 3591:
case 3841:
case 1659:
case 458:
case 2703:
case 2643:
case 1362:
case 1929:
case 3732:
case 3464:
case 1346:
case 3198:
case 3901:
case 1278:
case 3522:
case 1576:
case 2331:
case 1002:
case 390:
case 1173:
case 782:
case 2278:
case 2576:
case 3149:
case 3761:
case 808:
case 3099:
case 3836:
case 3258:
case 586:
case 2749:
case 1912:
case 216:
case 3011:
case 2616:
case 3692:
case 1447:
case 1568:
case 770:
case 1313:
case 2568:
case 592:
case 2266:
case 1616:
case 116:
case 2753:
case 2242:
case 1161:
case 796:
case 2912:
case 1627:
case 1600:
case 3604:
case 3744:
case 1740:
case 3436:
case 3525:
case 680:
case 546:
case 1005:
case 4002:
case 2005:
case 433:
case 2740:
case 2600:
case 2089:
case 2627:
case 1094:
case 916:
case 3140:
case 874:
case 2847:
case 1245:
case 2682:
case 1682:
case 416:
case 3418:
case 2094:
case 2915:
case 4080:
case 1027:
case 483:
case 455:
case 3520:
case 1689:
case 1000:
case 3004:
case 3507:
case 4038:
case 2431:
case 243:
case 891:
case 1605:
case 143:
case 2745:
case 983:
case 622:
case 2524:
case 3690:
case 1694:
case 2082:
case 3095:
case 3145:
case 1910:
case 1347:
case 1413:
case 1240:
case 2347:
case 2413:
case 4085:
case 4016:
case 4009:
case 732:
case 4027:
case 720:
case 1551:
case 943:
case 2249:
case 2906:
case 1038:
case 2919:
case 536:
case 1602:
case 1919:
case 443:
case 2602:
case 2742:
case 3571:
case 1249:
case 1158:
case 1906:
case 3699:
case 2831:
case 2551:
case 868:
case 2766:
case 3273:
case 3633:
case 283:
case 1778:
case 361:
case 2680:
case 3611:
case 3092:
case 3142:
case 199:
case 1991:
case 81:
case 3261:
case 3758:
case 1085:
case 326:
case 3563:
case 505:
case 1813:
case 2778:
case 3904:
case 1900:
case 2334:
case 22:
case 801:
case 3432:
case 12:
case 4019:
case 1760:
case 4006:
case 1334:
case 3330:
case 2403:
case 544:
case 890:
case 2383:
case 3995:
case 2265:
case 3517:
case 1010:
case 1867:
case 2498:
case 3081:
case 914:
case 909:
case 1982:
case 1265:
case 1383:
case 2615:
case 3888:
case 675:
case 3832:
case 3123:
case 3601:
case 92:
case 3169:
case 374:
case 2803:
case 3526:
case 42:
case 3435:
case 3228:
case 3308:
case 2938:
case 785:
case 2246:
case 3339:
case 1612:
case 2909:
case 2467:
case 2916:
case 3393:
case 3992:
case 2262:
case 721:
case 2985:
case 4010:
case 3488:
case 794:
case 1769:
case 2723:
case 1985:
case 209:
case 1916:
case 2612:
case 1246:
case 766:
case 2898:
case 1909:
case 1467:
case 2128:
case 3808:
case 2746:
case 735:
case 3001:
case 152:
case 4057:
case 1902:
case 1521:
case 2619:
case 1619:
case 2521:
case 1606:
case 252:
case 898:
case 2223:
case 3430:
case 3999:
case 2269:
case 2980:
case 3241:
case 97:
case 2483:
case 3911:
case 169:
case 3543:
case 4086:
case 2398:
case 1691:
case 3146:
case 3559:
case 2691:
case 3096:
case 502:
case 1483:
case 47:
case 1980:
case 2579:
case 1989:
case 3830:
case 1834:
case 452:
case 3550:
case 2057:
case 1137:
case 625:
case 1570:
case 826:
case 1765:
case 4012:
case 3439:
case 3990:
case 2367:
case 1015:
case 3493:
case 27:
case 1883:
case 469:
case 3388:
case 3737:
case 969:
case 3681:
case 2086:
case 2610:
case 3165:
case 2994:
case 857:
case 2015:
case 3527:
case 1020:
case 3024:
case 3500:
case 1007:
case 1478:
case 907:
case 407:
case 2625:
case 2478:
case 2504:
case 2007:
case 2955:
case 2020:
case 973:
case 3697:
case 802:
case 1595:
case 1247:
case 788:
case 3344:
case 2247:
case 619:
case 2466:
case 604:
case 2595:
case 2442:
case 722:
case 4020:
case 1952:
case 3051:
case 678:
case 3676:
case 2926:
case 526:
case 3972:
case 107:
case 561:
case 1878:
case 2713:
case 3373:
case 2952:
case 2687:
case 2866:
case 3113:
case 2731:
case 2029:
case 557:
case 1842:
case 2592:
case 336:
case 173:
case 3516:
case 2445:
case 1687:
case 1866:
case 3948:
case 1731:
case 748:
case 3509:
case 2853:
case 365:
case 1136:
case 1849:
case 1378:
case 844:
case 3076:
case 2231:
case 2671:
case 3502:
case 3921:
case 3873:
case 3718:
case 2378:
case 780:
case 1231:
case 1599:
case 501:
case 1853:
case 642:
case 2584:
case 151:
case 2087:
case 2663:
case 2629:
case 2118:
case 2959:
case 1440:
case 2440:
case 1663:
case 2511:
case 251:
case 1620:
case 1747:
case 2974:
case 3589:
case 2449:
case 967:
case 3954:
case 3505:
case 682:
case 467:
case 1449:
case 2025:
case 2950:
case 1974:
case 2607:
case 884:
case 4056:
case 3147:
case 696:
case 2840:
case 1590:
case 3594:
case 451:
case 3097:
case 862:
case 670:
case 346:
case 3844:
case 1840:
case 1822:
case 2425:
case 2238:
case 1199:
case 3784:
case 1049:
case 1133:
case 2053:
case 237:
case 99:
case 2199:
case 1856:
case 1238:
case 1678:
case 1425:
case 1536:
case 371:
case 2049:
case 2371:
case 700:
case 2822:
case 335:
case 3868:
case 1946:
case 2702:
case 2642:
case 2111:
case 1285:
case 3799:
case 211:
case 3061:
case 3180:
case 1887:
case 4040:
case 1666:
case 724:
case 2285:
case 3292:
case 2518:
case 2363:
case 2329:
case 2209:
case 2946:
case 2227:
case 541:
case 1825:
case 3937:
case 4049:
case 2794:
case 437:
case 804:
case 937:
case 1422:
case 3790:
case 1794:
case 819:
case 1200:
case 3204:
case 2825:
case 3324:
case 1227:
case 1487:
case 768:
case 2645:
case 911:
case 1282:
case 2040:
case 2789:
case 634:
case 411:
case 1789:
case 3468:
case 2282:
case 1645:
case 1705:
case 820:
case 662:
case 1782:
case 896:
case 987:
case 695:
case 1471:
case 1807:
case 2104:
case 3824:
case 247:
case 2820:
case 2:
case 1325:
case 864:
case 870:
case 3100:
case 1104:
case 3451:
case 1289:
case 2782:
case 3795:
case 659:
case 3964:
case 1960:
case 2045:
case 2195:
case 2727:
case 882:
case 3704:
case 1700:
case 3644:
case 1727:
case 1045:
case 4042:
case 2429:
case 3290:
case 2960:
case 684:
case 1785:
case 531:
case 828:
case 1709:
case 2322:
case 1649:
case 3531:
case 3851:
case 2202:
case 447:
case 1716:
case 353:
case 2653:
case 1653:
case 1202:
case 2716:
case 1322:
case 9:
case 1078:
case 1871:
case 774:
case 3424:
case 2785:
case 187:
case 3792:
case 2738:
case 1280:
case 3284:
case 2042:
case 3185:
case 3116:
case 644:
case 3513:
case 1863:
case 1829:
case 842:
case 1192:
case 394:
case 4045:
case 2387:
case 1738:
case 321:
case 2280:
case 2603:
case 2121:
case 3477:
case 3801:
case 212:
case 1306:
case 3008:
case 2457:
case 1528:
case 1226:
case 1319:
case 3632:
case 3272:
case 2226:
case 765:
case 2306:
case 3779:
case 3936:
case 1743:
case 1252:
case 3248:
case 3159:
case 239:
case 3562:
case 1698:
case 2179:
case 2391:
case 1812:
case 786:
case 1391:
case 2812:
case 139:
case 3721:
case 3093:
case 1415:
case 372:
case 582:
case 3039:
case 3896:
case 912:
case 3030:
case 1034:
case 690:
case 35:
case 3275:
case 340:
case 528:
case 676:
case 3401:
case 2034:
case 1154:
case 3150:
case 1255:
case 2750:
case 2412:
case 746:
case 1667:
case 1886:
case 601:
case 2217:
case 939:
case 2947:
case 3688:
case 2774:
case 2815:
case 1217:
case 2886:
case 2717:
case 3377:
case 3630:
case 1274:
case 1419:
case 3155:
case 2419:
case 2406:
case 3254:
case 1250:
case 993:
case 2274:
case 1717:
case 1564:
case 3560:
case 1683:
case 2755:
case 249:
case 825:
case 1755:
case 454:
case 388:
case 2067:
case 1315:
case 989:
case 2564:
case 626:
case 2003:
case 3126:
case 2806:
case 3608:
case 3152:
case 3221:
case 2931:
case 3301:
case 1819:
case 2541:
case 1891:
case 736:
case 189:
case 348:
case 2410:
case 1148:
case 949:
case 1259:
case 3414:
case 449:
case 3693:
case 154:
case 289:
case 2891:
case 1541:
case 1312:
case 698:
case 660:
case 2389:
case 2438:
case 3804:
case 915:
case 403:
case 3935:
case 2305:
case 1124:
case 3120:
case 1305:
case 2800:
case 3107:
case 1225:
case 1438:
case 1389:
case 1409:
case 2394:
case 2882:
case 477:
case 2707:
case 880:
case 1707:
case 4013:
case 3724:
case 2485:
case 1882:
case 2416:
case 977:
case 2409:
case 317:
case 594:
case 2427:
case 2903:
case 3399:
case 1558:
case 1838:
case 838:
case 2222:
case 1729:
case 2302:
case 1763:
case 215:
case 566:
case 115:
case 2763:
case 1302:
case 2031:
case 3276:
case 795:
case 2558:
case 1400:
case 3404:
case 2838:
case 784:
case 3384:
case 1380:
case 3892:
case 2816:
case 1482:
case 2013:
case 2809:
case 3566:
case 1809:
case 1816:
case 2482:
case 375:
case 585:
case 277:
case 3311:
case 759:
case 2287:
case 331:
case 2380:
case 840:
case 1802:
case 1573:
case 2176:
case 2489:
case 1271:
case 3908:
case 163:
case 127:
case 2405:
case 3553:
case 1405:
case 2631:
case 2271:
case 1176:
case 3251:
case 2802:
case 2573:
case 325:
case 2168:
case 2494:
case 3018:
case 535:
case 1229:
case 1263:
case 1385:
case 2880:
case 571:
case 2613:
case 1561:
case 1756:
case 1880:
case 734:
case 2756:
case 2385:
case 3392:
case 2263:
case 2316:
case 2229:
case 2309:
case 1722:
case 3939:
case 1494:
case 3490:
case 1168:
case 2220:
case 1934:
case 600:
case 848:
case 2300:
case 463:
case 1402:
case 927:
case 2889:
case 2934:
case 1207:
case 1300:
case 1220:
case 3224:
case 1327:
case 1480:
case 691:
case 2544:
case 2894:
case 1047:
case 2382:
case 3395:
case 3411:
case 1725:
case 341:
case 2480:
case 378:
case 3277:
case 979:
case 1374:
case 3370:
case 806:
case 2350:
case 605:
case 2257:
case 1426:
case 2535:
case 3354:
case 1350:
case 1257:
case 2374:
case 4069:
case 3714:
case 3875:
case 3567:
case 2215:
case 1060:
case 1817:
case 2114:
case 118:
case 2286:
case 835:
case 1588:
case 2817:
case 1215:
case 2060:
case 2181:
case 2826:
case 3106:
case 2069:
case 2791:
case 2978:
case 46:
case 3628:
case 2532:
case 548:
case 1978:
case 96:
case 179:
case 1826:
case 2212:
case 1706:
case 4060:
case 418:
case 2343:
case 2966:
case 3296:
case 522:
case 3598:
case 1966:
case 1343:
case 319:
case 2646:
case 918:
case 3379:
case 210:
case 2352:
case 3973:
case 3796:
case 2623:
case 2669:
case 2101:
case 1206:
case 2450:
case 776:
case 1949:
case 1508:
case 2953:
case 3028:
case 3372:
case 1219:
case 40:
case 1953:
case 2508:
case 2949:
case 790:
case 1669:
case 1101:
case 1352:
case 110:
case 2859:
case 1196:
case 3348:
case 1046:
case 1843:
case 396:
case 3961:
case 3879:
case 2291:
case 3112:
case 1291:
case 580:
case 364:
case 1593:
case 2843:
case 1859:
case 1539:
case 3701:
case 2355:
case 692:
case 910:
case 1530:
case 3534:
case 2786:
case 3854:
case 1850:
case 3037:
case 1177:
case 665:
case 10:
case 3375:
case 821:
case 20:
case 3421:
case 538:
case 2177:
case 1874:
case 894:
case 1786:
case 3157:
case 1355:
case 410:
case 1660:
case 2757:
case 4062:
case 2443:
case 2317:
case 540:
case 1065:
case 3777:
case 686:
case 929:
case 3281:
case 3944:
case 2459:
case 1210:
case 3214:
case 55:
case 429:
case 2660:
case 1757:
case 3817:
case 1567:
case 1448:
case 904:
case 3060:
case 3181:
case 3588:
case 2448:
case 2567:
case 404:
case 1110:
case 1277:
case 1781:
case 1370:
case 3374:
case 3535:
case 3426:
case 549:
case 2354:
case 920:
case 1354:
case 432:
case 2472:
case 3710:
case 811:
case 3452:
case 2277:
case 2637:
case 2781:
case 607:
case 204:
case 3706:
case 2379:
case 3646:
case 1296:
case 2848:
case 3662:
case 593:
case 3966:
case 2598:
case 1041:
case 1379:
case 104:
case 1106:
case 2503:
case 478:
case 2321:
case 3532:
case 220:
case 1475:
case 1628:
case 3852:
case 2201:
case 783:
case 3978:
case 132:
case 755:
case 120:
case 2628:
case 1872:
case 1503:
case 2119:
case 2106:
case 2958:
case 978:
case 3023:
case 3791:
case 264:
case 270:
case 512:
case 8:
case 1348:
case 2701:
case 847:
case 3046:
case 716:
case 2112:
case 196:
case 428:
case 3062:
case 296:
case 329:
case 3291:
case 3859:
case 2348:
case 3539:
case 164:
case 1796:
case 182:
case 4037:
case 3474:
case 1028:
case 3326:
case 2454:
case 3450:
case 1454:
case 2028:
case 3953:
case 310:
case 2973:
case 2821:
case 2470:
case 3623:
case 2479:
case 970:
case 2944:
case 1281:
case 128:
case 2214:
case 3065:
case 1214:
case 3443:
case 3317:
case 1944:
case 996:
case 3940:
case 887:
case 2777:
case 1479:
case 2664:
case 464:
case 470:
case 3530:
case 1037:
case 1854:
case 30:
case 2421:
case 1375:
case 4028:
case 242:
case 3874:
case 3715:
case 142:
case 1421:
case 2375:
case 667:
case 2534:
case 623:
case 2854:
case 1157:
case 2545:
case 931:
case 758:
case 614:
case 2297:
case 3967:
case 2390:
case 2988:
case 2724:
case 2492:
case 3485:
case 3720:
case 1492:
case 3647:
case 1988:
case 431:
case 1297:
case 2895:
case 1545:
case 417:
case 3827:
case 2120:
case 2804:
case 1107:
case 3124:
case 3305:
case 1892:
case 2542:
case 377:
case 1618:
case 3287:
case 3771:
case 3998:
case 2268:
case 275:
case 1129:
case 2129:
case 1751:
case 1566:
case 2384:
case 3885:
case 2892:
case 1399:
case 797:
case 3256:
case 117:
case 2276:
case 1276:
case 3151:
case 2932:
case 315:
case 3302:
case 217:
case 3427:
case 2171:
case 62:
case 1404:
case 1018:
case 3229:
case 3316:
case 2776:
case 2490:
case 3756:
case 356:
case 2811:
case 1392:
case 3880:
case 2187:
case 3613:
case 1776:
case 3722:
case 1490:
case 2018:
case 1993:
case 2122:
case 74:
case 2251:
case 3802:
case 2553:
case 327:
case 2833:
case 511:
case 2899:
case 1908:
case 3338:
case 2908:
case 1899:
case 1036:
case 1553:
case 3405:
case 1122:
case 3176:
case 849:
case 3983:
case 669:
case 893:
case 3480:
case 241:
case 3894:
case 481:
case 2395:
case 3382:
case 981:
case 59:
case 1395:
case 2890:
case 3544:
case 3197:
case 3047:
case 141:
case 1411:
case 3934:
case 1930:
case 2125:
case 925:
case 2224:
case 2797:
case 3889:
case 4036:
case 854:
case 78:
case 3402:
case 425:
case 3327:
case 2930:
case 3207:
case 2896:
case 1562:
case 438:
case 339:
case 3179:
case 2248:
case 1039:
case 1896:
case 2159:
case 2918:
case 1801:
case 723:
case 767:
case 3759:
case 3319:
case 1272:
case 1632:
case 529:
case 2779:
case 2936:
case 95:
case 1779:
case 1936:
case 2008:
case 440:
case 2272:
case 3743:
case 280:
case 2801:
case 972:
case 2754:
case 3886:
case 1496:
case 2688:
case 1381:
case 3774:
case 2314:
case 1565:
case 3310:
case 1314:
case 3217:
case 2565:
case 2770:
case 616:
case 3750:
case 815:
case 1030:
case 3034:
case 240:
case 15:
case 1275:
case 3170:
case 2877:
case 25:
case 2275:
case 2635:
case 3255:
case 2030:
case 3683:
case 288:
case 1775:
case 1814:
case 2117:
case 827:
case 3564:
case 3386:
case 1088:
case 3491:
case 2814:
case 1117:
case 188:
case 1377:
case 3175:
case 1035:
case 3419:
case 922:
case 4032:
case 3406:
case 655:
case 683:
case 3250:
case 3357:
case 2035:
case 1155:
case 3717:
case 2377:
case 2630:
case 2693:
case 389:
case 2279:
case 988:
case 3148:
case 1396:
case 3098:
case 773:
case 1481:
case 3259:
case 2414:
case 1414:
case 3243:
case 3410:
case 248:
case 2396:
case 4088:
case 2481:
case 3541:
case 3312:
case 1693:
case 2772:
case 2569:
case 2523:
case 2152:
case 2221:
case 230:
case 1608:
case 1748:
case 2301:
case 122:
case 1301:
case 1152:
case 1221:
case 643:
case 3329:
case 3363:
case 1868:
case 86:
case 3946:
case 1061:
case 1733:
case 2292:
case 3962:
case 563:
case 1292:
case 2799:
case 3887:
case 4044:
case 2180:
case 311:
case 1876:
case 1658:
case 2102:
case 2711:
case 337:
case 1928:
case 68:
case 3199:
case 818:
case 3780:
case 1784:
case 271:
case 3049:
case 3856:
case 3678:
case 3536:
case 3053:
case 556:
case 135:
case 1351:
case 2658:
case 3487:
case 4061:
case 2468:
case 3965:
case 2295:
case 406:
case 1044:
case 906:
case 1468:
case 2897:
case 879:
case 3645:
case 3825:
case 935:
case 1937:
case 650:
case 4073:
case 39:
case 971:
case 2476:
case 2189:
case 2790:
case 3422:
case 1189:
case 1476:
case 471:
case 3794:
case 435:
case 3227:
case 3307:
case 1204:
case 2937:
case 3200:
case 3429:
case 3960:
case 2290:
case 1964:
case 2644:
case 2704:
case 810:
case 1644:
case 3640:
case 966:
case 1397:
case 494:
case 3195:
case 245:
case 3782:
case 3:
case 485:
case 2127:
case 2100:
case 3325:
case 985:
case 3104:
case 1100:
case 1127:
case 1795:
case 3289:
case 829:
case 2211:
case 1185:
case 2941:
case 3387:
case 1284:
case 2368:
case 166:
case 1116:
case 3829:
case 2116:
case 2661:
case 2109:
case 1941:
case 3738:
case 121:
case 658:
case 714:
case 194:
case 1299:
case 1058:
case 2138:
case 2424:
case 3785:
case 185:
case 2376:
case 3649:
case 1376:
case 2851:
case 285:
case 3653:
case 253:
case 445:
case 3420:
case 2233:
case 387:
case 2058:
case 3923:
case 2299:
case 3969:
case 3407:
case 63:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760205602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,];
var gg_b = "1760205602/";

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
