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
case 619:
case 3836:
case 3625:
case 554:
case 2492:
case 2178:
case 310:
case 563:
case 2404:
case 1896:
case 191:
case 301:
case 538:
case 470:
case 1318:
case 1142:
case 995:
case 3473:
case 3312:
case 404:
case 1960:
case 1193:
case 3356:
case 2182:
case 1067:
case 3810:
case 3424:
case 1935:
case 705:
case 4034:
case 2268:
case 3035:
case 2518:
case 636:
case 483:
case 1306:
case 3311:
case 2563:
case 2213:
case 974:
case 2181:
case 2986:
case 4052:
case 1711:
case 96:
case 1819:
case 911:
case 2491:
case 3814:
case 3064:
case 115:
case 4065:
case 734:
case 2726:
case 3225:
case 1427:
case 900:
case 1141:
case 3484:
case 171:
case 2567:
case 3855:
case 4042:
case 1199:
case 14:
case 2122:
case 3918:
case 218:
case 642:
case 1675:
case 3056:
case 1956:
case 532:
case 1395:
case 3360:
case 1367:
case 989:
case 3862:
case 3479:
case 4093:
case 3335:
case 1760:
case 458:
case 2296:
case 735:
case 249:
case 1489:
case 3102:
case 1134:
case 1423:
case 3285:
case 2696:
case 3011:
case 2786:
case 3769:
case 1487:
case 3480:
case 874:
case 752:
case 1369:
case 857:
case 1152:
case 3346:
case 3190:
case 3963:
case 1165:
case 3158:
case 1576:
case 1813:
case 2617:
case 704:
case 2569:
case 1805:
case 2447:
case 2219:
case 930:
case 800:
case 1764:
case 2940:
case 840:
case 2155:
case 2047:
case 388:
case 3507:
case 3822:
case 1248:
case 1720:
case 187:
case 3727:
case 2731:
case 3242:
case 1977:
case 365:
case 3077:
case 2802:
case 3531:
case 71:
case 1087:
case 3641:
case 1406:
case 2894:
case 1591:
case 2707:
case 3411:
case 3987:
case 2162:
case 3989:
case 1125:
case 2343:
case 1023:
case 2357:
case 3324:
case 2944:
case 3241:
case 2338:
case 2529:
case 677:
case 638:
case 2798:
case 1724:
case 293:
case 2161:
case 1592:
case 1543:
case 1418:
case 2903:
case 3693:
case 3729:
case 1648:
case 1557:
case 2837:
case 10:
case 39:
case 548:
case 1329:
case 2890:
case 3509:
case 2858:
case 2672:
case 721:
case 2732:
case 2392:
case 655:
case 940:
case 1920:
case 1888:
case 2570:
case 3251:
case 1027:
case 2347:
case 3927:
case 216:
case 2228:
case 2740:
case 3464:
case 3616:
case 2091:
case 1294:
case 280:
case 1780:
case 3665:
case 3299:
case 2000:
case 2833:
case 1872:
case 421:
case 2907:
case 3697:
case 3787:
case 1239:
case 2059:
case 3208:
case 3380:
case 2848:
case 3630:
case 2110:
case 1777:
case 1387:
case 382:
case 2476:
case 3230:
case 3503:
case 1389:
case 697:
case 3608:
case 2998:
case 3435:
case 1924:
case 1871:
case 3024:
case 2057:
case 2574:
case 608:
case 3789:
case 3723:
case 2909:
case 1290:
case 3265:
case 3379:
case 3881:
case 461:
case 1495:
case 3175:
case 3566:
case 2628:
case 1694:
case 2932:
case 341:
case 3252:
case 364:
case 2004:
case 1185:
case 3929:
case 2114:
case 1029:
case 1083:
case 2092:
case 353:
case 3634:
case 37:
case 815:
case 1572:
case 401:
case 298:
case 3118:
case 3342:
case 486:
case 2778:
case 2638:
case 633:
case 3099:
case 679:
case 2533:
case 1853:
case 2388:
case 668:
case 2657:
case 3624:
case 410:
case 2643:
case 517:
case 1908:
case 2413:
case 551:
case 1227:
case 3425:
case 4035:
case 272:
case 1683:
case 1333:
case 526:
case 3748:
case 2870:
case 2604:
case 4060:
case 250:
case 2887:
case 1094:
case 2028:
case 1156:
case 3673:
case 2691:
case 3901:
case 3844:
case 914:
case 3052:
case 2292:
case 1627:
case 1111:
case 1283:
case 3937:
case 2921:
case 1571:
case 2257:
case 2874:
case 3030:
case 2659:
case 1741:
case 3815:
case 3097:
case 4046:
case 1849:
case 94:
case 2600:
case 1965:
case 3163:
case 3958:
case 1090:
case 1058:
case 2126:
case 1475:
case 915:
case 3277:
case 1942:
case 2827:
case 3831:
case 2502:
case 3399:
case 2088:
case 1270:
case 1708:
case 1891:
case 278:
case 2722:
case 269:
case 1339:
case 3308:
case 699:
case 1528:
case 3280:
case 2247:
case 3684:
case 358:
case 3351:
case 3807:
case 1302:
case 174:
case 2649:
case 2253:
case 1800:
case 3933:
case 157:
case 4056:
case 2982:
case 4012:
case 292:
case 3702:
case 334:
case 1674:
case 1993:
case 1160:
case 2328:
case 662:
case 3948:
case 1859:
case 2539:
case 12:
case 1301:
case 2071:
case 3521:
case 622:
case 3169:
case 3898:
case 4011:
case 1752:
case 3701:
case 701:
case 1716:
case 3284:
case 1838:
case 2558:
case 2653:
case 2496:
case 1941:
case 3832:
case 1687:
case 3680:
case 3330:
case 1164:
case 3737:
case 2721:
case 3397:
case 3365:
case 84:
case 2829:
case 991:
case 1730:
case 3562:
case 959:
case 345:
case 3212:
case 2131:
case 3127:
case 2154:
case 3441:
case 1606:
case 2368:
case 488:
case 1120:
case 2096:
case 860:
case 2867:
case 4080:
case 2895:
case 2017:
case 1568:
case 3555:
case 528:
case 465:
case 2471:
case 1663:
case 4077:
case 3493:
case 1448:
case 1513:
case 1263:
case 533:
case 579:
case 1725:
case 1876:
case 2019:
case 820:
case 1433:
case 2472:
case 2198:
case 724:
case 617:
case 1505:
case 2945:
case 3325:
case 3561:
case 2313:
case 585:
case 3129:
case 626:
case 4084:
case 1985:
case 887:
case 2488:
case 782:
case 3612:
case 3975:
case 1075:
case 276:
case 1458:
case 3465:
case 1490:
case 1267:
case 3510:
case 90:
case 424:
case 522:
case 1295:
case 1437:
case 725:
case 2396:
case 3235:
case 2068:
case 79:
case 2317:
case 584:
case 482:
case 356:
case 1177:
case 1596:
case 3646:
case 3416:
case 321:
case 2961:
case 213:
case 2428:
case 1494:
case 2806:
case 361:
case 1179:
case 3514:
case 344:
case 503:
case 2745:
case 2319:
case 2144:
case 920:
case 2166:
case 3025:
case 2575:
case 3123:
case 599:
case 3434:
case 3451:
case 3189:
case 1184:
case 247:
case 3826:
case 453:
case 765:
case 3174:
case 3499:
case 1519:
case 987:
case 1269:
case 562:
case 1695:
case 3660:
case 2103:
case 1785:
case 3545:
case 1988:
case 2399:
case 3088:
case 1820:
case 3827:
case 1534:
case 2854:
case 2831:
case 1551:
case 138:
case 3502:
case 2042:
case 660:
case 2308:
case 1078:
case 1414:
case 378:
case 154:
case 290:
case 337:
case 1644:
case 1728:
case 1599:
case 2807:
case 2351:
case 866:
case 449:
case 2522:
case 2334:
case 1972:
case 1615:
case 3328:
case 60:
case 1603:
case 3982:
case 2167:
case 392:
case 1082:
case 1530:
case 2898:
case 687:
case 3071:
case 3653:
case 1410:
case 3249:
case 851:
case 1176:
case 1640:
case 3558:
case 2809:
case 3590:
case 3647:
case 1081:
case 1215:
case 3981:
case 2330:
case 1266:
case 2758:
case 620:
case 2041:
case 1321:
case 2832:
case 817:
case 3883:
case 123:
case 205:
case 2677:
case 3200:
case 2099:
case 3533:
case 2840:
case 1609:
case 3405:
case 2118:
case 398:
case 2342:
case 270:
case 1022:
case 108:
case 1207:
case 3548:
case 1788:
case 1650:
case 2939:
case 2008:
case 3259:
case 1378:
case 2582:
case 252:
case 2425:
case 2034:
case 3372:
case 2673:
case 2733:
case 1928:
case 63:
case 3028:
case 514:
case 3291:
case 132:
case 350:
case 1382:
case 3604:
case 2994:
case 1772:
case 1632:
case 3889:
case 3823:
case 1541:
case 3691:
case 2016:
case 2844:
case 1879:
case 2620:
case 1771:
case 926:
case 155:
case 283:
case 3659:
case 2803:
case 3257:
case 3874:
case 38:
case 2937:
case 1455:
case 917:
case 2341:
case 2065:
case 3600:
case 1607:
case 235:
case 1884:
case 2097:
case 4091:
case 480:
case 1336:
case 709:
case 587:
case 1686:
case 2510:
case 376:
case 962:
case 2465:
case 793:
case 3676:
case 3068:
case 1153:
case 1968:
case 3396:
case 136:
case 3818:
case 2536:
case 1856:
case 3317:
case 3962:
case 2416:
case 2646:
case 2452:
case 3710:
case 256:
case 879:
case 903:
case 2246:
case 3745:
case 4038:
case 3961:
case 828:
case 1719:
case 2264:
case 691:
case 1061:
case 439:
case 2123:
case 2434:
case 1345:
case 2451:
case 4057:
case 467:
case 3166:
case 3575:
case 473:
case 3144:
case 4043:
case 3863:
case 1314:
case 2635:
case 4092:
case 2775:
case 1913:
case 3115:
case 2408:
case 3714:
case 148:
case 1905:
case 2660:
case 1422:
case 4004:
case 2545:
case 3005:
case 922:
case 2174:
case 3936:
case 767:
case 75:
case 3755:
case 739:
case 2562:
case 3096:
case 4047:
case 3368:
case 1355:
case 106:
case 396:
case 4053:
case 3154:
case 2127:
case 1860:
case 1159:
case 1917:
case 1362:
case 899:
case 1626:
case 1835:
case 2555:
case 933:
case 803:
case 979:
case 968:
case 3107:
case 3109:
case 1226:
case 142:
case 493:
case 64:
case 1361:
case 2493:
case 3945:
case 1045:
case 3150:
case 3472:
case 3198:
case 409:
case 2886:
case 1919:
case 1157:
case 8:
case 3914:
case 2183:
case 2211:
case 1846:
case 2561:
case 3313:
case 4049:
case 1192:
case 1478:
case 2656:
case 3305:
case 727:
case 614:
case 3132:
case 1104:
case 1713:
case 3619:
case 3449:
case 1210:
case 3567:
case 1560:
case 3595:
case 469:
case 3217:
case 1645:
case 530:
case 1415:
case 437:
case 3122:
case 2855:
case 231:
case 2479:
case 2862:
case 2012:
case 594:
case 492:
case 1128:
case 143:
case 2056:
case 1236:
case 126:
case 2102:
case 2767:
case 1614:
case 2795:
case 2685:
case 2335:
case 2861:
case 1564:
case 166:
case 2285:
case 798:
case 1546:
case 1636:
case 589:
case 707:
case 2477:
case 863:
case 838:
case 2190:
case 2963:
case 2346:
case 3926:
case 1610:
case 854:
case 3219:
case 3447:
case 1245:
case 750:
case 2586:
case 210:
case 3178:
case 3492:
case 407:
case 946:
case 2473:
case 286:
case 923:
case 201:
case 498:
case 3404:
case 312:
case 3182:
case 1409:
case 3605:
case 2060:
case 2148:
case 1498:
case 1172:
case 855:
case 1450:
case 574:
case 3268:
case 2035:
case 3457:
case 3181:
case 3459:
case 2311:
case 3563:
case 3668:
case 2526:
case 902:
case 1086:
case 1407:
case 2845:
case 3986:
case 52:
case 808:
case 2064:
case 2046:
case 1885:
case 3506:
case 1326:
case 897:
case 1662:
case 2763:
case 3726:
case 3875:
case 2927:
case 3954:
case 316:
case 1577:
case 2234:
case 3570:
case 3353:
case 1340:
case 2616:
case 3091:
case 1747:
case 3587:
case 2652:
case 1991:
case 224:
case 689:
case 2464:
case 1753:
case 2878:
case 476:
case 3740:
case 3136:
case 2787:
case 1007:
case 1486:
case 3000:
case 2299:
case 2540:
case 2665:
case 819:
case 327:
case 282:
case 1621:
case 2770:
case 2630:
case 1117:
case 675:
case 1893:
case 2380:
case 3574:
case 3057:
case 2024:
case 1119:
case 373:
case 1366:
case 3043:
case 630:
case 1943:
case 2230:
case 1050:
case 1098:
case 168:
case 2460:
case 1622:
case 179:
case 2881:
case 2515:
case 3744:
case 2297:
case 2265:
case 796:
case 1938:
case 2699:
case 2723:
case 1032:
case 2252:
case 264:
case 1904:
case 1841:
case 3932:
case 241:
case 3628:
case 3589:
case 1749:
case 2073:
case 540:
case 836:
case 2774:
case 2384:
case 1315:
case 1579:
case 981:
case 2983:
case 2929:
case 3114:
case 3349:
case 1354:
case 3272:
case 3047:
case 1791:
case 3155:
case 1040:
case 3940:
case 3053:
case 1899:
case 713:
case 3754:
case 3671:
case 3731:
case 3391:
case 122:
case 1282:
case 2293:
case 3839:
case 948:
case 3527:
case 747:
case 1307:
case 1851:
case 265:
case 1759:
case 695:
case 3288:
case 2987:
case 4017:
case 2411:
case 919:
case 2641:
case 3894:
case 1278:
case 2080:
case 1816:
case 3801:
case 3357:
case 3944:
case 1398:
case 776:
case 2989:
case 1678:
case 3709:
case 600:
case 2456:
case 2642:
case 103:
case 225:
case 611:
case 3750:
case 3583:
case 3338:
case 3529:
case 2079:
case 1682:
case 2974:
case 162:
case 1524:
case 3837:
case 2821:
case 3271:
case 1003:
case 66:
case 2373:
case 2598:
case 2550:
case 1830:
case 657:
case 3903:
case 2693:
case 1897:
case 936:
case 3915:
case 1704:
case 3672:
case 3732:
case 1865:
case 3890:
case 3858:
case 3633:
case 3773:
case 3538:
case 1509:
case 2865:
case 3383:
case 3329:
case 2281:
case 2897:
case 1084:
case 547:
case 3984:
case 2704:
case 845:
case 1598:
case 2003:
case 692:
case 3648:
case 19:
case 1974:
case 2792:
case 2682:
case 2332:
case 2524:
case 513:
case 3592:
case 203:
case 1456:
case 1642:
case 3724:
case 2757:
case 678:
case 669:
case 3023:
case 2573:
case 2398:
case 2738:
case 1923:
case 637:
case 2066:
case 2044:
case 2816:
case 2852:
case 1532:
case 1324:
case 1080:
case 629:
case 1987:
case 3591:
case 3406:
case 320:
case 1641:
case 1554:
case 1077:
case 3559:
case 2808:
case 1293:
case 91:
case 3463:
case 1727:
case 222:
case 2168:
case 2953:
case 2040:
case 3500:
case 1320:
case 3233:
case 1822:
case 3327:
case 1507:
case 2791:
case 3083:
case 3029:
case 1929:
case 1774:
case 3602:
case 2992:
case 1651:
case 1634:
case 2315:
case 1384:
case 1566:
case 945:
case 3973:
case 1073:
case 2749:
case 2303:
case 359:
case 164:
case 3374:
case 3201:
case 2032:
case 33:
case 3784:
case 2841:
case 3290:
case 3258:
case 1699:
case 1723:
case 2938:
case 3549:
case 279:
case 2622:
case 856:
case 1460:
case 1515:
case 1881:
case 233:
case 3779:
case 607:
case 1503:
case 2098:
case 2943:
case 1230:
case 1024:
case 3237:
case 3871:
case 2221:
case 3924:
case 2957:
case 2119:
case 2344:
case 1630:
case 2893:
case 1208:
case 3777:
case 2621:
case 861:
case 3370:
case 1299:
case 3690:
case 844:
case 1787:
case 3547:
case 3469:
case 1697:
case 2486:
case 228:
case 2007:
case 1377:
case 740:
case 3872:
case 1878:
case 3294:
case 2747:
case 81:
case 1616:
case 2991:
case 3601:
case 124:
case 1446:
case 1020:
case 3888:
case 596:
case 2340:
case 3920:
case 1927:
case 2842:
case 2577:
case 1251:
case 2031:
case 2431:
case 757:
case 1763:
case 475:
case 76:
case 1420:
case 990:
case 2662:
case 2885:
case 3363:
case 3964:
case 315:
case 2261:
case 870:
case 1064:
case 489:
case 3711:
case 2086:
case 3069:
case 1706:
case 3819:
case 804:
case 934:
case 1311:
case 3306:
case 1526:
case 958:
case 2255:
case 1035:
case 795:
case 3756:
case 3712:
case 1133:
case 3935:
case 4002:
case 1424:
case 2498:
case 647:
case 4094:
case 1356:
case 592:
case 494:
case 3960:
case 3095:
case 1060:
case 1967:
case 2409:
case 101:
case 2188:
case 3142:
case 905:
case 72:
case 2556:
case 1718:
case 110:
case 3805:
case 3746:
case 2245:
case 3130:
case 2610:
case 952:
case 2440:
case 1158:
case 3165:
case 3063:
case 1364:
case 730:
case 2386:
case 42:
case 3470:
case 904:
case 1101:
case 834:
case 3116:
case 3911:
case 3487:
case 3006:
case 1769:
case 696:
case 2214:
case 1011:
case 1285:
case 2564:
case 266:
case 1480:
case 3760:
case 2614:
case 572:
case 1335:
case 983:
case 3134:
case 3151:
case 4033:
case 1360:
case 3395:
case 550:
case 775:
case 2236:
case 3912:
case 243:
case 3735:
case 4048:
case 314:
case 1862:
case 3474:
case 598:
case 3868:
case 1918:
case 2403:
case 0:
case 805:
case 2645:
case 371:
case 1484:
case 789:
case 3108:
case 400:
case 217:
case 2210:
case 2713:
case 2104:
case 2525:
case 3075:
case 1656:
case 2864:
case 888:
case 3206:
case 2705:
case 2014:
case 2846:
case 3433:
case 4089:
case 4023:
case 1325:
case 55:
case 1886:
case 2045:
case 865:
case 3513:
case 1493:
case 618:
case 3218:
case 4070:
case 3663:
case 2835:
case 3568:
case 2626:
case 2362:
case 2010:
case 73:
case 2917:
case 420:
case 1127:
case 516:
case 3120:
case 941:
case 2191:
case 89:
case 964:
case 1562:
case 580:
case 2768:
case 3519:
case 824:
case 1499:
case 11:
case 1174:
case 1545:
case 3785:
case 3695:
case 2905:
case 2286:
case 248:
case 3269:
case 1408:
case 4083:
case 988:
case 2314:
case 1775:
case 1826:
case 3402:
case 1189:
case 1451:
case 787:
case 3925:
case 1123:
case 1025:
case 2719:
case 965:
case 1264:
case 2811:
case 2585:
case 1246:
case 161:
case 3494:
case 593:
case 1664:
case 3177:
case 925:
case 121:
case 1416:
case 2717:
case 2856:
case 2812:
case 236:
case 87:
case 2147:
case 1235:
case 4027:
case 2421:
case 2968:
case 3437:
case 2153:
case 3267:
case 3490:
case 3458:
case 1260:
case 3517:
case 2796:
case 2607:
case 3997:
case 886:
case 2884:
case 931:
case 415:
case 3058:
case 1958:
case 3849:
case 1224:
case 3037:
case 3571:
case 2021:
case 375:
case 2455:
case 2250:
case 2654:
case 255:
case 183:
case 1106:
case 2879:
case 1620:
case 389:
case 3916:
case 1052:
case 771:
case 3001:
case 3952:
case 1016:
case 2541:
case 1866:
case 680:
case 2382:
case 2632:
case 104:
case 3348:
case 3112:
case 3156:
case 1578:
case 1393:
case 2880:
case 549:
case 2542:
case 1034:
case 3227:
case 3002:
case 1220:
case 3588:
case 3333:
case 3629:
case 3793:
case 1939:
case 2788:
case 65:
case 667:
case 2593:
case 2378:
case 1008:
case 1342:
case 170:
case 208:
case 3572:
case 2609:
case 3892:
case 1397:
case 986:
case 223:
case 4063:
case 395:
case 3164:
case 1737:
case 3730:
case 3146:
case 831:
case 901:
case 1365:
case 3687:
case 1041:
case 910:
case 2516:
case 2244:
case 2552:
case 3941:
case 3804:
case 3289:
case 3223:
case 1790:
case 1758:
case 246:
case 2266:
case 4006:
case 2215:
case 2081:
case 1284:
case 791:
case 2597:
case 1701:
case 3752:
case 2410:
case 2565:
case 3838:
case 2640:
case 2971:
case 1521:
case 2824:
case 3301:
case 3274:
case 1352:
case 32:
case 1898:
case 1850:
case 2530:
case 2203:
case 3843:
case 3674:
case 1702:
case 36:
case 3751:
case 3734:
case 2082:
case 202:
case 3859:
case 1093:
case 414:
case 512:
case 1195:
case 2603:
case 3993:
case 1807:
case 3135:
case 2728:
case 2599:
case 715:
case 3800:
case 3033:
case 190:
case 1485:
case 3891:
case 471:
case 300:
case 3287:
case 2078:
case 3528:
case 2666:
case 3339:
case 3623:
case 609:
case 3689:
case 3942:
case 2534:
case 1854:
case 263:
case 277:
case 1739:
case 311:
case 4018:
case 2820:
case 1399:
case 693:
case 1005:
case 2269:
case 784:
case 7:
case 3422:
case 4032:
case 2695:
case 348:
case 59:
case 1714:
case 880:
case 2667:
case 485:
case 1276:
case 1013:
case 2439:
case 1575:
case 3345:
case 2925:
case 827:
case 319:
case 1319:
case 1144:
case 2179:
case 2494:
case 3585:
case 468:
case 3061:
case 601:
case 3719:
case 1961:
case 113:
case 4009:
case 428:
case 4007:
case 3717:
case 1710:
case 2177:
case 1317:
case 762:
case 2180:
case 3856:
case 85:
case 839:
case 1962:
case 909:
case 4054:
case 3421:
case 703:
case 1068:
case 588:
case 1140:
case 1736:
case 1818:
case 3686:
case 799:
case 3336:
case 176:
case 2267:
case 2173:
case 541:
case 564:
case 2075:
case 3525:
case 3104:
case 1488:
case 4003:
case 3846:
case 2206:
case 4015:
case 240:
case 1914:
case 3705:
case 916:
case 3864:
case 1150:
case 1945:
case 2505:
case 1019:
case 4066:
case 2124:
case 3919:
case 2263:
case 342:
case 1109:
case 3482:
case 3138:
case 2568:
case 1471:
case 3100:
case 2663:
case 1107:
case 2218:
case 1017:
case 4:
case 582:
case 484:
case 1867:
case 95:
case 1910:
case 967:
case 381:
case 2606:
case 733:
case 1096:
case 2120:
case 1131:
case 4040:
case 1755:
case 524:
case 422:
case 1936:
case 665:
case 2730:
case 2146:
case 2164:
case 2892:
case 323:
case 2765:
case 3266:
case 3873:
case 2223:
case 2337:
case 3552:
case 2941:
case 129:
case 2804:
case 1590:
case 3565:
case 849:
case 2838:
case 1653:
case 1249:
case 2752:
case 3081:
case 1647:
case 3597:
case 3530:
case 3203:
case 2857:
case 3824:
case 22:
case 3971:
case 2048:
case 2993:
case 1539:
case 1328:
case 69:
case 443:
case 302:
case 2674:
case 2751:
case 26:
case 1982:
case 3599:
case 2135:
case 3728:
case 426:
case 451:
case 3615:
case 3445:
case 2302:
case 2623:
case 510:
case 2689:
case 3666:
case 2339:
case 2891:
case 2287:
case 200:
case 1594:
case 354:
case 3820:
case 1088:
case 625:
case 211:
case 2475:
case 377:
case 1502:
case 501:
case 338:
case 3551:
case 2942:
case 3322:
case 1600:
case 2849:
case 2058:
case 1238:
case 2090:
case 2997:
case 751:
case 3298:
case 1659:
case 682:
case 1921:
case 3455:
case 2037:
case 1257:
case 1874:
case 3021:
case 2571:
case 949:
case 3462:
case 2283:
case 3879:
case 355:
case 3631:
case 3654:
case 1823:
case 1889:
case 624:
case 1204:
case 1371:
case 289:
case 3232:
case 2001:
case 3880:
case 641:
case 3928:
case 2348:
case 3632:
case 3772:
case 1604:
case 3382:
case 332:
case 294:
case 2683:
case 67:
case 1372:
case 2227:
case 3254:
case 3877:
case 2951:
case 1692:
case 1782:
case 2039:
case 1259:
case 1413:
case 3698:
case 3788:
case 1548:
case 397:
case 1657:
case 107:
case 230:
case 3609:
case 2999:
case 1533:
case 1200:
case 3207:
case 2572:
case 3022:
case 198:
case 1405:
case 3315:
case 1092:
case 2602:
case 1114:
case 1349:
case 2185:
case 2784:
case 1715:
case 3904:
case 2694:
case 1004:
case 2201:
case 2374:
case 876:
case 1523:
case 3749:
case 3584:
case 1744:
case 333:
case 2467:
case 1766:
case 3009:
case 2290:
case 670:
case 2258:
case 1038:
case 173:
case 3957:
case 2237:
case 15:
case 2871:
case 2389:
case 3098:
case 3050:
case 3943:
case 1145:
case 1043:
case 2639:
case 652:
case 3621:
case 2637:
case 1110:
case 127:
case 3893:
case 2239:
case 3117:
case 3959:
case 4062:
case 3007:
case 813:
case 3222:
case 2469:
case 3900:
case 2658:
case 1833:
case 2553:
case 2370:
case 3991:
case 3747:
case 3580:
case 1228:
case 3753:
case 3054:
case 2202:
case 4055:
case 116:
case 1954:
case 1347:
case 683:
case 1353:
case 847:
case 1672:
case 1915:
case 3015:
case 896:
case 2538:
case 1858:
case 2329:
case 658:
case 2633:
case 1049:
case 2773:
case 1304:
case 20:
case 2557:
case 3524:
case 362:
case 1903:
case 193:
case 561:
case 2724:
case 544:
case 3743:
case 1583:
case 1750:
case 1798:
case 2979:
case 3852:
case 1801:
case 4045:
case 109:
case 3816:
case 3044:
case 3738:
case 2125:
case 1709:
case 3678:
case 3066:
case 2089:
case 3350:
case 690:
case 748:
case 2591:
case 2406:
case 220:
case 1162:
case 3:
case 1707:
case 3700:
case 2980:
case 4010:
case 2828:
case 3278:
case 913:
case 3307:
case 521:
case 1527:
case 3834:
case 3520:
case 1288:
case 3759:
case 3282:
case 287:
case 3426:
case 1391:
case 1731:
case 1754:
case 2559:
case 719:
case 3791:
case 3681:
case 3947:
case 3354:
case 2500:
case 1053:
case 1940:
case 3168:
case 406:
case 1155:
case 3953:
case 869:
case 3440:
case 878:
case 3610:
case 837:
case 1121:
case 732:
case 2746:
case 2130:
case 1617:
case 1447:
case 1569:
case 2805:
case 2197:
case 998:
case 2813:
case 2063:
case 1926:
case 2576:
case 423:
case 2116:
case 892:
case 645:
case 950:
case 797:
case 3636:
case 2275:
case 3825:
case 366:
case 3564:
case 4081:
case 1376:
case 2489:
case 3466:
case 351:
case 3444:
case 1296:
case 2760:
case 3614:
case 2367:
case 2912:
case 504:
case 2735:
case 2395:
case 118:
case 3403:
case 1122:
case 2868:
case 2474:
case 570:
case 1449:
case 3210:
case 1619:
case 317:
case 829:
case 271:
case 3415:
case 1217:
case 1595:
case 3560:
case 454:
case 807:
case 969:
case 3662:
case 1875:
case 1726:
case 4021:
case 3454:
case 621:
case 215:
case 1491:
case 656:
case 1506:
case 505:
case 3885:
case 2363:
case 3171:
case 850:
case 992:
case 2819:
case 1205:
case 1986:
case 1181:
case 2306:
case 455:
case 738:
case 763:
case 1563:
case 3450:
case 3498:
case 3172:
case 723:
case 1457:
case 558:
case 1268:
case 1182:
case 112:
case 2067:
case 2095:
case 61:
case 432:
case 2960:
case 2142:
case 644:
case 3432:
case 291:
case 408:
case 2483:
case 3512:
case 497:
case 1178:
case 1492:
case 3556:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753347601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,];
var gg_b = "1753347601/";

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
