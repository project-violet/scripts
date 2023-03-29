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
case 3740:
case 952:
case 3966:
case 2907:
case 4087:
case 2275:
case 225:
case 2765:
case 1066:
case 528:
case 2738:
case 3443:
case 933:
case 431:
case 3163:
case 965:
case 502:
case 1372:
case 2166:
case 3053:
case 2983:
case 3483:
case 2076:
case 2433:
case 2555:
case 1148:
case 1811:
case 1206:
case 3135:
case 76:
case 2833:
case 1780:
case 2720:
case 1800:
case 3440:
case 3215:
case 3523:
case 2860:
case 2590:
case 2534:
case 3629:
case 1542:
case 1788:
case 3348:
case 3714:
case 3177:
case 552:
case 805:
case 967:
case 295:
case 3272:
case 3824:
case 1217:
case 2761:
case 2014:
case 3185:
case 3600:
case 1437:
case 3488:
case 2748:
case 3574:
case 1860:
case 1513:
case 3665:
case 1763:
case 2428:
case 342:
case 914:
case 1443:
case 1695:
case 1990:
case 2970:
case 2397:
case 3551:
case 3019:
case 1781:
case 1313:
case 217:
case 279:
case 3424:
case 1649:
case 1023:
case 2503:
case 1574:
case 1969:
case 2808:
case 3486:
case 1201:
case 2669:
case 1103:
case 2834:
case 2649:
case 1410:
case 4019:
case 369:
case 3519:
case 3586:
case 3159:
case 1603:
case 2058:
case 2830:
case 1568:
case 3321:
case 2089:
case 2220:
case 3925:
case 736:
case 3476:
case 452:
case 2732:
case 3076:
case 532:
case 725:
case 3894:
case 463:
case 2655:
case 836:
case 371:
case 3314:
case 378:
case 3822:
case 3773:
case 2799:
case 3890:
case 244:
case 1857:
case 3637:
case 3049:
case 1418:
case 3784:
case 1490:
case 1731:
case 1948:
case 1093:
case 1272:
case 230:
case 2150:
case 1791:
case 1861:
case 4041:
case 1646:
case 3022:
case 2734:
case 2168:
case 2048:
case 2492:
case 3796:
case 1241:
case 3875:
case 3275:
case 2136:
case 1346:
case 618:
case 481:
case 3099:
case 4014:
case 265:
case 2193:
case 2313:
case 3980:
case 2070:
case 1605:
case 2782:
case 3806:
case 3771:
case 2663:
case 1276:
case 2525:
case 2362:
case 2923:
case 1951:
case 466:
case 3245:
case 424:
case 589:
case 2267:
case 781:
case 3623:
case 1496:
case 2747:
case 3674:
case 3746:
case 1872:
case 4080:
case 213:
case 1680:
case 3579:
case 3775:
case 4008:
case 542:
case 2451:
case 1053:
case 1940:
case 2609:
case 416:
case 2473:
case 3993:
case 1409:
case 1399:
case 1366:
case 3758:
case 3418:
case 211:
case 1247:
case 2805:
case 482:
case 3399:
case 2633:
case 716:
case 3029:
case 3212:
case 3064:
case 3863:
case 730:
case 1071:
case 607:
case 1003:
case 1579:
case 556:
case 1493:
case 1762:
case 3787:
case 2263:
case 2095:
case 3782:
case 1257:
case 2873:
case 2414:
case 2749:
case 1657:
case 2938:
case 3792:
case 3280:
case 2719:
case 1735:
case 597:
case 4088:
case 1249:
case 1531:
case 1745:
case 1720:
case 3063:
case 2876:
case 2862:
case 1310:
case 518:
case 1671:
case 4063:
case 2138:
case 2212:
case 3707:
case 1033:
case 2222:
case 851:
case 3225:
case 1164:
case 2211:
case 1737:
case 2523:
case 2691:
case 2684:
case 2771:
case 1042:
case 1182:
case 3142:
case 436:
case 1125:
case 2065:
case 2228:
case 828:
case 167:
case 2426:
case 1688:
case 3915:
case 843:
case 2928:
case 1129:
case 2891:
case 1989:
case 2294:
case 3917:
case 3365:
case 3461:
case 3426:
case 46:
case 1203:
case 1046:
case 375:
case 2186:
case 882:
case 537:
case 2892:
case 130:
case 3288:
case 2973:
case 1678:
case 3726:
case 3311:
case 1208:
case 2648:
case 2156:
case 2034:
case 1621:
case 2739:
case 400:
case 2105:
case 892:
case 2470:
case 2578:
case 1242:
case 3826:
case 3437:
case 3056:
case 1200:
case 2545:
case 2409:
case 706:
case 4048:
case 239:
case 3182:
case 714:
case 2245:
case 2368:
case 697:
case 1481:
case 2285:
case 3948:
case 3810:
case 1045:
case 3645:
case 2914:
case 1439:
case 2912:
case 3834:
case 2853:
case 1877:
case 3802:
case 2174:
case 3249:
case 298:
case 3499:
case 3270:
case 1298:
case 2651:
case 430:
case 110:
case 1269:
case 126:
case 2758:
case 1675:
case 1658:
case 2375:
case 1593:
case 1550:
case 3320:
case 131:
case 34:
case 134:
case 3060:
case 3664:
case 1607:
case 993:
case 2383:
case 1239:
case 1088:
case 2968:
case 2570:
case 3046:
case 1171:
case 348:
case 2205:
case 2203:
case 3294:
case 1687:
case 3842:
case 2948:
case 1630:
case 1755:
case 1852:
case 3323:
case 637:
case 3606:
case 2324:
case 4001:
case 1432:
case 2787:
case 1729:
case 506:
case 3174:
case 103:
case 717:
case 2643:
case 1347:
case 3683:
case 4027:
case 143:
case 1368:
case 1672:
case 2206:
case 753:
case 3324:
case 415:
case 1226:
case 1620:
case 3874:
case 4073:
case 1619:
case 52:
case 3604:
case 1690:
case 1728:
case 2507:
case 164:
case 4049:
case 3468:
case 3238:
case 107:
case 3670:
case 3508:
case 3218:
case 948:
case 204:
case 3682:
case 1901:
case 2660:
case 3556:
case 3000:
case 2619:
case 1833:
case 2387:
case 939:
case 2299:
case 3542:
case 1885:
case 513:
case 2780:
case 1497:
case 2088:
case 540:
case 2120:
case 982:
case 567:
case 3266:
case 2303:
case 564:
case 2953:
case 2029:
case 4070:
case 521:
case 199:
case 1828:
case 853:
case 3672:
case 1787:
case 1814:
case 565:
case 1874:
case 3700:
case 1044:
case 1700:
case 1007:
case 2872:
case 942:
case 1167:
case 1158:
case 726:
case 2326:
case 22:
case 3832:
case 1450:
case 3032:
case 3506:
case 1752:
case 4069:
case 1631:
case 3552:
case 3694:
case 1887:
case 2825:
case 3494:
case 4055:
case 2484:
case 1072:
case 1379:
case 2614:
case 2913:
case 3090:
case 1154:
case 273:
case 3691:
case 2721:
case 1836:
case 1498:
case 2999:
case 1056:
case 237:
case 3958:
case 2001:
case 256:
case 3408:
case 238:
case 3267:
case 3353:
case 4046:
case 529:
case 825:
case 2859:
case 4005:
case 1146:
case 2462:
case 1997:
case 1985:
case 3001:
case 141:
case 425:
case 1207:
case 775:
case 2295:
case 1295:
case 475:
case 26:
case 4066:
case 1261:
case 4062:
case 3406:
case 277:
case 1782:
case 2017:
case 712:
case 2296:
case 2022:
case 1739:
case 702:
case 2485:
case 898:
case 1109:
case 3687:
case 3067:
case 1754:
case 592:
case 4084:
case 3613:
case 1993:
case 2868:
case 1029:
case 3239:
case 2955:
case 880:
case 679:
case 3972:
case 1645:
case 1705:
case 3083:
case 3095:
case 3920:
case 756:
case 2147:
case 366:
case 1598:
case 157:
case 222:
case 412:
case 2233:
case 2882:
case 1930:
case 1097:
case 1393:
case 276:
case 3870:
case 149:
case 3471:
case 139:
case 2110:
case 3007:
case 2141:
case 1540:
case 2620:
case 1198:
case 156:
case 2766:
case 1929:
case 3889:
case 3692:
case 2518:
case 2060:
case 1606:
case 18:
case 2463:
case 1875:
case 314:
case 3628:
case 3607:
case 1273:
case 3121:
case 6:
case 1299:
case 1560:
case 612:
case 2887:
case 1296:
case 2790:
case 3914:
case 3247:
case 762:
case 2588:
case 4033:
case 2002:
case 388:
case 3028:
case 1135:
case 1611:
case 2784:
case 2589:
case 2277:
case 2611:
case 1326:
case 2266:
case 2309:
case 1547:
case 3077:
case 563:
case 354:
case 1931:
case 67:
case 1343:
case 1501:
case 883:
case 116:
case 1169:
case 29:
case 2989:
case 1746:
case 3217:
case 2548:
case 39:
case 2786:
case 1151:
case 455:
case 3337:
case 917:
case 538:
case 810:
case 1187:
case 1160:
case 2021:
case 460:
case 1555:
case 2737:
case 1821:
case 2909:
case 3374:
case 1895:
case 3911:
case 2546:
case 1222:
case 2134:
case 3473:
case 191:
case 3907:
case 3517:
case 190:
case 1636:
case 3561:
case 815:
case 4021:
case 3617:
case 1822:
case 867:
case 859:
case 1017:
case 1712:
case 267:
case 3971:
case 1309:
case 3878:
case 724:
case 476:
case 3181:
case 641:
case 3582:
case 2954:
case 2064:
case 583:
case 2179:
case 878:
case 347:
case 938:
case 1530:
case 3550:
case 2848:
case 215:
case 3432:
case 732:
case 1382:
case 553:
case 364:
case 1613:
case 2005:
case 1427:
case 2226:
case 508:
case 2360:
case 1413:
case 3597:
case 1508:
case 3043:
case 1644:
case 796:
case 1058:
case 327:
case 998:
case 613:
case 1014:
case 1205:
case 2779:
case 2093:
case 2027:
case 3566:
case 2102:
case 888:
case 2075:
case 3209:
case 3170:
case 3783:
case 2634:
case 3146:
case 3513:
case 1736:
case 3996:
case 3883:
case 3563:
case 194:
case 1483:
case 1776:
case 2704:
case 3109:
case 1438:
case 353:
case 2576:
case 362:
case 1406:
case 839:
case 2367:
case 577:
case 992:
case 707:
case 3273:
case 2906:
case 3675:
case 2647:
case 186:
case 3963:
case 4011:
case 3262:
case 3036:
case 1403:
case 925:
case 758:
case 1516:
case 1829:
case 2905:
case 2238:
case 2996:
case 341:
case 1043:
case 1527:
case 792:
case 2526:
case 1629:
case 2227:
case 106:
case 325:
case 2585:
case 1041:
case 3309:
case 2078:
case 2726:
case 852:
case 663:
case 966:
case 2036:
case 1595:
case 1138:
case 1063:
case 3114:
case 2500:
case 2345:
case 1277:
case 1462:
case 3447:
case 1551:
case 1684:
case 3293:
case 2086:
case 1119:
case 1573:
case 874:
case 922:
case 3412:
case 248:
case 3178:
case 2236:
case 309:
case 177:
case 2131:
case 1589:
case 2448:
case 3167:
case 862:
case 777:
case 1841:
case 3301:
case 2306:
case 3349:
case 3429:
case 3377:
case 719:
case 3396:
case 330:
case 1140:
case 1022:
case 86:
case 1910:
case 1795:
case 614:
case 3540:
case 893:
case 2690:
case 1682:
case 2942:
case 1519:
case 2403:
case 2967:
case 2359:
case 2679:
case 2252:
case 2192:
case 2911:
case 1617:
case 257:
case 1911:
case 780:
case 2958:
case 2756:
case 1764:
case 1952:
case 2759:
case 2400:
case 2371:
case 4059:
case 1049:
case 3382:
case 3930:
case 461:
case 2672:
case 3711:
case 1928:
case 2483:
case 3157:
case 3327:
case 2154:
case 1638:
case 854:
case 2288:
case 1477:
case 56:
case 886:
case 2264:
case 3061:
case 2253:
case 1643:
case 372:
case 3790:
case 2051:
case 609:
case 1810:
case 3656:
case 189:
case 629:
case 1633:
case 693:
case 621:
case 1344:
case 92:
case 2639:
case 3516:
case 1120:
case 1902:
case 3254:
case 3454:
case 2539:
case 2415:
case 35:
case 627:
case 2333:
case 118:
case 290:
case 349:
case 1818:
case 1935:
case 3102:
case 1356:
case 601:
case 1060:
case 4017:
case 3162:
case 1110:
case 404:
case 1635:
case 863:
case 3646:
case 2318:
case 1297:
case 3101:
case 2310:
case 890:
case 4090:
case 2255:
case 2335:
case 591:
case 234:
case 2015:
case 2801:
case 3647:
case 1850:
case 2867:
case 2020:
case 1068:
case 37:
case 1696:
case 1268:
case 1756:
case 456:
case 1400:
case 3445:
case 3679:
case 3997:
case 2547:
case 3505:
case 2369:
case 4061:
case 260:
case 2794:
case 983:
case 2646:
case 95:
case 1108:
case 3537:
case 1759:
case 2389:
case 1214:
case 562:
case 135:
case 3957:
case 2612:
case 741:
case 497:
case 2731:
case 1440:
case 4038:
case 4052:
case 4015:
case 3947:
case 1830:
case 908:
case 3045:
case 2476:
case 2435:
case 3467:
case 3725:
case 2302:
case 252:
case 101:
case 3434:
case 1337:
case 1494:
case 322:
case 90:
case 3359:
case 3107:
case 659:
case 2246:
case 250:
case 2638:
case 288:
case 2946:
case 3633:
case 183:
case 2969:
case 2322:
case 2342:
case 1026:
case 447:
case 2239:
case 2000:
case 2271:
case 221:
case 630:
case 2528:
case 955:
case 3398:
case 2584:
case 3047:
case 1998:
case 2622:
case 2937:
case 420:
case 767:
case 2680:
case 915:
case 3999:
case 1325:
case 2752:
case 2128:
case 23:
case 1037:
case 3284:
case 4040:
case 3851:
case 2699:
case 2729:
case 900:
case 405:
case 1691:
case 2509:
case 1482:
case 85:
case 3860:
case 1127:
case 1622:
case 3240:
case 2817:
case 2412:
case 205:
case 3176:
case 2977:
case 3819:
case 1730:
case 1254:
case 3719:
case 3503:
case 1165:
case 3536:
case 3082:
case 2436:
case 2118:
case 816:
case 1673:
case 1383:
case 81:
case 1008:
case 2425:
case 3147:
case 3137:
case 596:
case 686:
case 970:
case 561:
case 2972:
case 2305:
case 2261:
case 2098:
case 2386:
case 433:
case 3998:
case 180:
case 3877:
case 3702:
case 2742:
case 2961:
case 2364:
case 1518:
case 1229:
case 1213:
case 733:
case 2592:
case 2472:
case 1202:
case 1300:
case 2630:
case 2917:
case 3643:
case 1464:
case 3609:
case 1725:
case 1783:
case 527:
case 1178:
case 3892:
case 1996:
case 3960:
case 3891:
case 1006:
case 2265:
case 2980:
case 1074:
case 2210:
case 1806:
case 2493:
case 1278:
case 3861:
case 1758:
case 3237:
case 3786:
case 936:
case 343:
case 1:
case 2444:
case 299:
case 3601:
case 2090:
case 2347:
case 665:
case 2019:
case 3093:
case 429:
case 62:
case 977:
case 3341:
case 1075:
case 3982:
case 1081:
case 3326:
case 2273:
case 1721:
case 2569:
case 1408:
case 3739:
case 674:
case 3439:
case 3592:
case 743:
case 2775:
case 3438:
case 2640:
case 1456:
case 1562:
case 1021:
case 3124:
case 3895:
case 240:
case 3287:
case 2443:
case 1973:
case 3279:
case 3291:
case 3233:
case 3612:
case 1015:
case 231:
case 2396:
case 3381:
case 470:
case 2198:
case 1627:
case 104:
case 1113:
case 2940:
case 511:
case 1378:
case 200:
case 899:
case 401:
case 1395:
case 3191:
case 919:
case 3206:
case 2035:
case 2072:
case 1324:
case 3458:
case 2327:
case 3734:
case 3264:
case 3208:
case 1126:
case 593:
case 680:
case 390:
case 2745:
case 3504:
case 4004:
case 1944:
case 3013:
case 833:
case 1137:
case 2881:
case 427:
case 1665:
case 3591:
case 1831:
case 3281:
case 2422:
case 1447:
case 905:
case 1341:
case 1819:
case 849:
case 1472:
case 2467:
case 735:
case 1122:
case 2374:
case 3425:
case 1980:
case 3465:
case 3583:
case 178:
case 1813:
case 1563:
case 2468:
case 2880:
case 1683:
case 879:
case 2816:
case 2453:
case 3175:
case 391:
case 1289:
case 2767:
case 2122:
case 2550:
case 1194:
case 3817:
case 1175:
case 3106:
case 3020:
case 3328:
case 1886:
case 1416:
case 3905:
case 645:
case 223:
case 4031:
case 514:
case 1609:
case 3780:
case 931:
case 772:
case 650:
case 770:
case 443:
case 3350:
case 2903:
case 1211:
case 1238:
case 3869:
case 3451:
case 4:
case 3642:
case 2692:
case 2947:
case 2781:
case 1153:
case 275:
case 2284:
case 1005:
case 676:
case 1256:
case 3005:
case 4044:
case 2849:
case 2678:
case 357:
case 728:
case 2454:
case 1089:
case 4047:
case 1807:
case 1303:
case 2994:
case 2221:
case 2050:
case 989:
case 3934:
case 1149:
case 2635:
case 44:
case 1039:
case 3879:
case 3668:
case 207:
case 3189:
case 3269:
case 1168:
case 943:
case 439:
case 1765:
case 2676:
case 3283:
case 949:
case 3409:
case 3866:
case 2952:
case 830:
case 3811:
case 2668:
case 3098:
case 2915:
case 4013:
case 3387:
case 1601:
case 2785:
case 3829:
case 108:
case 1028:
case 2629:
case 2842:
case 2297:
case 1652:
case 1597:
case 1917:
case 887:
case 2191:
case 2429:
case 1384:
case 1131:
case 2276:
case 468:
case 3333:
case 492:
case 1121:
case 3531:
case 987:
case 3839:
case 620:
case 3564:
case 3871:
case 1666:
case 3654:
case 2025:
case 1933:
case 393:
case 541:
case 1945:
case 109:
case 1234:
case 2793:
case 2736:
case 43:
case 2878:
case 3392:
case 3830:
case 1322:
case 2932:
case 3989:
case 368:
case 1880:
case 2845:
case 1908:
case 1612:
case 2144:
case 3912:
case 3904:
case 3404:
case 1062:
case 3205:
case 3964:
case 968:
case 1681:
case 1572:
case 1311:
case 559:
case 31:
case 428:
case 3193:
case 636:
case 2698:
case 394:
case 1487:
case 3300:
case 639:
case 785:
case 1302:
case 3241:
case 3482:
case 2683:
case 3145:
case 2167:
case 954:
case 163:
case 2733:
case 111:
case 1965:
case 1578:
case 3956:
case 1315:
case 2341:
case 1512:
case 1114:
case 3153:
case 1778:
case 842:
case 3840:
case 214:
case 148:
case 316:
case 2155:
case 1011:
case 3031:
case 3417:
case 2814:
case 581:
case 2148:
case 1235:
case 795:
case 1514:
case 2997:
case 3388:
case 4077:
case 1662:
case 66:
case 2119:
case 3578:
case 1082:
case 1321:
case 2237:
case 3928:
case 377:
case 301:
case 1668:
case 486:
case 1067:
case 1878:
case 3774:
case 1468:
case 383:
case 465:
case 3706:
case 1470:
case 2697:
case 1653:
case 1078:
case 3744:
case 2108:
case 628:
case 3662:
case 617:
case 2552:
case 370:
case 1534:
case 3276:
case 3126:
case 3423:
case 3626:
case 3754:
case 1768:
case 2055:
case 2760:
case 3144:
case 1172:
case 2656:
case 1292:
case 927:
case 2908:
case 2869:
case 4002:
case 3312:
case 1111:
case 941:
case 3403:
case 3690:
case 2231:
case 3393:
case 147:
case 2743:
case 1246:
case 3315:
case 1599:
case 1576:
case 1274:
case 442:
case 224:
case 2421:
case 3459:
case 1701:
case 2361:
case 3723:
case 1536:
case 3411:
case 647:
case 3132:
case 1101:
case 3068:
case 209:
case 1459:
case 3143:
case 158:
case 2323:
case 3751:
case 2084:
case 2416:
case 367:
case 3336:
case 683:
case 2028:
case 790:
case 681:
case 3357:
case 1001:
case 2895:
case 3228:
case 517:
case 1779:
case 1157:
case 3369:
case 1957:
case 3854:
case 33:
case 2966:
case 1480:
case 3441:
case 2723:
case 2536:
case 3937:
case 38:
case 2003:
case 192:
case 642:
case 1479:
case 3919:
case 3329:
case 1867:
case 1590:
case 3616:
case 119:
case 70:
case 1897:
case 703:
case 3484:
case 2402:
case 2140:
case 13:
case 20:
case 3595:
case 1478:
case 1387:
case 3234:
case 3192:
case 1065:
case 1842:
case 1854:
case 1771:
case 3896:
case 2810:
case 1941:
case 3210:
case 3474:
case 3343:
case 128:
case 2943:
case 449:
case 1286:
case 71:
case 1604:
case 1823:
case 3931:
case 2522:
case 1452:
case 1002:
case 2423:
case 1805:
case 2376:
case 1849:
case 988:
case 2321:
case 1264:
case 3995:
case 809:
case 951:
case 2753:
case 3155:
case 1218:
case 1050:
case 2893:
case 356:
case 2504:
case 2365:
case 380:
case 2829:
case 530:
case 1559:
case 2556:
case 3025:
case 3173:
case 1967:
case 1061:
case 3693:
case 2866:
case 3460:
case 2449:
case 885:
case 963:
case 2391:
case 616:
case 1433:
case 2963:
case 995:
case 1263:
case 821:
case 2217:
case 3555:
case 1143:
case 657:
case 1748:
case 3962:
case 2330:
case 1640:
case 1130:
case 323:
case 3105:
case 2446:
case 1445:
case 2096:
case 655:
case 1253:
case 182:
case 3:
case 206:
case 1225:
case 3160:
case 776:
case 1166:
case 2169:
case 1283:
case 2577:
case 2631:
case 261:
case 457:
case 742:
case 2694:
case 254:
case 848:
case 909:
case 297:
case 3039:
case 3188:
case 2813:
case 83:
case 2224:
case 2581:
case 1219:
case 3772:
case 950:
case 4032:
case 2200:
case 3522:
case 1032:
case 484:
case 495:
case 1191:
case 3868:
case 2356:
case 737:
case 3544:
case 3571:
case 3910:
case 55:
case 3632:
case 1922:
case 406:
case 1602:
case 3901:
case 2543:
case 2642:
case 36:
case 1575:
case 1362:
case 2884:
case 603:
case 2199:
case 58:
case 3298:
case 1177:
case 598:
case 3638:
case 1796:
case 3987:
case 3078:
case 3069:
case 2300:
case 3575:
case 1970:
case 3732:
case 2243:
case 3580:
case 768:
case 1431:
case 2604:
case 2244:
case 1150:
case 1520:
case 1848:
case 2488:
case 2071:
case 1655:
case 3539:
case 512:
case 3873:
case 73:
case 2234:
case 105:
case 1052:
case 136:
case 1832:
case 2059:
case 462:
case 957:
case 4010:
case 2460:
case 1080:
case 417:
case 2902:
case 2800:
case 1265:
case 4016:
case 2564:
case 2161:
case 631:
case 1744:
case 3332:
case 1231:
case 1491:
case 3034:
case 2399:
case 3087:
case 9:
case 1792:
case 3131:
case 2551:
case 2133:
case 365:
case 1345:
case 2331:
case 334:
case 1375:
case 3795:
case 3183:
case 1949:
case 3704:
case 3762:
case 3569:
case 4023:
case 1204:
case 1873:
case 2667:
case 3433:
case 2728:
case 3981:
case 746:
case 1972:
case 582:
case 2856:
case 1979:
case 1626:
case 2561:
case 2092:
case 2282:
case 2292:
case 263:
case 396:
case 2343:
case 782:
case 274:
case 2097:
case 1360:
case 1738:
case 1147:
case 4071:
case 2171:
case 3004:
case 2241:
case 1509:
case 2511:
case 1856:
case 3788:
case 2791:
case 1686:
case 757:
case 1592:
case 3852:
case 623:
case 21:
case 4078:
case 3698:
case 1301:
case 3113:
case 2563:
case 2565:
case 2380:
case 3765:
case 472:
case 1012:
case 3581:
case 3186:
case 576:
case 3402:
case 2452:
case 1753:
case 1953:
case 399:
case 3938:
case 2886:
case 3983:
case 3585:
case 2489:
case 291:
case 227:
case 2480:
case 2363:
case 3800:
case 3420:
case 268:
case 1801:
case 4060:
case 2316:
case 3533:
case 649:
case 1757:
case 509:
case 3453:
case 666:
case 2250:
case 1099:
case 1199:
case 2632:
case 678:
case 2837:
case 1312:
case 814:
case 713:
case 300:
case 1528:
case 3828:
case 3587:
case 2951:
case 68:
case 1954:
case 2445:
case 1639:
case 2439:
case 1389:
case 978:
case 3954:
case 824:
case 3092:
case 3383:
case 2744:
case 198:
case 2013:
case 3761:
case 4085:
case 3012:
case 1186:
case 687:
case 1824:
case 1245:
case 3229:
case 228:
case 3202:
case 940:
case 1112:
case 1912:
case 979:
case 1100:
case 1896:
case 4029:
case 4050:
case 2898:
case 1421:
case 3518:
case 1282:
case 3154:
case 861:
case 2038:
case 1195:
case 2662:
case 704:
case 1454:
case 1084:
case 145:
case 3074:
case 3501:
case 2763:
case 1815:
case 2004:
case 2080:
case 2289:
case 1820:
case 435:
case 1317:
case 305:
case 580:
case 3716:
case 1927:
case 3168:
case 2:
case 2852:
case 3227:
case 1971:
case 2411:
case 604:
case 2219:
case 958:
case 916:
case 868:
case 962:
case 832:
case 1351:
case 1676:
case 1188:
case 1365:
case 2437:
case 2385:
case 2624:
case 82:
case 2440:
case 402:
case 2281:
case 2486:
case 2117:
case 2981:
case 3081:
case 2012:
case 2177:
case 3310:
case 1361:
case 220:
case 1461:
case 2925:
case 1914:
case 3351:
case 124:
case 3701:
case 3184:
case 2689:
case 3055:
case 860:
case 1903:
case 675:
case 2586:
case 3559:
case 3111:
case 907:
case 3008:
case 1271:
case 269:
case 2291:
case 434:
case 1883:
case 2608:
case 546:
case 413:
case 3541:
case 3821:
case 3884:
case 2378:
case 162:
case 3825:
case 3913:
case 2613:
case 2260:
case 1539:
case 3671:
case 2358:
case 1804:
case 3658:
case 1900:
case 386:
case 3492:
case 819:
case 99:
case 418:
case 699:
case 804:
case 4028:
case 2840:
case 2687:
case 1233:
case 3243:
case 1415:
case 2559:
case 50:
case 755:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1680094801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,];
var gg_b = "1680094801/";

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
