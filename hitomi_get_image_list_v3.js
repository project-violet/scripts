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
case 3897:
case 2676:
case 3692:
case 586:
case 1099:
case 1642:
case 1211:
case 678:
case 3578:
case 3176:
case 121:
case 383:
case 3834:
case 2814:
case 1953:
case 219:
case 3336:
case 3584:
case 3967:
case 241:
case 3227:
case 2503:
case 2544:
case 3550:
case 439:
case 269:
case 1769:
case 2113:
case 2251:
case 2588:
case 3443:
case 2808:
case 2298:
case 3946:
case 327:
case 4085:
case 776:
case 1786:
case 3451:
case 3480:
case 1193:
case 210:
case 644:
case 3607:
case 154:
case 2423:
case 2398:
case 1231:
case 1657:
case 843:
case 2868:
case 3611:
case 1321:
case 2059:
case 1552:
case 2698:
case 306:
case 350:
case 124:
case 3266:
case 1689:
case 3810:
case 1876:
case 1235:
case 3217:
case 4030:
case 3012:
case 2440:
case 4005:
case 202:
case 4050:
case 3669:
case 3135:
case 1153:
case 388:
case 3081:
case 178:
case 1179:
case 2284:
case 249:
case 2099:
case 1828:
case 227:
case 1676:
case 190:
case 1371:
case 738:
case 2307:
case 2309:
case 1907:
case 3327:
case 1754:
case 2264:
case 864:
case 239:
case 960:
case 2155:
case 2915:
case 1227:
case 2934:
case 1090:
case 1102:
case 2297:
case 2765:
case 1142:
case 2913:
case 2136:
case 3425:
case 4003:
case 3784:
case 2336:
case 1576:
case 3147:
case 3538:
case 2672:
case 2709:
case 50:
case 3606:
case 1063:
case 4062:
case 408:
case 535:
case 204:
case 3534:
case 201:
case 192:
case 1169:
case 3100:
case 81:
case 3495:
case 3958:
case 2554:
case 873:
case 181:
case 3192:
case 747:
case 792:
case 3075:
case 1659:
case 1055:
case 2582:
case 24:
case 2236:
case 491:
case 867:
case 2636:
case 3320:
case 4041:
case 1289:
case 3444:
case 2552:
case 599:
case 1767:
case 461:
case 296:
case 454:
case 2899:
case 4084:
case 2665:
case 2627:
case 1458:
case 2534:
case 3923:
case 2197:
case 2387:
case 3693:
case 1872:
case 2339:
case 1411:
case 1545:
case 2082:
case 1356:
case 1692:
case 1261:
case 3380:
case 2231:
case 1745:
case 2433:
case 2546:
case 1095:
case 3624:
case 2911:
case 1348:
case 32:
case 1807:
case 2757:
case 1523:
case 3296:
case 2417:
case 1703:
case 2513:
case 3264:
case 3844:
case 2660:
case 2130:
case 957:
case 1250:
case 3924:
case 2238:
case 3701:
case 3160:
case 1116:
case 1925:
case 3500:
case 2375:
case 9:
case 3542:
case 3985:
case 4093:
case 3655:
case 2797:
case 450:
case 3437:
case 26:
case 73:
case 1928:
case 967:
case 27:
case 2085:
case 255:
case 816:
case 3282:
case 2748:
case 3940:
case 1248:
case 3650:
case 1533:
case 107:
case 2369:
case 3312:
case 3634:
case 2116:
case 825:
case 3762:
case 1762:
case 2666:
case 277:
case 1578:
case 718:
case 1977:
case 613:
case 1027:
case 2829:
case 2274:
case 2105:
case 1013:
case 196:
case 780:
case 2590:
case 332:
case 2536:
case 2956:
case 1538:
case 910:
case 3845:
case 2758:
case 3471:
case 4011:
case 1243:
case 1849:
case 3864:
case 1406:
case 1996:
case 1530:
case 463:
case 2349:
case 1898:
case 474:
case 3699:
case 3959:
case 2174:
case 1394:
case 990:
case 133:
case 259:
case 2277:
case 1209:
case 2418:
case 2271:
case 1619:
case 4081:
case 3165:
case 3743:
case 1653:
case 3726:
case 1966:
case 3114:
case 4056:
case 1152:
case 370:
case 588:
case 414:
case 214:
case 3338:
case 731:
case 3582:
case 231:
case 3466:
case 1992:
case 1684:
case 2683:
case 3353:
case 1728:
case 1198:
case 2535:
case 1490:
case 1900:
case 3329:
case 3738:
case 1358:
case 3552:
case 4036:
case 273:
case 1268:
case 633:
case 3486:
case 2068:
case 647:
case 3222:
case 242:
case 845:
case 3274:
case 43:
case 1995:
case 576:
case 1391:
case 2147:
case 2940:
case 1437:
case 1672:
case 3001:
case 20:
case 639:
case 1534:
case 1600:
case 727:
case 3816:
case 1068:
case 2556:
case 1091:
case 3953:
case 4007:
case 1978:
case 1457:
case 1361:
case 2281:
case 4009:
case 2692:
case 2222:
case 4024:
case 100:
case 2891:
case 945:
case 2436:
case 1633:
case 1651:
case 314:
case 71:
case 3910:
case 741:
case 4015:
case 1930:
case 916:
case 2032:
case 949:
case 205:
case 3002:
case 680:
case 2170:
case 1319:
case 2434:
case 29:
case 2846:
case 2465:
case 2967:
case 2226:
case 2223:
case 21:
case 3162:
case 483:
case 3863:
case 1789:
case 2319:
case 1500:
case 2755:
case 1459:
case 2431:
case 1212:
case 1911:
case 2567:
case 856:
case 1865:
case 1165:
case 2784:
case 2220:
case 971:
case 1177:
case 3740:
case 519:
case 903:
case 3688:
case 526:
case 607:
case 74:
case 2095:
case 3022:
case 77:
case 4019:
case 2463:
case 212:
case 2893:
case 959:
case 1461:
case 1542:
case 1535:
case 1031:
case 676:
case 1586:
case 1382:
case 826:
case 427:
case 2722:
case 3556:
case 3177:
case 1465:
case 783:
case 2056:
case 2577:
case 793:
case 743:
case 2630:
case 1716:
case 4083:
case 1049:
case 2480:
case 2485:
case 1281:
case 2167:
case 265:
case 3780:
case 3447:
case 2004:
case 645:
case 1838:
case 2717:
case 814:
case 2774:
case 4012:
case 1516:
case 1450:
case 2925:
case 1320:
case 1588:
case 3922:
case 1837:
case 3979:
case 935:
case 3369:
case 2354:
case 3365:
case 3968:
case 1580:
case 801:
case 499:
case 12:
case 2492:
case 8:
case 2028:
case 479:
case 803:
case 2721:
case 322:
case 1366:
case 2102:
case 1618:
case 2736:
case 597:
case 1895:
case 637:
case 3691:
case 4073:
case 3229:
case 1973:
case 3253:
case 1100:
case 1894:
case 106:
case 3689:
case 982:
case 340:
case 2368:
case 1318:
case 806:
case 3918:
case 183:
case 3449:
case 1232:
case 2207:
case 3531:
case 1087:
case 1485:
case 2229:
case 2023:
case 1811:
case 3830:
case 132:
case 2752:
case 1163:
case 134:
case 884:
case 528:
case 2877:
case 2406:
case 3629:
case 3826:
case 1942:
case 2576:
case 4014:
case 2520:
case 1266:
case 1317:
case 2684:
case 137:
case 1173:
case 115:
case 3095:
case 721:
case 86:
case 2772:
case 976:
case 1967:
case 1573:
case 774:
case 1431:
case 1440:
case 2991:
case 1906:
case 1464:
case 865:
case 3545:
case 3290:
case 1455:
case 1387:
case 1594:
case 2257:
case 1088:
case 3295:
case 1143:
case 2009:
case 2148:
case 3306:
case 1519:
case 977:
case 961:
case 3664:
case 3487:
case 1606:
case 3187:
case 900:
case 3374:
case 648:
case 1025:
case 2937:
case 513:
case 2619:
case 1453:
case 915:
case 917:
case 3877:
case 2789:
case 148:
case 3406:
case 2746:
case 3273:
case 1161:
case 3439:
case 197:
case 2391:
case 3573:
case 1722:
case 1827:
case 2820:
case 603:
case 3865:
case 1439:
case 1498:
case 2370:
case 285:
case 0:
case 2015:
case 2157:
case 2484:
case 1449:
case 1204:
case 953:
case 2580:
case 1081:
case 1945:
case 2329:
case 2766:
case 2920:
case 912:
case 2474:
case 1685:
case 1621:
case 2079:
case 791:
case 4048:
case 1175:
case 4078:
case 3073:
case 521:
case 362:
case 1781:
case 2287:
case 4080:
case 248:
case 2124:
case 1814:
case 2117:
case 1438:
case 955:
case 3997:
case 2141:
case 3014:
case 1256:
case 3591:
case 3393:
case 1854:
case 2152:
case 2189:
case 3991:
case 3898:
case 2290:
case 4008:
case 979:
case 3527:
case 240:
case 2458:
case 3665:
case 4001:
case 946:
case 2969:
case 3175:
case 2943:
case 2429:
case 3648:
case 541:
case 2543:
case 2890:
case 969:
case 1572:
case 1748:
case 2838:
case 3493:
case 796:
case 213:
case 3755:
case 3426:
case 914:
case 2380:
case 601:
case 3212:
case 1514:
case 1596:
case 2240:
case 1064:
case 987:
case 3400:
case 221:
case 119:
case 2421:
case 2773:
case 2804:
case 3324:
case 471:
case 2106:
case 3717:
case 469:
case 3773:
case 3153:
case 2043:
case 3833:
case 1744:
case 3292:
case 581:
case 1747:
case 376:
case 2539:
case 391:
case 496:
case 1791:
case 3071:
case 1569:
case 378:
case 1812:
case 1299:
case 3796:
case 901:
case 2451:
case 2625:
case 3091:
case 1582:
case 1915:
case 2994:
case 2352:
case 3742:
case 3859:
case 3600:
case 3962:
case 3171:
case 2980:
case 1941:
case 2992:
case 1806:
case 3411:
case 2225:
case 4090:
case 2997:
case 311:
case 2575:
case 1556:
case 3191:
case 3596:
case 2743:
case 271:
case 558:
case 3342:
case 3595:
case 2527:
case 2787:
case 802:
case 3706:
case 3751:
case 589:
case 736:
case 116:
case 1564:
case 3892:
case 2414:
case 84:
case 1737:
case 2818:
case 724:
case 2228:
case 1374:
case 3477:
case 2831:
case 1864:
case 2896:
case 652:
case 1509:
case 407:
case 3854:
case 1833:
case 2711:
case 3788:
case 1373:
case 1707:
case 566:
case 1124:
case 1189:
case 2420:
case 3815:
case 3869:
case 1122:
case 2760:
case 1:
case 3442:
case 3252:
case 1557:
case 345:
case 4004:
case 978:
case 675:
case 2996:
case 1477:
case 3403:
case 3111:
case 620:
case 253:
case 288:
case 1638:
case 1093:
case 3364:
case 186:
case 1712:
case 1149:
case 3237:
case 3883:
case 83:
case 1086:
case 2270:
case 1794:
case 686:
case 1756:
case 2742:
case 909:
case 2443:
case 677:
case 3850:
case 3339:
case 2472:
case 2707:
case 540:
case 3141:
case 409:
case 3575:
case 666:
case 3243:
case 3501:
case 2487:
case 1782:
case 2317:
case 3180:
case 1170:
case 405:
case 1286:
case 2191:
case 1496:
case 138:
case 3194:
case 3956:
case 1531:
case 354:
case 114:
case 2313:
case 1694:
case 2792:
case 1034:
case 367:
case 517:
case 565:
case 3724:
case 1270:
case 2481:
case 3909:
case 3668:
case 2312:
case 3397:
case 2081:
case 3473:
case 2408:
case 1316:
case 3505:
case 2966:
case 2273:
case 1237:
case 2358:
case 2367:
case 2986:
case 1979:
case 3287:
case 1416:
case 2196:
case 2233:
case 3366:
case 2767:
case 2955:
case 952:
case 3984:
case 3498:
case 126:
case 1695:
case 3528:
case 1174:
case 2410:
case 2886:
case 550:
case 1870:
case 280:
case 3062:
case 3412:
case 4089:
case 3588:
case 1481:
case 2655:
case 4082:
case 3082:
case 3889:
case 857:
case 3345:
case 338:
case 1047:
case 4016:
case 956:
case 3752:
case 1893:
case 766:
case 3202:
case 3006:
case 770:
case 168:
case 943:
case 3103:
case 2146:
case 2514:
case 104:
case 2143:
case 3453:
case 3921:
case 14:
case 3513:
case 1656:
case 3303:
case 299:
case 3597:
case 1922:
case 2569:
case 3060:
case 3398:
case 2272:
case 2629:
case 2867:
case 455:
case 3088:
case 1314:
case 418:
case 3109:
case 3856:
case 3301:
case 3579:
case 3705:
case 1589:
case 478:
case 1736:
case 3079:
case 3242:
case 2595:
case 2738:
case 1475:
case 2798:
case 2694:
case 3098:
case 1147:
case 401:
case 4038:
case 2306:
case 2747:
case 2093:
case 3827:
case 262:
case 3938:
case 432:
case 3428:
case 2501:
case 334:
case 3190:
case 3457:
case 584:
case 3992:
case 304:
case 2132:
case 2854:
case 2202:
case 784:
case 1191:
case 356:
case 3807:
case 1395:
case 3861:
case 1460:
case 3567:
case 604:
case 2280:
case 2376:
case 2843:
case 3763:
case 1739:
case 787:
case 131:
case 2547:
case 3169:
case 1131:
case 3326:
case 1105:
case 1083:
case 111:
case 546:
case 3872:
case 717:
case 2316:
case 1313:
case 2438:
case 3657:
case 2862:
case 2399:
case 605:
case 1454:
case 2959:
case 1665:
case 1818:
case 423:
case 560:
case 2686:
case 2265:
case 3368:
case 2243:
case 3945:
case 1688:
case 1499:
case 1309:
case 2227:
case 2998:
case 2578:
case 2885:
case 3678:
case 208:
case 3311:
case 1337:
case 1529:
case 1224:
case 1362:
case 3293:
case 870:
case 130:
case 2611:
case 4043:
case 2279:
case 3512:
case 222:
case 3831:
case 1233:
case 2935:
case 1080:
case 1584:
case 3882:
case 3682:
case 451:
case 351:
case 821:
case 1795:
case 2497:
case 2949:
case 1432:
case 3641:
case 1241:
case 1207:
case 3201:
case 1650:
case 2553:
case 3322:
case 1101:
case 1855:
case 215:
case 1904:
case 1851:
case 3494:
case 921:
case 2810:
case 2010:
case 1384:
case 1527:
case 842:
case 1964:
case 3121:
case 3434:
case 2650:
case 3043:
case 610:
case 3794:
case 2476:
case 1441:
case 3040:
case 502:
case 1213:
case 3916:
case 3170:
case 2328:
case 729:
case 2386:
case 2444:
case 1968:
case 2253:
case 3769:
case 1758:
case 636:
case 555:
case 28:
case 3184:
case 2488:
case 862:
case 164:
case 2617:
case 1740:
case 922:
case 2006:
case 638:
case 1881:
case 3793:
case 1706:
case 3585:
case 2719:
case 3569:
case 1536:
case 892:
case 3571:
case 2918:
case 3181:
case 732:
case 3758:
case 2470:
case 844:
case 1521:
case 573:
case 1480:
case 1546:
case 2537:
case 2330:
case 307:
case 3686:
case 1130:
case 536:
case 1424:
case 1997:
case 2493:
case 3490:
case 1863:
case 1631:
case 1365:
case 3267:
case 35:
case 3090:
case 1001:
case 1958:
case 411:
case 818:
case 6:
case 3468:
case 381:
case 2005:
case 1605:
case 420:
case 1850:
case 2404:
case 3733:
case 2455:
case 1627:
case 260:
case 2342:
case 698:
case 3283:
case 2946:
case 4033:
case 331:
case 2741:
case 2176:
case 267:
case 659:
case 3331:
case 2086:
case 2944:
case 3268:
case 3016:
case 3387:
case 3035:
case 511:
case 2057:
case 1471:
case 3933:
case 1106:
case 3371:
case 2764:
case 1717:
case 2114:
case 2261:
case 2301:
case 2187:
case 3547:
case 187:
case 2750:
case 3325:
case 833:
case 2728:
case 2215:
case 3965:
case 4006:
case 4064:
case 3508:
case 1185:
case 1333:
case 2921:
case 3957:
case 611:
case 2100:
case 733:
case 19:
case 1502:
case 33:
case 3441:
case 920:
case 2213:
case 3115:
case 2977:
case 1442:
case 2055:
case 2870:
case 189:
case 1983:
case 223:
case 2952:
case 123:
case 41:
case 3318:
case 3559:
case 3517:
case 1693:
case 2942:
case 2775:
case 874:
case 2927:
case 4025:
case 492:
case 125:
case 1774:
case 1577:
case 127:
case 1880:
case 681:
case 3198:
case 7:
case 2033:
case 2671:
case 2083:
case 1691:
case 665:
case 498:
case 2494:
case 852:
case 1760:
case 46:
case 840:
case 2714:
case 2050:
case 1479:
case 1117:
case 2596:
case 1307:
case 570:
case 2502:
case 2267:
case 3051:
case 1247:
case 936:
case 1655:
case 653:
case 1244:
case 2166:
case 22:
case 930:
case 876:
case 1798:
case 59:
case 2260:
case 3838:
case 2053:
case 394:
case 1801:
case 2077:
case 2477:
case 1629:
case 2040:
case 1407:
case 2460:
case 2983:
case 1445:
case 577:
case 1934:
case 646:
case 1935:
case 578:
case 3302:
case 2194:
case 135:
case 2668:
case 3189:
case 2795:
case 2557:
case 2618:
case 1810:
case 591:
case 2104:
case 3472:
case 167:
case 3110:
case 655:
case 1856:
case 3906:
case 853:
case 1133:
case 2781:
case 2790:
case 2938:
case 3598:
case 1119:
case 3623:
case 3914:
case 1162:
case 3386:
case 1956:
case 2803:
case 3712:
case 1330:
case 3167:
case 3913:
case 2731:
case 1697:
case 2186:
case 3233:
case 3163:
case 3455:
case 1852:
case 37:
case 2859:
case 1245:
case 2599:
case 5:
case 582:
case 2164:
case 3270:
case 3069:
case 1592:
case 1652:
case 1003:
case 3440:
case 3314:
case 3695:
case 719:
case 1381:
case 395:
case 55:
case 2016:
case 1203:
case 2397:
case 3482:
case 765:
case 1287:
case 1494:
case 2154:
case 2914:
case 2108:
case 2835:
case 1493:
case 614:
case 3533:
case 1816:
case 942:
case 3483:
case 459:
case 3748:
case 1035:
case 1952:
case 1414:
case 837:
case 1197:
case 2327:
case 447:
case 3094:
case 722:
case 3666:
case 3429:
case 444:
case 2961:
case 3904:
case 2844:
case 3200:
case 744:
case 1561:
case 3927:
case 782:
case 3998:
case 1323:
case 4095:
case 3199:
case 3182:
case 2361:
case 855:
case 2968:
case 2180:
case 3225:
case 1591:
case 3519:
case 523:
case 2607:
case 1549:
case 1226:
case 2024:
case 995:
case 3363:
case 2510:
case 1583:
case 3263:
case 3246:
case 1825:
case 3647:
case 1711:
case 980:
case 136:
case 2555:
case 2249:
case 640:
case 1070:
case 365:
case 3064:
case 1776:
case 3161:
case 2531:
case 2435:
case 3683:
case 3384:
case 2614:
case 317:
case 848:
case 1181:
case 4075:
case 596:
case 1463:
case 3004:
case 3936:
case 3551:
case 1846:
case 3787:
case 868:
case 2634:
case 1379:
case 2366:
case 2087:
case 2832:
case 3156:
case 3530:
case 1926:
case 153:
case 305:
case 557:
case 1938:
case 1121:
case 165:
case 3713:
case 2201:
case 3948:
case 2007:
case 369:
case 2008:
case 3708:
case 3018:
case 767:
case 1492:
case 769:
case 1817:
case 80:
case 1405:
case 3317:
case 1194:
case 3964:
case 1738:
case 1960:
case 2445:
case 1388:
case 1560:
case 3385:
case 2453:
case 602:
case 533:
case 3802:
case 2121:
case 929:
case 1114:
case 679:
case 828:
case 2972:
case 3558:
case 3491:
case 3737:
case 2377:
case 3248:
case 1254:
case 339:
case 2771:
case 2359:
case 794:
case 3377:
case 3372:
case 3612:
case 788:
case 3812:
case 1344:
case 1946:
case 1544:
case 1841:
case 1094:
case 3140:
case 567:
case 3990:
case 1520:
case 3663:
case 2092:
case 452:
case 1370:
case 3188:
case 3829:
case 3407:
case 3723:
case 323:
case 3852:
case 3173:
case 2881:
case 1246:
case 3205:
case 329:
case 2511:
case 2608:
case 2984:
case 3800:
case 2768:
case 2244:
case 734:
case 72:
case 1823:
case 561:
case 2898:
case 1643:
case 477:
case 2171:
case 3824:
case 1201:
case 3525:
case 2188:
case 805:
case 3307:
case 2072:
case 300:
case 3510:
case 2070:
case 2929:
case 1098:
case 1883:
case 1444:
case 3911:
case 1674:
case 2615:
case 342:
case 1000:
case 1860:
case 49:
case 360:
case 287:
case 3920:
case 2475:
case 3935:
case 3254:
case 740:
case 1512:
case 3732:
case 1599:
case 3618:
case 1089:
case 2897:
case 972:
case 3375:
case 3262:
case 894:
case 1541:
case 34:
case 1955:
case 1528:
case 1304:
case 1322:
case 761:
case 2681:
case 658:
case 1451:
case 1517:
case 65:
case 3151:
case 1308:
case 612:
case 1367:
case 176:
case 1647:
case 1796:
case 117:
case 664:
case 3485:
case 1753:
case 2412:
case 2592:
case 1067:
case 218:
case 449:
case 1145:
case 1039:
case 38:
case 18:
case 1296:
case 3639:
case 2852:
case 919:
case 399:
case 1726:
case 702:
case 3781:
case 3065:
case 554:
case 1735:
case 2878:
case 1905:
case 897:
case 1166:
case 462:
case 1295:
case 1021:
case 2365:
case 1298:
case 524:
case 278:
case 1857:
case 3405:
case 2419:
case 3362:
case 3925:
case 445:
case 457:
case 2181:
case 3435:
case 1664:
case 2452:
case 1615:
case 1085:
case 1630:
case 1727:
case 2241:
case 768:
case 1029:
case 3376:
case 228:
case 904:
case 303:
case 406:
case 336:
case 380:
case 1975:
case 3610:
case 1902:
case 748:
case 426:
case 1310:
case 3430:
case 1134:
case 2320:
case 1273:
case 3536:
case 1328:
case 1971:
case 3211:
case 3841:
case 669:
case 3696:
case 762:
case 3637:
case 3993:
case 1168:
case 3031:
case 1335:
case 3590:
case 2661:
case 1221:
case 1815:
case 2193:
case 2696:
case 1702:
case 2849:
case 1260:
case 1079:
case 627:
case 2812:
case 3053:
case 3178:
case 2291:
case 2558:
case 3799:
case 3152:
case 2855:
case 1715:
case 4035:
case 2054:
case 2624:
case 3625:
case 3554:
case 745:
case 2030:
case 2288:
case 2263:
case 1924:
case 1601:
case 3615:
case 2861:
case 2042:
case 4060:
case 308:
case 1426:
case 3658:
case 118:
case 2827:
case 3391:
case 2178:
case 2647:
case 1293:
case 2924:
case 1732:
case 1982:
case 595:
case 1746:
case 911:
case 2821:
case 2450:
case 594:
case 2262:
case 1525:
case 1284:
case 1428:
case 1766:
case 101:
case 2688:
case 1150:
case 2651:
case 87:
case 730:
case 3646:
case 485:
case 2266:
case 739:
case 2294:
case 392:
case 3548:
case 1950:
case 2038:
case 1301:
case 481:
case 2786:
case 1182:
case 954:
case 3313:
case 85:
case 67:
case 3899:
case 2101:
case 2732:
case 544:
case 1718:
case 4020:
case 1832:
case 2540:
case 2550:
case 328:
case 3209:
case 1228:
case 3315:
case 2678:
case 266:
case 1932:
case 2782:
case 207:
case 2779:
case 3349:
case 1053:
case 40:
case 3323:
case 3013:
case 2135:
case 1595:
case 1353:
case 2353:
case 3698:
case 1167:
case 2496:
case 951:
case 2923:
case 1118:
case 1708:
case 539:
case 3038:
case 2541:
case 1238:
case 295:
case 4077:
case 3186:
case 98:
case 2613:
case 3470:
case 3628:
case 3673:
case 1784:
case 2936:
case 144:
case 2031:
case 939:
case 3774:
case 275:
case 3825:
case 108:
case 2621:
case 4028:
case 2793:
case 3779:
case 1291:
case 31:
case 537:
case 3504:
case 804:
case 1734:
case 3586:
case 13:
case 2324:
case 245:
case 2568:
case 3077:
case 2562:
case 3908:
case 2807:
case 3271:
case 3481:
case 3988:
case 2841:
case 1240:
case 2206:
case 3970:
case 1073:
case 2296:
case 2500:
case 630:
case 1547:
case 992:
case 1096:
case 3944:
case 4094:
case 3093:
case 2799:
case 3770:
case 2982:
case 3096:
case 2509:
case 1803:
case 1126:
case 4074:
case 82:
case 3901:
case 3497:
case 129:
case 2583:
case 2675:
case 3884:
case 2334:
case 3347:
case 149:
case 2112:
case 2659:
case 2252:
case 1220:
case 1057:
case 3620:
case 866:
case 45:
case 2985:
case 2708:
case 1065:
case 3942:
case 1892:
case 625:
case 1641:
case 3356:
case 1278:
case 690:
case 998:
case 2512:
case 2670:
case 62:
case 720:
case 1363:
case 1082:
case 962:
case 3288:
case 660:
case 506:
case 47:
case 1037:
case 3900:
case 88:
case 3792:
case 3102:
case 2153:
case 1842:
case 2462:
case 851:
case 172:
case 1054:
case 964:
case 634:
case 2628:
case 1508:
case 1294:
case 2392:
case 337:
case 2574:
case 2817:
case 224:
case 3319:
case 1473:
case 875:
case 996:
case 520:
case 3241:
case 974:
case 3401:
case 2529:
case 704:
case 230:
case 2663:
case 3797:
case 1965:
case 2269:
case 1393:
case 2138:
case 808:
case 1265:
case 2118:
case 1603:
case 3475:
case 1976:
case 883:
case 1051:
case 3977:
case 3544:
case 3565:
case 700:
case 2916:
case 3791:
case 2723:
case 3078:
case 2179:
case 1954:
case 1107:
case 3599:
case 1683:
case 1120:
case 2448:
case 1389:
case 2123:
case 1733:
case 2715:
case 1234:
case 854:
case 2332:
case 2325:
case 3213:
case 1236:
case 981:
case 3337:
case 966:
case 2872:
case 1408:
case 913:
case 2454:
case 2669:
case 726:
case 1822:
case 2439:
case 3932:
case 3113:
case 1678:
case 3947:
case 3484:
case 2667:
case 1288:
case 2430:
case 3583:
case 1305:
case 3414:
case 1277:
case 3463:
case 2211:
case 171:
case 2401:
case 2184:
case 1172:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1659074401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,];
var gg_b = "1659074401/";

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
