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
case 3381:
case 445:
case 2148:
case 3042:
case 3617:
case 3724:
case 4049:
case 3040:
case 1496:
case 257:
case 1286:
case 1936:
case 1158:
case 2491:
case 2935:
case 2399:
case 1965:
case 2482:
case 329:
case 2821:
case 2922:
case 1462:
case 1846:
case 1605:
case 2282:
case 2670:
case 2426:
case 2560:
case 2566:
case 1166:
case 847:
case 2107:
case 3949:
case 2111:
case 1714:
case 32:
case 3565:
case 1942:
case 2266:
case 1430:
case 1389:
case 1631:
case 493:
case 2713:
case 3503:
case 199:
case 663:
case 3375:
case 2451:
case 409:
case 3790:
case 1185:
case 1655:
case 2993:
case 2260:
case 3518:
case 500:
case 3035:
case 418:
case 1318:
case 4077:
case 1487:
case 1675:
case 3047:
case 430:
case 1616:
case 1381:
case 2396:
case 43:
case 3669:
case 1574:
case 3947:
case 1839:
case 3841:
case 3232:
case 687:
case 2925:
case 3806:
case 609:
case 587:
case 2127:
case 1578:
case 2608:
case 1857:
case 398:
case 1587:
case 2551:
case 3849:
case 3207:
case 1068:
case 3023:
case 1913:
case 2851:
case 896:
case 2679:
case 702:
case 487:
case 850:
case 1217:
case 1606:
case 236:
case 2020:
case 1188:
case 2552:
case 188:
case 3426:
case 264:
case 3549:
case 459:
case 179:
case 12:
case 707:
case 3270:
case 675:
case 2955:
case 838:
case 2412:
case 982:
case 1112:
case 3243:
case 1512:
case 2338:
case 502:
case 619:
case 2911:
case 1862:
case 390:
case 2238:
case 2871:
case 2322:
case 3653:
case 272:
case 2672:
case 330:
case 2748:
case 1384:
case 2628:
case 3465:
case 4000:
case 1927:
case 1321:
case 1955:
case 2118:
case 2597:
case 3566:
case 2286:
case 2219:
case 289:
case 2886:
case 2983:
case 1738:
case 3825:
case 3823:
case 164:
case 898:
case 488:
case 3896:
case 3197:
case 2467:
case 3424:
case 2544:
case 2677:
case 1970:
case 1182:
case 3872:
case 2427:
case 3920:
case 1722:
case 2923:
case 2175:
case 2298:
case 1891:
case 3523:
case 1120:
case 2951:
case 4006:
case 54:
case 1978:
case 1983:
case 71:
case 949:
case 604:
case 1601:
case 1295:
case 886:
case 1086:
case 266:
case 1875:
case 4069:
case 2624:
case 3548:
case 3060:
case 2215:
case 102:
case 1095:
case 2709:
case 640:
case 3054:
case 3125:
case 3815:
case 961:
case 617:
case 1111:
case 2177:
case 458:
case 3195:
case 1693:
case 3146:
case 4054:
case 241:
case 3172:
case 2505:
case 1664:
case 1491:
case 3441:
case 4047:
case 3805:
case 315:
case 3220:
case 3746:
case 173:
case 3386:
case 1910:
case 1556:
case 3391:
case 880:
case 2711:
case 2307:
case 1855:
case 1223:
case 3552:
case 2781:
case 1882:
case 1498:
case 3406:
case 2202:
case 2616:
case 2840:
case 2452:
case 2682:
case 2457:
case 1241:
case 3199:
case 4038:
case 1771:
case 2458:
case 1290:
case 1428:
case 2982:
case 2717:
case 581:
case 3028:
case 542:
case 716:
case 572:
case 2850:
case 326:
case 2388:
case 1287:
case 2028:
case 376:
case 790:
case 2037:
case 2281:
case 3873:
case 2525:
case 1868:
case 357:
case 3863:
case 2662:
case 2233:
case 2978:
case 2559:
case 1243:
case 2258:
case 2417:
case 2956:
case 3547:
case 1665:
case 3707:
case 309:
case 183:
case 3148:
case 683:
case 3626:
case 3166:
case 2707:
case 3862:
case 400:
case 3865:
case 3005:
case 1784:
case 1586:
case 131:
case 1600:
case 1795:
case 3510:
case 2772:
case 1338:
case 2380:
case 3925:
case 524:
case 3201:
case 2891:
case 897:
case 1820:
case 1909:
case 194:
case 1473:
case 2827:
case 3096:
case 99:
case 185:
case 3463:
case 3276:
case 1147:
case 73:
case 1956:
case 4064:
case 856:
case 4092:
case 3014:
case 2991:
case 799:
case 145:
case 792:
case 2096:
case 491:
case 1743:
case 3213:
case 1531:
case 3230:
case 1038:
case 1593:
case 3670:
case 61:
case 2454:
case 3869:
case 2013:
case 1701:
case 2655:
case 298:
case 2704:
case 513:
case 2508:
case 2069:
case 2151:
case 788:
case 172:
case 3287:
case 1237:
case 1195:
case 2103:
case 1897:
case 1228:
case 108:
case 2159:
case 1183:
case 127:
case 2242:
case 3892:
case 325:
case 1633:
case 2268:
case 915:
case 1330:
case 2479:
case 1514:
case 2992:
case 3517:
case 3888:
case 3607:
case 2094:
case 1764:
case 355:
case 3577:
case 781:
case 3032:
case 2206:
case 1985:
case 2632:
case 3933:
case 220:
case 3909:
case 302:
case 1944:
case 1345:
case 1548:
case 3764:
case 1167:
case 2577:
case 3206:
case 4058:
case 1448:
case 985:
case 527:
case 2379:
case 512:
case 2656:
case 1544:
case 1745:
case 1302:
case 3112:
case 2357:
case 1156:
case 2081:
case 2986:
case 2875:
case 3152:
case 3982:
case 1821:
case 2969:
case 2054:
case 1123:
case 776:
case 2758:
case 4080:
case 942:
case 86:
case 3114:
case 2231:
case 3635:
case 2687:
case 1589:
case 1644:
case 1947:
case 2212:
case 375:
case 128:
case 1772:
case 2835:
case 1052:
case 1828:
case 2807:
case 213:
case 1105:
case 641:
case 126:
case 3095:
case 1776:
case 3774:
case 277:
case 2235:
case 225:
case 3585:
case 3745:
case 2247:
case 4010:
case 1982:
case 2878:
case 676:
case 1400:
case 2337:
case 2967:
case 3996:
case 1294:
case 2602:
case 1811:
case 3788:
case 3813:
case 287:
case 2472:
case 1731:
case 2703:
case 261:
case 95:
case 636:
case 2183:
case 1257:
case 480:
case 2314:
case 1319:
case 2540:
case 2071:
case 2065:
case 2734:
case 1081:
case 420:
case 3696:
case 669:
case 1073:
case 3556:
case 681:
case 1583:
case 1249:
case 3208:
case 456:
case 3466:
case 3383:
case 689:
case 3773:
case 2809:
case 2596:
case 2791:
case 1679:
case 1192:
case 3128:
case 14:
case 2848:
case 3236:
case 3802:
case 3526:
case 1653:
case 1683:
case 1291:
case 3756:
case 2321:
case 2765:
case 1993:
case 740:
case 3521:
case 1017:
case 1453:
case 1870:
case 1193:
case 1172:
case 923:
case 2684:
case 2326:
case 163:
case 1727:
case 1817:
case 3884:
case 1591:
case 1155:
case 1485:
case 2466:
case 2243:
case 2691:
case 3533:
case 21:
case 2598:
case 2668:
case 3349:
case 3859:
case 2432:
case 3856:
case 3958:
case 763:
case 1165:
case 537:
case 3471:
case 3284:
case 1332:
case 2373:
case 2838:
case 2:
case 176:
case 556:
case 471:
case 2320:
case 854:
case 3382:
case 3781:
case 2463:
case 2747:
case 3624:
case 3704:
case 2570:
case 1707:
case 1388:
case 928:
case 3630:
case 3170:
case 725:
case 2092:
case 1456:
case 713:
case 2940:
case 394:
case 3516:
case 3325:
case 2104:
case 3312:
case 115:
case 2899:
case 981:
case 1225:
case 988:
case 3763:
case 2085:
case 3333:
case 1695:
case 3228:
case 74:
case 1837:
case 1938:
case 2634:
case 747:
case 813:
case 1881:
case 2334:
case 2406:
case 3689:
case 2876:
case 1566:
case 83:
case 406:
case 2447:
case 4085:
case 1180:
case 1521:
case 1061:
case 1706:
case 1979:
case 57:
case 2782:
case 1977:
case 2079:
case 2753:
case 3124:
case 3934:
case 2659:
case 616:
case 2204:
case 2892:
case 4068:
case 424:
case 107:
case 872:
case 3163:
case 1992:
case 2585:
case 319:
case 1066:
case 3700:
case 3723:
case 797:
case 1877:
case 2349:
case 1171:
case 2486:
case 635:
case 3782:
case 1419:
case 1751:
case 2147:
case 3136:
case 751:
case 2933:
case 167:
case 2216:
case 3603:
case 3100:
case 3637:
case 1547:
case 37:
case 1199:
case 3171:
case 678:
case 2882:
case 1486:
case 119:
case 3302:
case 3721:
case 2308:
case 216:
case 2722:
case 2363:
case 1573:
case 1575:
case 973:
case 255:
case 2187:
case 363:
case 1343:
case 814:
case 514:
case 2673:
case 1945:
case 516:
case 450:
case 967:
case 2839:
case 801:
case 3628:
case 1458:
case 1080:
case 3176:
case 1012:
case 515:
case 446:
case 2928:
case 440:
case 2365:
case 2145:
case 3144:
case 2913:
case 1848:
case 1610:
case 3106:
case 1628:
case 505:
case 2438:
case 3726:
case 1028:
case 3534:
case 153:
case 3278:
case 2384:
case 2959:
case 232:
case 3328:
case 193:
case 3237:
case 934:
case 1122:
case 291:
case 3643:
case 3306:
case 89:
case 1092:
case 2200:
case 544:
case 2918:
case 3334:
case 1810:
case 196:
case 1769:
case 851:
case 3321:
case 1434:
case 1118:
case 2859:
case 4057:
case 3525:
case 3250:
case 3058:
case 4090:
case 1859:
case 533:
case 3481:
case 1502:
case 223:
case 2547:
case 1603:
case 3191:
case 3767:
case 586:
case 3897:
case 562:
case 2323:
case 807:
case 3065:
case 3417:
case 2592:
case 2621:
case 4084:
case 92:
case 3738:
case 3477:
case 3629:
case 745:
case 2330:
case 2348:
case 3048:
case 88:
case 657:
case 217:
case 230:
case 1265:
case 3730:
case 1713:
case 351:
case 2442:
case 2874:
case 2980:
case 1423:
case 1959:
case 297:
case 919:
case 1050:
case 3703:
case 416:
case 3313:
case 1770:
case 2958:
case 1207:
case 3646:
case 1783:
case 3178:
case 160:
case 1699:
case 1489:
case 3344:
case 286:
case 1386:
case 549:
case 3954:
case 3506:
case 552:
case 1276:
case 3912:
case 1023:
case 3496:
case 3956:
case 1705:
case 1730:
case 1639:
case 1671:
case 2139:
case 1213:
case 739:
case 873:
case 2536:
case 189:
case 3079:
case 2696:
case 1782:
case 3319:
case 2818:
case 350:
case 1203:
case 986:
case 1051:
case 1800:
case 4037:
case 1084:
case 728:
case 1169:
case 1854:
case 3886:
case 733:
case 496:
case 2974:
case 2340:
case 3590:
case 2833:
case 2441:
case 3728:
case 336:
case 2464:
case 3903:
case 2651:
case 3467:
case 2031:
case 3295:
case 3183:
case 3921:
case 3930:
case 1427:
case 3293:
case 578:
case 2193:
case 2259:
case 3658:
case 2168:
case 510:
case 3031:
case 2329:
case 1822:
case 1433:
case 1366:
case 3824:
case 531:
case 1541:
case 658:
case 2350:
case 3029:
case 452:
case 8:
case 3451:
case 2017:
case 759:
case 3212:
case 1410:
case 377:
case 1638:
case 2074:
case 2604:
case 3880:
case 67:
case 1:
case 786:
case 442:
case 2970:
case 3345:
case 2968:
case 3984:
case 3113:
case 174:
case 808:
case 1413:
case 1282:
case 2124:
case 16:
case 3449:
case 2763:
case 328:
case 3377:
case 3942:
case 1027:
case 407:
case 3036:
case 2248:
case 2920:
case 608:
case 187:
case 2889:
case 469:
case 1895:
case 3514:
case 1447:
case 3555:
case 2316:
case 607:
case 3706:
case 2641:
case 3008:
case 3918:
case 1275:
case 834:
case 381:
case 1719:
case 3346:
case 2284:
case 1658:
case 3118:
case 1592:
case 259:
case 940:
case 2549:
case 2032:
case 680:
case 935:
case 3787:
case 3622:
case 2249:
case 1452:
case 2002:
case 1505:
case 1236:
case 3540:
case 3919:
case 3558:
case 3495:
case 1789:
case 245:
case 1542:
case 1883:
case 3683:
case 1340:
case 1260:
case 2197:
case 1747:
case 998:
case 1011:
case 3752:
case 3209:
case 2305:
case 2699:
case 1042:
case 3817:
case 3372:
case 1888:
case 613:
case 2495:
case 1517:
case 66:
case 3475:
case 1214:
case 3415:
case 228:
case 2775:
case 1007:
case 2768:
case 1069:
case 464:
case 3698:
case 3791:
case 3373:
case 836:
case 380:
case 1763:
case 1934:
case 455:
case 2564:
case 795:
case 2964:
case 2022:
case 3352:
case 719:
case 1571:
case 2997:
case 1588:
case 2715:
case 3800:
case 3929:
case 2410:
case 3161:
case 2949:
case 1232:
case 1929:
case 2229:
case 991:
case 2905:
case 299:
case 3221:
case 3586:
case 3405:
case 2919:
case 2236:
case 4019:
case 1957:
case 2141:
case 3443:
case 1375:
case 1352:
case 1435:
case 3900:
case 2246:
case 599:
case 1563:
case 1677:
case 2292:
case 2650:
case 3497:
case 2319:
case 1809:
case 2529:
case 1432:
case 1937:
case 2932:
case 2856:
case 50:
case 447:
case 3640:
case 1551:
case 3594:
case 3147:
case 1412:
case 3447:
case 2436:
case 2588:
case 1354:
case 372:
case 962:
case 408:
case 3993:
case 60:
case 3444:
case 2901:
case 4045:
case 1101:
case 2126:
case 3532:
case 2300:
case 3189:
case 649:
case 2359:
case 1482:
case 226:
case 1327:
case 3026:
case 3789:
case 2766:
case 3850:
case 1254:
case 146:
case 855:
case 2429:
case 2819:
case 3200:
case 623:
case 2950:
case 486:
case 1152:
case 1478:
case 3913:
case 3588:
case 1608:
case 1398:
case 1019:
case 2962:
case 219:
case 2408:
case 2942:
case 1612:
case 3033:
case 2428:
case 3440:
case 2059:
case 135:
case 3145:
case 715:
case 2213:
case 1597:
case 1367:
case 64:
case 3671:
case 2461:
case 2601:
case 27:
case 3456:
case 18:
case 878:
case 476:
case 906:
case 2573:
case 1627:
case 501:
case 2057:
case 1576:
case 661:
case 2562:
case 51:
case 832:
case 992:
case 2728:
case 1420:
case 2627:
case 2414:
case 3839:
case 3025:
case 929:
case 2617:
case 2296:
case 2931:
case 3994:
case 957:
case 983:
case 1390:
case 152:
case 332:
case 2537:
case 3434:
case 2849:
case 114:
case 3074:
case 2987:
case 2279:
case 2119:
case 1440:
case 1766:
case 2661:
case 1732:
case 2752:
case 2520:
case 2035:
case 2751:
case 472:
case 1201:
case 573:
case 2072:
case 1033:
case 705:
case 454:
case 1632:
case 242:
case 1060:
case 2887:
case 3754:
case 1062:
case 1880:
case 2845:
case 378:
case 1708:
case 3066:
case 793:
case 3193:
case 1935:
case 2116:
case 3239:
case 3845:
case 3067:
case 3107:
case 1135:
case 1781:
case 1441:
case 3944:
case 742:
case 1126:
case 3835:
case 588:
case 215:
case 2353:
case 2167:
case 2613:
case 3091:
case 621:
case 3553:
case 1785:
case 744:
case 1807:
case 1825:
case 2226:
case 1145:
case 295:
case 3679:
case 1960:
case 2421:
case 4051:
case 1348:
case 2912:
case 2223:
case 3461:
case 721:
case 1129:
case 1961:
case 2433:
case 360:
case 2759:
case 3822:
case 2360:
case 3121:
case 3332:
case 1676:
case 2245:
case 771:
case 3363:
case 887:
case 585:
case 1242:
case 2519:
case 233:
case 143:
case 2576:
case 1072:
case 132:
case 3702:
case 3298:
case 2393:
case 1148:
case 2114:
case 2553:
case 3080:
case 294:
case 2262:
case 654:
case 2351:
case 4018:
case 3133:
case 1244:
case 3138:
case 2372:
case 3131:
case 2501:
case 475:
case 3893:
case 565:
case 3562:
case 3807:
case 3211:
case 1659:
case 971:
case 908:
case 3649:
case 1251:
case 1465:
case 3743:
case 3798:
case 994:
case 563:
case 843:
case 714:
case 1417:
case 1415:
case 921:
case 885:
case 2244:
case 2133:
case 2301:
case 1974:
case 3592:
case 975:
case 1510:
case 159:
case 2494:
case 3266:
case 283:
case 2278:
case 532:
case 1954:
case 3513:
case 2820:
case 3400:
case 2459:
case 3713:
case 2362:
case 1364:
case 1466:
case 2593:
case 841:
case 433:
case 473:
case 125:
case 4023:
case 557:
case 402:
case 3102:
case 2418:
case 2227:
case 1793:
case 1471:
case 4048:
case 529:
case 3638:
case 1266:
case 1163:
case 154:
case 2483:
case 1711:
case 1850:
case 344:
case 3119:
case 1049:
case 2683:
case 1835:
case 235:
case 4089:
case 696:
case 3932:
case 3569:
case 29:
case 6:
case 3027:
case 320:
case 3904:
case 782:
case 1264:
case 634:
case 2511:
case 2377:
case 3570:
case 2640:
case 2603:
case 2425:
case 2917:
case 2829:
case 3185:
case 526:
case 2484:
case 121:
case 4065:
case 3616:
case 3673:
case 1032:
case 1190:
case 391:
case 920:
case 1329:
case 2272:
case 1765:
case 3985:
case 912:
case 2240:
case 23:
case 384:
case 2642:
case 3512:
case 1344:
case 1867:
case 2810:
case 2387:
case 883:
case 1425:
case 412:
case 3498:
case 2834:
case 1876:
case 3063:
case 1725:
case 279:
case 1865:
case 2916:
case 292:
case 2110:
case 1533:
case 3412:
case 4078:
case 1488:
case 595:
case 36:
case 3082:
case 1377:
case 2864:
case 2631:
case 4067:
case 462:
case 305:
case 2622:
case 3462:
case 347:
case 3926:
case 392:
case 1371:
case 2207:
case 2025:
case 1001:
case 1177:
case 2014:
case 1382:
case 770:
case 465:
case 840:
case 568:
case 1619:
case 1416:
case 560:
case 3708:
case 3469:
case 1047:
case 2191:
case 3122:
case 3711:
case 2808:
case 1339:
case 3674:
case 1749:
case 922:
case 2945:
case 1912:
case 2966:
case 818:
case 1617:
case 590:
case 1403:
case 1716:
case 4013:
case 3275:
case 470:
case 1626:
case 904:
case 3583:
case 2078:
case 2506:
case 1383:
case 3356:
case 2460:
case 1791:
case 2654:
case 1624:
case 978:
case 1907:
case 1858:
case 1055:
case 3343:
case 3358:
case 3967:
case 79:
case 990:
case 3980:
case 58:
case 2005:
case 1046:
case 2218:
case 2854:
case 1504:
case 419:
case 2064:
case 1239:
case 3965:
case 1686:
case 3109:
case 2785:
case 1560:
case 3351:
case 1376:
case 2906:
case 2879:
case 2161:
case 72:
case 3705:
case 3071:
case 2122:
case 2595:
case 2156:
case 1697:
case 308:
case 765:
case 2861:
case 1986:
case 3811:
case 748:
case 3409:
case 1278:
case 1259:
case 365:
case 428:
case 2812:
case 3894:
case 3494:
case 3089:
case 3604:
case 1310:
case 1949:
case 3210:
case 405:
case 3490:
case 4043:
case 348:
case 393:
case 2312:
case 825:
case 2522:
case 3187:
case 361:
case 3483:
case 3077:
case 2100:
case 2824:
case 2481:
case 3854:
case 1317:
case 239:
case 863:
case 9:
case 3573:
case 2541:
case 752:
case 3747:
case 2158:
case 3134:
case 3902:
case 1467:
case 3167:
case 3420:
case 3177:
case 3092:
case 1824:
case 203:
case 1325:
case 2003:
case 3203:
case 479:
case 3922:
case 2761:
case 3431:
case 2773:
case 1718:
case 2664:
case 338:
case 1303:
case 1285:
case 2934:
case 3052:
case 2979:
case 1336:
case 1692:
case 1301:
case 3976:
case 643:
case 1554:
case 414:
case 2389:
case 3039:
case 577:
case 258:
case 2333:
case 3090:
case 2665:
case 2680:
case 1723:
case 1153:
case 4062:
case 2404:
case 3350:
case 3729:
case 4:
case 4001:
case 1742:
case 1082:
case 1996:
case 2888:
case 104:
case 249:
case 2509:
case 984:
case 2029:
case 2190:
case 1053:
case 3613:
case 1916:
case 1829:
case 3748:
case 3992:
case 2256:
case 3428:
case 449:
case 2742:
case 3448:
case 2963:
case 322:
case 1350:
case 2674:
case 3799:
case 3226:
case 1455:
case 2091:
case 1059:
case 811:
case 1326:
case 2929:
case 1943:
case 938:
case 81:
case 1396:
case 2897:
case 830:
case 373:
case 3046:
case 760:
case 3987:
case 827:
case 2675:
case 2538:
case 3316:
case 3852:
case 2375:
case 240:
case 796:
case 3331:
case 1087:
case 1792:
case 7:
case 3740:
case 56:
case 2694:
case 244:
case 3988:
case 522:
case 2487:
case 3018:
case 2975:
case 1774:
case 3655:
case 999:
case 3891:
case 2708:
case 1994:
case 4053:
case 3545:
case 3389:
case 26:
case 2510:
case 1561:
case 879:
case 720:
case 2008:
case 485:
case 1879:
case 3733:
case 3615:
case 540:
case 2612:
case 3288:
case 1010:
case 2872:
case 2938:
case 3227:
case 2093:
case 3072:
case 2068:
case 2702:
case 3719:
case 2080:
case 3858:
case 2173:
case 1175:
case 1948:
case 857:
case 3216:
case 2515:
case 138:
case 3563:
case 1526:
case 70:
case 3837:
case 1359:
case 1094:
case 331:
case 2831:
case 181:
case 1930:
case 3923:
case 4063:
case 3688:
case 3009:
case 1016:
case 3016:
case 866:
case 3753:
case 2255:
case 3010:
case 2264:
case 1146:
case 536:
case 413:
case 2514:
case 434:
case 2201:
case 3034:
case 2411:
case 1392:
case 1594:
case 624:
case 534:
case 1905:
case 3252:
case 2358:
case 2184:
case 3489:
case 2590:
case 2134:
case 3013:
case 1501:
case 899:
case 2058:
case 386:
case 691:
case 124:
case 4008:
case 1565:
case 175:
case 3446:
case 746:
case 2965:
case 1904:
case 3611:
case 339:
case 399:
case 3758:
case 2825:
case 1494:
case 2131:
case 205:
case 2038:
case 3231:
case 1516:
case 926:
case 1975:
case 2067:
case 3222:
case 831:
case 1925:
case 3454:
case 1136:
case 2836:
case 2557:
case 3369:
case 3804:
case 3680:
case 248:
case 1429:
case 3557:
case 1598:
case 958:
case 3665:
case 2727:
case 3087:
case 3324:
case 1500:
case 1248:
case 606:
case 3889:
case 846:
case 1475:
case 626:
case 1981:
case 804:
case 1585:
case 2565:
case 1014:
case 3485:
case 1341:
case 576:
case 182:
case 3931:
case 3861:
case 684:
case 2999:
case 4004:
case 550:
case 3663:
case 4022:
case 3826:
case 2392:
case 110:
case 1140:
case 3101:
case 3116:
case 1754:
case 1445:
case 3110:
case 1035:
case 397:
case 284:
case 2342:
case 3269:
case 2794:
case 318:
case 2170:
case 3677:
case 1940:
case 3309:
case 1650:
case 803:
case 1231:
case 734:
case 1932:
case 3715:
case 1728:
case 953:
case 3458:
case 3310:
case 3338:
case 1851:
case 2649:
case 3818:
case 2989:
case 931:
case 3340:
case 945:
case 1887:
case 3575:
case 3504:
case 1740:
case 2757:
case 2291:
case 3875:
case 251:
case 2261:
case 1702:
case 2480:
case 2423:
case 3468:
case 1687:
case 2534:
case 731:
case 551:
case 1492:
case 1026:
case 3384:
case 1802:
case 764:
case 1132:
case 3059:
case 3692:
case 3157:
case 2895:
case 109:
case 2731:
case 44:
case 262:
case 3020:
case 1615:
case 3531:
case 511:
case 2138:
case 2424:
case 25:
case 3551:
case 1951:
case 2144:
case 774:
case 463:
case 1227:
case 354:
case 1406:
case 1442:
case 1786:
case 2043:
case 2535:
case 1106:
case 3725:
case 1939:
case 4039:
case 3647:
case 2736:
case 1908:
case 1998:
case 2056:
case 495:
case 313:
case 1164:
case 3571:
case 555:
case 2739:
case 1567:
case 2499:
case 2666:
case 4033:
case 2347:
case 775:
case 271:
case 950:
case 2045:
case 3821:
case 3162:
case 3453:
case 3256:
case 1667:
case 3215:
case 2109:
case 2162:
case 2143:
case 3560:
case 3179:
case 3855:
case 256:
case 1351:
case 1311:
case 3939:
case 970:
case 612:
case 3779:
case 3353:
case 2041:
case 2234:
case 3374:
case 2034:
case 3829:
case 2475:
case 1405:
case 1902:
case 404:
case 3509:
case 601:
case 989:
case 1186:
case 860:
case 3464:
case 3675:
case 3927:
case 4071:
case 3661:
case 2579:
case 3776:
case 787:
case 3641:
case 2539:
case 3750:
case 3115:
case 3718:
case 3580:
case 3000:
case 3699:
case 1368:
case 3402:
case 1721:
case 875:
case 1426:
case 1579:
case 3043:
case 2771:
case 3290:
case 732:
case 2477:
case 1756:
case 1917:
case 1966:
case 566:
case 2737:
case 2504:
case 638:
case 3488:
case 652:
case 3132:
case 1946:
case 2571:
case 147:
case 947:
case 3238:
case 422:
case 2996:
case 3784:
case 3472:
case 1162:
case 1269:
case 1174:
case 1873:
case 1969:
case 1684:
case 1886:
case 3685:
case 1170:
case 852:
case 927:
case 1903:
case 749:
case 1437:
case 2273:
case 55:
case 1238:
case 1335:
case 312:
case 2909:
case 2136:
case 1263:
case 3657:
case 304:
case 210:
case 1685:
case 4029:
case 2521:
case 1418:
case 2719:
case 254:
case 2097:
case 2705:
case 1898:
case 3530:
case 1629:
case 3686:
case 367:
case 2926:
case 783:
case 3527:
case 3983:
case 3205:
case 553:
case 3094:
case 686:
case 3362:
case 2852:
case 2006:
case 1921:
case 615:
case 3330:
case 3180:
case 3963:
case 229:
case 3470:
case 3550:
case 1353:
case 997:
case 3766:
case 1499:
case 622:
case 3769:
case 3156:
case 1971:
case 2676:
case 483:
case 4072:
case 1568:
case 3793:
case 4034:
case 3003:
case 882:
case 625:
case 2077:
case 2011:
case 184:
case 3299:
case 3596:
case 2900:
case 415:
case 1753:
case 3797:
case 698:
case 2735:
case 139:
case 2007:
case 3924:
case 3986:
case 2614:
case 1198:
case 2586:
case 3780:
case 2416:
case 1646:
case 3576:
case 327:
case 2625:
case 1065:
case 2163:
case 2302:
case 2018:
case 1980:
case 3376:
case 547:
case 1246:
case 1277:
case 3952:
case 2345:
case 2890:
case 667:
case 1090:
case 508:
case 2885:
case 816:
case 2328:
case 784:
case 2695:
case 2237:
case 3881:
case 709:
case 1444:
case 844:
case 2648:
case 2524:
case 342:
case 810:
case 2903:
case 2894:
case 3519:
case 3360:
case 3408:
case 3392:
case 1922:
case 2076:
case 2339:
case 443:
case 631:
case 1933:
case 3511:
case 490:
case 1688:
case 4066:
case 227:
case 2746:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1688929201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,];
var gg_b = "1688929201/";

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
