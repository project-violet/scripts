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
case 3585:
case 3707:
case 2057:
case 534:
case 2410:
case 1794:
case 3573:
case 2650:
case 3885:
case 697:
case 2286:
case 1685:
case 3925:
case 2703:
case 2593:
case 3091:
case 2577:
case 947:
case 2965:
case 1673:
case 2489:
case 1383:
case 3544:
case 2294:
case 1359:
case 3947:
case 1786:
case 2453:
case 2143:
case 2613:
case 862:
case 2088:
case 3844:
case 1747:
case 2930:
case 629:
case 909:
case 1470:
case 4014:
case 3457:
case 416:
case 2566:
case 3471:
case 1011:
case 3526:
case 2082:
case 729:
case 3274:
case 308:
case 1273:
case 588:
case 1022:
case 135:
case 3630:
case 1631:
case 1285:
case 1166:
case 512:
case 3113:
case 1297:
case 2917:
case 816:
case 2040:
case 2376:
case 2250:
case 751:
case 462:
case 1713:
case 2033:
case 975:
case 3531:
case 896:
case 1543:
case 781:
case 3384:
case 3440:
case 2323:
case 3665:
case 610:
case 1338:
case 769:
case 2797:
case 4077:
case 4051:
case 3433:
case 1468:
case 4093:
case 2807:
case 1244:
case 1305:
case 1054:
case 1316:
case 13:
case 3217:
case 248:
case 1226:
case 690:
case 1951:
case 526:
case 1977:
case 2104:
case 3950:
case 97:
case 3793:
case 953:
case 1574:
case 790:
case 3777:
case 983:
case 2001:
case 2694:
case 2213:
case 1865:
case 986:
case 1432:
case 1508:
case 3602:
case 1808:
case 3556:
case 1535:
case 1219:
case 1362:
case 159:
case 1329:
case 3979:
case 2172:
case 3333:
case 1341:
case 3484:
case 1792:
case 1502:
case 2423:
case 865:
case 1802:
case 3635:
case 1368:
case 3992:
case 2199:
case 1405:
case 369:
case 2849:
case 893:
case 220:
case 3023:
case 1039:
case 2084:
case 3955:
case 2719:
case 1560:
case 3736:
case 2521:
case 1860:
case 1755:
case 194:
case 2298:
case 2181:
case 1642:
case 351:
case 3278:
case 3842:
case 1661:
case 2780:
case 608:
case 2620:
case 425:
case 3496:
case 404:
case 2292:
case 145:
case 1912:
case 86:
case 1648:
case 708:
case 3542:
case 114:
case 825:
case 1256:
case 1921:
case 3371:
case 3681:
case 2836:
case 329:
case 2761:
case 2518:
case 3819:
case 3721:
case 2536:
case 413:
case 284:
case 1720:
case 3208:
case 271:
case 103:
case 3749:
case 2209:
case 2353:
case 1619:
case 1459:
case 563:
case 227:
case 2742:
case 2160:
case 3202:
case 2391:
case 1475:
case 441:
case 1599:
case 1872:
case 972:
case 1464:
case 121:
case 1058:
case 1572:
case 968:
case 2756:
case 595:
case 2102:
case 2908:
case 3909:
case 3260:
case 2389:
case 3015:
case 1052:
case 1242:
case 544:
case 2310:
case 3382:
case 2493:
case 1722:
case 2254:
case 266:
case 1372:
case 2451:
case 3588:
case 2589:
case 2611:
case 2477:
case 1682:
case 1:
case 3497:
case 3882:
case 2740:
case 625:
case 2162:
case 3200:
case 182:
case 1137:
case 152:
case 2941:
case 1769:
case 1404:
case 725:
case 3582:
case 2466:
case 2085:
case 234:
case 2336:
case 3426:
case 2073:
case 2690:
case 1754:
case 1657:
case 2553:
case 3093:
case 90:
case 3154:
case 3380:
case 72:
case 3229:
case 3077:
case 1240:
case 2701:
case 2771:
case 2757:
case 1288:
case 3361:
case 1360:
case 911:
case 964:
case 1153:
case 1601:
case 665:
case 2349:
case 3600:
case 3431:
case 4053:
case 1800:
case 3753:
case 3990:
case 2170:
case 991:
case 226:
case 3791:
case 3342:
case 212:
case 76:
case 3629:
case 2628:
case 1862:
case 808:
case 943:
case 3641:
case 258:
case 1989:
case 2934:
case 1110:
case 66:
case 1257:
case 3270:
case 288:
case 1271:
case 3356:
case 1335:
case 3668:
case 3789:
case 2669:
case 2837:
case 316:
case 1562:
case 2622:
case 2407:
case 1529:
case 979:
case 1541:
case 1910:
case 176:
case 693:
case 2031:
case 396:
case 1568:
case 3710:
case 3833:
case 1816:
case 3584:
case 796:
case 3632:
case 3863:
case 1402:
case 2307:
case 1805:
case 173:
case 1505:
case 1516:
case 15:
case 2823:
case 1787:
case 1020:
case 2639:
case 1365:
case 3638:
case 716:
case 3303:
case 3924:
case 1374:
case 2042:
case 1435:
case 616:
case 2252:
case 1724:
case 3146:
case 1663:
case 2567:
case 946:
case 2975:
case 3456:
case 429:
case 3896:
case 1915:
case 2295:
case 223:
case 2287:
case 185:
case 538:
case 3152:
case 3442:
case 3596:
case 3845:
case 2246:
case 722:
case 4006:
case 1752:
case 417:
case 2576:
case 1645:
case 1115:
case 1460:
case 731:
case 107:
case 2224:
case 810:
case 2159:
case 1330:
case 3264:
case 3331:
case 631:
case 341:
case 3952:
case 2449:
case 3275:
case 1696:
case 2876:
case 1343:
case 2421:
case 869:
case 3344:
case 1098:
case 2652:
case 3480:
case 2815:
case 3216:
case 1317:
case 817:
case 1284:
case 3238:
case 1176:
case 410:
case 2506:
case 3419:
case 2418:
case 3776:
case 897:
case 1227:
case 490:
case 2436:
case 3664:
case 3018:
case 571:
case 2905:
case 2019:
case 2784:
case 304:
case 584:
case 3675:
case 1304:
case 3373:
case 3036:
case 2763:
case 1478:
case 1564:
case 2105:
case 2727:
case 678:
case 1967:
case 1575:
case 2646:
case 527:
case 21:
case 2695:
case 1123:
case 1875:
case 3139:
case 778:
case 2377:
case 1864:
case 2687:
case 662:
case 3773:
case 3807:
case 1594:
case 1469:
case 3797:
case 1894:
case 2384:
case 1339:
case 2665:
case 3323:
case 1973:
case 531:
case 434:
case 1525:
case 522:
case 3213:
case 767:
case 1266:
case 1185:
case 3694:
case 3001:
case 2751:
case 2793:
case 1422:
case 1607:
case 4073:
case 638:
case 1825:
case 2950:
case 2643:
case 2113:
case 1944:
case 2401:
case 2630:
case 1586:
case 812:
case 1847:
case 2345:
case 516:
case 1126:
case 208:
case 3117:
case 1293:
case 720:
case 2531:
case 1614:
case 2831:
case 900:
case 3686:
case 596:
case 3376:
case 892:
case 1277:
case 3250:
case 1207:
case 2986:
case 1490:
case 2089:
case 2714:
case 907:
case 3453:
case 1666:
case 3143:
case 2544:
case 3130:
case 3294:
case 684:
case 2186:
case 102:
case 1743:
case 3082:
case 3731:
case 985:
case 1730:
case 2010:
case 3225:
case 2457:
case 955:
case 784:
case 3566:
case 771:
case 488:
case 654:
case 3930:
case 3174:
case 2885:
case 1103:
case 3410:
case 1651:
case 1677:
case 4003:
case 133:
case 426:
case 2707:
case 3057:
case 1346:
case 760:
case 1214:
case 98:
case 1324:
case 2488:
case 2604:
case 2091:
case 3551:
case 1550:
case 3577:
case 3489:
case 2243:
case 1774:
case 3851:
case 973:
case 2925:
case 3593:
case 2194:
case 2230:
case 1765:
case 699:
case 179:
case 3908:
case 3102:
case 150:
case 2015:
case 3389:
case 2909:
case 217:
case 2006:
case 3679:
case 52:
case 2678:
case 1424:
case 976:
case 1059:
case 1708:
case 1249:
case 895:
case 180:
case 3220:
case 3310:
case 360:
case 143:
case 1311:
case 3108:
case 1487:
case 1702:
case 4056:
case 136:
case 319:
case 3698:
case 844:
case 1446:
case 371:
case 1961:
case 3748:
case 1555:
case 2819:
case 1760:
case 2681:
case 2235:
case 1948:
case 1142:
case 229:
case 191:
case 1452:
case 2357:
case 4042:
case 1855:
case 3160:
case 1161:
case 2202:
case 863:
case 2880:
case 111:
case 3512:
case 1064:
case 2580:
case 1618:
case 401:
case 3353:
case 4048:
case 2299:
case 1354:
case 2548:
case 3298:
case 593:
case 251:
case 4080:
case 1520:
case 801:
case 2023:
case 3476:
case 320:
case 1820:
case 2561:
case 2718:
case 3719:
case 463:
case 281:
case 49:
case 2301:
case 3981:
case 513:
case 1119:
case 2542:
case 3620:
case 2496:
case 4019:
case 1621:
case 3780:
case 2712:
case 3999:
case 124:
case 2998:
case 2192:
case 3467:
case 444:
case 1809:
case 982:
case 415:
case 3045:
case 338:
case 290:
case 3255:
case 1509:
case 952:
case 2427:
case 2602:
case 1236:
case 367:
case 2179:
case 2198:
case 2992:
case 1369:
case 187:
case 269:
case 1778:
case 565:
case 1439:
case 3609:
case 3423:
case 2340:
case 541:
case 998:
case 157:
case 1328:
case 2333:
case 2014:
case 977:
case 1822:
case 2668:
case 1734:
case 3669:
case 216:
case 3837:
case 1425:
case 388:
case 2270:
case 2641:
case 1988:
case 358:
case 932:
case 2403:
case 1522:
case 2629:
case 601:
case 296:
case 1828:
case 2710:
case 2662:
case 1253:
case 2840:
case 921:
case 1043:
case 3290:
case 168:
case 701:
case 1188:
case 1291:
case 1982:
case 3622:
case 1528:
case 4088:
case 1869:
case 137:
case 392:
case 2533:
case 1637:
case 1554:
case 3349:
case 231:
case 1320:
case 2190:
case 1289:
case 3771:
case 1854:
case 1770:
case 4071:
case 3654:
case 2791:
case 3414:
case 2342:
case 1447:
case 1157:
case 3170:
case 1065:
case 2990:
case 3211:
case 2801:
case 903:
case 222:
case 1486:
case 128:
case 2857:
case 3073:
case 1691:
case 1004:
case 3336:
case 448:
case 3100:
case 334:
case 2262:
case 1101:
case 3318:
case 615:
case 945:
case 1653:
case 961:
case 914:
case 3466:
case 3853:
case 3701:
case 2051:
case 2229:
case 3228:
case 2268:
case 2444:
case 695:
case 3900:
case 2380:
case 994:
case 2093:
case 1890:
case 3891:
case 1762:
case 2588:
case 1610:
case 1140:
case 3589:
case 3611:
case 1450:
case 2922:
case 4040:
case 262:
case 3129:
case 2169:
case 366:
case 94:
case 3044:
case 278:
case 763:
case 2737:
case 1017:
case 3493:
case 61:
case 3510:
case 1511:
case 1689:
case 1768:
case 989:
case 2473:
case 1940:
case 79:
case 3929:
case 1933:
case 2200:
case 2969:
case 1741:
case 3733:
case 2066:
case 2497:
case 1729:
case 970:
case 2882:
case 871:
case 4027:
case 2683:
case 3763:
case 2036:
case 3624:
case 1716:
case 1127:
case 1984:
case 1705:
case 884:
case 2373:
case 3938:
case 3132:
case 153:
case 39:
case 854:
case 2675:
case 2397:
case 1738:
case 2385:
case 3019:
case 204:
case 3687:
case 4084:
case 1524:
case 1276:
case 3138:
case 766:
case 3351:
case 3932:
case 1927:
case 3377:
case 1184:
case 2139:
case 3646:
case 31:
case 1163:
case 93:
case 3105:
case 666:
case 3080:
case 3727:
case 4063:
case 1732:
case 1498:
case 1824:
case 1858:
case 3796:
case 3515:
case 3239:
case 1945:
case 2238:
case 175:
case 3815:
case 517:
case 395:
case 3745:
case 1099:
case 2205:
case 438:
case 4045:
case 3436:
case 1852:
case 1615:
case 2326:
case 1455:
case 467:
case 1267:
case 3366:
case 1313:
case 597:
case 2776:
case 3418:
case 419:
case 2706:
case 3056:
case 3246:
case 109:
case 626:
case 3314:
case 2442:
case 2715:
case 460:
case 3287:
case 838:
case 2896:
case 726:
case 1759:
case 3295:
case 323:
case 1008:
case 3421:
case 2448:
case 3159:
case 2331:
case 241:
case 2952:
case 2158:
case 510:
case 3449:
case 2283:
case 3224:
case 2946:
case 3823:
case 581:
case 792:
case 2049:
case 301:
case 3258:
case 1394:
case 574:
case 820:
case 2124:
case 3307:
case 692:
case 3183:
case 147:
case 2863:
case 293:
case 2146:
case 688:
case 712:
case 3975:
case 2456:
case 3964:
case 758:
case 3042:
case 2605:
case 3252:
case 612:
case 471:
case 2303:
case 2187:
case 3639:
case 213:
case 2527:
case 2638:
case 1714:
case 3626:
case 2034:
case 3817:
case 1844:
case 8:
case 1986:
case 3747:
case 2131:
case 2358:
case 1544:
case 530:
case 3359:
case 1947:
case 3786:
case 3517:
case 2666:
case 3011:
case 603:
case 852:
case 1186:
case 2743:
case 703:
case 3644:
case 3114:
case 306:
case 2931:
case 2352:
case 1457:
case 586:
case 2513:
case 1147:
case 1617:
case 439:
case 882:
case 3794:
case 3504:
case 1897:
case 2411:
case 1482:
case 2387:
case 3907:
case 2103:
case 528:
case 246:
case 1994:
case 677:
case 2346:
case 1707:
case 732:
case 1604:
case 721:
case 3673:
case 2903:
case 3725:
case 2765:
case 1194:
case 1230:
case 3231:
case 4094:
case 1243:
case 3244:
case 3468:
case 2594:
case 2985:
case 64:
case 1363:
case 2997:
case 1217:
case 3441:
case 2339:
case 3338:
case 3151:
case 2973:
case 3603:
case 3429:
case 1674:
case 2428:
case 1433:
case 1777:
case 2000:
case 99:
case 1751:
case 659:
case 3462:
case 2197:
case 3993:
case 2173:
case 759:
case 1327:
case 1950:
case 2607:
case 1503:
case 689:
case 1630:
case 2944:
case 335:
case 645:
case 3631:
case 661:
case 944:
case 2547:
case 482:
case 839:
case 915:
case 3297:
case 452:
case 108:
case 714:
case 3273:
case 418:
case 3022:
case 3530:
case 3069:
case 2454:
case 568:
case 995:
case 1913:
case 537:
case 2293:
case 2926:
case 2251:
case 2041:
case 1766:
case 572:
case 1831:
case 4:
case 873:
case 3860:
case 20:
case 2016:
case 547:
case 1548:
case 1299:
case 85:
case 3755:
case 2005:
case 2919:
case 3642:
case 181:
case 1561:
case 3560:
case 3039:
case 174:
case 1496:
case 934:
case 2621:
case 3118:
case 345:
case 3648:
case 3300:
case 2649:
case 4055:
case 1842:
case 1155:
case 2781:
case 1445:
case 2032:
case 855:
case 1556:
case 4092:
case 3535:
case 224:
case 3362:
case 370:
case 2236:
case 1179:
case 190:
case 3508:
case 885:
case 3432:
case 2799:
case 2509:
case 3416:
case 966:
case 63:
case 3802:
case 3779:
case 3368:
case 1198:
case 1635:
case 3405:
case 169:
case 3280:
case 1979:
case 400:
case 257:
case 1484:
case 1608:
case 807:
case 3792:
case 1006:
case 3899:
case 800:
case 1388:
case 407:
case 3261:
case 2735:
case 992:
case 1260:
case 1909:
case 1015:
case 3334:
case 280:
case 3475:
case 2059:
case 3709:
case 3599:
case 3248:
case 2249:
case 2708:
case 642:
case 332:
case 2495:
case 912:
case 2311:
case 455:
case 2446:
case 3052:
case 3878:
case 1721:
case 1819:
case 3720:
case 706:
case 926:
case 3370:
case 3046:
case 57:
case 2948:
case 2142:
case 2612:
case 1235:
case 1519:
case 291:
case 2452:
case 606:
case 3024:
case 48:
case 2636:
case 2083:
case 1202:
case 211:
case 2458:
case 3619:
case 2148:
case 2942:
case 2618:
case 2064:
case 3459:
case 2237:
case 546:
case 1426:
case 1871:
case 842:
case 2355:
case 3754:
case 2004:
case 3570:
case 2653:
case 1557:
case 1571:
case 2413:
case 1954:
case 533:
case 1229:
case 2590:
case 1077:
case 3050:
case 2700:
case 1051:
case 1670:
case 3671:
case 4054:
case 3417:
case 1444:
case 2901:
case 1268:
case 3381:
case 2133:
case 1128:
case 1922:
case 3372:
case 162:
case 398:
case 4028:
case 2762:
case 3682:
case 2450:
case 3534:
case 2017:
case 1737:
case 3399:
case 3137:
case 2933:
case 352:
case 3378:
case 3404:
case 3688:
case 318:
case 967:
case 2689:
case 2768:
case 435:
case 3728:
case 1882:
case 806:
case 3201:
case 2741:
case 3257:
case 1270:
case 2425:
case 919:
case 835:
case 3271:
case 1789:
case 2734:
case 1014:
case 3335:
case 339:
case 3086:
case 960:
case 3862:
case 3474:
case 2988:
case 1641:
case 1111:
case 749:
case 2309:
case 3841:
case 65:
case 196:
case 3829:
case 673:
case 2494:
case 1833:
case 1662:
case 2030:
case 2828:
case 2569:
case 3529:
case 75:
case 1533:
case 237:
case 3910:
case 773:
case 3189:
case 3541:
case 1540:
case 3302:
case 2982:
case 376:
case 1911:
case 2971:
case 83:
case 3601:
case 607:
case 2854:
case 3191:
case 3288:
case 1361:
case 1190:
case 2289:
case 1234:
case 2171:
case 954:
case 3025:
case 1791:
case 655:
case 3500:
case 3790:
case 1801:
case 3800:
case 2486:
case 1753:
case 122:
case 755:
case 2065:
case 2210:
case 442:
case 477:
case 1958:
case 1706:
case 4052:
case 1596:
case 859:
case 870:
case 2676:
case 505:
case 1545:
case 3906:
case 2386:
case 3330:
case 1264:
case 165:
case 84:
case 141:
case 2420:
case 3343:
case 1275:
case 421:
case 557:
case 4058:
case 1461:
case 2002:
case 3645:
case 3115:
case 307:
case 373:
case 3505:
case 2394:
case 2667:
case 1021:
case 1563:
case 1884:
case 3838:
case 1632:
case 38:
case 1863:
case 2060:
case 3816:
case 676:
case 3627:
case 3402:
case 1987:
case 247:
case 2206:
case 4046:
case 1605:
case 3663:
case 3724:
case 1456:
case 1827:
case 2409:
case 2764:
case 739:
case 1195:
case 4087:
case 2775:
case 2705:
case 2595:
case 2984:
case 1939:
case 3304:
case 2127:
case 3245:
case 1373:
case 3923:
case 948:
case 3478:
case 1018:
case 125:
case 1664:
case 718:
case 104:
case 2963:
case 283:
case 3167:
case 752:
case 3875:
case 564:
case 698:
case 511:
case 6:
case 2350:
case 1139:
case 1767:
case 3883:
case 3564:
case 3575:
case 3284:
case 3176:
case 2945:
case 2858:
case 3859:
case 3481:
case 44:
case 550:
case 2558:
case 3559:
case 2099:
case 3317:
case 2615:
case 489:
case 832:
case 1419:
case 1659:
case 2552:
case 1776:
case 1814:
case 3586:
case 486:
case 2273:
case 539:
case 2166:
case 456:
case 1917:
case 2297:
case 3944:
case 2631:
case 2400:
case 1514:
case 1033:
case 2830:
case 3029:
case 1686:
case 3926:
case 3251:
case 3277:
case 1250:
case 3041:
case 1647:
case 1117:
case 2543:
case 60:
case 2966:
case 92:
case 2530:
case 4017:
case 3068:
case 3144:
case 3614:
case 1507:
case 2603:
case 2429:
case 657:
case 3339:
case 1904:
case 2338:
case 3973:
case 1323:
case 1625:
case 23:
case 2316:
case 757:
case 1773:
case 2244:
case 3704:
case 3469:
case 2305:
case 3422:
case 428:
case 3607:
case 2574:
case 4004:
case 2332:
case 2226:
case 2977:
case 705:
case 3197:
case 1367:
case 2993:
case 1213:
case 2865:
case 904:
case 3000:
case 605:
case 2874:
case 2462:
case 1001:
case 2804:
case 1247:
case 3346:
case 3214:
case 1174:
case 3387:
case 4065:
case 913:
case 4074:
case 3395:
case 1410:
case 643:
case 3411:
case 333:
case 3677:
case 1650:
case 1851:
case 680:
case 1593:
case 1877:
case 1703:
case 3850:
case 780:
case 2383:
case 2725:
case 679:
case 650:
case 2090:
case 1893:
case 3550:
case 1577:
case 965:
case 1613:
case 2517:
case 1143:
case 4030:
case 664:
case 472:
case 598:
case 611:
case 2359:
case 1130:
case 5:
case 4043:
case 830:
case 1306:
case 2747:
case 2626:
case 2817:
case 1088:
case 1225:
case 552:
case 3513:
case 3931:
case 302:
case 3743:
case 582:
case 3813:
case 3612:
case 3760:
case 3452:
case 391:
case 1761:
case 3855:
case 203:
case 3961:
case 1209:
case 1748:
case 922:
case 602:
case 184:
case 1536:
case 2720:
case 2087:
case 853:
case 311:
case 2149:
case 2619:
case 3942:
case 1353:
case 3075:
case 931:
case 1415:
case 1655:
case 1391:
case 2024:
case 4060:
case 2881:
case 840:
case 3083:
case 127:
case 1406:
case 2709:
case 3059:
case 2464:
case 2872:
case 1935:
case 3598:
case 3249:
case 380:
case 1220:
case 2475:
case 3956:
case 1102:
case 3735:
case 1679:
case 2899:
case 2483:
case 1756:
case 3898:
case 3592:
case 646:
case 3879:
case 3702:
case 733:
case 3156:
case 916:
case 160:
case 3495:
case 1108:
case 3311:
case 3579:
case 2508:
case 138:
case 4078:
case 555:
case 3509:
case 2835:
case 1972:
case 1178:
case 259:
case 3218:
case 305:
case 585:
case 809:
case 3772:
case 1096:
case 2341:
case 1423:
case 4072:
case 962:
case 1609:
case 2792:
case 357:
case 1978:
case 3328:
case 2368:
case 2405:
case 3369:
case 1199:
case 2416:
case 3778:
case 24:
case 2656:
case 2802:
case 2779:
case 573:
case 120:
case 1476:
case 3820:
case 847:
case 1821:
case 1719:
case 2039:
case 440:
case 1849:
case 3354:
case 294:
case 3919:
case 58:
case 2755:
case 2642:
case 2918:
case 1181:
case 30:
case 1063:
case 4081:
case 2860:
case 1027:
case 1780:
case 2648:
case 245:
case 2118:
case 3980:
case 214:
case 261:
case 3119:
case 1620:
case 2191:
case 3289:
case 1771:
case 3554:
case 2430:
case 1349:
case 3957:
case 2443:
case 1970:
case 3971:
case 2153:
case 709:
case 1211:
case 1003:
case 2800:
case 3486:
case 609:
case 1414:
case 4070:
case 2790:
case 446:
case 929:
case 1170:
case 3182:
case 2308:
case 158:
case 2640:
case 997:
case 2465:
case 3309:
case 2086:
case 1537:
case 2862:
case 2474:
case 3822:
case 1669:
case 2047:
case 2271:
case 368:
case 2910:
case 2541:
case 1290:
case 2189:
case 1134:
case 3982:
case 276:
case 2529:
case 4034:
case 337:
case 2711:
case 1782:
case 1031:
case 3494:
case 3828:
case 747:
case 3043:
case 166:
case 1254:
case 1962:
case 969:
case 3610:
case 640:
case 330:
case 3450:
case 1477:
case 2682:
case 1141:
case 1611:
case 4029:
case 1589:
case 2937:
case 4041:
case 1129:
case 910:
case 1162:
case 356:
case 753:
case 2728:
case 1810:
case 2013:
case 1733:
case 77:
case 3811:
case 3729:
case 2688:
case 2769:
case 1510:
case 3940:
case 218:
case 3511:
case 3689:
case 653:
case 506:
case 2137:
case 386:
case 1929:
case 3379:
case 990:
case 783:
case 67:
case 2378:
case 252:
case 134:
case 1085:
case 1318:
case 3101:
case 1097:
case 4000:
case 2570:
case 3653:
case 542:
case 3413:
case 328:
case 3691:
case 3004:
case 2754:
case 833:
case 1312:
case 3901:
case 1269:
case 3890:
case 2671:
case 3590:
case 2240:
case 675:
case 981:
case 1591:
case 974:
case 2233:
case 2263:
case 880:
case 1745:
case 2559:
case 1806:
case 3099:
case 879:
case 2859:
case 1796:
case 1506:
case 1239:
case 2176:
case 375:
case 200:
case 424:
case 532:
case 3313:
case 3196:
case 1658:
case 1418:
case 2079:
case 908:
case 3852:
case 3145:
case 2227:
case 3455:
case 786:
case 1916:
case 3895:
case 2167:
case 3546:
case 3887:
case 656:
case 503:
case 2739:
case 1019:
case 3587:
case 3716:
case 1763:
case 4032:
case 37:
case 3705:
case 2055:
case 3127:
case 3984:
case 1132:
case 1938:
case 2923:
case 811:
case 2575:
case 4005:
case 864:
case 11:
case 1393:
case 1116:
case 1646:
case 1080:
case 1727:
case 2499:
case 2883:
case 3824:
case 3081:
case 1687:
case 3524:
case 1932:
case 1351:
case 2875:
case 2123:
case 3276:
case 340:
case 1307:
case 772:
case 3206:
case 637:
case 347:
case 2816:
case 2538:
case 2627:
case 672:
case 2516:
case 411:
case 1175:
case 2838:
case 4064:
case 2020:
case 1823:
case 768:
case 101:
case 1258:
case 273:
case 80:
case 4075:
case 3394:
case 1983:
case 1867:
case 2684:
case 2408:
case 545:
case 3409:
case 3764:
case 514:
case 2365:
case 3623:
case 561:
case 2663:
case 2832:
case 3783:
case 491:
case 1042:
case 249:
case 285:
case 1287:
case 3386:
case 2906:
case 570:
case 1056:
case 1246:
case 589:
case 805:
case 3035:
case 479:
case 2106:
case 1224:
case 2752:
case 3002:
case 857:
case 1876:
case 2696:
case 4059:
case 887:
case 1421:
case 480:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750179601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,];
var gg_b = "1750179601/";

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
