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
var o = 0;
switch (g) {
case 58:
case 3464:
case 3170:
case 2628:
case 878:
case 1056:
case 2403:
case 223:
case 904:
case 2386:
case 753:
case 1354:
case 2010:
case 2930:
case 2988:
case 164:
case 2721:
case 736:
case 220:
case 2433:
case 1581:
case 1864:
case 750:
case 214:
case 1222:
case 4018:
case 856:
case 2625:
case 2168:
case 1117:
case 1790:
case 2073:
case 3519:
case 833:
case 2824:
case 2985:
case 2262:
case 3211:
case 1395:
case 3125:
case 3668:
case 2424:
case 804:
case 4046:
case 3761:
case 2712:
case 1211:
case 3499:
case 1113:
case 676:
case 3056:
case 3665:
case 489:
case 3996:
case 451:
case 933:
case 3354:
case 2841:
case 4023:
case 3581:
case 54:
case 658:
case 485:
case 2340:
case 2813:
case 2329:
case 3868:
case 2199:
case 1226:
case 453:
case 337:
case 931:
case 2745:
case 2593:
case 258:
case 2603:
case 1141:
case 1201:
case 894:
case 1103:
case 2641:
case 2428:
case 1465:
case 3137:
case 2870:
case 144:
case 469:
case 1133:
case 1231:
case 3459:
case 3355:
case 1750:
case 3103:
case 4080:
case 2164:
case 1137:
case 2470:
case 4014:
case 1664:
case 3231:
case 3133:
case 2716:
case 2828:
case 1865:
case 1355:
case 3539:
case 1107:
case 1572:
case 1247:
case 1459:
case 994:
case 221:
case 573:
case 751:
case 1124:
case 2000:
case 789:
case 3226:
case 2088:
case 2984:
case 1394:
case 1868:
case 445:
case 137:
case 2030:
case 2910:
case 1700:
case 3251:
case 2283:
case 3809:
case 760:
case 625:
case 1335:
case 1439:
case 2796:
case 1730:
case 3045:
case 1305:
case 812:
case 1788:
case 2657:
case 1409:
case 2990:
case 77:
case 1342:
case 1380:
case 3002:
case 1314:
case 1338:
case 781:
case 1906:
case 2274:
case 759:
case 1308:
case 440:
case 1936:
case 1568:
case 3342:
case 480:
case 2119:
case 3906:
case 202:
case 3338:
case 1002:
case 2497:
case 1944:
case 1048:
case 2893:
case 741:
case 3785:
case 1032:
case 63:
case 2653:
case 3681:
case 1251:
case 1153:
case 668:
case 3439:
case 3335:
case 106:
case 1045:
case 1839:
case 3565:
case 692:
case 3157:
case 966:
case 463:
case 1193:
case 82:
case 196:
case 3315:
case 3476:
case 2792:
case 1599:
case 460:
case 3021:
case 3784:
case 517:
case 1260:
case 3197:
case 1945:
case 3006:
case 2139:
case 1902:
case 3672:
case 3334:
case 3318:
case 459:
case 740:
case 1481:
case 2109:
case 1609:
case 688:
case 2249:
case 1932:
case 1012:
case 481:
case 2220:
case 1773:
case 3902:
case 1672:
case 92:
case 783:
case 2172:
case 3346:
case 2090:
case 3481:
case 2857:
case 2061:
case 1979:
case 1564:
case 1036:
case 1881:
case 780:
case 946:
case 318:
case 3777:
case 3044:
case 755:
case 4095:
case 629:
case 3193:
case 1327:
case 1419:
case 2756:
case 3599:
case 4054:
case 497:
case 1710:
case 2697:
case 761:
case 3945:
case 1197:
case 2265:
case 2982:
case 3866:
case 2940:
case 3587:
case 2929:
case 163:
case 3994:
case 3098:
case 3054:
case 2622:
case 397:
case 224:
case 1466:
case 2268:
case 1217:
case 1225:
case 1574:
case 1969:
case 2746:
case 2071:
case 181:
case 3955:
case 2162:
case 3111:
case 2426:
case 611:
case 2377:
case 2734:
case 2826:
case 2718:
case 3225:
case 3217:
case 359:
case 800:
case 562:
case 3969:
case 3574:
case 141:
case 2704:
case 4036:
case 803:
case 3662:
case 37:
case 2611:
case 1213:
case 1587:
case 3392:
case 1270:
case 1356:
case 1994:
case 1098:
case 2259:
case 2801:
case 2384:
case 3:
case 706:
case 3466:
case 3583:
case 2551:
case 2300:
case 361:
case 3352:
case 3575:
case 2560:
case 3224:
case 2735:
case 1396:
case 2626:
case 107:
case 1954:
case 1126:
case 1462:
case 1998:
case 2388:
case 1241:
case 3069:
case 890:
case 143:
case 2742:
case 1549:
case 2714:
case 380:
case 3237:
case 2166:
case 2631:
case 4016:
case 1131:
case 140:
case 383:
case 2489:
case 3147:
case 1995:
case 508:
case 3207:
case 1578:
case 3203:
case 624:
case 3520:
case 610:
case 867:
case 3143:
case 155:
case 2971:
case 2822:
case 2264:
case 3549:
case 340:
case 3131:
case 3995:
case 4048:
case 183:
case 1352:
case 2029:
case 990:
case 161:
case 3396:
case 1862:
case 1224:
case 3058:
case 901:
case 3094:
case 3915:
case 4052:
case 3253:
case 2281:
case 136:
case 1782:
case 150:
case 1683:
case 1878:
case 3820:
case 1729:
case 1420:
case 3478:
case 153:
case 1257:
case 1449:
case 3687:
case 1923:
case 3918:
case 1302:
case 1562:
case 232:
case 1875:
case 472:
case 2769:
case 3080:
case 1674:
case 3904:
case 3379:
case 3316:
case 2460:
case 169:
case 2963:
case 29:
case 219:
case 1348:
case 444:
case 2350:
case 3302:
case 484:
case 1038:
case 2967:
case 2219:
case 3946:
case 2860:
case 1008:
case 3674:
case 1379:
case 3348:
case 922:
case 369:
case 350:
case 3740:
case 895:
case 3683:
case 2651:
case 1927:
case 1151:
case 3729:
case 385:
case 1478:
case 2794:
case 3420:
case 2187:
case 3449:
case 277:
case 1191:
case 3874:
case 2691:
case 2526:
case 1027:
case 4056:
case 1015:
case 1786:
case 3023:
case 149:
case 2754:
case 527:
case 1160:
case 3297:
case 2660:
case 1905:
case 2239:
case 1942:
case 1980:
case 3771:
case 1887:
case 2531:
case 744:
case 1306:
case 1034:
case 1566:
case 1914:
case 1018:
case 1938:
case 2501:
case 2361:
case 2120:
case 1908:
case 772:
case 1004:
case 1046:
case 3980:
case 3942:
case 3483:
case 3938:
case 905:
case 1487:
case 1883:
case 3649:
case 215:
case 3004:
case 1678:
case 3336:
case 1874:
case 737:
case 3191:
case 3293:
case 3015:
case 3786:
case 1023:
case 1675:
case 3321:
case 724:
case 3653:
case 3752:
case 1283:
case 2700:
case 1796:
case 591:
case 503:
case 148:
case 3570:
case 2788:
case 862:
case 2565:
case 2921:
case 1657:
case 2409:
case 500:
case 1528:
case 3287:
case 3513:
case 1990:
case 3119:
case 302:
case 2906:
case 1493:
case 1897:
case 3497:
case 1274:
case 129:
case 2016:
case 2785:
case 2308:
case 1176:
case 2619:
case 3897:
case 2676:
case 102:
case 1119:
case 1893:
case 3274:
case 2944:
case 1497:
case 2048:
case 3525:
case 3961:
case 3517:
case 696:
case 962:
case 3181:
case 4040:
case 618:
case 4029:
case 206:
case 188:
case 3796:
case 2839:
case 2045:
case 1287:
case 3528:
case 3657:
case 413:
case 1792:
case 296:
case 3756:
case 982:
case 2876:
case 2323:
case 2260:
case 3367:
case 4071:
case 1139:
case 874:
case 3507:
case 3090:
case 2481:
case 908:
case 3857:
case 3061:
case 1457:
case 2609:
case 1541:
case 2777:
case 325:
case 13:
case 2948:
case 1503:
case 1950:
case 1507:
case 1172:
case 2006:
case 3139:
case 2773:
case 2334:
case 1367:
case 3533:
case 1857:
case 1090:
case 1453:
case 3109:
case 3853:
case 1537:
case 2979:
case 368:
case 125:
case 2419:
case 593:
case 2315:
case 3792:
case 2476:
case 808:
case 2021:
case 2784:
case 1275:
case 2197:
case 1697:
case 2710:
case 852:
case 3833:
case 1900:
case 1628:
case 3437:
case 1807:
case 1386:
case 1930:
case 684:
case 3407:
case 2222:
case 2581:
case 2864:
case 120:
case 1988:
case 1084:
case 2125:
case 1617:
case 2668:
case 719:
case 2790:
case 3424:
case 1625:
case 4067:
case 637:
case 1073:
case 1706:
case 595:
case 3077:
case 2395:
case 3712:
case 2761:
case 509:
case 3168:
case 1371:
case 1424:
case 2899:
case 3073:
case 2519:
case 2576:
case 2113:
case 2211:
case 4063:
case 2464:
case 3165:
case 3628:
case 1670:
case 3557:
case 323:
case 3386:
case 3807:
case 2659:
case 3010:
case 1803:
case 3084:
case 1553:
case 321:
case 1340:
case 1382:
case 176:
case 2992:
case 3624:
case 1417:
case 1813:
case 3000:
case 557:
case 1425:
case 3413:
case 3088:
case 1745:
case 3910:
case 2103:
case 3973:
case 2141:
case 1603:
case 2509:
case 2465:
case 432:
case 2369:
case 1428:
case 49:
case 3716:
case 3828:
case 244:
case 1633:
case 1870:
case 1732:
case 358:
case 3702:
case 664:
case 3603:
case 715:
case 2664:
case 1637:
case 1470:
case 70:
case 2137:
case 3870:
case 3732:
case 51:
case 3266:
case 1085:
case 599:
case 2107:
case 376:
case 3340:
case 121:
case 3425:
case 2956:
case 2124:
case 1000:
case 3417:
case 3329:
case 1817:
case 1088:
case 1825:
case 3199:
case 1984:
case 1413:
case 1030:
case 237:
case 3593:
case 2740:
case 2782:
case 250:
case 2683:
case 3651:
case 720:
case 1281:
case 2729:
case 98:
case 3794:
case 2420:
case 2923:
case 2449:
case 2257:
case 132:
case 3511:
case 2302:
case 458:
case 3219:
case 2875:
case 689:
case 2674:
case 119:
case 2348:
case 826:
case 19:
case 1967:
case 2038:
case 1511:
case 649:
case 1860:
case 3769:
case 3491:
case 1219:
case 2080:
case 88:
case 2316:
case 3174:
case 4085:
case 319:
case 2035:
case 3522:
case 2151:
case 3183:
case 3281:
case 2927:
case 1651:
case 4000:
case 421:
case 2820:
case 94:
case 245:
case 4030:
case 4088:
case 1187:
case 177:
case 926:
case 1758:
case 1691:
case 86:
case 423:
case 838:
case 2191:
case 2293:
case 2015:
case 2786:
case 1526:
case 531:
case 2027:
case 4084:
case 249:
case 1798:
case 2160:
case 776:
case 2321:
case 1390:
case 3272:
case 2566:
case 2938:
case 1067:
case 645:
case 2306:
case 1531:
case 873:
case 30:
case 1851:
case 1209:
case 1543:
case 2004:
case 1795:
case 3178:
case 2336:
case 3239:
case 2771:
case 96:
case 3851:
case 2883:
case 3149:
case 1063:
case 685:
case 4077:
case 0:
case 636:
case 1178:
case 265:
case 3361:
case 3543:
case 115:
case 2874:
case 289:
case 3754:
case 594:
case 973:
case 2297:
case 721:
case 3660:
case 3086:
case 2392:
case 1940:
case 1982:
case 683:
case 1265:
case 263:
case 113:
case 748:
case 1401:
case 3259:
case 1689:
case 680:
case 2466:
case 2583:
case 1431:
case 655:
case 3826:
case 729:
case 3718:
case 3373:
case 1268:
case 2217:
case 259:
case 1746:
case 1071:
case 2574:
case 468:
case 281:
case 2763:
case 3611:
case 1426:
case 661:
case 4090:
case 1373:
case 2767:
case 1718:
case 241:
case 607:
case 3746:
case 3071:
case 539:
case 2095:
case 2111:
case 4061:
case 1611:
case 3377:
case 3265:
case 3940:
case 3982:
case 875:
case 1715:
case 2587:
case 1831:
case 3401:
case 313:
case 640:
case 3689:
case 1384:
case 1259:
case 1447:
case 2994:
case 3723:
case 2054:
case 310:
case 3622:
case 297:
case 1551:
case 324:
case 311:
case 917:
case 879:
case 1300:
case 3411:
case 2462:
case 641:
case 1330:
case 85:
case 448:
case 2094:
case 1643:
case 697:
case 3889:
case 2143:
case 2520:
case 3822:
case 3264:
case 1714:
case 1738:
case 2055:
case 2131:
case 1166:
case 1708:
case 1489:
case 979:
case 546:
case 817:
case 6:
case 280:
case 3714:
case 2237:
case 1822:
case 3166:
case 3631:
case 3422:
case 3708:
case 1647:
case 3385:
case 3300:
case 488:
case 261:
case 2575:
case 3560:
case 111:
case 3811:
case 3626:
case 659:
case 3388:
case 3591:
case 366:
case 2351:
case 3812:
case 2584:
case 2861:
case 1836:
case 1081:
case 2890:
case 3436:
case 1412:
case 467:
case 2057:
case 2997:
case 1387:
case 3602:
case 1150:
case 674:
case 1972:
case 312:
case 3076:
case 3741:
case 2764:
case 3374:
case 806:
case 3733:
case 642:
case 2179:
case 1616:
case 2573:
case 3648:
case 2102:
case 262:
case 2242:
case 1019:
case 1602:
case 112:
case 2214:
case 682:
case 787:
case 1733:
case 1374:
case 1421:
case 1909:
case 1648:
case 2208:
case 854:
case 139:
case 401:
case 493:
case 216:
case 2993:
case 2053:
case 3724:
case 2490:
case 1812:
case 3556:
case 2461:
case 490:
case 906:
case 1436:
case 2205:
case 3387:
case 1592:
case 3816:
case 3981:
case 767:
case 3728:
case 2215:
case 1770:
case 698:
case 2227:
case 2450:
case 2759:
case 282:
case 3596:
case 1802:
case 400:
case 1375:
case 1552:
case 662:
case 3725:
case 3717:
case 1976:
case 1845:
case 346:
case 3072:
case 1039:
case 2204:
case 1644:
case 3349:
case 3445:
case 2144:
case 3263:
case 135:
case 3636:
case 3161:
case 2112:
case 1378:
case 616:
case 2690:
case 2768:
case 1717:
case 3267:
case 487:
case 1072:
case 2106:
case 146:
case 3845:
case 1445:
case 896:
case 2136:
case 2661:
case 3612:
case 3378:
case 1161:
case 335:
case 1879:
case 818:
case 2391:
case 1816:
case 511:
case 2530:
case 3848:
case 434:
case 2097:
case 701:
case 793:
case 2121:
case 2360:
case 2223:
case 274:
case 2500:
case 3793:
case 3545:
case 3286:
case 2156:
case 2924:
case 2028:
case 333:
case 1656:
case 104:
case 3999:
case 356:
case 2610:
case 330:
case 1797:
case 1271:
case 1173:
case 2673:
case 3548:
case 3496:
case 1579:
case 2888:
case 3532:
case 2017:
case 532:
case 1068:
case 3852:
case 519:
case 378:
case 1896:
case 2907:
case 4020:
case 3362:
case 1548:
case 2903:
case 627:
case 2739:
case 3173:
case 3964:
case 3068:
case 3452:
case 1532:
case 2488:
case 1852:
case 405:
case 1362:
case 2677:
case 722:
case 1502:
case 178:
case 1793:
case 1692:
case 2192:
case 3065:
case 2254:
case 1999:
case 304:
case 2322:
case 3240:
case 3282:
case 2970:
case 2152:
case 3521:
case 1652:
case 2877:
case 884:
case 3130:
case 757:
case 394:
case 837:
case 3536:
case 3064:
case 3968:
case 944:
case 2776:
case 3506:
case 495:
case 1892:
case 3366:
case 2913:
case 3856:
case 3185:
case 2343:
case 799:
case 3456:
case 71:
case 1064:
case 1968:
case 2917:
case 1492:
case 422:
case 705:
case 1366:
case 984:
case 3892:
case 1506:
case 2590:
case 2685:
case 3652:
case 1965:
case 2600:
case 331:
case 1240:
case 844:
case 2477:
case 3959:
case 1130:
case 2630:
case 2688:
case 194:
case 4087:
case 1188:
case 3099:
case 523:
case 66:
case 2353:
case 3598:
case 3446:
case 3635:
case 28:
case 431:
case 1083:
case 2467:
case 3818:
case 520:
case 1846:
case 1975:
case 1404:
case 950:
case 3701:
case 322:
case 1250:
case 3614:
case 1823:
case 3815:
case 3949:
case 2279:
case 3827:
case 673:
case 3608:
case 1074:
case 2571:
case 1747:
case 1595:
case 122:
case 3250:
case 1701:
case 778:
case 2180:
case 853:
case 2138:
case 1638:
case 885:
case 1827:
case 1949:
case 1815:
case 1731:
case 1423:
case 1920:
case 2108:
case 3747:
case 1608:
case 3978:
case 730:
case 1446:
case 2991:
case 756:
case 1804:
case 2051:
case 945:
case 1635:
case 1554:
case 1087:
case 24:
case 733:
case 2463:
case 1834:
case 1726:
case 3404:
case 3975:
case 2245:
case 2115:
case 157:
case 1627:
case 2951:
case 4065:
case 1615:
case 949:
case 1808:
case 3442:
case 3408:
case 1880:
case 1842:
case 2060:
case 3075:
case 731:
case 1987:
case 1814:
case 2397:
case 851:
case 3290:
case 4068:
case 1634:
case 1555:
case 2667:
case 3339:
case 928:
case 3974:
case 3309:
case 1604:
case 3261:
case 31:
case 399:
case 1711:
case 3555:
case 1339:
case 3618:
case 1435:
case 2206:
case 849:
case 1309:
case 1569:
case 3835:
case 2762:
case 199:
case 2236:
case 1163:
case 11:
case 828:
case 2393:
case 3558:
case 1414:
case 433:
case 951:
case 1983:
case 521:
case 3808:
case 273:
case 989:
case 430:
case 1408:
case 270:
case 2582:
case 2123:
case 3838:
case 1722:
case 3469:
case 3365:
case 2370:
case 3791:
case 960:
case 3535:
case 1359:
case 963:
case 548:
case 334:
case 1210:
case 2775:
case 3760:
case 65:
case 3698:
case 1273:
case 3508:
case 3894:
case 3368:
case 897:
case 97:
case 2671:
case 3514:
case 2840:
case 435:
case 1458:
case 2947:
case 3277:
case 959:
case 3695:
case 2901:
case 446:
case 1894:
case 2317:
case 502:
case 3171:
case 4072:
case 187:
case 1858:
case 8:
case 3458:
case 42:
case 941:
case 347:
case 2749:
case 1514:
case 1695:
case 1580:
case 1542:
case 2195:
case 3494:
case 303:
case 1365:
case 588:
case 1791:
case 1469:
case 881:
case 1855:
case 1186:
case 3455:
case 2926:
case 2154:
case 1654:
case 1698:
case 3869:
case 859:
case 2198:
case 3210:
case 766:
case 2252:
case 3140:
case 3182:
case 3200:
case 393:
case 301:
case 2324:
case 3399:
case 3495:
case 2194:
case 390:
case 2026:
case 2158:
case 2787:
case 1515:
case 217:
case 1854:
case 1364:
case 2337:
case 3669:
case 786:
case 2043:
case 1504:
case 3546:
case 53:
case 2155:
case 861:
case 2911:
case 3285:
case 2307:
case 3454:
case 1066:
case 2567:
case 943:
case 2563:
case 3854:
case 2341:
case 983:
case 72:
case 4019:
case 412:
case 2169:
case 807:
case 3364:
case 3898:
case 439:
case 1546:
case 525:
case 2047:
case 746:
case 2774:
case 3534:
case 3066:
case 1285:
case 1962:
case 2640:
case 3751:
case 2783:
case 1200:
case 1140:
case 675:
case 3895:
case 1129:
case 1230:
case 3694:
case 2922:
case 3658:
case 190:
case 961:
case 914:
case 4091:
case 3192:
case 920:
case 3070:
case 2656:
case 550:
case 1156:
case 1885:
case 1028:
case 3485:
case 3389:
case 1684:
case 2797:
case 4060:
case 3322:
case 771:
case 1830:
case 1673:
case 694:
case 1772:
case 3739:
case 2516:
case 2068:
case 1888:
case 2579:
case 3013:
case 3933:
case 1907:
case 1550:
case 3677:
case 3430:
case 1941:
case 3830:
case 3673:
case 1903:
case 2496:
case 2548:
case 1400:
case 3025:
case 3017:
case 3937:
case 1013:
case 438:
case 278:
case 2502:
case 2177:
case 1430:
case 3311:
case 473:
case 2793:
case 2286:
case 3924:
case 3156:
case 3885:
case 233:
case 74:
case 1070:
case 1389:
case 2999:
case 1485:
case 256:
case 1322:
case 2059:
case 3610:
case 726:
case 2652:
case 678:
case 1970:
case 1152:
case 1473:
case 3477:
case 2959:
case 1294:
case 3326:
case 549:
case 976:
case 2099:
case 2512:
case 3884:
case 3343:
case 3037:
case 3301:
case 3269:
case 1041:
case 3810:
case 2544:
case 1410:
case 3331:
case 2892:
case 3007:
case 3590:
case 821:
case 1347:
case 3685:
case 1255:
case 958:
case 1913:
case 1301:
case 2064:
case 1037:
case 1917:
case 2968:
case 1343:
case 1925:
case 3776:
case 3041:
case 1007:
case 2506:
case 565:
case 3033:
case 876:
case 2185:
case 3484:
case 3255:
case 1685:
case 2240:
case 1600:
case 2521:
case 1024:
case 1781:
case 770:
case 1928:
case 1196:
case 3877:
case 1630:
case 1326:
case 551:
case 773:
case 1477:
case 294:
case 2757:
case 327:
case 1351:
case 563:
case 1510:
case 62:
case 3053:
case 2836:
case 3490:
case 948:
case 1584:
case 1057:
case 2412:
case 3461:
case 3799:
case 417:
case 646:
case 3145:
case 5:
case 1997:
case 1650:
case 3102:
case 929:
case 3577:
case 3280:
case 3242:
case 4043:
case 2150:
case 775:
case 1764:
case 559:
case 2616:
case 888:
case 4031:
case 57:
case 1116:
case 2679:
case 1573:
case 3208:
case 3148:
case 2703:
case 1242:
case 2939:
case 1102:
case 2741:
case 3764:
case 848:
case 45:
case 2421:
case 2909:
case 2374:
case 2733:
case 1132:
case 4047:
case 239:
case 266:
case 1993:
case 2844:
case 3510:
case 2383:
case 1053:
case 686:
case 3890:
case 1799:
case 988:
case 3997:
case 2645:
case 1227:
case 2770:
case 717:
case 2832:
case 1215:
case 1953:
case 342:
case 1093:
case 3530:
case 2848:
case 3850:
case 2552:
case 3360:
case 3223:
case 2416:
case 2479:
case 374:
case 507:
case 3690:
case 93:
case 3585:
case 3768:
case 3106:
case 2845:
case 1144:
case 475:
case 2612:
case 2009:
case 1112:
case 235:
case 2725:
case 2190:
case 2717:
case 1585:
case 925:
case 1690:
case 2606:
case 555:
case 1106:
case 2072:
case 3204:
case 583:
case 2320:
case 4011:
case 2636:
case 3112:
case 2161:
case 75:
case 1661:
case 3953:
case 868:
case 3215:
case 1588:
case 3227:
case 83:
case 561:
case 3450:
case 1850:
case 2596:
case 2448:
case 1097:
case 2432:
case 892:
case 2621:
case 203:
case 291:
case 1370:
case 3292:
case 3328:
case 554:
case 2455:
case 3926:
case 200:
case 2359:
case 1775:
case 2210:
case 3198:
case 3429:
case 1671:
case 690:
case 3325:
case 2273:
case 3011:
case 3931:
case 247:
case 601:
case 693:
case 1829:
case 3720:
case 2508:
case 667:
case 824:
case 1429:
case 3671:
case 798:
case 1482:
case 1440:
case 3882:
case 813:
case 2514:
case 1749:
case 1011:
case 762:
case 3778:
case 2542:
case 2695:
case 1328:
case 1292:
case 442:
case 3370:
case 2791:
case 1686:
case 2535:
case 3022:
case 1154:
case 1926:
case 474:
case 3089:
case 234:
case 716:
case 3775:
case 3640:
case 2895:
case 1194:
case 2694:
case 2515:
case 1787:
case 117:
case 3922:
case 4057:
case 1158:
case 2527:
case 2854:
case 634:
case 2504:
case 708:
case 1337:
case 3047:
case 3774:
case 2655:
case 2518:
case 1031:
case 1911:
case 1303:
case 1486:
case 462:
case 2669:
case 3337:
case 1169:
case 3043:
case 600:
case 1774:
case 1333:
case 2546:
case 2498:
case 3031:
case 3911:
case 3307:
case 2454:
case 603:
case 3567:
case 691:
case 4053:
case 1640:
case 416:
case 2129:
case 201:
case 3471:
case 1629:
case 1871:
case 2399:
case 1989:
case 2230:
case 742:
case 1353:
case 326:
case 3991:
case 171:
case 1467:
case 2434:
case 1863:
case 605:
case 3586:
case 34:
case 3463:
case 564:
case 3105:
case 3357:
case 3202:
case 919:
case 4041:
case 3142:
case 3114:
case 3766:
case 1279:
case 3108:
case 2747:
case 932:
case 2074:
case 2978:
case 1180:
case 752:
case 2595:
case 2614:
case 2638:
case 1114:
case 3216:
case 2423:
case 2731:
case 2949:
case 1766:
case 3279:
case 1248:
case 657:
case 4007:
case 2920:
case 1108:
case 3571:
case 371:
case 819:
case 126:
case 2446:
case 2598:
case 38:
case 1051:
case 3467:
case 2726:
case 2818:
case 14:
case 1463:
case 1586:
case 1960:
case 832:
case 1357:
case 2615:
case 2558:
case 1115:
case 2627:
case 373:
case 1060:
case 3529:
case 2880:
case 370:
case 3582:
case 3540:
case 2838:
case 1397:
case 622:
case 4025:
case 2634:
case 2618:
case 1667:
case 4017:
case 1134:
case 1118:
case 2167:
case 3206:
case 3146:
case 1104:
case 2835:
case 3663:
case 36:
case 2711:
case 3762:
case 544:
case 338:
case 1212:
case 2049:
case 2290:
case 3118:
case 915:
case 3667:
case 2646:
case 90:
case 2569:
case 205:
case 3244:
case 2974:
case 3212:
case 2261:
case 4013:
case 2163:
case 16:
case 1762:
case 4070:
case 1393:
case 695:
case 173:
case 2480:
case 2442:
case 537:
case 1529:
case 3060:
case 2623:
case 2722:
case 1123:
case 1540:
case 170:
case 1582:
case 3397:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1749819601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,];
var gg_b = "1749819601/";

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
