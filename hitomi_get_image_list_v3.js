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
case 3631:
case 4074:
case 2872:
case 404:
case 2818:
case 3962:
case 2232:
case 1568:
case 3996:
case 1272:
case 805:
case 151:
case 579:
case 3944:
case 1356:
case 2114:
case 3159:
case 1063:
case 2211:
case 368:
case 397:
case 3988:
case 1983:
case 3213:
case 2724:
case 3625:
case 1703:
case 4076:
case 931:
case 3357:
case 2555:
case 574:
case 3946:
case 2633:
case 1266:
case 1465:
case 536:
case 2322:
case 430:
case 4046:
case 2892:
case 560:
case 2460:
case 678:
case 3698:
case 2866:
case 135:
case 1516:
case 399:
case 3686:
case 690:
case 1017:
case 1292:
case 1752:
case 3267:
case 2937:
case 1310:
case 4088:
case 751:
case 1161:
case 1629:
case 211:
case 2785:
case 3684:
case 38:
case 2315:
case 1242:
case 2864:
case 2458:
case 2905:
case 1687:
case 3648:
case 2182:
case 3016:
case 4062:
case 394:
case 726:
case 1782:
case 2245:
case 3656:
case 1378:
case 1902:
case 1409:
case 138:
case 559:
case 629:
case 1185:
case 3508:
case 1331:
case 2526:
case 1768:
case 3003:
case 927:
case 2152:
case 554:
case 2488:
case 2320:
case 247:
case 983:
case 3763:
case 2890:
case 2496:
case 1503:
case 2969:
case 3239:
case 542:
case 4058:
case 1750:
case 2524:
case 3405:
case 365:
case 627:
case 3189:
case 528:
case 1828:
case 712:
case 3127:
case 2103:
case 3343:
case 1434:
case 252:
case 2228:
case 1221:
case 0:
case 1384:
case 2476:
case 2275:
case 2870:
case 3204:
case 3387:
case 2585:
case 1348:
case 929:
case 2835:
case 3052:
case 2230:
case 861:
case 896:
case 738:
case 3899:
case 3610:
case 1580:
case 3393:
case 1436:
case 1235:
case 1830:
case 3329:
case 1953:
case 472:
case 2046:
case 291:
case 2094:
case 314:
case 3831:
case 1009:
case 2982:
case 2489:
case 2672:
case 388:
case 3878:
case 3403:
case 4059:
case 3238:
case 1961:
case 2427:
case 1100:
case 2968:
case 319:
case 1379:
case 2088:
case 3176:
case 3220:
case 2096:
case 610:
case 2583:
case 67:
case 2833:
case 103:
case 2273:
case 2339:
case 411:
case 1197:
case 703:
case 3005:
case 1349:
case 2692:
case 3751:
case 910:
case 2306:
case 2074:
case 1843:
case 3328:
case 1034:
case 97:
case 3898:
case 2666:
case 580:
case 3144:
case 3241:
case 3196:
case 2287:
case 1829:
case 3330:
case 2076:
case 1147:
case 317:
case 3959:
case 2914:
case 209:
case 2642:
case 3848:
case 3765:
case 2664:
case 1537:
case 3884:
case 2500:
case 833:
case 1036:
case 816:
case 3332:
case 3069:
case 373:
case 2640:
case 3311:
case 73:
case 845:
case 3781:
case 2502:
case 2903:
case 1569:
case 3927:
case 2690:
case 2819:
case 3854:
case 80:
case 52:
case 65:
case 1857:
case 3482:
case 3989:
case 1695:
case 1219:
case 792:
case 2257:
case 1628:
case 192:
case 4089:
case 3551:
case 3649:
case 1417:
case 881:
case 2635:
case 447:
case 13:
case 4001:
case 2553:
case 2777:
case 2607:
case 1051:
case 3810:
case 1675:
case 3416:
case 1380:
case 4072:
case 3529:
case 2874:
case 3593:
case 643:
case 3805:
case 783:
case 2131:
case 1548:
case 2385:
case 3587:
case 500:
case 2541:
case 406:
case 2178:
case 3837:
case 1584:
case 3277:
case 1834:
case 1617:
case 3966:
case 289:
case 2722:
case 467:
case 498:
case 232:
case 1093:
case 2876:
case 8:
case 3133:
case 638:
case 1836:
case 671:
case 129:
case 175:
case 41:
case 1120:
case 2591:
case 1352:
case 3423:
case 3616:
case 3992:
case 1809:
case 2324:
case 464:
case 4092:
case 775:
case 3573:
case 2894:
case 2846:
case 971:
case 2209:
case 938:
case 1663:
case 2198:
case 1191:
case 534:
case 1294:
case 469:
case 943:
case 724:
case 2490:
case 2844:
case 2896:
case 3668:
case 1073:
case 1262:
case 912:
case 1881:
case 3682:
case 1756:
case 3308:
case 539:
case 1495:
case 1141:
case 2862:
case 3918:
case 1512:
case 4064:
case 361:
case 2033:
case 3247:
case 1784:
case 3907:
case 2999:
case 2492:
case 1314:
case 935:
case 1904:
case 868:
case 1865:
case 1260:
case 897:
case 3317:
case 2515:
case 2265:
case 2860:
case 790:
case 3793:
case 1798:
case 2791:
case 2154:
case 1906:
case 1786:
case 2442:
case 1316:
case 651:
case 155:
case 1851:
case 2464:
case 3010:
case 3743:
case 556:
case 3921:
case 626:
case 450:
case 899:
case 3056:
case 951:
case 215:
case 2472:
case 2355:
case 3557:
case 2979:
case 755:
case 3773:
case 1725:
case 1939:
case 246:
case 3603:
case 2627:
case 1350:
case 3990:
case 4070:
case 88:
case 1382:
case 1712:
case 1057:
case 1608:
case 3202:
case 2771:
case 1115:
case 1556:
case 3054:
case 894:
case 131:
case 495:
case 2738:
case 2361:
case 1368:
case 4007:
case 3940:
case 2110:
case 1941:
case 763:
case 2948:
case 264:
case 3730:
case 2984:
case 2674:
case 1723:
case 1259:
case 3365:
case 2567:
case 15:
case 2066:
case 2986:
case 1749:
case 2676:
case 2706:
case 423:
case 2998:
case 2042:
case 4033:
case 1113:
case 3728:
case 3816:
case 30:
case 1636:
case 2018:
case 484:
case 3456:
case 3933:
case 3192:
case 2072:
case 49:
case 1863:
case 1032:
case 206:
case 2739:
case 885:
case 2302:
case 432:
case 1971:
case 1681:
case 1457:
case 270:
case 2696:
case 3745:
case 2419:
case 381:
case 562:
case 3882:
case 2931:
case 692:
case 3261:
case 3140:
case 1028:
case 3334:
case 415:
case 1443:
case 853:
case 2767:
case 17:
case 2910:
case 3498:
case 1305:
case 3575:
case 2377:
case 1599:
case 110:
case 446:
case 2504:
case 1915:
case 1139:
case 322:
case 2070:
case 1493:
case 2506:
case 1030:
case 2007:
case 1487:
case 2179:
case 1651:
case 3099:
case 295:
case 3023:
case 1549:
case 1075:
case 3431:
case 2889:
case 1227:
case 2539:
case 3669:
case 2383:
case 3121:
case 3224:
case 2040:
case 3803:
case 1289:
case 3412:
case 2954:
case 2827:
case 348:
case 1579:
case 1045:
case 3595:
case 903:
case 3170:
case 1473:
case 3425:
case 3226:
case 2090:
case 3135:
case 86:
case 710:
case 3711:
case 3381:
case 2347:
case 3107:
case 817:
case 2433:
case 2208:
case 1104:
case 1201:
case 3570:
case 2443:
case 1021:
case 2028:
case 1910:
case 2337:
case 3535:
case 3280:
case 3885:
case 2599:
case 210:
case 2523:
case 1377:
case 2305:
case 1660:
case 3491:
case 3145:
case 828:
case 857:
case 2915:
case 3742:
case 3006:
case 478:
case 666:
case 2139:
case 431:
case 2493:
case 2922:
case 2429:
case 596:
case 3521:
case 382:
case 561:
case 909:
case 630:
case 2075:
case 2549:
case 3195:
case 1179:
case 1539:
case 2227:
case 1889:
case 795:
case 3590:
case 609:
case 3394:
case 930:
case 2106:
case 3346:
case 2579:
case 1149:
case 991:
case 300:
case 1090:
case 2473:
case 3362:
case 813:
case 3039:
case 1347:
case 3420:
case 3388:
case 1123:
case 3718:
case 3175:
case 1956:
case 604:
case 1433:
case 3130:
case 907:
case 164:
case 3677:
case 1948:
case 3360:
case 2941:
case 2259:
case 2799:
case 2723:
case 3707:
case 1984:
case 860:
case 3422:
case 2817:
case 2634:
case 25:
case 3600:
case 767:
case 3564:
case 2749:
case 706:
case 3216:
case 1042:
case 4073:
case 1064:
case 2113:
case 2636:
case 3943:
case 1646:
case 1018:
case 2011:
case 3697:
case 825:
case 505:
case 2920:
case 1513:
case 2863:
case 424:
case 3973:
case 106:
case 1688:
case 3572:
case 2681:
case 167:
case 874:
case 198:
case 4093:
case 4029:
case 1302:
case 1696:
case 3013:
case 1931:
case 764:
case 429:
case 2938:
case 3359:
case 1923:
case 1492:
case 1999:
case 2784:
case 3685:
case 3853:
case 3930:
case 1741:
case 2748:
case 2904:
case 893:
case 4045:
case 2510:
case 1466:
case 1265:
case 746:
case 2906:
case 1251:
case 2258:
case 2798:
case 255:
case 1949:
case 2316:
case 911:
case 715:
case 1858:
case 1522:
case 4095:
case 3928:
case 1720:
case 47:
case 2411:
case 1979:
case 545:
case 1355:
case 3995:
case 115:
case 611:
case 2725:
case 3624:
case 516:
case 410:
case 2057:
case 3945:
case 231:
case 2368:
case 1361:
case 82:
case 4075:
case 50:
case 3413:
case 3626:
case 1110:
case 3237:
case 2710:
case 2380:
case 1421:
case 3877:
case 4011:
case 1131:
case 1234:
case 952:
case 1178:
case 1659:
case 2274:
case 1541:
case 3091:
case 548:
case 647:
case 224:
case 2834:
case 4032:
case 723:
case 3406:
case 1112:
case 1236:
case 533:
case 1435:
case 1470:
case 2029:
case 1876:
case 2093:
case 132:
case 3173:
case 2430:
case 275:
case 229:
case 2586:
case 3404:
case 463:
case 949:
case 2276:
case 2352:
case 2475:
case 1407:
case 2120:
case 3041:
case 3897:
case 1440:
case 1894:
case 732:
case 1520:
case 2246:
case 340:
case 3071:
case 2073:
case 3661:
case 1490:
case 3193:
case 3129:
case 522:
case 3439:
case 3847:
case 2262:
case 2531:
case 718:
case 2141:
case 3301:
case 3020:
case 2296:
case 2578:
case 1571:
case 1033:
case 1281:
case 644:
case 79:
case 227:
case 906:
case 2926:
case 3762:
case 1640:
case 3165:
case 2153:
case 377:
case 669:
case 1747:
case 3788:
case 3318:
case 599:
case 3796:
case 3372:
case 3455:
case 3744:
case 2463:
case 3461:
case 1819:
case 1903:
case 1313:
case 91:
case 3746:
case 594:
case 3794:
case 3151:
case 3002:
case 1257:
case 292:
case 471:
case 1621:
case 3366:
case 1952:
case 1459:
case 597:
case 670:
case 3558:
case 568:
case 3822:
case 325:
case 698:
case 3606:
case 964:
case 1700:
case 856:
case 3210:
case 1670:
case 1367:
case 23:
case 1777:
case 501:
case 821:
case 374:
case 2102:
case 2675:
case 3774:
case 412:
case 2985:
case 191:
case 1094:
case 3596:
case 1702:
case 328:
case 565:
case 1547:
case 1105:
case 1489:
case 2009:
case 1982:
case 130:
case 3424:
case 2632:
case 709:
case 1137:
case 3871:
case 1968:
case 1427:
case 2961:
case 3231:
case 435:
case 3134:
case 166:
case 2955:
case 3047:
case 2379:
case 107:
case 1401:
case 3546:
case 950:
case 1096:
case 3594:
case 2873:
case 1833:
case 1950:
case 1339:
case 3820:
case 3426:
case 1692:
case 104:
case 359:
case 1916:
case 3286:
case 1074:
case 426:
case 3758:
case 3298:
case 4063:
case 3000:
case 1243:
case 1666:
case 707:
case 3917:
case 2893:
case 2829:
case 1304:
case 109:
case 2323:
case 1914:
case 1642:
case 2399:
case 354:
case 3284:
case 2147:
case 3307:
case 2505:
case 3335:
case 5:
case 1229:
case 1753:
case 730:
case 1664:
case 2036:
case 1500:
case 1494:
case 1245:
case 2782:
case 4065:
case 492:
case 2409:
case 2902:
case 632:
case 3024:
case 380:
case 749:
case 3483:
case 2481:
case 147:
case 3839:
case 1320:
case 3333:
case 3279:
case 1295:
case 1890:
case 1444:
case 2325:
case 212:
case 987:
case 56:
case 1969:
case 2503:
case 1462:
case 2895:
case 3026:
case 2290:
case 923:
case 3477:
case 2552:
case 144:
case 1391:
case 3085:
case 514:
case 1474:
case 3249:
case 1821:
case 2386:
case 3400:
case 3806:
case 984:
case 99:
case 2124:
case 1870:
case 3223:
case 1275:
case 1476:
case 3759:
case 2714:
case 2207:
case 149:
case 1585:
case 519:
case 2270:
case 2875:
case 932:
case 2953:
case 2235:
case 2436:
case 3965:
case 585:
case 1872:
case 226:
case 3638:
case 1561:
case 1232:
case 2811:
case 1818:
case 2356:
case 2272:
case 3117:
case 3055:
case 3981:
case 3671:
case 2063:
case 2582:
case 1724:
case 2550:
case 862:
case 2703:
case 2997:
case 3813:
case 1555:
case 3909:
case 772:
case 3402:
case 3936:
case 3453:
case 2465:
case 2266:
case 172:
case 1892:
case 1059:
case 3163:
case 1460:
case 1937:
case 646:
case 2693:
case 786:
case 3934:
case 2161:
case 4081:
case 1168:
case 541:
case 403:
case 1785:
case 111:
case 1182:
case 1458:
case 1905:
case 2451:
case 2249:
case 3828:
case 165:
case 661:
case 1189:
case 3552:
case 530:
case 2085:
case 1405:
case 3398:
case 1206:
case 1849:
case 1437:
case 477:
case 3124:
case 3221:
case 1343:
case 3434:
case 2400:
case 1127:
case 507:
case 827:
case 1101:
case 1960:
case 2108:
case 3348:
case 1387:
case 2759:
case 2615:
case 2223:
case 883:
case 3207:
case 858:
case 608:
case 3436:
case 202:
case 1393:
case 3953:
case 3580:
case 2965:
case 2804:
case 2501:
case 2497:
case 371:
case 504:
case 3185:
case 3409:
case 3902:
case 338:
case 3312:
case 908:
case 120:
case 1003:
case 2483:
case 3768:
case 3240:
case 3331:
case 2447:
case 875:
case 2589:
case 1879:
case 3750:
case 3325:
case 2527:
case 312:
case 2453:
case 3643:
case 3266:
case 457:
case 3465:
case 3752:
case 1976:
case 3292:
case 3017:
case 1686:
case 1014:
case 199:
case 2691:
case 1698:
case 3693:
case 2934:
case 768:
case 94:
case 22:
case 797:
case 2559:
case 3514:
case 194:
case 3451:
case 3687:
case 1517:
case 1974:
case 3242:
case 2867:
case 18:
case 1684:
case 1050:
case 3811:
case 4077:
case 1631:
case 64:
case 2981:
case 197:
case 1988:
case 3063:
case 1159:
case 3218:
case 168:
case 2701:
case 351:
case 3272:
case 3356:
case 1944:
case 2117:
case 2727:
case 1213:
case 2061:
case 3550:
case 3983:
case 454:
case 605:
case 1946:
case 413:
case 3354:
case 2319:
case 855:
case 2789:
case 442:
case 1082:
case 1563:
case 2402:
case 681:
case 1222:
case 185:
case 916:
case 392:
case 3628:
case 3417:
case 279:
case 480:
case 586:
case 945:
case 4024:
case 2776:
case 1414:
case 2392:
case 3737:
case 2210:
case 2815:
case 33:
case 1565:
case 1810:
case 1699:
case 1416:
case 1623:
case 3102:
case 3985:
case 3630:
case 274:
case 3705:
case 1856:
case 4085:
case 173:
case 2165:
case 1450:
case 1069:
case 236:
case 3926:
case 2762:
case 1160:
case 2372:
case 2908:
case 2455:
case 3645:
case 2744:
case 1901:
case 2256:
case 2788:
case 1781:
case 277:
case 2318:
case 3924:
case 3857:
case 1468:
case 2461:
case 1854:
case 3569:
case 141:
case 645:
case 511:
case 2794:
case 3219:
case 2254:
case 2746:
case 1158:
case 2002:
case 1482:
case 785:
case 3843:
case 1291:
case 1751:
case 1146:
case 2298:
case 2758:
case 2109:
case 2077:
case 2485:
case 1037:
case 719:
case 1898:
case 1536:
case 3034:
case 3183:
case 1328:
case 1452:
case 1375:
case 1959:
case 1188:
case 2181:
case 2284:
case 117:
case 1330:
case 2917:
case 2574:
case 648:
case 2760:
case 1144:
case 1196:
case 2370:
case 1162:
case 242:
case 3036:
case 922:
case 16:
case 2667:
case 3537:
case 1848:
case 2841:
case 1765:
case 213:
case 1345:
case 1581:
case 257:
case 3009:
case 810:
case 2596:
case 228:
case 552:
case 2340:
case 1238:
case 2562:
case 87:
case 2134:
case 717:
case 2424:
case 153:
case 2871:
case 188:
case 1878:
case 2546:
case 42:
case 1176:
case 549:
case 3081:
case 3955:
case 2047:
case 3233:
case 1509:
case 2613:
case 2225:
case 2820:
case 3769:
case 2136:
case 933:
case 2733:
case 694:
case 2519:
case 968:
case 1869:
case 3350:
case 434:
case 1603:
case 3725:
case 2624:
case 4006:
case 3432:
case 1054:
case 331:
case 378:
case 3778:
case 3608:
case 3057:
case 569:
case 390:
case 3382:
case 901:
case 4004:
case 482:
case 2802:
case 3748:
case 1787:
case 999:
case 851:
case 3314:
case 2975:
case 3784:
case 3510:
case 1793:
case 1253:
case 1935:
case 2022:
case 400:
case 506:
case 826:
case 3316:
case 567:
case 355:
case 2015:
case 3798:
case 668:
case 1119:
case 994:
case 262:
case 51:
case 2467:
case 1921:
case 1010:
case 3851:
case 3525:
case 1573:
case 1650:
case 3913:
case 1031:
case 3246:
case 3445:
case 3663:
case 1078:
case 108:
case 240:
case 2071:
case 2533:
case 1012:
case 1297:
case 1757:
case 2847:
case 3881:
case 3531:
case 3262:
case 2661:
case 3073:
case 1025:
case 2193:
case 196:
case 161:
case 2911:
case 2020:
case 3756:
case 1308:
case 3141:
case 383:
case 2301:
case 358:
case 3578:
case 3138:
case 2877:
case 1200:
case 2237:
case 3710:
case 3043:
case 6:
case 3967:
case 761:
case 3428:
case 1277:
case 3617:
case 324:
case 1086:
case 3584:
case 2800:
case 838:
case 3274:
case 1837:
case 1614:
case 1942:
case 1587:
case 2091:
case 3548:
case 3093:
case 1543:
case 843:
case 708:
case 1966:
case 812:
case 1423:
case 3352:
case 3475:
case 1992:
case 3598:
case 329:
case 1133:
case 3586:
case 2404:
case 1121:
case 2590:
case 2128:
case 59:
case 3227:
case 1431:
case 66:
case 2203:
case 3045:
case 518:
case 2824:
case 722:
case 1478:
case 1309:
case 3106:
case 914:
case 617:
case 133:
case 589:
case 3808:
case 276:
case 1135:
case 1425:
case 2540:
case 3473:
case 2396:
case 3201:
case 3104:
case 2826:
case 1107:
case 1079:
case 2388:
case 37:
case 2885:
case 1334:
case 2570:
case 3443:
case 3028:
case 3665:
case 3915:
case 2742:
case 1880:
case 619:
case 1486:
case 1575:
case 234:
case 310:
case 3599:
case 2507:
case 2491:
case 803:
case 3493:
case 1336:
case 2766:
case 1528:
case 122:
case 1852:
case 3139:
case 3549:
case 3075:
case 1023:
case 239:
case 1448:
case 3487:
case 2195:
case 3651:
case 2792:
case 282:
case 917:
case 2376:
case 2004:
case 3920:
case 3609:
case 70:
case 1456:
case 1795:
case 1255:
case 1933:
case 3011:
case 2973:
case 3369:
case 2855:
case 892:
case 2790:
case 2250:
case 973:
case 1868:
case 1454:
case 1745:
case 2518:
case 3681:
case 2572:
case 3457:
case 1261:
case 3938:
case 745:
case 3167:
case 181:
case 4041:
case 685:
case 256:
case 1118:
case 3723:
case 1775:
case 2111:
case 2214:
case 3799:
case 4038:
case 2707:
case 641:
case 2677:
case 2542:
case 1730:
case 515:
case 1605:
case 1172:
case 1637:
case 3817:
case 4071:
case 116:
case 3634:
case 440:
case 2422:
case 1365:
case 546:
case 985:
case 1351:
case 2415:
case 10:
case 4020:
case 673:
case 2721:
case 1728:
case 3113:
case 977:
case 2192:
case 3263:
case 2933:
case 2255:
case 960:
case 3646:
case 1683:
case 1973:
case 3925:
case 4086:
case 936:
case 1855:
case 370:
case 1518:
case 3644:
case 2745:
case 1861:
case 3696:
case 398:
case 2142:
case 121:
case 555:
case 1647:
case 3931:
case 2532:
case 1268:
case 2164:
case 4084:
case 1013:
case 156:
case 281:
case 1707:
case 1214:
case 1111:
case 3674:
case 2775:
case 4031:
case 3704:
case 1360:
case 2172:
case 3948:
case 1987:
case 364:
case 1132:
case 721:
case 4012:
case 2637:
case 2365:
case 3567:
case 4078:
case 3353:
case 1422:
case 1735:
case 3998:
case 2351:
case 974:
case 1358:
case 3042:
case 369:
case 677:
case 1592:
case 660:
case 531:
case 1216:
case 20:
case 1943:
case 636:
case 1566:
case 3064:
case 2816:
case 2410:
case 782:
case 613:
case 2669:
case 3713:
case 3040:
case 2121:
case 1203:
case 3889:
case 2431:
case 642:
case 2478:
case 248:
case 1471:
case 928:
case 3397:
case 2595:
case 1957:
case 2803:
case 3827:
case 524:
case 804:
case 1346:
case 2412:
case 3954:
case 2135:
case 1039:
case 3801:
case 233:
case 2170:
case 2226:
case 3090:
case 1540:
case 2425:
case 1130:
case 809:
case 3956:
case 529:
case 3433:
case 659:
case 3208:
case 2079:
case 1420:
case 1826:
case 1280:
case 737:
case 3767:
case 4056:
case 3021:
case 3300:
case 2140:
case 1653:
case 1006:
case 3504:
case 2285:
case 830:
case 959:
case 1145:
case 3660:
case 2575:
case 776:
case 1766:
case 2190:
case 1521:
case 3070:
case 942:
case 700:
case 222:
case 1441:
case 628:
case 1195:
case 3007:
case 583:
case 2023:
case 395:
case 2099:
case 954:
case 2484:
case 1376:
case 657:
case 527:
case 1792:
case 1143:
case 3846:
case 2573:
case 3894:
case 57:
case 1038:
case 2283:
case 852:
case 1897:
case 602:
case 1071:
case 416:
case 140:
case 1389:
case 3520:
case 510:
case 1655:
case 3198:
case 3209:
case 2757:
case 3186:
case 2012:
case 844:
case 1533:
case 1847:
case 1439:
case 3888:
case 296:
case 3896:
case 2668:
case 323:
case 1661:
case 2918:
case 3862:
case 2247:
case 849:
case 2682:
case 1301:
case 40:
case 2972:
case 3148:
case 1020:
case 2964:
case 3234:
case 3421:
case 39:
case 3874:
case 2593:
case 2529:
case 1237:
case 1800:
case 3112:
case 2277:
case 3385:
case 1091:
case 3715:
case 3659:
case 2837:
case 318:
case 3470:
case 332:
case 902:
case 740:
case 3435:
case 3591:
case 481:
case 3407:
case 2423:
case 847:
case 3689:
case 3355:
case 3979:
case 1995:
case 2869:
case 3418:
case 3720:
case 1519:
case 2603:
case 993:
case 346:
case 872:
case 2773:
case 422:
case 2202:
case 3771:
case 3019:
case 811:
case 1945:
case 1802:
case 1413:
case 4023:
case 3515:
case 1685:
case 886:
case 2907:
case 1975:
case 3999:
case 3492:
case 3265:
case 3860:
case 2935:
case 2253:
case 2970:
case 2652:
case 3949:
case 3251:
case 2119:
case 433:
case 1015:
case 2921:
case 24:
case 1928:
case 1467:
case 92:
case 162:
case 3858:
case 3464:
case 2010:
case 1758:
case 1298:
case 2751:
case 2291:
case 2194:
case 637:
case 3074:
case 1576:
case 1286:
case 1077:
case 3916:
case 1109:
case 159:
case 1891:
case 1321:
case 1000:
case 2480:
case 2536:
case 1307:
case 2959:
case 3914:
case 2452:
case 850:
case 939:
case 1248:
case 600:
case 3076:
case 1574:
case 1917:
case 2330:
case 1667:
case 512:
case 2884:
case 2534:
case 4082:
case 113:
case 757:
case 3229:
case 543:
case 1838:
case 214:
case 682:
case 1212:
case 713:
case 3672:
case 3105:
case 1588:
case 2345:
case 2174:
case 2271:
case 3618:
case 1278:
case 639:
case 3046:
case 1544:
case 900:
case 366:
case 1231:
case 2403:
case 4014:
case 1083:
case 2238:
case 1340:
case 3427:
case 1871:
case 1424:
case 937:
case 2220:
case 2825:
case 3096:
case 3088:
case 2395:
case 3597:
case 759:
case 1820:
case 3339:
case 1225:
case 48:
case 4016:
case 3583:
case 1136:
case 1390:
case 3950:
case 3833:
case 526:
case 1366:
case 656:
case 2736:
case 2222:
case 1822:
case 621:
case 3060:
case 3459:
case 1776:
case 2649:
case 4003:
case 3980:
case 777:
case 3670:
case 1364:
case 2734:
case 3635:
case 81:
case 760:
case 870:
case 3607:
case 1560:
case 1774:
case 2623:
case 2416:
case 2215:
case 898:
case 4:
case 736:
case 3777:
case 867:
case 136:
case 465:
case 2450:
case 1165:
case 273:
case 3640:
case 2332:
case 3502:
case 160:
case 1256:
case 535:
case 1744:
case 4080:
case 1908:
case 1455:
case 2311:
case 177:
case 2781:
case 3747:
case 3783:
case 1639:
case 3313:
case 4052:
case 725:
case 3819:
case 2927:
case 921:
case 2709:
case 869:
case 241:
case 3797:
case 2679:
case 1746:
case 1151:
case 1794:
case 1254:
case 3150:
case 1936:
case 453:
case 2686:
case 488:
case 2976:
case 1163:
case 299:
case 419:
case 2267:
case 962:
case 3842:
case 3937:
case 3905:
case 3458:
case 3864:
case 1641:
case 793:
case 294:
case 311:
case 1867:
case 2962:
case 3818:
case 2050:
case 592:
case 2631:
case 1638:
case 3872:
case 662:
case 1671:
case 2159:
case 2678:
case 1055:
case 4037:
case 386:
case 1117:
case 2612:
case 2996:
case 1701:
case 1727:
case 53:
case 2068:
case 3724:
case 2625:
case 2213:
case 1789:
case 1319:
case 2946:
case 1402:
case 2563:
case 3116:
case 2082:
case 1909:
case 1813:
case 1620:
case 2357:
case 3821:
case 3474:
case 1951:
case 2206:
case 2405:
case 2958:
case 3391:
case 2189:
case 265:
case 2437:
case 2127:
case 1400:
case 352:
case 2387:
case 3585:
case 2960:
case 3341:
case 2101:
case 780:
case 2717:
case 3230:
case 640:
case 3275:
case 1223:
case 1615:
case 1759:
case 3476:
case 102:
case 3807:
case 2899:
case 2610:
case 503:
case 3371:
case 3089:
case 2508:
case 1501:
case 220:
case 702:
case 2656:
case 3245:
case 3840:
case 3027:
case 3180:
case 180:
case 1024:
case 3526:
case 2763:
case 3496:
case 3444:
case 3295:
case 3755:
case 2654:
case 3619:
case 3152:
case 3001:
case 832:
case 2879:
case 3462:
case 3969:
case 2239:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748775602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,];
var gg_b = "1748775602/";

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
