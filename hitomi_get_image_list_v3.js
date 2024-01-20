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
case 673:
case 961:
case 780:
case 2679:
case 3034:
case 3404:
case 2259:
case 299:
case 3064:
case 4027:
case 3600:
case 2358:
case 4081:
case 2937:
case 826:
case 2859:
case 668:
case 3563:
case 3856:
case 1571:
case 1805:
case 1267:
case 1580:
case 1000:
case 2083:
case 3524:
case 771:
case 1464:
case 2663:
case 550:
case 2453:
case 3885:
case 1263:
case 41:
case 509:
case 1377:
case 744:
case 218:
case 1636:
case 3401:
case 36:
case 507:
case 447:
case 1456:
case 1810:
case 133:
case 2993:
case 1785:
case 3794:
case 1825:
case 1991:
case 3778:
case 2330:
case 572:
case 834:
case 1224:
case 2846:
case 1990:
case 1914:
case 2605:
case 813:
case 220:
case 3024:
case 3967:
case 821:
case 1728:
case 1020:
case 3468:
case 1693:
case 2794:
case 3343:
case 383:
case 1841:
case 969:
case 3888:
case 3701:
case 1665:
case 718:
case 1944:
case 2194:
case 3120:
case 2712:
case 2424:
case 1288:
case 4004:
case 494:
case 1303:
case 1034:
case 571:
case 405:
case 2992:
case 1999:
case 2250:
case 3842:
case 3795:
case 280:
case 3948:
case 617:
case 179:
case 973:
case 274:
case 466:
case 1095:
case 1404:
case 3480:
case 2004:
case 3911:
case 1952:
case 3947:
case 980:
case 623:
case 2005:
case 1691:
case 4077:
case 1977:
case 3594:
case 3612:
case 2946:
case 2898:
case 2535:
case 333:
case 424:
case 404:
case 180:
case 1491:
case 335:
case 687:
case 3932:
case 3124:
case 3004:
case 551:
case 1527:
case 1630:
case 2935:
case 3924:
case 3400:
case 365:
case 2014:
case 1196:
case 680:
case 4032:
case 2147:
case 370:
case 1709:
case 1681:
case 3833:
case 2261:
case 3582:
case 786:
case 1748:
case 2075:
case 284:
case 3865:
case 4072:
case 2416:
case 4050:
case 3434:
case 2446:
case 2061:
case 4075:
case 1723:
case 2511:
case 1216:
case 3970:
case 2445:
case 875:
case 61:
case 561:
case 1842:
case 2926:
case 3056:
case 3079:
case 815:
case 3838:
case 3757:
case 2064:
case 2410:
case 800:
case 720:
case 2816:
case 3540:
case 1215:
case 1436:
case 2434:
case 2878:
case 493:
case 3473:
case 3515:
case 3827:
case 1671:
case 1837:
case 2412:
case 2890:
case 917:
case 3330:
case 1111:
case 91:
case 202:
case 918:
case 2420:
case 2790:
case 2659:
case 484:
case 325:
case 2281:
case 2579:
case 3208:
case 2868:
case 322:
case 2285:
case 3452:
case 1328:
case 753:
case 3221:
case 3424:
case 1714:
case 1741:
case 3871:
case 2158:
case 496:
case 3197:
case 1258:
case 2514:
case 3157:
case 1158:
case 3974:
case 432:
case 2415:
case 1552:
case 3088:
case 1509:
case 1364:
case 1861:
case 2081:
case 1308:
case 2628:
case 4036:
case 3367:
case 1844:
case 1975:
case 3234:
case 978:
case 2342:
case 3168:
case 3736:
case 2830:
case 3697:
case 4084:
case 1307:
case 1516:
case 2697:
case 758:
case 2048:
case 3882:
case 711:
case 2548:
case 2804:
case 57:
case 2824:
case 3001:
case 3339:
case 2867:
case 2054:
case 1103:
case 1925:
case 3739:
case 2831:
case 2071:
case 3618:
case 3338:
case 3655:
case 1290:
case 3916:
case 1352:
case 849:
case 3044:
case 547:
case 997:
case 2:
case 2498:
case 3905:
case 2484:
case 2789:
case 3578:
case 1428:
case 3877:
case 232:
case 1661:
case 2130:
case 3819:
case 3022:
case 3898:
case 373:
case 3459:
case 294:
case 1163:
case 3670:
case 3220:
case 3231:
case 1313:
case 2310:
case 2765:
case 410:
case 1926:
case 3545:
case 1936:
case 1913:
case 2944:
case 695:
case 3667:
case 2569:
case 1929:
case 305:
case 2249:
case 3825:
case 2982:
case 2034:
case 249:
case 477:
case 1212:
case 387:
case 2821:
case 3738:
case 1066:
case 1673:
case 1629:
case 2563:
case 166:
case 2889:
case 2192:
case 3133:
case 525:
case 762:
case 1838:
case 2845:
case 1083:
case 1774:
case 2601:
case 1717:
case 3329:
case 900:
case 1916:
case 1492:
case 2960:
case 1331:
case 3621:
case 1730:
case 2306:
case 1234:
case 3754:
case 2556:
case 3741:
case 193:
case 2806:
case 3150:
case 1598:
case 3870:
case 1522:
case 2356:
case 686:
case 3588:
case 1617:
case 2856:
case 3719:
case 1677:
case 1379:
case 2116:
case 2724:
case 2080:
case 1153:
case 2669:
case 1241:
case 3884:
case 2333:
case 2987:
case 3624:
case 2975:
case 3312:
case 1104:
case 627:
case 2597:
case 3749:
case 2482:
case 3983:
case 1548:
case 1593:
case 848:
case 1155:
case 228:
case 2977:
case 3529:
case 3463:
case 2393:
case 1078:
case 244:
case 1565:
case 2084:
case 3803:
case 3760:
case 67:
case 3351:
case 418:
case 3229:
case 464:
case 2266:
case 950:
case 2059:
case 8:
case 2610:
case 2670:
case 1771:
case 3872:
case 3407:
case 2017:
case 2651:
case 679:
case 2862:
case 578:
case 1185:
case 3325:
case 153:
case 1361:
case 2444:
case 3551:
case 142:
case 1064:
case 253:
case 1403:
case 2554:
case 4018:
case 456:
case 1922:
case 2376:
case 1156:
case 3615:
case 2901:
case 219:
case 2127:
case 3987:
case 3942:
case 552:
case 3817:
case 3832:
case 3326:
case 1606:
case 2719:
case 787:
case 1227:
case 3943:
case 2578:
case 1006:
case 3954:
case 1374:
case 1357:
case 1603:
case 1168:
case 1866:
case 3717:
case 1045:
case 1489:
case 3857:
case 3903:
case 3648:
case 201:
case 588:
case 2947:
case 4040:
case 1711:
case 751:
case 3421:
case 625:
case 3167:
case 3552:
case 3609:
case 689:
case 671:
case 953:
case 3702:
case 2783:
case 1146:
case 2958:
case 3893:
case 1813:
case 227:
case 1387:
case 152:
case 2264:
case 1188:
case 2956:
case 772:
case 3706:
case 645:
case 2566:
case 2492:
case 241:
case 1821:
case 1602:
case 3536:
case 85:
case 2325:
case 1340:
case 313:
case 1666:
case 1206:
case 1904:
case 1222:
case 138:
case 2181:
case 131:
case 2020:
case 722:
case 3694:
case 315:
case 1242:
case 2399:
case 1417:
case 1635:
case 2248:
case 2902:
case 308:
case 2244:
case 526:
case 2215:
case 1889:
case 1594:
case 2169:
case 1173:
case 47:
case 1946:
case 1860:
case 3660:
case 608:
case 283:
case 2383:
case 2743:
case 3236:
case 1692:
case 2962:
case 974:
case 3699:
case 2916:
case 3688:
case 2894:
case 2175:
case 710:
case 1250:
case 323:
case 3113:
case 2159:
case 3002:
case 3:
case 2533:
case 3054:
case 1152:
case 1896:
case 1457:
case 1351:
case 1769:
case 600:
case 2231:
case 553:
case 2035:
case 2599:
case 3695:
case 3966:
case 359:
case 1299:
case 739:
case 933:
case 3016:
case 3550:
case 3828:
case 1819:
case 3277:
case 3003:
case 295:
case 3937:
case 1067:
case 3575:
case 1485:
case 1573:
case 539:
case 1397:
case 967:
case 865:
case 4030:
case 3282:
case 448:
case 2467:
case 909:
case 621:
case 3297:
case 932:
case 2373:
case 4094:
case 1086:
case 3657:
case 1253:
case 3486:
case 1921:
case 3951:
case 1495:
case 971:
case 1544:
case 396:
case 2583:
case 3118:
case 2877:
case 784:
case 2483:
case 1254:
case 1101:
case 798:
case 1808:
case 1909:
case 1915:
case 518:
case 3873:
case 619:
case 2163:
case 3705:
case 1874:
case 2673:
case 2173:
case 2529:
case 3897:
case 508:
case 1129:
case 42:
case 4063:
case 3189:
case 1460:
case 3381:
case 3128:
case 1780:
case 1211:
case 3255:
case 3394:
case 2139:
case 835:
case 651:
case 3301:
case 4022:
case 2538:
case 2260:
case 1411:
case 1919:
case 440:
case 2165:
case 2681:
case 3059:
case 3963:
case 1684:
case 2838:
case 130:
case 1898:
case 1432:
case 2766:
case 558:
case 3726:
case 543:
case 3386:
case 1949:
case 1228:
case 1928:
case 3470:
case 580:
case 2515:
case 1061:
case 290:
case 2136:
case 2841:
case 2847:
case 2351:
case 1010:
case 1150:
case 1251:
case 3758:
case 3196:
case 929:
case 164:
case 2466:
case 2149:
case 2036:
case 1582:
case 3134:
case 3464:
case 35:
case 3281:
case 1421:
case 3225:
case 2319:
case 775:
case 2470:
case 1599:
case 4065:
case 823:
case 252:
case 3179:
case 407:
case 3961:
case 811:
case 3505:
case 1049:
case 2522:
case 3968:
case 2709:
case 3156:
case 2155:
case 3631:
case 3067:
case 2690:
case 4067:
case 2865:
case 2750:
case 171:
case 3333:
case 2118:
case 3350:
case 2815:
case 3684:
case 1184:
case 2842:
case 446:
case 990:
case 461:
case 2507:
case 3353:
case 2354:
case 3170:
case 1601:
case 419:
case 3985:
case 2701:
case 1210:
case 3826:
case 3012:
case 25:
case 3008:
case 188:
case 1563:
case 3973:
case 541:
case 243:
case 1018:
case 1391:
case 631:
case 1437:
case 1026:
case 3927:
case 3425:
case 434:
case 328:
case 742:
case 377:
case 2465:
case 3420:
case 2299:
case 2065:
case 4051:
case 1280:
case 3570:
case 438:
case 2047:
case 1321:
case 3100:
case 1054:
case 1151:
case 3289:
case 3186:
case 4006:
case 2828:
case 1536:
case 2033:
case 989:
case 2668:
case 2339:
case 3899:
case 3663:
case 2293:
case 3378:
case 3808:
case 1302:
case 1075:
case 2226:
case 2348:
case 1702:
case 428:
case 1564:
case 3583:
case 1037:
case 1934:
case 3096:
case 172:
case 3030:
case 1141:
case 216:
case 531:
case 3868:
case 1979:
case 2089:
case 583:
case 2126:
case 2021:
case 3193:
case 1208:
case 3021:
case 839:
case 1115:
case 2379:
case 1505:
case 2546:
case 1624:
case 2183:
case 3077:
case 1312:
case 3207:
case 200:
case 2913:
case 540:
case 3201:
case 2350:
case 2508:
case 2480:
case 3440:
case 740:
case 2494:
case 2760:
case 1976:
case 799:
case 3048:
case 2055:
case 1197:
case 902:
case 2473:
case 2917:
case 169:
case 3147:
case 802:
case 2792:
case 2537:
case 2699:
case 3009:
case 1839:
case 670:
case 2573:
case 914:
case 98:
case 1520:
case 1743:
case 883:
case 1792:
case 1762:
case 3315:
case 3458:
case 250:
case 450:
case 2880:
case 21:
case 1734:
case 3576:
case 478:
case 2809:
case 1555:
case 3192:
case 2920:
case 487:
case 893:
case 567:
case 75:
case 319:
case 2439:
case 2931:
case 3164:
case 1590:
case 3682:
case 1134:
case 263:
case 339:
case 791:
case 371:
case 1496:
case 3735:
case 1894:
case 2125:
case 3858:
case 3649:
case 3321:
case 3075:
case 1440:
case 972:
case 1903:
case 3415:
case 2349:
case 1806:
case 1935:
case 3512:
case 1262:
case 785:
case 2737:
case 1008:
case 964:
case 1722:
case 275:
case 1932:
case 1830:
case 646:
case 2388:
case 3036:
case 163:
case 1567:
case 2853:
case 1244:
case 1376:
case 1686:
case 3534:
case 746:
case 515:
case 1204:
case 4023:
case 1430:
case 3074:
case 3892:
case 676:
case 429:
case 3555:
case 1051:
case 154:
case 803:
case 941:
case 2567:
case 2214:
case 1108:
case 3266:
case 2347:
case 1643:
case 1200:
case 2641:
case 1057:
case 2229:
case 3132:
case 1048:
case 3809:
case 3430:
case 262:
case 3506:
case 928:
case 1831:
case 3723:
case 403:
case 1753:
case 3806:
case 1058:
case 2786:
case 3099:
case 4056:
case 2197:
case 1479:
case 3432:
case 1337:
case 2887:
case 1732:
case 2471:
case 2936:
case 562:
case 2749:
case 1791:
case 451:
case 139:
case 2984:
case 1998:
case 1135:
case 3780:
case 2206:
case 1812:
case 1562:
case 2540:
case 2687:
case 1801:
case 1772:
case 3395:
case 3763:
case 49:
case 3653:
case 2164:
case 3419:
case 2906:
case 2135:
case 774:
case 2185:
case 727:
case 3144:
case 1537:
case 2137:
case 2221:
case 2812:
case 4029:
case 3260:
case 3889:
case 1470:
case 194:
case 211:
case 3523:
case 258:
case 1604:
case 867:
case 1003:
case 1705:
case 863:
case 2513:
case 3940:
case 3061:
case 2819:
case 1948:
case 3342:
case 2968:
case 3640:
case 1615:
case 79:
case 1924:
case 4021:
case 1829:
case 1533:
case 2280:
case 123:
case 2512:
case 2606:
case 1336:
case 3850:
case 109:
case 1814:
case 669:
case 1:
case 2168:
case 364:
case 1028:
case 3028:
case 3557:
case 3824:
case 3094:
case 2400:
case 3843:
case 2222:
case 1695:
case 4069:
case 1703:
case 3650:
case 1270:
case 1301:
case 489:
case 3504:
case 713:
case 1140:
case 1360:
case 349:
case 2999:
case 1090:
case 2220:
case 2826:
case 1157:
case 2327:
case 1001:
case 385:
case 2157:
case 3895:
case 1031:
case 992:
case 2246:
case 1099:
case 2138:
case 1655:
case 3384:
case 2587:
case 3503:
case 2725:
case 3788:
case 1592:
case 1587:
case 2849:
case 1974:
case 2617:
case 3354:
case 887:
case 3601:
case 3571:
case 1583:
case 923:
case 1050:
case 1965:
case 3442:
case 2146:
case 1113:
case 2870:
case 124:
case 1763:
case 2665:
case 773:
case 2654:
case 2545:
case 1238:
case 2309:
case 2332:
case 1941:
case 951:
case 3302:
case 1474:
case 2252:
case 2647:
case 1246:
case 942:
case 430:
case 1858:
case 1940:
case 189:
case 2023:
case 1405:
case 1528:
case 3097:
case 3370:
case 1071:
case 3268:
case 3238:
case 297:
case 2517:
case 1631:
case 3371:
case 2493:
case 3863:
case 2314:
case 3976:
case 256:
case 729:
case 2519:
case 2037:
case 824:
case 944:
case 3377:
case 2929:
case 1634:
case 4057:
case 3261:
case 1955:
case 3622:
case 3040:
case 2664:
case 20:
case 1560:
case 476:
case 960:
case 2489:
case 1335:
case 3900:
case 398:
case 3117:
case 1265:
case 145:
case 927:
case 1868:
case 3722:
case 2648:
case 1239:
case 3627:
case 1649:
case 1931:
case 170:
case 120:
case 2710:
case 3443:
case 3744:
case 449:
case 362:
case 3202:
case 3923:
case 1274:
case 3019:
case 3039:
case 1517:
case 1256:
case 854:
case 1248:
case 81:
case 1556:
case 2621:
case 3200:
case 2177:
case 2643:
case 1007:
case 3198:
case 620:
case 2612:
case 2510:
case 3891:
case 1581:
case 2943:
case 3250:
case 1847:
case 3572:
case 311:
case 1656:
case 697:
case 532:
case 122:
case 3989:
case 3098:
case 3629:
case 3933:
case 2980:
case 649:
case 958:
case 586:
case 2520:
case 2952:
case 2551:
case 3438:
case 2152:
case 1966:
case 3679:
case 3896:
case 983:
case 1575:
case 3901:
case 3931:
case 10:
case 1943:
case 1433:
case 1133:
case 2652:
case 3146:
case 1884:
case 1459:
case 3160:
case 1733:
case 1902:
case 2474:
case 1720:
case 2674:
case 296:
case 1541:
case 637:
case 2338:
case 2374:
case 4071:
case 2822:
case 2418:
case 1477:
case 2769:
case 947:
case 269:
case 3092:
case 3569:
case 2598:
case 4052:
case 2190:
case 2976:
case 1967:
case 979:
case 1959:
case 2777:
case 3364:
case 2771:
case 495:
case 2427:
case 1114:
case 736:
case 1198:
case 1398:
case 2154:
case 3761:
case 3227:
case 1271:
case 2603:
case 2016:
case 2112:
case 3556:
case 528:
case 2440:
case 1577:
case 2744:
case 2044:
case 110:
case 908:
case 314:
case 789:
case 1475:
case 2018:
case 3876:
case 174:
case 3190:
case 808:
case 3642:
case 694:
case 2739:
case 3042:
case 317:
case 3818:
case 882:
case 2625:
case 78:
case 3683:
case 3058:
case 1682:
case 1259:
case 3429:
case 2385:
case 3821:
case 611:
case 2827:
case 3853:
case 3446:
case 1542:
case 632:
case 841:
case 925:
case 1637:
case 1539:
case 2775:
case 268:
case 354:
case 3017:
case 3910:
case 2128:
case 2067:
case 536:
case 3066:
case 416:
case 2431:
case 4014:
case 1645:
case 2162:
case 2620:
case 2720:
case 107:
case 2134:
case 1399:
case 2559:
case 126:
case 2763:
case 248:
case 1176:
case 497:
case 342:
case 3939:
case 2497:
case 52:
case 1591:
case 421:
case 2807:
case 4066:
case 3998:
case 185:
case 2278:
case 591:
case 3226:
case 3852:
case 2888:
case 2029:
case 2271:
case 3413:
case 1958:
case 1964:
case 2404:
case 1827:
case 1329:
case 1297:
case 2291:
case 1055:
case 544:
case 159:
case 2145:
case 3956:
case 2411:
case 3820:
case 3748:
case 312:
case 4046:
case 259:
case 2727:
case 667:
case 4001:
case 1933:
case 1737:
case 15:
case 1886:
case 1920:
case 3278:
case 2818:
case 1040:
case 1856:
case 2876:
case 1546:
case 3129:
case 1788:
case 2335:
case 473:
case 3632:
case 3232:
case 214:
case 4055:
case 728:
case 2381:
case 3005:
case 2562:
case 3949:
case 903:
case 2102:
case 2429:
case 2074:
case 423:
case 399:
case 3573:
case 452:
case 1983:
case 1116:
case 2099:
case 1724:
case 624:
case 3483:
case 2851:
case 1344:
case 303:
case 3437:
case 1987:
case 2448:
case 2219:
case 2436:
case 2552:
case 1293:
case 2369:
case 190:
case 3577:
case 3543:
case 2934:
case 638:
case 2733:
case 2787:
case 93:
case 1719:
case 3639:
case 4080:
case 1672:
case 522:
case 379:
case 860:
case 939:
case 3774:
case 2885:
case 3743:
case 3013:
case 3356:
case 2825:
case 3166:
case 2414:
case 4092:
case 3273:
case 946:
case 3528:
case 351:
case 4037:
case 3798:
case 2903:
case 2994:
case 39:
case 2041:
case 1452:
case 2407:
case 2151:
case 119:
case 3581:
case 3267:
case 4089:
case 3248:
case 1790:
case 2386:
case 779:
case 3476:
case 1667:
case 3211:
case 3946:
case 1549:
case 1499:
case 3595:
case 2233:
case 2932:
case 2031:
case 2202:
case 1193:
case 662:
case 2861:
case 3217:
case 1678:
case 2928:
case 3993:
case 1725:
case 3119:
case 2844:
case 2268:
case 2524:
case 1878:
case 688:
case 1708:
case 2243:
case 1363:
case 3279:
case 922:
case 4076:
case 3086:
case 3777:
case 2277:
case 1576:
case 3174:
case 2069:
case 1038:
case 2488:
case 1911:
case 1017:
case 3860:
case 1888:
case 2224:
case 1455:
case 1450:
case 1947:
case 3111:
case 635:
case 1091:
case 1569:
case 246:
case 3662:
case 575:
case 1480:
case 792:
case 1097:
case 3389:
case 3518:
case 2247:
case 879:
case 2829:
case 2076:
case 1467:
case 106:
case 465:
case 3729:
case 3391:
case 3677:
case 1201:
case 12:
case 334:
case 3960:
case 2479:
case 2582:
case 1543:
case 2289:
case 2455:
case 832:
case 510:
case 293:
case 3102:
case 1209:
case 347:
case 2627:
case 2986:
case 40:
case 1233:
case 4033:
case 3175:
case 97:
case 705:
case 83:
case 825:
case 2803:
case 1632:
case 2345:
case 3173:
case 374:
case 1098:
case 1899:
case 3199:
case 2204:
case 2032:
case 982:
case 1721:
case 804:
case 3626:
case 618:
case 1853:
case 1309:
case 2608:
case 2012:
case 3671:
case 1484:
case 2658:
case 1366:
case 3728:
case 2237:
case 2294:
case 4019:
case 3879:
case 3223:
case 132:
case 770:
case 794:
case 3816:
case 1586:
case 1205:
case 3500:
case 542:
case 2284:
case 3143:
case 1642:
case 223:
case 3308:
case 1900:
case 397:
case 2848:
case 1257:
case 2768:
case 230:
case 1468:
case 2921:
case 3965:
case 3782:
case 3866:
case 1689:
case 255:
case 1768:
case 2574:
case 3475:
case 3051:
case 94:
case 3628:
case 3740:
case 147:
case 609:
case 766:
case 3791:
case 1423:
case 3037:
case 1119:
case 388:
case 3148:
case 2801:
case 2645:
case 844:
case 2589:
case 993:
case 3487:
case 2586:
case 1195:
case 3068:
case 3245:
case 1811:
case 938:
case 2283:
case 604:
case 1167:
case 3014:
case 82:
case 2547:
case 2614:
case 996:
case 2213:
case 1447:
case 3080:
case 853:
case 1640:
case 3804:
case 3073:
case 514:
case 2344:
case 1343:
case 1625:
case 2633:
case 3999:
case 1962:
case 2866:
case 1324:
case 2735:
case 3285:
case 1938:
case 598:
case 513:
case 3982:
case 77:
case 86:
case 1422:
case 2365:
case 1787:
case 2592:
case 392:
case 2915:
case 402:
case 3544:
case 1609:
case 3913:
case 1488:
case 2394:
case 2199:
case 1735:
case 2357:
case 178:
case 235:
case 3298:
case 3387:
case 196:
case 3306:
case 1789:
case 356:
case 2660:
case 1798:
case 2899:
case 2216:
case 4073:
case 2726:
case 462:
case 1320:
case 3392:
case 469:
case 934:
case 2581:
case 146:
case 2541:
case 3952:
case 1982:
case 1252:
case 1669:
case 2745:
case 573:
case 1365:
case 2911:
case 3507:
case 1715:
case 2077:
case 828:
case 3851:
case 1225:
case 1481:
case 1824:
case 1378:
case 1160:
case 2269:
case 3187:
case 2095:
case 3630:
case 427:
case 1644:
case 3703:
case 595:
case 4059:
case 2593:
case 460:
case 2377:
case 2178:
case 318:
case 1554:
case 3672:
case 750:
case 3095:
case 735:
case 2655:
case 3274:
case 3590:
case 862:
case 2991:
case 3204:
case 1442:
case 442:
case 2985:
case 51:
case 3494:
case 2955:
case 1597:
case 2731:
case 1465:
case 818:
case 161:
case 590:
case 3323:
case 1354:
case 1339:
case 3385:
case 919:
case 1169:
case 2834:
case 2094:
case 885:
case 3235:
case 3855:
case 920:
case 155:
case 1639:
case 3801:
case 1333:
case 2767:
case 2705:
case 833:
case 1191:
case 2186:
case 820:
case 2295:
case 1700:
case 3121:
case 1014:
case 3542:
case 3091:
case 2132:
case 2370:
case 930:
case 2144:
case 3216:
case 2030:
case 3249:
case 307:
case 3185:
case 968:
case 905:
case 426:
case 213:
case 3474:
case 2785:
case 2062:
case 749:
case 549:
case 1164:
case 1338:
case 1175:
case 1595:
case 1612:
case 677:
case 2713:
case 2184:
case 2334:
case 2318:
case 781:
case 4026:
case 1989:
case 3972:
case 2646:
case 4017:
case 3233:
case 504:
case 2253:
case 3344:
case 940:
case 1043:
case 702:
case 2997:
case 121:
case 2038:
case 3539:
case 1770:
case 2776:
case 3345:
case 892:
case 1084:
case 2326:
case 2781:
case 3141:
case 1021:
case 352:
case 273:
case 3978:
case 1558:
case 2884:
case 3292:
case 2722:
case 871:
case 2764:
case 1907:
case 1068:
case 2833:
case 1883:
case 648:
case 3641:
case 2940:
case 330:
case 4064:
case 3646:
case 3490:
case 724:
case 2502:
case 1706:
case 2265:
case 2773:
case 3693:
case 891:
case 1508:
case 1138:
case 4060:
case 769:
case 59:
case 3130:
case 2179:
case 1611:
case 1315:
case 2230:
case 68:
case 2008:
case 2371:
case 3846:
case 716:
case 3864:
case 2307:
case 1638:
case 1716:
case 1512:
case 1306:
case 1854:
case 1076:
case 1906:
case 2050:
case 1531:
case 559:
case 276:
case 3531:
case 1144:
case 935:
case 2117:
case 3980:
case 291:
case 1296:
case 3104:
case 1490:
case 431:
case 1120:
case 937:
case 1970:
case 3599:
case 2604:
case 3283:
case 3416:
case 1272:
case 3745:
case 391:
case 3411:
case 777:
case 408:
case 3619:
case 2886:
case 3347:
case 344:
case 2298:
case 23:
case 1881:
case 265:
case 3171:
case 1142:
case 3771:
case 2521:
case 1530:
case 4074:
case 3052:
case 2953:
case 1985:
case 3049:
case 3698:
case 1880:
case 157:
case 2156:
case 1784:
case 864:
case 1523:
case 1011:
case 3060:
case 278:
case 443:
case 3352:
case 2696:
case 2172:
case 2840:
case 2717:
case 2571:
case 65:
case 3368:
case 3656:
case 3138:
case 3035:
case 3533:
case 11:
case 4010:
case 3228:
case 321:
case 589:
case 2024:
case 1654:
case 1996:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1705741201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,];
var gg_b = "1705741201/";

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
