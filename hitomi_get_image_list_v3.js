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
case 549:
case 3682:
case 3586:
case 934:
case 417:
case 2435:
case 2252:
case 2848:
case 695:
case 2896:
case 1934:
case 2828:
case 1005:
case 3298:
case 3287:
case 203:
case 3743:
case 1942:
case 2024:
case 1575:
case 3934:
case 4059:
case 1653:
case 1711:
case 1164:
case 635:
case 445:
case 1543:
case 884:
case 2611:
case 647:
case 1139:
case 3456:
case 2491:
case 686:
case 3104:
case 452:
case 841:
case 455:
case 1382:
case 1394:
case 648:
case 2658:
case 172:
case 1034:
case 3410:
case 1467:
case 2939:
case 3498:
case 1229:
case 3649:
case 1299:
case 2842:
case 3903:
case 3265:
case 3145:
case 297:
case 3438:
case 1875:
case 590:
case 398:
case 2172:
case 77:
case 508:
case 2908:
case 1684:
case 1335:
case 3650:
case 614:
case 1081:
case 861:
case 902:
case 1393:
case 2663:
case 2218:
case 1707:
case 200:
case 764:
case 855:
case 2033:
case 2503:
case 1667:
case 3068:
case 1372:
case 1119:
case 1784:
case 1547:
case 482:
case 1492:
case 2568:
case 2037:
case 470:
case 3908:
case 416:
case 3043:
case 3439:
case 2542:
case 4085:
case 1989:
case 1910:
case 1445:
case 1675:
case 234:
case 3030:
case 2294:
case 2627:
case 2229:
case 2221:
case 2938:
case 2195:
case 3437:
case 3841:
case 2864:
case 1854:
case 1915:
case 50:
case 1070:
case 471:
case 3830:
case 1009:
case 1929:
case 27:
case 1513:
case 3913:
case 3462:
case 3319:
case 1677:
case 405:
case 1952:
case 326:
case 3389:
case 1510:
case 1612:
case 963:
case 810:
case 2334:
case 2498:
case 961:
case 3806:
case 3473:
case 1830:
case 3862:
case 2978:
case 2083:
case 1944:
case 191:
case 3547:
case 320:
case 3539:
case 1165:
case 2809:
case 2580:
case 1237:
case 2084:
case 2560:
case 3563:
case 3600:
case 3053:
case 2:
case 2204:
case 1160:
case 1935:
case 1691:
case 177:
case 114:
case 1541:
case 2298:
case 3160:
case 2316:
case 3572:
case 3232:
case 432:
case 3344:
case 128:
case 3088:
case 2231:
case 379:
case 2675:
case 1090:
case 3278:
case 2391:
case 3012:
case 2739:
case 3531:
case 3197:
case 3850:
case 2822:
case 650:
case 3404:
case 3558:
case 539:
case 4048:
case 84:
case 697:
case 1734:
case 3309:
case 2474:
case 3753:
case 1398:
case 3953:
case 3609:
case 1954:
case 4068:
case 2752:
case 2948:
case 3576:
case 2701:
case 3219:
case 2364:
case 1432:
case 2926:
case 3122:
case 779:
case 118:
case 3767:
case 2728:
case 404:
case 3578:
case 1531:
case 1936:
case 3204:
case 315:
case 2744:
case 4069:
case 2428:
case 718:
case 2576:
case 1604:
case 3089:
case 2792:
case 1392:
case 2669:
case 2027:
case 4083:
case 661:
case 1682:
case 2071:
case 1348:
case 3313:
case 1560:
case 214:
case 3359:
case 2088:
case 580:
case 2292:
case 3630:
case 497:
case 3238:
case 397:
case 2875:
case 225:
case 1255:
case 1709:
case 1608:
case 1442:
case 3734:
case 1885:
case 385:
case 2989:
case 2857:
case 3627:
case 3697:
case 436:
case 3613:
case 2760:
case 460:
case 966:
case 3189:
case 3266:
case 4030:
case 1928:
case 1425:
case 1591:
case 702:
case 817:
case 3836:
case 414:
case 1310:
case 51:
case 2216:
case 1660:
case 2656:
case 3422:
case 1159:
case 1652:
case 2829:
case 3545:
case 2090:
case 3430:
case 2907:
case 1447:
case 3902:
case 235:
case 2717:
case 4076:
case 2770:
case 3735:
case 2804:
case 1918:
case 2961:
case 3856:
case 579:
case 2746:
case 2190:
case 134:
case 3591:
case 3307:
case 2558:
case 2790:
case 3570:
case 3519:
case 3245:
case 1111:
case 3878:
case 1931:
case 1064:
case 1282:
case 3566:
case 3969:
case 3713:
case 3621:
case 1356:
case 3674:
case 1500:
case 986:
case 3185:
case 3869:
case 2163:
case 1504:
case 313:
case 3652:
case 3741:
case 216:
case 105:
case 3227:
case 2586:
case 1180:
case 378:
case 1956:
case 2894:
case 3475:
case 1106:
case 1161:
case 566:
case 3272:
case 832:
case 1285:
case 1468:
case 2678:
case 2189:
case 1420:
case 1112:
case 3556:
case 2395:
case 2605:
case 880:
case 1067:
case 2235:
case 330:
case 3670:
case 2376:
case 157:
case 761:
case 3397:
case 1537:
case 3414:
case 2291:
case 2160:
case 2903:
case 158:
case 161:
case 289:
case 1650:
case 394:
case 3669:
case 3335:
case 3143:
case 889:
case 3648:
case 2102:
case 464:
case 1318:
case 2769:
case 3075:
case 1540:
case 3884:
case 2418:
case 2047:
case 3554:
case 1487:
case 1744:
case 3702:
case 3233:
case 2442:
case 2002:
case 3987:
case 1518:
case 1439:
case 1197:
case 2449:
case 3569:
case 3955:
case 2573:
case 658:
case 2312:
case 113:
case 3959:
case 1326:
case 3067:
case 1600:
case 2321:
case 449:
case 2331:
case 444:
case 251:
case 2920:
case 3237:
case 2708:
case 3286:
case 2078:
case 616:
case 301:
case 1988:
case 299:
case 2228:
case 2375:
case 698:
case 3763:
case 2684:
case 2262:
case 3860:
case 1969:
case 3178:
case 2767:
case 2650:
case 2067:
case 1642:
case 3259:
case 1149:
case 699:
case 358:
case 3941:
case 3807:
case 474:
case 2811:
case 3326:
case 852:
case 2378:
case 3653:
case 2045:
case 2689:
case 2332:
case 250:
case 348:
case 3420:
case 2348:
case 1485:
case 3644:
case 2883:
case 1488:
case 659:
case 424:
case 2099:
case 17:
case 1801:
case 3275:
case 446:
case 1960:
case 3046:
case 4072:
case 182:
case 3417:
case 2320:
case 3816:
case 33:
case 3835:
case 1720:
case 3339:
case 3522:
case 885:
case 3445:
case 252:
case 3935:
case 2632:
case 1878:
case 1568:
case 1697:
case 2100:
case 493:
case 1545:
case 1188:
case 541:
case 754:
case 2729:
case 1891:
case 1137:
case 3262:
case 3290:
case 848:
case 64:
case 2820:
case 3567:
case 2419:
case 2839:
case 1049:
case 370:
case 69:
case 3434:
case 2437:
case 1200:
case 3196:
case 3497:
case 3736:
case 669:
case 1261:
case 3901:
case 3457:
case 3146:
case 1692:
case 3402:
case 4024:
case 3931:
case 168:
case 3802:
case 2693:
case 62:
case 1433:
case 3944:
case 96:
case 462:
case 3391:
case 1004:
case 2844:
case 1320:
case 3343:
case 3291:
case 604:
case 1837:
case 2467:
case 2679:
case 2447:
case 1076:
case 3529:
case 1044:
case 308:
case 3080:
case 188:
case 3111:
case 3361:
case 2575:
case 748:
case 2681:
case 1199:
case 3306:
case 3561:
case 3781:
case 458:
case 1640:
case 2134:
case 3723:
case 2490:
case 1732:
case 2887:
case 3604:
case 4066:
case 2402:
case 1838:
case 3765:
case 2008:
case 804:
case 2623:
case 0:
case 1860:
case 3166:
case 3127:
case 3340:
case 2868:
case 3793:
case 703:
case 3244:
case 2929:
case 4057:
case 953:
case 2119:
case 2765:
case 2254:
case 412:
case 1478:
case 2487:
case 2546:
case 906:
case 3263:
case 2970:
case 1054:
case 4011:
case 3050:
case 851:
case 60:
case 542:
case 2912:
case 1567:
case 3881:
case 4081:
case 367:
case 1399:
case 18:
case 171:
case 3403:
case 593:
case 4000:
case 1631:
case 3617:
case 70:
case 711:
case 376:
case 2722:
case 4028:
case 3103:
case 2682:
case 2423:
case 2480:
case 1770:
case 1146:
case 1307:
case 2093:
case 1339:
case 2552:
case 3029:
case 3212:
case 495:
case 1303:
case 2107:
case 258:
case 974:
case 2096:
case 2287:
case 1003:
case 636:
case 512:
case 2162:
case 502:
case 1352:
case 732:
case 3727:
case 307:
case 585:
case 3234:
case 676:
case 3785:
case 2909:
case 3688:
case 2512:
case 2168:
case 3173:
case 1941:
case 1367:
case 244:
case 1381:
case 1610:
case 2962:
case 2288:
case 3023:
case 613:
case 3200:
case 2777:
case 2015:
case 2035:
case 108:
case 3726:
case 1205:
case 2694:
case 3979:
case 554:
case 3828:
case 2888:
case 1472:
case 1807:
case 2945:
case 3007:
case 3546:
case 352:
case 4060:
case 257:
case 3834:
case 1767:
case 2193:
case 1755:
case 3225:
case 2081:
case 1042:
case 1347:
case 1362:
case 1564:
case 1227:
case 1217:
case 629:
case 1015:
case 2173:
case 3260:
case 3635:
case 3481:
case 2064:
case 3490:
case 3971:
case 634:
case 2830:
case 2880:
case 1096:
case 1927:
case 3812:
case 2655:
case 1114:
case 3560:
case 2934:
case 4032:
case 4065:
case 1779:
case 3724:
case 3797:
case 2251:
case 588:
case 3174:
case 4075:
case 2095:
case 1241:
case 2369:
case 2370:
case 2124:
case 708:
case 3599:
case 2404:
case 2297:
case 998:
case 3588:
case 4054:
case 1945:
case 3912:
case 2086:
case 2253:
case 694:
case 2116:
case 253:
case 1503:
case 1499:
case 4025:
case 3675:
case 1643:
case 490:
case 1812:
case 3442:
case 2680:
case 1402:
case 3632:
case 1491:
case 1982:
case 1903:
case 3792:
case 1306:
case 278:
case 2702:
case 2730:
case 1489:
case 1895:
case 1019:
case 611:
case 1284:
case 484:
case 1887:
case 153:
case 2257:
case 2815:
case 1316:
case 2247:
case 1373:
case 3540:
case 1231:
case 389:
case 3471:
case 3133:
case 2139:
case 842:
case 2131:
case 3581:
case 895:
case 800:
case 1670:
case 1923:
case 2780:
case 729:
case 758:
case 3951:
case 1609:
case 1066:
case 1484:
case 3249:
case 359:
case 4033:
case 3817:
case 1704:
case 1007:
case 2936:
case 545:
case 3113:
case 2483:
case 1176:
case 2144:
case 2350:
case 3372:
case 2737:
case 2862:
case 3827:
case 3213:
case 908:
case 3789:
case 2674:
case 1115:
case 1718:
case 3492:
case 2871:
case 2400:
case 3057:
case 1569:
case 1213:
case 19:
case 2440:
case 1086:
case 1577:
case 2113:
case 1898:
case 854:
case 3469:
case 3394:
case 1892:
case 2609:
case 2245:
case 4070:
case 1749:
case 37:
case 3418:
case 1791:
case 3911:
case 99:
case 606:
case 431:
case 1559:
case 3026:
case 3048:
case 2513:
case 3465:
case 104:
case 2774:
case 1412:
case 1983:
case 494:
case 3031:
case 1116:
case 587:
case 1965:
case 649:
case 3235:
case 1699:
case 54:
case 2493:
case 1972:
case 2502:
case 2175:
case 3542:
case 95:
case 1665:
case 450:
case 1175:
case 1476:
case 2152:
case 1846:
case 292:
case 3932:
case 1512:
case 2340:
case 3509:
case 1712:
case 3303:
case 3943:
case 1703:
case 291:
case 4047:
case 582:
case 2524:
case 242:
case 806:
case 2237:
case 3285:
case 2697:
case 1150:
case 2276:
case 891:
case 803:
case 2734:
case 723:
case 2053:
case 3018:
case 656:
case 2983:
case 387:
case 3585:
case 4074:
case 12:
case 181:
case 3779:
case 1319:
case 627:
case 103:
case 187:
case 927:
case 374:
case 3920:
case 2409:
case 3460:
case 3374:
case 1921:
case 3673:
case 596:
case 2021:
case 3690:
case 1975:
case 3366:
case 1135:
case 3845:
case 3253:
case 2847:
case 1221:
case 1938:
case 2853:
case 2059:
case 3803:
case 3033:
case 1804:
case 3333:
case 822:
case 461:
case 2286:
case 3833:
case 778:
case 808:
case 372:
case 331:
case 1778:
case 4037:
case 1741:
case 309:
case 174:
case 3997:
case 31:
case 2528:
case 109:
case 383:
case 36:
case 1546:
case 3324:
case 2495:
case 2191:
case 3680:
case 3055:
case 2933:
case 2018:
case 1556:
case 2255:
case 3183:
case 559:
case 605:
case 3972:
case 4017:
case 1679:
case 1201:
case 421:
case 226:
case 1573:
case 237:
case 3628:
case 679:
case 46:
case 411:
case 3091:
case 750:
case 3550:
case 2866:
case 736:
case 3720:
case 2121:
case 1810:
case 607:
case 4087:
case 4091:
case 865:
case 682:
case 3059:
case 479:
case 2967:
case 514:
case 1683:
case 448:
case 1055:
case 1035:
case 780:
case 34:
case 3120:
case 1752:
case 298:
case 408:
case 3467:
case 518:
case 833:
case 1355:
case 124:
case 155:
case 1904:
case 463:
case 125:
case 1182:
case 1497:
case 1406:
case 1314:
case 1109:
case 1486:
case 1422:
case 1177:
case 1168:
case 2303:
case 2373:
case 3877:
case 976:
case 3910:
case 3553:
case 2607:
case 1793:
case 2318:
case 4021:
case 56:
case 932:
case 1220:
case 928:
case 2850:
case 4090:
case 2106:
case 435:
case 2038:
case 111:
case 731:
case 2420:
case 4071:
case 3937:
case 3201:
case 3731:
case 1011:
case 726:
case 900:
case 3110:
case 1750:
case 334:
case 2793:
case 3549:
case 2869:
case 2943:
case 3316:
case 756:
case 1083:
case 2594:
case 1602:
case 369:
case 2351:
case 2265:
case 2579:
case 1649:
case 2069:
case 3416:
case 3995:
case 1673:
case 2122:
case 1873:
case 747:
case 2992:
case 1110:
case 3518:
case 3024:
case 2781:
case 1939:
case 690:
case 2538:
case 1263:
case 992:
case 1309:
case 977:
case 2132:
case 3347:
case 3872:
case 3991:
case 1515:
case 1862:
case 1883:
case 1769:
case 2477:
case 3195:
case 1323:
case 939:
case 2718:
case 2046:
case 3530:
case 1768:
case 2996:
case 4077:
case 721:
case 2012:
case 2129:
case 2211:
case 1925:
case 2178:
case 3455:
case 572:
case 2281:
case 3589:
case 2362:
case 91:
case 638:
case 3187:
case 1329:
case 1357:
case 1554:
case 2700:
case 3177:
case 341:
case 1853:
case 1283:
case 2662:
case 2147:
case 2194:
case 1380:
case 950:
case 133:
case 773:
case 1731:
case 1796:
case 744:
case 120:
case 3134:
case 1204:
case 530:
case 1869:
case 3607:
case 1689:
case 3251:
case 3703:
case 733:
case 1423:
case 2808:
case 1561:
case 429:
case 2177:
case 333:
case 2451:
case 1803:
case 2289:
case 107:
case 312:
case 1634:
case 2914:
case 1365:
case 2899:
case 1296:
case 2048:
case 2548:
case 437:
case 2202:
case 1722:
case 3863:
case 557:
case 1596:
case 100:
case 1509:
case 3998:
case 3390:
case 1845:
case 1526:
case 1020:
case 2963:
case 2366:
case 3241:
case 573:
case 3008:
case 3217:
case 2758:
case 1819:
case 392:
case 931:
case 3315:
case 2341:
case 2185:
case 3565:
case 1622:
case 3296:
case 1254:
case 955:
case 869:
case 2389:
case 3776:
case 3087:
case 2578:
case 1134:
case 3821:
case 149:
case 1104:
case 2482:
case 232:
case 3126:
case 673:
case 3373:
case 788:
case 535:
case 1874:
case 2518:
case 3130:
case 3025:
case 914:
case 1048:
case 1243:
case 3906:
case 4078:
case 1995:
case 2240:
case 2849:
case 2872:
case 3510:
case 3431:
case 1777:
case 633:
case 3172:
case 2032:
case 2470:
case 3447:
case 443:
case 386:
case 3252:
case 2197:
case 4018:
case 3376:
case 3631:
case 3689:
case 371:
case 85:
case 892:
case 129:
case 1781:
case 3822:
case 3651:
case 2810:
case 689:
case 3634:
case 1122:
case 984:
case 300:
case 1668:
case 2506:
case 3063:
case 2876:
case 343:
case 2355:
case 1792:
case 2987:
case 3784:
case 380:
case 2885:
case 3267:
case 1586:
case 3148:
case 2812:
case 3986:
case 4049:
case 1330:
case 3679:
case 3140:
case 944:
case 3073:
case 1203:
case 734:
case 1839:
case 357:
case 2533:
case 2840:
case 2368:
case 1416:
case 2070:
case 1530:
case 2672:
case 2182:
case 3985:
case 1508:
case 4006:
case 2581:
case 1103:
case 499:
case 224:
case 2360:
case 1465:
case 1378:
case 2520:
case 1427:
case 646:
case 1202:
case 3325:
case 3034:
case 2525:
case 3848:
case 862:
case 478:
case 2283:
case 2637:
case 2647:
case 351:
case 1880:
case 938:
case 1790:
case 1196:
case 88:
case 715:
case 2816:
case 477:
case 2043:
case 3246:
case 1536:
case 24:
case 1434:
case 2833:
case 2223:
case 2874:
case 3123:
case 94:
case 1334:
case 520:
case 3002:
case 3805:
case 1166:
case 1249:
case 3320:
case 1155:
case 564:
case 2589:
case 4019:
case 1754:
case 785:
case 3536:
case 1986:
case 159:
case 1460:
case 725:
case 2643:
case 1680:
case 3138:
case 3900:
case 3705:
case 2410:
case 336:
case 1947:
case 1639:
case 2965:
case 3524:
case 777:
case 2484:
case 2698:
case 2807:
case 1999:
case 1728:
case 3312:
case 2232:
case 22:
case 3749:
case 2981:
case 286:
case 72:
case 3477:
case 4046:
case 1490:
case 3368:
case 2472:
case 3:
case 1246:
case 1527:
case 4015:
case 1178:
case 1006:
case 964:
case 824:
case 3794:
case 3939:
case 2259:
case 2756:
case 739:
case 1018:
case 1415:
case 1095:
case 946:
case 1771:
case 3922:
case 1828:
case 2881:
case 3729:
case 1051:
case 399:
case 2146:
case 1493:
case 1461:
case 1520:
case 377:
case 4038:
case 1851:
case 1582:
case 571:
case 3482:
case 1539:
case 1236:
case 2029:
case 457:
case 2011:
case 337:
case 2020:
case 3643:
case 3958:
case 1245:
case 1835:
case 1850:
case 1763:
case 2749:
case 1124:
case 681:
case 115:
case 1374:
case 3844:
case 1881:
case 1121:
case 1662:
case 4058:
case 227:
case 3157:
case 2659:
case 2492:
case 87:
case 3070:
case 3523:
case 2905:
case 3701:
case 375:
case 2954:
case 632:
case 2706:
case 1906:
case 610:
case 1214:
case 1179:
case 2192:
case 2401:
case 3887:
case 346:
case 3842:
case 1232:
case 3656:
case 4016:
case 2212:
case 1797:
case 2947:
case 2275:
case 2446:
case 1916:
case 2644:
case 1603:
case 1388:
case 1794:
case 1959:
case 3274:
case 692:
case 527:
case 1654:
case 2429:
case 1050:
case 3268:
case 2592:
case 2242:
case 3433:
case 3861:
case 2344:
case 3192:
case 2514:
case 3107:
case 3988:
case 2478:
case 295:
case 2557:
case 196:
case 1240:
case 887:
case 1389:
case 3899:
case 1293:
case 1351:
case 2456:
case 3076:
case 210:
case 1358:
case 2846:
case 1908:
case 1346:
case 3916:
case 2226:
case 2473:
case 881:
case 2486:
case 3428:
case 3239:
case 1834:
case 2980:
case 3299:
case 3155:
case 2080:
case 2649:
case 3398:
case 510:
case 3721:
case 1968:
case 1842:
case 2775:
case 662:
case 1605:
case 576:
case 997:
case 2725:
case 3915:
case 269:
case 193:
case 722:
case 198:
case 2645:
case 2879:
case 3888:
case 1162:
case 1615:
case 3069:
case 3483:
case 488:
case 184:
case 248:
case 1107:
case 2158:
case 3594:
case 3761:
case 2349:
case 209:
case 1270:
case 1745:
case 836:
case 1375:
case 1641:
case 480:
case 32:
case 2782:
case 2003:
case 2006:
case 3205:
case 3284:
case 3660:
case 324:
case 3132:
case 1772:
case 2937:
case 1403:
case 239:
case 2241:
case 2798:
case 3967:
case 1630:
case 2148:
case 2249:
case 3940:
case 1265:
case 1337:
case 1404:
case 3893:
case 1967:
case 1216:
case 3370:
case 2499:
case 2832:
case 2748:
case 1174:
case 2304:
case 1167:
case 1315:
case 1295:
case 23:
case 969:
case 3365:
case 1185:
case 3407:
case 1633:
case 2068:
case 1914:
case 2654:
case 3796:
case 2845:
case 3014:
case 1471:
case 989:
case 568:
case 935:
case 505:
case 4073:
case 1105:
case 3659:
case 2924:
case 2010:
case 3083:
case 2982:
case 3040:
case 3718:
case 2561:
case 2407:
case 1479:
case 3976:
case 314:
case 2445:
case 3011:
case 2735:
case 3859:
case 1857:
case 1014:
case 921:
case 801:
case 3317:
case 1780:
case 516:
case 2547:
case 3081:
case 1001:
case 2169:
case 2051:
case 2873:
case 3311:
case 2444:
case 2167:
case 2951:
case 1721:
case 2597:
case 1976:
case 775:
case 2624:
case 3276:
case 2266:
case 116:
case 990:
case 1361:
case 1100:
case 1108:
case 1123:
case 3568:
case 3210:
case 2554:
case 1343:
case 1058:
case 2092:
case 3739:
case 786:
case 2026:
case 2831:
case 2823:
case 1519:
case 438:
case 285:
case 2123:
case 2601:
case 2511:
case 1426:
case 2405:
case 327:
case 1557:
case 1384:
case 3271:
case 3814:
case 1271:
case 390:
case 3873:
case 2388:
case 3062:
case 323:
case 3831:
case 2762:
case 2612:
case 3102:
case 3450:
case 81:
case 3824:
case 267:
case 2159:
case 280:
case 3619:
case 2087:
case 524:
case 3231:
case 3041:
case 1523:
case 1262:
case 2660:
case 381:
case 2338:
case 3825:
case 1474:
case 1350:
case 3853:
case 164:
case 594:
case 987:
case 2935:
case 684:
case 1984:
case 792:
case 3879:
case 1716:
case 288:
case 2640:
case 3700:
case 2796:
case 898:
case 617:
case 2234:
case 1278:
case 975:
case 221:
case 601:
case 2685:
case 178:
case 2602:
case 147:
case 567:
case 3770:
case 419:
case 1061:
case 749:
case 1619:
case 550:
case 2824:
case 1088:
case 3681:
case 951:
case 1098:
case 2465:
case 2324:
case 2986:
case 1700:
case 1737:
case 2039:
case 1289:
case 783:
case 3318:
case 770:
case 3017:
case 867:
case 873:
case 2768:
case 296:
case 2367:
case 3179:
case 1919:
case 1611:
case 3441:
case 3254:
case 1505:
case 1599:
case 2479:
case 3346:
case 941:
case 2127:
case 1470:
case 468:
case 3341:
case 651:
case 4009:
case 513:
case 3580:
case 1562:
case 3977:
case 3606:
case 195:
case 3826:
case 476:
case 3782:
case 2998:
case 3323:
case 2858:
case 994:
case 3295:
case 3629:
case 737:
case 3678:
case 3982:
case 3039:
case 3330:
case 3459:
case 451:
case 2430:
case 3436:
case 3501:
case 2596:
case 2687:
case 972:
case 784:
case 1029:
case 3406:
case 1924:
case 1151:
case 2551:
case 2966:
case 558:
case 3385:
case 1776:
case 3714:
case 1259:
case 909:
case 1494:
case 1215:
case 1555:
case 1848:
case 3035:
case 3846:
case 3387:
case 846:
case 1132:
case 121:
case 3332:
case 1831:
case 1789:
case 2641:
case 3411:
case 127:
case 3684:
case 2031:
case 3780:
case 825:
case 3716:
case 3882:
case 2919:
case 1840:
case 228:
case 260:
case 1449:
case 459:
case 2969:
case 1128:
case 3269:
case 2413:
case 3184:
case 2284:
case 583:
case 1996:
case 693:
case 2460:
case 340:
case 2806:
case 2799:
case 1502:
case 294:
case 1312:
case 2030:
case 1574:
case 3925:
case 1071:
case 730:
case 1725:
case 2327:
case 3730:
case 1333:
case 2377:
case 700:
case 453:
case 2380:
case 3557:
case 2957:
case 467:
case 347:
case 2686:
case 3125:
case 293:
case 1234:
case 2890:
case 3709:
case 922:
case 745:
case 765:
case 1827:
case 1302:
case 657:
case 757:
case 3843:
case 1607:
case 83:
case 871:
case 1618:
case 3517:
case 2878:
case 2629:
case 1553:
case 3045:
case 2101:
case 577:
case 2379:
case 2250:
case 1740:
case 2759:
case 3170:
case 1601:
case 3865:
case 1951:
case 2014:
case 3453:
case 3095:
case 3485:
case 2176:
case 1277:
case 2825:
case 303:
case 2942:
case 2915:
case 2061:
case 2387:
case 2764:
case 3880:
case 1173:
case 525:
case 2988:
case 6:
case 1444:
case 2114:
case 3504:
case 3945:
case 3655:
case 1950:
case 766:
case 43:
case 2258:
case 3383:
case 3555:
case 238:
case 2636:
case 3224:
case 1730:
case 3216:
case 1233:
case 3060:
case 2186:
case 49:
case 3695:
case 1636:
case 1063:
case 2949:
case 217:
case 655:
case 1435:
case 1428:
case 1798:
case 1022:
case 845:
case 2054:
case 1464:
case 3382:
case 215:
case 3028:
case 2715:
case 4029:
case 519:
case 2628:
case 1224:
case 4:
case 3993:
case 2466:
case 1535:
case 3754:
case 2932:
case 1866:
case 1708:
case 2695:
case 742:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1713654001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,];
var gg_b = "1713654001/";

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
