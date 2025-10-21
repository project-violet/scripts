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
case 583:
case 3807:
case 835:
case 3279:
case 1188:
case 1635:
case 538:
case 226:
case 1380:
case 3747:
case 1234:
case 425:
case 1660:
case 566:
case 1146:
case 2805:
case 1690:
case 3376:
case 3447:
case 2062:
case 1895:
case 2431:
case 3683:
case 1641:
case 2320:
case 2729:
case 2194:
case 78:
case 441:
case 2128:
case 662:
case 229:
case 3363:
case 120:
case 1979:
case 2289:
case 2161:
case 1231:
case 971:
case 775:
case 3929:
case 2696:
case 1153:
case 3563:
case 721:
case 603:
case 3945:
case 2822:
case 149:
case 2386:
case 941:
case 987:
case 855:
case 1644:
case 1025:
case 2434:
case 2836:
case 1580:
case 1101:
case 270:
case 2666:
case 2348:
case 3087:
case 284:
case 2947:
case 179:
case 1453:
case 2325:
case 3913:
case 1086:
case 2461:
case 467:
case 1592:
case 1048:
case 1841:
case 2791:
case 2800:
case 3883:
case 2502:
case 3333:
case 2605:
case 2349:
case 210:
case 1701:
case 3327:
case 1753:
case 715:
case 223:
case 116:
case 2288:
case 1665:
case 1264:
case 801:
case 1835:
case 1630:
case 1577:
case 1401:
case 2440:
case 355:
case 1385:
case 2246:
case 563:
case 3607:
case 3527:
case 143:
case 2464:
case 1362:
case 2866:
case 1240:
case 2413:
case 1704:
case 1020:
case 967:
case 1682:
case 2129:
case 1585:
case 3961:
case 1844:
case 2525:
case 173:
case 1261:
case 2131:
case 2253:
case 3940:
case 3278:
case 2896:
case 2713:
case 1806:
case 606:
case 2549:
case 411:
case 68:
case 1375:
case 3494:
case 2533:
case 3302:
case 3549:
case 4040:
case 2147:
case 3622:
case 3131:
case 829:
case 956:
case 1901:
case 3253:
case 3080:
case 2278:
case 730:
case 1953:
case 3873:
case 2858:
case 1619:
case 826:
case 4061:
case 3636:
case 235:
case 436:
case 1063:
case 3129:
case 3794:
case 2961:
case 3145:
case 1076:
case 2527:
case 364:
case 1014:
case 3491:
case 1697:
case 3026:
case 255:
case 2152:
case 1904:
case 1179:
case 645:
case 4028:
case 323:
case 3761:
case 2994:
case 1823:
case 50:
case 3134:
case 870:
case 1837:
case 193:
case 1988:
case 3791:
case 3800:
case 2883:
case 3502:
case 2054:
case 703:
case 621:
case 3349:
case 968:
case 3325:
case 2913:
case 1946:
case 2659:
case 1667:
case 840:
case 4013:
case 750:
case 370:
case 4031:
case 2452:
case 3191:
case 1989:
case 8:
case 1033:
case 433:
case 1354:
case 2593:
case 3434:
case 3836:
case 2658:
case 1819:
case 1479:
case 4045:
case 3085:
case 900:
case 2945:
case 810:
case 3734:
case 2929:
case 782:
case 1178:
case 2212:
case 2514:
case 3729:
case 795:
case 3128:
case 1351:
case 2363:
case 2859:
case 706:
case 4034:
case 105:
case 1412:
case 2376:
case 3805:
case 1570:
case 3600:
case 3745:
case 3431:
case 1623:
case 3429:
case 3113:
case 1252:
case 2511:
case 2807:
case 2279:
case 326:
case 400:
case 199:
case 3164:
case 3819:
case 3503:
case 3479:
case 1836:
case 2245:
case 246:
case 1386:
case 98:
case 1434:
case 445:
case 2025:
case 2644:
case 2049:
case 184:
case 1191:
case 3033:
case 3354:
case 4012:
case 170:
case 1140:
case 2912:
case 3779:
case 3370:
case 893:
case 3178:
case 1289:
case 2606:
case 1734:
case 475:
case 3247:
case 2231:
case 1085:
case 2326:
case 1822:
case 3551:
case 552:
case 560:
case 3637:
case 2641:
case 1600:
case 1745:
case 1431:
case 2895:
case 639:
case 2690:
case 1952:
case 1805:
case 3872:
case 305:
case 2526:
case 1077:
case 220:
case 3618:
case 1194:
case 3867:
case 396:
case 741:
case 1729:
case 1320:
case 787:
case 213:
case 1731:
case 668:
case 725:
case 921:
case 3897:
case 2532:
case 3303:
case 2830:
case 1586:
case 2660:
case 1113:
case 3554:
case 2865:
case 1548:
case 1092:
case 975:
case 1429:
case 1080:
case 1253:
case 3901:
case 3112:
case 1525:
case 1764:
case 805:
case 3093:
case 1622:
case 1131:
case 273:
case 711:
case 3375:
case 1494:
case 2806:
case 1549:
case 2404:
case 2746:
case 1713:
case 2291:
case 2377:
case 2682:
case 1728:
case 2844:
case 1794:
case 4078:
case 653:
case 1873:
case 2240:
case 899:
case 2020:
case 1636:
case 2978:
case 2446:
case 1288:
case 3823:
case 216:
case 2264:
case 415:
case 3179:
case 2401:
case 1026:
case 1246:
case 2385:
case 1491:
case 688:
case 3697:
case 3667:
case 1461:
case 2453:
case 3478:
case 3818:
case 574:
case 3575:
case 1204:
case 3387:
case 110:
case 1740:
case 2890:
case 1605:
case 393:
case 2695:
case 2841:
case 219:
case 876:
case 2575:
case 4088:
case 1054:
case 3701:
case 2387:
case 3048:
case 2988:
case 1964:
case 3841:
case 319:
case 231:
case 1913:
case 3453:
case 1659:
case 759:
case 2946:
case 3213:
case 3577:
case 3401:
case 1607:
case 846:
case 1152:
case 2697:
case 2823:
case 4004:
case 1994:
case 316:
case 1070:
case 3562:
case 1327:
case 2904:
case 879:
case 3753:
case 2179:
case 3291:
case 736:
case 135:
case 4053:
case 3585:
case 2063:
case 3446:
case 3704:
case 768:
case 1527:
case 3806:
case 2375:
case 462:
case 687:
case 641:
case 1003:
case 430:
case 2901:
case 2112:
case 1278:
case 1147:
case 2093:
case 3261:
case 739:
case 3660:
case 753:
case 843:
case 2252:
case 3865:
case 313:
case 3188:
case 1747:
case 3789:
case 2303:
case 3380:
case 2712:
case 1279:
case 1511:
case 3104:
case 205:
case 611:
case 320:
case 1859:
case 296:
case 495:
case 1934:
case 2351:
case 2637:
case 2872:
case 1945:
case 1563:
case 349:
case 1752:
case 909:
case 819:
case 2779:
case 1514:
case 1212:
case 2178:
case 53:
case 482:
case 2247:
case 376:
case 3231:
case 2027:
case 2989:
case 733:
case 3049:
case 1087:
case 2354:
case 816:
case 1452:
case 788:
case 3912:
case 3332:
case 2819:
case 1658:
case 906:
case 3245:
case 995:
case 1311:
case 3644:
case 171:
case 2427:
case 4002:
case 2650:
case 1992:
case 3725:
case 3564:
case 3262:
case 3148:
case 3809:
case 187:
case 1977:
case 3857:
case 2079:
case 729:
case 1170:
case 420:
case 3425:
case 1378:
case 517:
case 306:
case 2727:
case 3594:
case 1487:
case 3449:
case 1052:
case 979:
case 2275:
case 862:
case 3561:
case 2176:
case 1985:
case 3608:
case 449:
case 1578:
case 3402:
case 1815:
case 803:
case 3328:
case 3927:
case 382:
case 1233:
case 2287:
case 1227:
case 770:
case 3933:
case 1047:
case 1656:
case 3089:
case 2949:
case 2193:
case 784:
case 2012:
case 479:
case 655:
case 3364:
case 3540:
case 245:
case 1775:
case 2671:
case 446:
case 3313:
case 2925:
case 3842:
case 920:
case 419:
case 2347:
case 943:
case 4048:
case 3331:
case 2414:
case 2793:
case 1843:
case 303:
case 2948:
case 52:
case 710:
case 4086:
case 1932:
case 26:
case 3102:
case 3420:
case 167:
case 3911:
case 350:
case 2714:
case 3609:
case 2776:
case 3232:
case 2493:
case 7:
case 601:
case 723:
case 1751:
case 215:
case 3720:
case 2254:
case 3004:
case 3963:
case 3884:
case 3545:
case 577:
case 1293:
case 3486:
case 2078:
case 2920:
case 809:
case 2411:
case 3053:
case 3280:
case 764:
case 443:
case 3976:
case 3529:
case 3448:
case 1856:
case 1470:
case 1810:
case 362:
case 3531:
case 1615:
case 916:
case 1512:
case 3786:
case 806:
case 473:
case 3808:
case 2251:
case 1980:
case 3748:
case 2133:
case 3149:
case 1187:
case 504:
case 1426:
case 4093:
case 1040:
case 3251:
case 3133:
case 1898:
case 88:
case 2993:
case 2149:
case 1824:
case 1091:
case 230:
case 2125:
case 3547:
case 1732:
case 2531:
case 1726:
case 1638:
case 3352:
case 4014:
case 168:
case 626:
case 2963:
case 3127:
case 2884:
case 1868:
case 2642:
case 136:
case 2486:
case 3920:
case 1617:
case 3411:
case 3871:
case 3203:
case 2280:
case 1951:
case 3850:
case 1248:
case 1177:
case 3254:
case 2329:
case 2004:
case 2345:
case 3714:
case 2609:
case 755:
case 951:
case 2232:
case 1162:
case 684:
case 845:
case 1192:
case 3463:
case 159:
case 1669:
case 3986:
case 2657:
case 36:
case 2102:
case 2420:
case 2226:
case 250:
case 2911:
case 431:
case 640:
case 3347:
case 3874:
case 2331:
case 578:
case 3270:
case 3476:
case 203:
case 1839:
case 1501:
case 1817:
case 1477:
case 996:
case 345:
case 3671:
case 6:
case 2313:
case 2591:
case 3925:
case 1792:
case 623:
case 2285:
case 1031:
case 3949:
case 815:
case 2089:
case 3012:
case 1388:
case 518:
case 133:
case 4033:
case 1180:
case 2364:
case 4027:
case 2402:
case 2120:
case 2394:
case 2328:
case 282:
case 1304:
case 1029:
case 1492:
case 3163:
case 1249:
case 1762:
case 1225:
case 1698:
case 1045:
case 321:
case 3114:
case 2681:
case 2528:
case 2449:
case 3275:
case 1504:
case 1126:
case 3079:
case 2857:
case 295:
case 2361:
case 2425:
case 1034:
case 1353:
case 3727:
case 206:
case 1899:
case 209:
case 1301:
case 3733:
case 2148:
case 790:
case 664:
case 1485:
case 2391:
case 2277:
case 499:
case 2513:
case 2809:
case 1546:
case 3902:
case 2186:
case 1975:
case 153:
case 1588:
case 2725:
case 2262:
case 1621:
case 3388:
case 779:
case 2103:
case 2227:
case 1949:
case 2656:
case 2047:
case 388:
case 145:
case 746:
case 391:
case 3501:
case 2775:
case 121:
case 749:
case 2578:
case 4085:
case 1114:
case 3762:
case 2985:
case 1176:
case 3045:
case 3029:
case 2233:
case 3304:
case 3249:
case 1287:
case 2815:
case 3777:
case 2151:
case 175:
case 839:
case 3353:
case 3034:
case 4077:
case 51:
case 429:
case 287:
case 1275:
case 3504:
case 3202:
case 4062:
case 651:
case 1433:
case 3785:
case 3639:
case 1650:
case 3588:
case 353:
case 3621:
case 3975:
case 1902:
case 300:
case 426:
case 2154:
case 3301:
case 836:
case 1733:
case 605:
case 2615:
case 2512:
case 3589:
case 2810:
case 2470:
case 1547:
case 54:
case 1133:
case 2187:
case 3824:
case 4080:
case 3040:
case 3903:
case 1251:
case 1920:
case 1078:
case 336:
case 1203:
case 592:
case 1871:
case 3061:
case 1127:
case 57:
case 800:
case 2770:
case 3868:
case 2293:
case 2379:
case 1352:
case 3726:
case 464:
case 853:
case 2454:
case 3699:
case 891:
case 1493:
case 3162:
case 3480:
case 1655:
case 2751:
case 716:
case 423:
case 1254:
case 3970:
case 3248:
case 4:
case 3094:
case 3821:
case 833:
case 1270:
case 410:
case 1793:
case 3064:
case 1948:
case 2312:
case 1476:
case 527:
case 1816:
case 964:
case 2703:
case 16:
case 2451:
case 3013:
case 4032:
case 3192:
case 3669:
case 359:
case 2932:
case 1102:
case 731:
case 1657:
case 3175:
case 2013:
case 3451:
case 150:
case 1226:
case 676:
case 3932:
case 649:
case 2064:
case 1881:
case 3312:
case 1088:
case 2780:
case 1331:
case 2177:
case 4070:
case 1004:
case 2028:
case 59:
case 646:
case 2248:
case 2699:
case 256:
case 1534:
case 1232:
case 3579:
case 3403:
case 2480:
case 3926:
case 871:
case 1448:
case 3856:
case 1976:
case 2638:
case 3454:
case 2617:
case 528:
case 236:
case 435:
case 1334:
case 1545:
case 2061:
case 1963:
case 4051:
case 2432:
case 3293:
case 1748:
case 3263:
case 751:
case 955:
case 4003:
case 2824:
case 1993:
case 1808:
case 2220:
case 1001:
case 239:
case 1786:
case 3512:
case 3470:
case 2589:
case 162:
case 1531:
case 1809:
case 325:
case 1277:
case 1391:
case 200:
case 3154:
case 109:
case 1340:
case 1749:
case 534:
case 2485:
case 643:
case 2588:
case 1186:
case 3052:
case 1292:
case 1681:
case 3643:
case 1594:
case 2785:
case 1449:
case 3962:
case 1528:
case 3170:
case 106:
case 2869:
case 3378:
case 341:
case 387:
case 1361:
case 3233:
case 2304:
case 3610:
case 3815:
case 1120:
case 512:
case 1328:
case 1608:
case 990:
case 1684:
case 1313:
case 2792:
case 2477:
case 2817:
case 1702:
case 554:
case 233:
case 1364:
case 4087:
case 1933:
case 3227:
case 2987:
case 288:
case 3656:
case 1518:
case 812:
case 3269:
case 4009:
case 63:
case 3742:
case 3396:
case 902:
case 924:
case 1875:
case 1415:
case 3802:
case 3955:
case 2072:
case 744:
case 3366:
case 2067:
case 2150:
case 3299:
case 3373:
case 2611:
case 1715:
case 2957:
case 285:
case 1059:
case 834:
case 292:
case 3566:
case 177:
case 27:
case 3757:
case 2455:
case 1323:
case 1603:
case 3409:
case 3573:
case 2693:
case 511:
case 3082:
case 2942:
case 1318:
case 2755:
case 4042:
case 147:
case 181:
case 3300:
case 2383:
case 3709:
case 1337:
case 708:
case 3108:
case 2676:
case 3849:
case 2811:
case 466:
case 2507:
case 265:
case 1597:
case 1319:
case 1710:
case 1939:
case 3848:
case 525:
case 2037:
case 3221:
case 438:
case 2981:
case 3708:
case 334:
case 828:
case 1274:
case 958:
case 1572:
case 3060:
case 3602:
case 3239:
case 541:
case 3784:
case 587:
case 1216:
case 1410:
case 2243:
case 732:
case 3035:
case 694:
case 3322:
case 3408:
case 469:
case 1687:
case 3305:
case 2416:
case 938:
case 1443:
case 752:
case 3971:
case 966:
case 161:
case 1115:
case 2359:
case 2984:
case 3625:
case 2307:
case 1924:
case 3268:
case 2716:
case 1803:
case 969:
case 3536:
case 1397:
case 2908:
case 714:
case 2774:
case 2256:
case 3142:
case 3006:
case 2627:
case 354:
case 1365:
case 1117:
case 3256:
case 2142:
case 591:
case 1421:
case 3450:
case 118:
case 2781:
case 3307:
case 644:
case 885:
case 1685:
case 1138:
case 2268:
case 1284:
case 957:
case 1582:
case 1739:
case 1208:
case 73:
case 827:
case 2224:
case 4071:
case 1721:
case 3863:
case 3876:
case 674:
case 2481:
case 1395:
case 3474:
case 2035:
case 1424:
case 608:
case 84:
case 75:
case 1498:
case 2322:
case 1826:
case 2505:
case 3771:
case 3023:
case 3243:
case 1281:
case 2950:
case 1798:
case 500:
case 3037:
case 2916:
case 1000:
case 87:
case 1943:
case 1199:
case 3981:
case 1724:
case 2041:
case 1565:
case 892:
case 2708:
case 553:
case 3811:
case 1677:
case 3155:
case 3018:
case 2886:
case 1832:
case 1341:
case 2709:
case 3614:
case 2300:
case 3383:
case 660:
case 2849:
case 3942:
case 2825:
case 2457:
case 1036:
case 1680:
case 2573:
case 568:
case 1885:
case 865:
case 3693:
case 1544:
case 1022:
case 1499:
case 1360:
case 392:
case 2184:
case 2566:
case 37:
case 2757:
case 3455:
case 272:
case 1121:
case 3067:
case 1632:
case 2442:
case 1535:
case 2299:
case 1344:
case 1209:
case 3957:
case 29:
case 385:
case 197:
case 1877:
case 1417:
case 556:
case 1005:
case 614:
case 1862:
case 2648:
case 0:
case 2095:
case 2500:
case 1892:
case 2396:
case 4055:
case 1717:
case 1306:
case 559:
case 2802:
case 2955:
case 1626:
case 3174:
case 3116:
case 1139:
case 652:
case 3097:
case 2181:
case 2651:
case 1755:
case 3036:
case 2917:
case 281:
case 2110:
case 304:
case 3799:
case 3390:
case 3506:
case 322:
case 3198:
case 1833:
case 657:
case 3341:
case 1215:
case 2337:
case 944:
case 702:
case 277:
case 724:
case 3915:
case 3168:
case 1827:
case 3360:
case 3242:
case 980:
case 3885:
case 1693:
case 3022:
case 2603:
case 348:
case 3862:
case 444:
case 1072:
case 908:
case 3005:
case 2715:
case 3877:
case 818:
case 3417:
case 2059:
case 1957:
case 515:
case 3121:
case 3632:
case 1116:
case 1097:
case 378:
case 2518:
case 3626:
case 2007:
case 3257:
case 1909:
case 22:
case 3590:
case 3306:
case 3541:
case 637:
case 1583:
case 2537:
case 2271:
case 4024:
case 2519:
case 414:
case 3880:
case 1774:
case 1908:
case 960:
case 3685:
case 1893:
case 2924:
case 318:
case 3330:
case 2998:
case 3284:
case 1716:
case 3421:
case 545:
case 1450:
case 1627:
case 848:
case 1814:
case 3395:
case 521:
case 3956:
case 3439:
case 2968:
case 1750:
case 1863:
case 575:
case 878:
case 4068:
case 2367:
case 2058:
case 3208:
case 3595:
case 2921:
case 3169:
case 432:
case 1023:
case 3692:
case 3281:
case 3768:
case 2410:
case 2572:
case 4021:
case 822:
case 2274:
case 2675:
case 804:
case 217:
case 1559:
case 3424:
case 3498:
case 2756:
case 2710:
case 2319:
case 3832:
case 1507:
case 1811:
case 165:
case 2854:
case 4039:
case 783:
case 2456:
case 738:
case 3798:
case 3724:
case 3565:
case 3000:
case 3943:
case 1708:
case 1916:
case 2662:
case 1221:
case 1848:
case 3456:
case 3939:
case 1041:
case 2724:
case 3083:
case 3319:
case 2468:
case 2832:
case 624:
case 3710:
case 1336:
case 1484:
case 1886:
case 2677:
case 93:
case 2826:
case 881:
case 2498:
case 3567:
case 1784:
case 1239:
case 1950:
case 3870:
case 1060:
case 3274:
case 3675:
case 506:
case 898:
case 1602:
case 82:
case 1522:
case 3968:
case 1224:
case 1625:
case 1298:
case 1971:
case 582:
case 2073:
case 3851:
case 3115:
case 3058:
case 737:
case 1820:
case 361:
case 2066:
case 1649:
case 1305:
case 3687:
case 2956:
case 2439:
case 3443:
case 2421:
case 1142:
case 686:
case 154:
case 2096:
case 2117:
case 4010:
case 1536:
case 3803:
case 3743:
case 2685:
case 663:
case 1781:
case 3924:
case 3998:
case 2330:
case 95:
case 2582:
case 2284:
case 2590:
case 2717:
case 2306:
case 2541:
case 1065:
case 1500:
case 142:
case 550:
case 3537:
case 1396:
case 1742:
case 2892:
case 1269:
case 2738:
case 3999:
case 1181:
case 3007:
case 2257:
case 32:
case 3715:
case 297:
case 1686:
case 3969:
case 2632:
case 172:
case 70:
case 1299:
case 658:
case 407:
case 1373:
case 2535:
case 1648:
case 1095:
case 3523:
case 3654:
case 2005:
case 994:
case 2242:
case 3156:
case 683:
case 3603:
case 1217:
case 638:
case 377:
case 128:
case 666:
case 1238:
case 4015:
case 2769:
case 2360:
case 3887:
case 817:
case 204:
case 2390:
case 1849:
case 2799:
case 3938:
case 669:
case 222:
case 2506:
case 1300:
case 1709:
case 2341:
case 1108:
case 530:
case 1596:
case 3337:
case 562:
case 347:
case 3917:
case 2036:
case 381:
case 1457:
case 1082:
case 2469:
case 3110:
case 1825:
case 3574:
case 3272:
case 2736:
case 1604:
case 1539:
case 612:
case 2628:
case 977:
case 3516:
case 2295:
case 1141:
case 189:
case 274:
case 1997:
case 3183:
case 4007:
case 3267:
case 727:
case 2308:
case 1190:
case 1009:
case 2907:
case 1057:
case 1368:
case 2959:
case 2436:
case 3297:
case 2834:
case 654:
case 785:
case 981:
case 2069:
case 1482:
case 2664:
case 163:
case 2722:
case 244:
case 1688:
case 3550:
case 3905:
case 998:
case 1972:
case 1568:
case 3922:
case 2584:
case 92:
case 3219:
case 2166:
case 1236:
case 3407:
case 3571:
case 543:
case 1601:
case 2705:
case 2640:
case 3015:
case 3158:
case 1321:
case 3350:
case 792:
case 2829:
case 1144:
case 77:
case 102:
case 124:
case 3374:
case 1495:
case 2831:
case 1889:
case 208:
case 394:
case 3847:
case 3316:
case 1339:
case 3707:
case 498:
case 1919:
case 1653:
case 2508:
case 1524:
case 85:
case 1222:
case 2661:
case 481:
case 74:
case 1598:
case 2466:
case 4083:
case 3652:
case 3555:
case 1130:
case 3900:
case 1081:
case 3223:
case 1444:
case 1706:
case 1317:
case 628:
case 765:
case 2813:
case 2509:
case 2766:
case 1200:
case 2241:
case 71:
case 1406:
case 894:
case 1804:
case 3758:
case 1084:
case 461:
case 642:
case 2357:
case 2068:
case 33:
case 1760:
case 2958:
case 3973:
case 576:
case 1296:
case 2400:
case 2122:
case 3056:
case 1689:
case 2206:
case 1538:
case 3010:
case 2629:
case 3355:
case 1182:
case 917:
case 2136:
case 69:
case 579:
case 1790:
case 1801:
case 2244:
case 2542:
case 2098:
case 2891:
case 1435:
case 1741:
case 807:
case 2024:
case 2645:
case 2700:
case 3840:
case 3244:
case 1737:
case 3024:
case 314:
case 3891:
case 2783:
case 3309:
case 1423:
case 2355:
case 1906:
case 844:
case 1119:
case 754:
case 1718:
case 1515:
case 3631:
case 2483:
case 3122:
case 2056:
case 1437:
case 3206:
case 352:
case 880:
case 3068:
case 1878:
case 2973:
case 874:
case 1071:
case 1283:
case 3241:
case 1050:
case 505:
case 1315:
case 1167:
case 2237:
case 3021:
case 596:
case 3773:
case 3290:
case 3496:
case 1960:
case 1172:
case 3105:
case 918:
case 3557:
case 25:
case 157:
case 3634:
case 692:
case 3342:
case 1679:
case 3473:
case 3509:
case 3466:
case 599:
case 1074:
case 3260:
case 2555:
case 3039:
case 1016:
case 2459:
case 2936:
case 61:
case 3508:
case 3196:
case 4036:
case 3661:
case 1982:
case 832:
case 3831:
case 1510:
case 1797:
case 2316:
case 3405:
case 1812:
case 1472:
case 422:
case 2707:
case 728:
case 2350:
case 2759:
case 3173:
case 3829:
case 1556:
case 3584:
case 3282:
case 3691:
case 2219:
case 2407:
case 4005:
case 3722:
case 2550:
case 344:
case 3265:
case 904:
case 2905:
case 2852:
case 1419:
case 772:
case 814:
case 3230:
case 2371:
case 497:
case 79:
case 1123:
case 3069:
case 374:
case 3099:
case 3422:
case 380:
case 3907:
case 593:
case 531:
case 2574:
case 1118:
case 1055:
case 2272:
case 3736:
case 1719:
case 1310:
case 1543:
case 3581:
case 798:
case 2339:
case 2730:
case 1405:
case 3343:
case 1381:
case 3797:
case 2889:
case 3510:
case 1661:
case 2222:
case 44:
case 2042:
case 781:
case 3982:
case 3467:
case 3678:
case 2653:
case 1166:
case 2236:
case 1640:
case 1705:
case 2601:
case 1691:
case 1584:
case 202:
case 2144:
case 777:
case 47:
case 2465:
case 1173:
case 5:
case 1834:
case 485:
case 3123:
case 286:
case 1436:
case 3207:
case 3879:
case 2368:
case 2057:
case 2646:
case 1613:
case 4067:
case 2972:
case 3356:
case 2135:
case 144:
case 1722:
case 263:
case 1295:
case 2539:
case 3543:
case 3118:
case 3719:
case 3310:
case 837:
case 2009:
case 2190:
case 3930:
case 1099:
case 1100:
case 174:
case 289:
case 1308:
case 3137:
case 510:
case 1136:
case 2266:
case 1629:
case 2538:
case 3906:
case 91:
case 1542:
case 1244:
case 1700:
case 80:
case 648:
case 1645:
case 2435:
case 1891:
case 2517:
case 2790:
case 2273:
case 2399:
case 1958:
case 3418:
case 2760:
case 3723:
case 1861:
case 1068:
case 1357:
case 337:
case 2441:
case 2735:
case 678:
case 1206:
case 2689:
case 2296:
case 3515:
case 2569:
case 622:
case 269:
case 2195:
case 3935:
case 160:
case 357:
case 1773:
case 1496:
case 529:
case 3050:
case 3283:
case 3167:
case 3315:
case 2406:
case 717:
case 3197:
case 1983:
case 238:
case 2130:
case 3074:
case 1796:
case 2846:
case 1342:
case 1473:
case 1813:
case 1509:
case 465:
case 2444:
case 2706:
case 266:
case 2317:
case 2165:
case 3918:
case 912:
case 677:
case 3599:
case 3317:
case 2197:
case 3081:
case 434:
case 383:
case 2016:
case 3937:
case 590:
case 1652:
case 4041:
case 3338:
case 1107:
case 824:
case 1555:
case 802:
case 681:
case 3804:
case 1758:
case 3200:
case 4060:
case 1237:
case 3406:
case 3744:
case 698:
case 2172:
case 1218:
case 257:
case 4035:
case 3689:
case 2437:
case 1056:
case 1647:
case 62:
case 2612:
case 1966:
case 2515:
case 2878:
case 3760:
case 412:
case 2071:
case 2944:
case 13:
case 2737:
case 1783:
case 3435:
case 3008:
case 3399:
case 3790:
case 3273:
case 454:
case 4006:
case 3538:
case 1010:
case 2906:
case 1355:
case 2423:
case 3324:
case 2259:
case 3190:
case 3009:
case 2930:
case 778:
case 389:
case 1267:
case 3782:
case 2965:
case 2543:
case 442:
case 2055:
case 1574:
case 661:
case 928:
case 4065:
case 2719:
case 748:
case 1905:
case 2995:
case 555:
case 3688:
case 363:
case 2123:
case 3482:
case 3967:
case 107:
case 2419:
case 3646:
case 2879:
case 3160:
case 3144:
case 2767:
case 2556:
case 838:
case 324:
case 3465:
case 1158:
case 1015:
case 883:
case 428:
case 1759:
case 942:
case 1407:
case 3236:
case 3601:
case 3430:
case 3568:
case 1922:
case 2497:
case 3524:
case 3765:
case 2982:
case 99:
case 3042:
case 2467:
case 3106:
case 1936:
case 3919:
case 4082:
case 3653:
case 704:
case 3730:
case 3339:
case 2812:
case 1374:
case 3495:
case 1847:
case 194:
case 3889:
case 2510:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761037202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,];
var gg_b = "1761037202/";

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
