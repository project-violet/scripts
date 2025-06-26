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
case 4085:
case 1993:
case 590:
case 233:
case 2800:
case 430:
case 1901:
case 3932:
case 1566:
case 3956:
case 1075:
case 3840:
case 835:
case 3571:
case 1136:
case 686:
case 752:
case 3150:
case 1234:
case 3162:
case 4039:
case 2982:
case 3005:
case 579:
case 3532:
case 3127:
case 31:
case 1422:
case 2112:
case 338:
case 1791:
case 380:
case 2:
case 1209:
case 1735:
case 3655:
case 2895:
case 3033:
case 3366:
case 2237:
case 111:
case 1245:
case 198:
case 537:
case 3414:
case 2138:
case 2659:
case 2316:
case 896:
case 1371:
case 497:
case 3279:
case 187:
case 3997:
case 3188:
case 1789:
case 1621:
case 488:
case 719:
case 2275:
case 1777:
case 1619:
case 3287:
case 1665:
case 3301:
case 3496:
case 622:
case 2289:
case 1331:
case 493:
case 290:
case 881:
case 2178:
case 1667:
case 3285:
case 2074:
case 1775:
case 2999:
case 3073:
case 1372:
case 416:
case 2745:
case 2818:
case 2709:
case 2897:
case 1737:
case 354:
case 3595:
case 1300:
case 1148:
case 4028:
case 250:
case 3705:
case 183:
case 453:
case 1003:
case 279:
case 1465:
case 1792:
case 3900:
case 2856:
case 3696:
case 2832:
case 2047:
case 3243:
case 2734:
case 618:
case 920:
case 1502:
case 1421:
case 1035:
case 2111:
case 1894:
case 1176:
case 3531:
case 2129:
case 5:
case 2291:
case 3972:
case 2940:
case 3125:
case 3007:
case 2871:
case 740:
case 1970:
case 134:
case 2613:
case 3572:
case 2459:
case 3614:
case 2783:
case 2581:
case 651:
case 4079:
case 1902:
case 1395:
case 3882:
case 1274:
case 1077:
case 3820:
case 3481:
case 2788:
case 820:
case 2006:
case 754:
case 4060:
case 603:
case 3440:
case 1915:
case 425:
case 1969:
case 639:
case 1442:
case 878:
case 3029:
case 3248:
case 861:
case 1822:
case 2955:
case 3738:
case 176:
case 2431:
case 1658:
case 1139:
case 677:
case 1143:
case 3682:
case 340:
case 4023:
case 981:
case 2762:
case 2495:
case 1008:
case 282:
case 3863:
case 2813:
case 3499:
case 3814:
case 27:
case 401:
case 2727:
case 1104:
case 526:
case 147:
case 3369:
case 564:
case 448:
case 2321:
case 1680:
case 2656:
case 3896:
case 2632:
case 3964:
case 3398:
case 2706:
case 1554:
case 392:
case 2631:
case 2963:
case 305:
case 2088:
case 624:
case 3252:
case 996:
case 71:
case 2190:
case 3913:
case 673:
case 2914:
case 3183:
case 2514:
case 2133:
case 2418:
case 3513:
case 4048:
case 3640:
case 2286:
case 2725:
case 3468:
case 2563:
case 3564:
case 1708:
case 2050:
case 2432:
case 1517:
case 468:
case 3354:
case 2920:
case 607:
case 321:
case 1819:
case 1494:
case 226:
case 319:
case 2224:
case 3012:
case 20:
case 471:
case 2027:
case 57:
case 2957:
case 1441:
case 3778:
case 1010:
case 1179:
case 1288:
case 1313:
case 2520:
case 3482:
case 4051:
case 3855:
case 3312:
case 23:
case 2327:
case 905:
case 291:
case 880:
case 3220:
case 3158:
case 2923:
case 485:
case 2350:
case 396:
case 1483:
case 637:
case 3054:
case 2635:
case 1386:
case 1267:
case 3685:
case 1064:
case 2492:
case 414:
case 2765:
case 2808:
case 195:
case 2719:
case 3524:
case 1538:
case 2523:
case 2721:
case 1434:
case 313:
case 2689:
case 662:
case 1222:
case 3715:
case 3848:
case 2193:
case 222:
case 3876:
case 921:
case 1512:
case 586:
case 2952:
case 919:
case 2936:
case 3586:
case 149:
case 3214:
case 1861:
case 3017:
case 335:
case 2960:
case 741:
case 136:
case 3338:
case 2560:
case 1806:
case 2552:
case 2603:
case 3986:
case 3116:
case 3604:
case 3296:
case 838:
case 1182:
case 650:
case 3643:
case 3487:
case 2644:
case 679:
case 81:
case 2475:
case 960:
case 1253:
case 3510:
case 49:
case 518:
case 975:
case 1546:
case 2489:
case 2810:
case 1911:
case 1181:
case 642:
case 53:
case 1929:
case 2477:
case 2551:
case 2753:
case 1634:
case 4020:
case 3836:
case 684:
case 3852:
case 1862:
case 2435:
case 172:
case 1683:
case 615:
case 2576:
case 3015:
case 1529:
case 3439:
case 1511:
case 2102:
case 1827:
case 45:
case 1219:
case 110:
case 2444:
case 4014:
case 3508:
case 2722:
case 3404:
case 3679:
case 3798:
case 2306:
case 286:
case 854:
case 3908:
case 720:
case 609:
case 2948:
case 1609:
case 1645:
case 2716:
case 840:
case 3281:
case 577:
case 3307:
case 207:
case 2347:
case 3730:
case 445:
case 60:
case 994:
case 1335:
case 3903:
case 2686:
case 2904:
case 3240:
case 1756:
case 2504:
case 2408:
case 2794:
case 2780:
case 954:
case 1834:
case 3660:
case 3591:
case 1377:
case 3793:
case 3448:
case 2539:
case 1718:
case 3121:
case 3119:
case 1845:
case 1507:
case 2295:
case 2837:
case 2374:
case 1809:
case 3535:
case 2115:
case 1031:
case 2169:
case 3451:
case 2758:
case 3623:
case 266:
case 2624:
case 1000:
case 127:
case 3879:
case 3935:
case 1303:
case 1155:
case 3887:
case 361:
case 1907:
case 3589:
case 2875:
case 3937:
case 821:
case 1258:
case 756:
case 2016:
case 682:
case 2877:
case 2334:
case 3885:
case 1526:
case 1157:
case 2579:
case 819:
case 1392:
case 3030:
case 2608:
case 4081:
case 644:
case 2080:
case 1795:
case 2094:
case 1549:
case 2486:
case 1926:
case 2835:
case 2979:
case 2297:
case 1450:
case 1847:
case 2383:
case 2218:
case 1056:
case 3384:
case 3001:
case 860:
case 3975:
case 2041:
case 2198:
case 123:
case 2117:
case 174:
case 938:
case 2742:
case 1294:
case 1375:
case 1097:
case 892:
case 3843:
case 3770:
case 2844:
case 3592:
case 2803:
case 1241:
case 203:
case 3804:
case 2528:
case 400:
case 3702:
case 3423:
case 1984:
case 2891:
case 1114:
case 1533:
case 1606:
case 1933:
case 2928:
case 1661:
case 1584:
case 308:
case 3349:
case 3992:
case 1625:
case 852:
case 3282:
case 1337:
case 3153:
case 2345:
case 735:
case 3676:
case 2154:
case 2669:
case 1188:
case 802:
case 387:
case 1279:
case 1997:
case 895:
case 2615:
case 1287:
case 1301:
case 490:
case 1090:
case 1084:
case 3453:
case 3777:
case 1393:
case 479:
case 3245:
case 398:
case 1463:
case 1330:
case 3735:
case 2382:
case 3371:
case 2205:
case 2739:
case 1414:
case 732:
case 329:
case 1899:
case 2870:
case 437:
case 1971:
case 2541:
case 3467:
case 3234:
case 1228:
case 3842:
case 685:
case 974:
case 2580:
case 138:
case 1049:
case 2594:
case 2802:
case 3593:
case 1532:
case 1005:
case 1127:
case 11:
case 588:
case 1932:
case 1956:
case 1026:
case 2079:
case 1420:
case 2110:
case 3530:
case 462:
case 2368:
case 2087:
case 3283:
case 1457:
case 2516:
case 1840:
case 614:
case 3397:
case 1572:
case 1106:
case 1614:
case 334:
case 3089:
case 3816:
case 872:
case 3395:
case 3274:
case 230:
case 1455:
case 3077:
case 2830:
case 1784:
case 1790:
case 1663:
case 2085:
case 3653:
case 2893:
case 3421:
case 3035:
case 3502:
case 2728:
case 3176:
case 1531:
case 3419:
case 3792:
case 409:
case 2415:
case 1007:
case 3570:
case 4045:
case 2542:
case 2469:
case 4009:
case 1161:
case 1657:
case 2108:
case 154:
case 484:
case 3044:
case 3372:
case 631:
case 1620:
case 2004:
case 383:
case 1239:
case 1705:
case 442:
case 3003:
case 1749:
case 3300:
case 3091:
case 4:
case 3622:
case 1995:
case 65:
case 1302:
case 810:
case 3858:
case 288:
case 3331:
case 1073:
case 415:
case 3667:
case 1370:
case 1285:
case 257:
case 659:
case 1369:
case 1251:
case 525:
case 969:
case 2752:
case 1174:
case 804:
case 1896:
case 3853:
case 2246:
case 2854:
case 3680:
case 3008:
case 1276:
case 2630:
case 2211:
case 910:
case 628:
case 3143:
case 2666:
case 2144:
case 734:
case 3616:
case 3359:
case 1814:
case 972:
case 3515:
case 1029:
case 3867:
case 4027:
case 501:
case 271:
case 40:
case 426:
case 3442:
case 827:
case 98:
case 376:
case 2519:
case 3658:
case 3139:
case 2521:
case 2402:
case 2723:
case 2817:
case 4050:
case 3822:
case 2051:
case 2189:
case 1668:
case 1559:
case 3969:
case 889:
case 1440:
case 1857:
case 3915:
case 711:
case 2314:
case 798:
case 936:
case 3416:
case 3010:
case 3179:
case 1482:
case 160:
case 2466:
case 1855:
case 823:
case 2922:
case 4006:
case 2052:
case 332:
case 2175:
case 84:
case 3998:
case 3821:
case 3598:
case 3480:
case 3086:
case 4025:
case 3494:
case 2522:
case 4061:
case 1109:
case 2567:
case 3441:
case 2748:
case 949:
case 2815:
case 758:
case 1223:
case 571:
case 2192:
case 1729:
case 2776:
case 902:
case 1711:
case 3128:
case 3250:
case 2320:
case 3954:
case 152:
case 482:
case 3024:
case 1038:
case 2023:
case 1317:
case 1964:
case 192:
case 3554:
case 2602:
case 248:
case 2553:
case 2751:
case 1746:
case 3642:
case 665:
case 1236:
case 2670:
case 955:
case 1252:
case 2171:
case 1986:
case 585:
case 2426:
case 1479:
case 2020:
case 2950:
case 1338:
case 3324:
case 1851:
case 3806:
case 2057:
case 231:
case 3253:
case 2846:
case 3182:
case 2927:
case 3912:
case 29:
case 2673:
case 3512:
case 25:
case 2156:
case 2527:
case 3674:
case 1910:
case 688:
case 1194:
case 514:
case 2550:
case 967:
case 2405:
case 3861:
case 135:
case 657:
case 2562:
case 2449:
case 1524:
case 887:
case 2988:
case 486:
case 3538:
case 1428:
case 3434:
case 2197:
case 3267:
case 2336:
case 1685:
case 302:
case 3222:
case 2014:
case 630:
case 1715:
case 858:
case 943:
case 1848:
case 113:
case 3168:
case 2298:
case 3310:
case 92:
case 1769:
case 906:
case 2607:
case 3759:
case 1220:
case 1158:
case 811:
case 898:
case 2755:
case 74:
case 3386:
case 774:
case 2490:
case 2096:
case 1924:
case 2588:
case 3938:
case 3483:
case 117:
case 3888:
case 369:
case 285:
case 2720:
case 789:
case 491:
case 1311:
case 883:
case 2473:
case 3578:
case 3474:
case 3978:
case 1687:
case 3265:
case 727:
case 2195:
case 451:
case 1346:
case 55:
case 1823:
case 214:
case 2215:
case 1679:
case 1717:
case 3447:
case 2561:
case 2690:
case 3850:
case 3683:
case 3764:
case 2525:
case 1378:
case 2812:
case 1069:
case 1015:
case 2407:
case 2714:
case 4067:
case 693:
case 3713:
case 3546:
case 3911:
case 963:
case 3308:
case 3140:
case 1485:
case 1836:
case 1852:
case 2506:
case 2055:
case 704:
case 2081:
case 2304:
case 601:
case 327:
case 2826:
case 545:
case 1451:
case 934:
case 3000:
case 3391:
case 161:
case 2446:
case 2040:
case 4016:
case 477:
case 3072:
case 876:
case 3155:
case 1165:
case 120:
case 3809:
case 648:
case 769:
case 2411:
case 3718:
case 1119:
case 1070:
case 2429:
case 3688:
case 389:
case 2547:
case 2805:
case 2768:
case 1535:
case 1002:
case 2849:
case 4094:
case 4080:
case 3242:
case 847:
case 1660:
case 3834:
case 200:
case 1828:
case 3756:
case 403:
case 1636:
case 1503:
case 2385:
case 1701:
case 1652:
case 2099:
case 3973:
case 1544:
case 2974:
case 983:
case 304:
case 3389:
case 1281:
case 2339:
case 1307:
case 3627:
case 1944:
case 3573:
case 2478:
case 36:
case 3335:
case 3662:
case 1903:
case 4058:
case 1766:
case 78:
case 439:
case 2890:
case 108:
case 1992:
case 3700:
case 3625:
case 245:
case 3933:
case 3488:
case 2781:
case 3661:
case 3590:
case 2934:
case 3772:
case 2611:
case 806:
case 2740:
case 958:
case 1282:
case 2266:
case 2387:
case 1843:
case 1770:
case 911:
case 2164:
case 3294:
case 736:
case 141:
case 212:
case 3163:
case 2646:
case 2113:
case 3990:
case 1651:
case 3984:
case 2534:
case 3533:
case 2438:
case 3606:
case 2379:
case 1592:
case 2068:
case 3032:
case 3847:
case 3505:
case 1001:
case 424:
case 3462:
case 3549:
case 270:
case 3926:
case 1093:
case 1167:
case 2509:
case 4042:
case 374:
case 832:
case 2412:
case 2807:
case 2545:
case 1839:
case 323:
case 3258:
case 228:
case 3120:
case 1937:
case 702:
case 1648:
case 3392:
case 1452:
case 1436:
case 299:
case 466:
case 867:
case 1333:
case 1460:
case 800:
case 985:
case 2641:
case 1321:
case 3760:
case 2853:
case 623:
case 1656:
case 1365:
case 3736:
case 3601:
case 532:
case 3752:
case 4038:
case 1495:
case 2143:
case 3666:
case 182:
case 3229:
case 2008:
case 3630:
case 1864:
case 567:
case 2261:
case 3191:
case 3048:
case 2359:
case 2104:
case 2616:
case 730:
case 1671:
case 17:
case 2225:
case 144:
case 788:
case 2867:
case 3135:
case 3076:
case 3470:
case 1208:
case 757:
case 3565:
case 3817:
case 1061:
case 2658:
case 52:
case 3723:
case 1431:
case 1025:
case 3519:
case 421:
case 1788:
case 3189:
case 263:
case 3921:
case 3051:
case 1006:
case 797:
case 1400:
case 2915:
case 865:
case 2185:
case 1618:
case 1126:
case 4046:
case 3967:
case 2010:
case 1471:
case 870:
case 3314:
case 716:
case 3175:
case 2998:
case 2364:
case 475:
case 3052:
case 2187:
case 3922:
case 3466:
case 3060:
case 1432:
case 1050:
case 3396:
case 3137:
case 828:
case 2708:
case 3522:
case 1353:
case 2480:
case 1062:
case 95:
case 2821:
case 2598:
case 3493:
case 1027:
case 3238:
case 126:
case 4029:
case 4011:
case 1957:
case 3748:
case 2441:
case 1672:
case 2250:
case 1514:
case 3776:
case 1286:
case 2262:
case 3192:
case 845:
case 3023:
case 440:
case 2227:
case 1996:
case 22:
case 3212:
case 2024:
case 206:
case 3953:
case 1963:
case 3602:
case 348:
case 1210:
case 2458:
case 1706:
case 563:
case 812:
case 1322:
case 3670:
case 1367:
case 1184:
case 945:
case 1341:
case 494:
case 3615:
case 4073:
case 393:
case 258:
case 1380:
case 2356:
case 68:
case 1083:
case 2665:
case 1237:
case 3382:
case 2735:
case 3028:
case 353:
case 1568:
case 3958:
case 2092:
case 1464:
case 211:
case 2245:
case 3124:
case 229:
case 1659:
case 1413:
case 3739:
case 3205:
case 3249:
case 184:
case 454:
case 1316:
case 2234:
case 970:
case 3743:
case 1045:
case 1292:
case 2744:
case 3186:
case 831:
case 1982:
case 3704:
case 3802:
case 2791:
case 1358:
case 3580:
case 3594:
case 2530:
case 3994:
case 133:
case 85:
case 2566:
case 610:
case 928:
case 2152:
case 999:
case 2136:
case 2397:
case 2075:
case 3941:
case 1774:
case 3290:
case 2283:
case 3087:
case 2318:
case 234:
case 1871:
case 602:
case 695:
case 3942:
case 3399:
case 1146:
case 2902:
case 1783:
case 3830:
case 1664:
case 330:
case 558:
case 2395:
case 1832:
case 3801:
case 598:
case 438:
case 1981:
case 3728:
case 655:
case 3469:
case 3415:
case 1203:
case 2570:
case 2841:
case 2044:
case 1745:
case 2737:
case 1709:
case 900:
case 1897:
case 2091:
case 150:
case 3207:
case 3004:
case 3381:
case 3698:
case 2858:
case 771:
case 2331:
case 1178:
case 2622:
case 3779:
case 4090:
case 357:
case 3787:
case 649:
case 1277:
case 814:
case 1074:
case 1342:
case 2775:
case 3638:
case 3159:
case 166:
case 1624:
case 1758:
case 4066:
case 3947:
case 227:
case 2303:
case 3826:
case 3081:
case 868:
case 606:
case 714:
case 643:
case 3446:
case 1939:
case 1875:
case 3040:
case 930:
case 2907:
case 3429:
case 2507:
case 3411:
case 2809:
case 1374:
case 1837:
case 1042:
case 2425:
case 124:
case 1985:
case 2461:
case 2688:
case 365:
case 289:
case 1169:
case 1892:
case 1504:
case 3833:
case 1794:
case 2095:
case 441:
case 1231:
case 204:
case 1610:
case 632:
case 54:
case 3202:
case 1543:
case 3974:
case 3099:
case 2973:
case 523:
case 1200:
case 3574:
case 107:
case 3339:
case 1272:
case 408:
case 1686:
case 2661:
case 2584:
case 345:
case 2488:
case 2933:
case 527:
case 1271:
case 2216:
case 1058:
case 993:
case 3266:
case 1309:
case 1154:
case 3230:
case 1345:
case 2097:
case 3293:
case 2163:
case 663:
case 2294:
case 312:
case 2280:
case 3201:
case 848:
case 2018:
case 1232:
case 3387:
case 589:
case 103:
case 3068:
case 3379:
case 916:
case 2114:
case 1424:
case 3438:
case 2731:
case 1528:
case 3534:
case 1891:
case 370:
case 647:
case 1979:
case 1080:
case 359:
case 2032:
case 1383:
case 2505:
case 2450:
case 2056:
case 223:
case 1198:
case 3807:
case 3799:
case 274:
case 24:
case 3678:
case 3412:
case 504:
case 3509:
case 1117:
case 420:
case 3909:
case 1587:
case 3945:
case 2071:
case 461:
case 1016:
case 2258:
case 56:
case 1889:
case 478:
case 3082:
case 399:
case 1877:
case 3328:
case 2157:
case 2392:
case 1579:
case 3323:
case 236:
case 3950:
case 1691:
case 1560:
case 3020:
case 1603:
case 1166:
case 3927:
case 2253:
case 1475:
case 3057:
case 683:
case 2445:
case 510:
case 3829:
case 122:
case 1193:
case 1067:
case 3132:
case 2409:
case 3156:
case 3527:
case 4069:
case 1437:
case 35:
case 2512:
case 1952:
case 2861:
case 3550:
case 1213:
case 1960:
case 249:
case 1808:
case 202:
case 3063:
case 634:
case 2434:
case 728:
case 295:
case 1719:
case 3988:
case 3433:
case 2310:
case 481:
case 2168:
case 3298:
case 799:
case 3217:
case 3014:
case 2222:
case 1327:
case 853:
case 770:
case 3878:
case 13:
case 948:
case 118:
case 3607:
case 2483:
case 3588:
case 1350:
case 1923:
case 3484:
case 3096:
case 417:
case 1053:
case 3755:
case 3649:
case 4054:
case 3757:
case 1637:
case 765:
case 3376:
case 413:
case 1675:
case 2219:
case 888:
case 2978:
case 1548:
case 3626:
case 3215:
case 186:
case 3269:
case 857:
case 456:
case 3838:
case 1824:
case 1491:
case 1306:
case 687:
case 2862:
case 272:
case 2764:
case 502:
case 1951:
case 435:
case 2946:
case 658:
case 2511:
case 1576:
case 3714:
case 3100:
case 2929:
case 611:
case 1810:
case 2546:
case 1489:
case 698:
case 2911:
case 2634:
case 1551:
case 3172:
case 3961:
case 629:
case 1477:
case 3055:
case 3925:
case 2140:
case 1051:
case 3555:
case 1278:
case 3788:
case 2481:
case 1919:
case 275:
case 641:
case 505:
case 1921:
case 432:
case 3472:
case 824:
case 2559:
case 1177:
case 873:
case 750:
case 4010:
case 2857:
case 3697:
case 608:
case 1135:
case 467:
case 866:
case 2011:
case 790:
case 1470:
case 2029:
case 2959:
case 171:
case 2147:
case 1898:
case 1402:
case 1521:
case 3431:
case 3025:
case 1519:
case 1565:
case 3955:
case 2248:
case 3061:
case 1211:
case 3750:
case 382:
case 3864:
case 2276:
case 406:
case 42:
case 1355:
case 521:
case 1666:
case 240:
case 3727:
case 37:
case 1103:
case 986:
case 2499:
case 2814:
case 1191:
case 762:
case 2251:
case 2078:
case 3656:
case 2896:
case 3632:
case 3365:
case 1736:
case 1752:
case 3321:
case 1760:
case 1693:
case 205:
case 991:
case 3088:
case 918:
case 575:
case 3596:
case 3963:
case 148:
case 1602:
case 93:
case 1553:
case 2398:
case 292:
case 803:
case 3184:
case 846:
case 1670:
case 3367:
case 2236:
case 2252:
case 839:
case 101:
case 1357:
case 3497:
case 3672:
case 678:
case 2729:
case 2564:
case 252:
case 2681:
case 3563:
case 2468:
case 1953:
case 3996:
case 3600:
case 1212:
case 3725:
case 3353:
case 221:
case 476:
case 877:
case 2354:
case 715:
case 1493:
case 3920:
case 3432:
case 2109:
case 1137:
case 1401:
case 3149:
case 1748:
case 1567:
case 3105:
case 1238:
case 326:
case 1869:
case 3224:
case 2012:
case 1314:
case 3557:
case 3471:
case 2778:
case 2855:
case 1466:
case 2482:
case 1060:
case 1175:
case 463:
case 1363:
case 1036:
case 822:
case 4077:
case 681:
case 333:
case 1368:
case 977:
case 2420:
case 594:
case 1290:
case 1087:
case 2773:
case 2571:
case 2840:
case 1516:
case 1941:
case 1916:
case 1541:
case 1743:
case 3045:
case 1870:
case 2971:
case 3292:
case 2162:
case 1186:
case 1233:
case 2228:
case 1802:
case 1498:
case 1580:
case 1594:
case 2049:
case 238:
case 3112:
case 2005:
case 2532:
case 2556:
case 1417:
case 3747:
case 3568:
case 483:
case 1958:
case 3464:
case 83:
case 342:
case 2655:
case 3237:
case 818:
case 1382:
case 3:
case 1028:
case 2597:
case 1124:
case 2707:
case 2414:
case 3659:
case 3138:
case 3413:
case 2918:
case 315:
case 3341:
case 1615:
case 2997:
case 2279:
case 1226:
case 939:
case 2090:
case 851:
case 1785:
case 2496:
case 2084:
case 3083:
case 2287:
case 2393:
case 1454:
case 193:
case 3394:
case 726:
case 3178:
case 1617:
case 2726:
case 1698:
case 3289:
case 188:
case 458:
case 3999:
case 2073:
case 3342:
case 2285:
case 157:
case 886:
case 487:
case 1787:
case 294:
case 1108:
case 3235:
case 3897:
case 3818:
case 4092:
case 51:
case 1004:
case 2868:
case 498:
case 538:
case 350:
case 2749:
case 2595:
case 2733:
case 2531:
case 3981:
case 1654:
case 3129:
case 1893:
case 1728:
case 2696:
case 2243:
case 3244:
case 337:
case 1415:
case 2007:
case 3940:
case 2204:
case 3291:
case 2161:
case 924:
case 1469:
case 1542:
case 696:
case 3459:
case 2106:
case 1942:
case 782:
case 1399:
case 3540:
case 3871:
case 2455:
case 1273:
case 744:
case 1866:
case 77:
case 3146:
case 2663:
case 1085:
case 3783:
case 362:
case 3581:
case 3664:
case 2307:
case 1339:
case 1612:
case 2944:
case 3943:
case 3716:
case 2240:
case 2766:
case 2903:
case 3347:
case 2730:
case 1884:
case 2991:
case 3272:
case 2591:
case 2828:
case 100:
case 1833:
case 3780:
case 2701:
case 1270:
case 2503:
case 3408:
case 3892:
case 2652:
case 3741:
case 3543:
case 2448:
case 2544:
case 1099:
case 979:
case 3231:
case 541:
case 44:
case 3295:
case 2070:
case 692:
case 423:
case 3539:
case 4056:
case 1768:
case 373:
case 937:
case 3169:
case 2299:
case 3985:
case 2002:
case 2879:
case 3585:
case 1826:
case 2935:
case 1081:
case 1638:
case 1159:
case 2577:
case 278:
case 1446:
case 3875:
case 4071:
case 261:
case 2887:
case 1945:
case 128:
case 3410:
case 2648:
case 2937:
case 3587:
case 933:
case 2030:
case 2452:
case 2436:
case 3579:
case 826:
case 2066:
case 2333:
case 1082:
case 199:
case 3334:
case 3877:
case 1328:
case 159:
case 2384:
case 864:
case 3218:
case 170:
case 3297:
case 3080:
case 73:
case 4031:
case 3486:
case 2537:
case 3987:
case 2122:
case 3117:
case 2975:
case 2839:
case 3198:
case 2268:
case 909:
case 1799:
case 942:
case 3256:
case 3232:
case 1387:
case 9:
case 1293:
case 1646:
case 3742:
case 1164:
case 404:
case 112:
case 520:
case 241:
case 3424:
case 1983:
case 1438:
case 2702:
case 3528:
case 303:
case 2804:
case 2592:
case 1379:
case 2326:
case 2992:
case 915:
case 2349:
case 722:
case 1583:
case 1781:
case 2305:
case 2676:
case 1611:
case 3345:
case 2153:
case 561:
case 46:
case 1873:
case 318:
case 2639:
case 391:
case 1878:
case 842:
case 3635:
case 3053:
case 1755:
case 2054:
case 3923:
case 884:
case 1096:
case 1118:
case 3721:
case 1360:
case 1433:
case 256:
case 3492:
case 3808:
case 1063:
case 1336:
case 1197:
case 1352:
case 410:
case 1217:
case 1014:
case 1298:
case 3689:
case 833:
case 1132:
case 15:
case 1673:
case 2180:
case 1829:
case 2194:
case 3264:
case 2263:
case 3193:
case 3067:
case 2910:
case 1550:
case 3213:
case 3022:
case 2214:
case 3952:
case 90:
case 2141:
case 1426:
case 2479:
case 1020:
case 3552:
case 1962:
case 654:
case 1323:
case 2338:
case 1950:
case 3560:
case 746:
case 2510:
case 3130:
case 2487:
case 703:
case 4059:
case 3166:
case 3976:
case 3489:
case 3810:
case 680:
case 1348:
case 2852:
case 596:
case 2485:
case 3551:
case 2628:
case 1172:
case 436:
case 2754:
case 1633:
case 3477:
case 1906:
case 707:
case 2142:
case 449:
case 1690:
case 3886:
case 3019:
case 1812:
case 2069:
case 513:
case 2378:
case 2439:
case 3102:
case 3576:
case 1131:
case 2687:
case 3767:
case 2443:
case 3548:
case 4013:
case 890:
case 1838:
case 944:
case 1351:
case 3491:
case 3306:
case 2717:
case 2404:
case 2679:
case 1626:
case 535:
case 3403:
case 3722:
case 2508:
case 4064:
case 1649:
case 2908:
case 217:
case 1720:
case 1605:
case 185:
case 2311:
case 850:
case 773:
case 638:
case 2329:
case 1376:
case 879:
case 1757:
case 2255:
case 61:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750975202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,];
var gg_b = "1750975202/";

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
