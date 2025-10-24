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
case 2945:
case 3246:
case 2977:
case 201:
case 2124:
case 1411:
case 2926:
case 1658:
case 4021:
case 2610:
case 1274:
case 809:
case 2213:
case 3736:
case 2557:
case 2830:
case 3300:
case 3047:
case 2757:
case 3536:
case 1444:
case 3427:
case 84:
case 1169:
case 1879:
case 2301:
case 1676:
case 289:
case 863:
case 1627:
case 3719:
case 881:
case 2912:
case 376:
case 986:
case 356:
case 140:
case 3458:
case 3519:
case 2728:
case 2755:
case 1849:
case 3969:
case 1734:
case 3425:
case 1597:
case 391:
case 1797:
case 1534:
case 3446:
case 2884:
case 2698:
case 1003:
case 3783:
case 3674:
case 3808:
case 120:
case 2602:
case 1303:
case 3901:
case 1646:
case 2103:
case 3105:
case 1499:
case 75:
case 2590:
case 3272:
case 3896:
case 2204:
case 2566:
case 3339:
case 3442:
case 3170:
case 2766:
case 392:
case 1371:
case 2343:
case 2171:
case 224:
case 900:
case 1221:
case 4074:
case 930:
case 3316:
case 3591:
case 2423:
case 247:
case 3753:
case 1970:
case 3532:
case 1617:
case 2939:
case 3732:
case 2587:
case 2459:
case 3729:
case 882:
case 1750:
case 1905:
case 1894:
case 3488:
case 2073:
case 2114:
case 244:
case 4011:
case 3068:
case 3215:
case 2916:
case 4044:
case 3368:
case 227:
case 232:
case 3417:
case 1863:
case 2604:
case 4027:
case 1368:
case 2168:
case 2878:
case 2971:
case 1417:
case 312:
case 3863:
case 3173:
case 3341:
case 1488:
case 3041:
case 3314:
case 560:
case 3837:
case 576:
case 3688:
case 3550:
case 4058:
case 264:
case 2420:
case 1242:
case 898:
case 2206:
case 3750:
case 3905:
case 2882:
case 2856:
case 2040:
case 1532:
case 2340:
case 3617:
case 1472:
case 1732:
case 732:
case 2764:
case 3299:
case 2116:
case 1791:
case 1316:
case 1217:
case 3143:
case 958:
case 3642:
case 2941:
case 4025:
case 978:
case 388:
case 1288:
case 3221:
case 2406:
case 3615:
case 1022:
case 1442:
case 2220:
case 672:
case 652:
case 724:
case 3940:
case 1860:
case 2005:
case 3499:
case 2305:
case 3907:
case 753:
case 1272:
case 1322:
case 2122:
case 747:
case 1674:
case 671:
case 2210:
case 2833:
case 1012:
case 320:
case 1808:
case 975:
case 385:
case 1901:
case 3138:
case 1783:
case 997:
case 1583:
case 2112:
case 2498:
case 2613:
case 1892:
case 2177:
case 2867:
case 2145:
case 3474:
case 1045:
case 3849:
case 191:
case 1077:
case 1425:
case 3734:
case 3534:
case 2402:
case 4015:
case 854:
case 1446:
case 701:
case 176:
case 994:
case 1458:
case 2689:
case 156:
case 1519:
case 2903:
case 3101:
case 2298:
case 731:
case 1644:
case 3795:
case 497:
case 843:
case 877:
case 1427:
case 1075:
case 2100:
case 1347:
case 2865:
case 2175:
case 1246:
case 3324:
case 1375:
case 3411:
case 2202:
case 160:
case 3580:
case 475:
case 1225:
case 2989:
case 321:
case 1002:
case 1818:
case 2850:
case 2794:
case 2046:
case 3269:
case 2200:
case 3756:
case 3556:
case 2445:
case 1911:
case 2025:
case 2477:
case 3313:
case 45:
case 3927:
case 89:
case 3864:
case 3976:
case 1302:
case 1887:
case 1146:
case 47:
case 3578:
case 2763:
case 4070:
case 3438:
case 3778:
case 3893:
case 4005:
case 1398:
case 666:
case 3201:
case 3851:
case 2198:
case 2412:
case 1885:
case 3089:
case 1709:
case 1866:
case 1176:
case 2245:
case 1509:
case 2327:
case 341:
case 2226:
case 813:
case 3925:
case 3111:
case 2447:
case 2475:
case 1754:
case 2027:
case 1554:
case 2076:
case 2535:
case 730:
case 38:
case 97:
case 3238:
case 2358:
case 2110:
case 1310:
case 464:
case 3748:
case 2058:
case 2212:
case 278:
case 1761:
case 562:
case 3548:
case 2072:
case 3359:
case 714:
case 2614:
case 1270:
case 3567:
case 1784:
case 2239:
case 2897:
case 1020:
case 1440:
case 2549:
case 1205:
case 2749:
case 2372:
case 1673:
case 1862:
case 1172:
case 2641:
case 255:
case 2468:
case 3533:
case 3640:
case 3915:
case 2088:
case 2216:
case 275:
case 2923:
case 2017:
case 2388:
case 334:
case 3121:
case 3607:
case 2671:
case 1142:
case 1207:
case 2904:
case 699:
case 1470:
case 3565:
case 2422:
case 3765:
case 1006:
case 717:
case 786:
case 3786:
case 2880:
case 2042:
case 868:
case 1828:
case 3605:
case 3273:
case 322:
case 3323:
case 337:
case 2015:
case 294:
case 3023:
case 3917:
case 3670:
case 2639:
case 2471:
case 2731:
case 1443:
case 3115:
case 1670:
case 2531:
case 2214:
case 989:
case 379:
case 1881:
case 1988:
case 3921:
case 286:
case 2123:
case 1552:
case 2920:
case 848:
case 1565:
case 1199:
case 806:
case 1765:
case 794:
case 3240:
case 901:
case 1752:
case 3207:
case 3857:
case 3142:
case 836:
case 4038:
case 931:
case 3470:
case 2836:
case 3730:
case 2321:
case 214:
case 1121:
case 134:
case 2414:
case 431:
case 1243:
case 1607:
case 2271:
case 401:
case 1473:
case 2021:
case 2708:
case 3117:
case 2441:
case 3020:
case 755:
case 362:
case 3855:
case 2906:
case 1059:
case 3205:
case 3172:
case 3862:
case 1942:
case 489:
case 1767:
case 797:
case 3270:
case 2159:
case 58:
case 1004:
case 510:
case 3320:
case 3407:
case 2792:
case 200:
case 924:
case 3010:
case 2600:
case 1548:
case 3761:
case 383:
case 973:
case 2675:
case 230:
case 3310:
case 110:
case 534:
case 2424:
case 1111:
case 3890:
case 3754:
case 2311:
case 2596:
case 3554:
case 432:
case 2189:
case 3885:
case 402:
case 626:
case 4073:
case 825:
case 3709:
case 3176:
case 3509:
case 1144:
case 504:
case 3974:
case 3127:
case 1925:
case 2011:
case 542:
case 758:
case 2626:
case 390:
case 1893:
case 2645:
case 3398:
case 902:
case 2677:
case 944:
case 932:
case 3098:
case 1578:
case 1438:
case 1778:
case 927:
case 3125:
case 893:
case 453:
case 507:
case 1927:
case 3302:
case 3887:
case 4043:
case 3818:
case 3002:
case 608:
case 1782:
case 845:
case 646:
case 1582:
case 1556:
case 2612:
case 537:
case 3911:
case 824:
case 2628:
case 3511:
case 445:
case 3297:
case 2354:
case 366:
case 3822:
case 505:
case 2054:
case 847:
case 1436:
case 3360:
case 853:
case 3544:
case 1109:
case 2361:
case 1283:
case 2657:
case 1161:
case 1978:
case 3636:
case 138:
case 218:
case 1695:
case 2481:
case 3816:
case 925:
case 1680:
case 1558:
case 146:
case 1746:
case 1094:
case 2960:
case 3574:
case 519:
case 798:
case 2702:
case 1525:
case 3434:
case 425:
case 844:
case 1546:
case 68:
case 832:
case 2996:
case 2137:
case 3295:
case 4091:
case 1337:
case 1394:
case 610:
case 3182:
case 3156:
case 2194:
case 4053:
case 2798:
case 1483:
case 2598:
case 3178:
case 1363:
case 1841:
case 2662:
case 3961:
case 2163:
case 641:
case 2655:
case 263:
case 3653:
case 3875:
case 1967:
case 4083:
case 1824:
case 743:
case 3186:
case 3847:
case 3152:
case 2992:
case 3984:
case 3691:
case 3799:
case 2264:
case 1232:
case 889:
case 428:
case 2330:
case 1542:
case 1229:
case 642:
case 1742:
case 1379:
case 3250:
case 2179:
case 1515:
case 948:
case 2666:
case 2685:
case 906:
case 2908:
case 1933:
case 2293:
case 801:
case 1715:
case 936:
case 1491:
case 607:
case 1772:
case 1349:
case 723:
case 3092:
case 1572:
case 2384:
case 508:
case 3877:
case 1986:
case 448:
case 1049:
case 546:
case 1965:
case 2493:
case 1588:
case 1650:
case 2618:
case 3812:
case 3008:
case 3721:
case 3308:
case 215:
case 3133:
case 7:
case 22:
case 2333:
case 4095:
case 2664:
case 1133:
case 3291:
case 2108:
case 3717:
case 199:
case 223:
case 1521:
case 3650:
case 4080:
case 1008:
case 2033:
case 1812:
case 274:
case 3788:
case 570:
case 1450:
case 2693:
case 3184:
case 2418:
case 3986:
case 3952:
case 2651:
case 3965:
case 2266:
case 550:
case 2759:
case 2367:
case 1845:
case 3432:
case 715:
case 2:
case 2067:
case 3572:
case 1930:
case 2704:
case 3453:
case 243:
case 763:
case 257:
case 2523:
case 3515:
case 319:
case 662:
case 1331:
case 3715:
case 781:
case 3130:
case 3229:
case 3542:
case 3742:
case 2218:
case 1800:
case 2949:
case 2352:
case 1165:
case 1875:
case 1653:
case 2490:
case 74:
case 3079:
case 2287:
case 1599:
case 1847:
case 1186:
case 2365:
case 1152:
case 26:
case 1799:
case 298:
case 2378:
case 3948:
case 1178:
case 1868:
case 1961:
case 2228:
case 3063:
case 1295:
case 2713:
case 1954:
case 3236:
case 2257:
case 3394:
case 2382:
case 2807:
case 2356:
case 1683:
case 2513:
case 1156:
case 2056:
case 2082:
case 2840:
case 1574:
case 1280:
case 1497:
case 782:
case 3725:
case 2462:
case 2455:
case 1816:
case 3758:
case 3558:
case 4050:
case 2963:
case 3283:
case 1148:
case 338:
case 3978:
case 2348:
case 3695:
case 1744:
case 1096:
case 1360:
case 1495:
case 3776:
case 85:
case 2160:
case 1060:
case 2681:
case 2994:
case 2805:
case 3982:
case 3956:
case 2255:
case 1511:
case 1396:
case 2589:
case 1297:
case 2937:
case 1619:
case 1822:
case 2196:
case 3335:
case 2034:
case 1062:
case 3980:
case 3859:
case 676:
case 533:
case 656:
case 1482:
case 495:
case 477:
case 443:
case 3804:
case 2296:
case 3995:
case 2397:
case 3254:
case 2155:
case 1362:
case 9:
case 503:
case 2872:
case 1134:
case 46:
case 1538:
case 2817:
case 196:
case 1248:
case 384:
case 2637:
case 2981:
case 3682:
case 954:
case 4052:
case 3261:
case 1661:
case 2157:
case 454:
case 572:
case 1769:
case 706:
case 1806:
case 894:
case 1282:
case 3409:
case 1195:
case 2460:
case 1569:
case 552:
case 4033:
case 151:
case 3136:
case 2095:
case 423:
case 96:
case 1180:
case 1057:
case 4067:
case 2128:
case 4:
case 1654:
case 3823:
case 387:
case 1278:
case 3461:
case 1501:
case 2815:
case 691:
case 1028:
case 1448:
case 2350:
case 2118:
case 3707:
case 1087:
case 793:
case 3230:
case 1467:
case 692:
case 3633:
case 4048:
case 2825:
case 745:
case 3132:
case 3540:
case 3740:
case 2187:
case 1286:
case 1018:
case 1252:
case 1387:
case 1802:
case 998:
case 152:
case 1684:
case 1991:
case 2714:
case 1953:
case 169:
case 1366:
case 2166:
case 3770:
case 1090:
case 1932:
case 3284:
case 1452:
case 858:
case 1390:
case 1929:
case 3505:
case 2190:
case 725:
case 780:
case 1066:
case 878:
case 1085:
case 3686:
case 133:
case 2951:
case 4082:
case 2993:
case 1810:
case 3191:
case 2208:
case 1630:
case 1543:
case 103:
case 2679:
case 2431:
case 30:
case 2091:
case 3630:
case 918:
case 3743:
case 303:
case 10:
case 21:
case 13:
case 1665:
case 2716:
case 225:
case 3233:
case 1191:
case 3452:
case 3486:
case 713:
case 1505:
case 2722:
case 3066:
case 2249:
case 2522:
case 1705:
case 1950:
case 3085:
case 1889:
case 830:
case 3090:
case 1570:
case 2739:
case 2692:
case 3684:
case 3991:
case 4054:
case 3898:
case 3433:
case 1051:
case 982:
case 3773:
case 4009:
case 352:
case 1093:
case 2608:
case 2029:
case 2332:
case 1633:
case 2449:
case 2874:
case 1132:
case 688:
case 3802:
case 4061:
case 2985:
case 1484:
case 3150:
case 2329:
case 79:
case 516:
case 206:
case 1461:
case 3028:
case 3609:
case 939:
case 768:
case 3448:
case 3983:
case 2181:
case 3654:
case 236:
case 2696:
case 1119:
case 187:
case 116:
case 4084:
case 2319:
case 415:
case 963:
case 1454:
case 2775:
case 3057:
case 3180:
case 2747:
case 2962:
case 1934:
case 981:
case 371:
case 2700:
case 3769:
case 3357:
case 886:
case 3806:
case 2336:
case 3195:
case 1409:
case 2500:
case 1136:
case 1997:
case 2821:
case 3919:
case 228:
case 2383:
case 1656:
case 1183:
case 2512:
case 2083:
case 463:
case 611:
case 915:
case 4030:
case 3936:
case 3197:
case 1995:
case 1804:
case 50:
case 3362:
case 3134:
case 2777:
case 2526:
case 53:
case 439:
case 2745:
case 1209:
case 3456:
case 640:
case 2726:
case 165:
case 1825:
case 3874:
case 1187:
case 1846:
case 1050:
case 2265:
case 890:
case 2387:
case 2802:
case 2018:
case 2286:
case 1492:
case 1350:
case 2318:
case 3279:
case 65:
case 3032:
case 3990:
case 2467:
case 2684:
case 2991:
case 3193:
case 1231:
case 393:
case 19:
case 1408:
case 1741:
case 345:
case 4060:
case 2573:
case 2452:
case 2486:
case 966:
case 1190:
case 2465:
case 3722:
case 2066:
case 3249:
case 3522:
case 2085:
case 2267:
case 269:
case 3539:
case 749:
case 1166:
case 3631:
case 3844:
case 2090:
case 70:
case 3479:
case 2932:
case 1964:
case 1827:
case 3739:
case 1292:
case 883:
case 2543:
case 3053:
case 2743:
case 1679:
case 233:
case 31:
case 2810:
case 2233:
case 1858:
case 970:
case 380:
case 2936:
case 3235:
case 4031:
case 1397:
case 1663:
case 2362:
case 1155:
case 2355:
case 2134:
case 1162:
case 3957:
case 513:
case 1034:
case 3526:
case 1260:
case 3745:
case 3437:
case 784:
case 2055:
case 2456:
case 2482:
case 3494:
case 3545:
case 3577:
case 1097:
case 2248:
case 1888:
case 2919:
case 3383:
case 3928:
case 3512:
case 2478:
case 3083:
case 999:
case 1703:
case 2538:
case 3463:
case 1503:
case 1095:
case 3575:
case 3899:
case 787:
case 3775:
case 1724:
case 2057:
case 3435:
case 3747:
case 1157:
case 1842:
case 1080:
case 271:
case 2282:
case 3700:
case 3955:
case 2357:
case 3294:
case 1460:
case 2569:
case 3237:
case 2195:
case 3500:
case 251:
case 306:
case 565:
case 3019:
case 1815:
case 3660:
case 2609:
case 2448:
case 2328:
case 3181:
case 2654:
case 3696:
case 1635:
case 2381:
case 1181:
case 3128:
case 2119:
case 136:
case 1319:
case 216:
case 287:
case 3635:
case 148:
case 4049:
case 1660:
case 919:
case 837:
case 3842:
case 545:
case 2409:
case 1500:
case 1237:
case 1336:
case 2648:
case 3395:
case 2136:
case 435:
case 3095:
case 3496:
case 1775:
case 2454:
case 807:
case 1747:
case 1083:
case 1463:
case 631:
case 3817:
case 284:
case 1712:
case 3888:
case 3981:
case 1928:
case 2656:
case 2183:
case 3034:
case 419:
case 842:
case 804:
case 2209:
case 1745:
case 1545:
case 580:
case 525:
case 3097:
case 2804:
case 3296:
case 3397:
case 689:
case 3334:
case 3155:
case 3663:
case 834:
case 3872:
case 2686:
case 2652:
case 946:
case 313:
case 1516:
case 1716:
case 3993:
case 908:
case 2191:
case 125:
case 249:
case 1091:
case 3679:
case 3431:
case 1053:
case 3771:
case 20:
case 3166:
case 3876:
case 810:
case 627:
case 4063:
case 2770:
case 1987:
case 632:
case 3827:
case 88:
case 3964:
case 2570:
case 1631:
case 2284:
case 1739:
case 3292:
case 1811:
case 528:
case 733:
case 644:
case 2505:
case 3190:
case 1522:
case 2889:
case 1918:
case 2051:
case 145:
case 3541:
case 926:
case 1768:
case 2393:
case 4035:
case 1193:
case 3231:
case 3714:
case 2351:
case 39:
case 1151:
case 3118:
case 2813:
case 1990:
case 536:
case 2230:
case 673:
case 2364:
case 1608:
case 3825:
case 2132:
case 1874:
case 1449:
case 2540:
case 2740:
case 624:
case 3846:
case 548:
case 3466:
case 1506:
case 3218:
case 3086:
case 1706:
case 3065:
case 3386:
case 614:
case 3352:
case 2079:
case 3490:
case 3365:
case 36:
case 2824:
case 1030:
case 1992:
case 2232:
case 1264:
case 2453:
case 343:
case 987:
case 377:
case 2491:
case 357:
case 1666:
case 2515:
case 1251:
case 395:
case 2715:
case 3131:
case 3559:
case 3418:
case 3285:
case 3651:
case 1520:
case 617:
case 885:
case 1464:
case 2432:
case 3979:
case 3504:
case 2772:
case 2572:
case 487:
case 3704:
case 3487:
case 799:
case 3333:
case 3664:
case 2291:
case 2717:
case 115:
case 12:
case 323:
case 205:
case 1451:
case 1054:
case 515:
case 2576:
case 3457:
case 2035:
case 1309:
case 52:
case 3870:
case 3160:
case 3681:
case 1628:
case 2956:
case 3255:
case 888:
case 750:
case 4093:
case 2335:
case 3428:
case 1710:
case 2758:
case 3048:
case 246:
case 2680:
case 93:
case 2419:
case 766:
case 2871:
case 949:
case 238:
case 4064:
case 3348:
case 2337:
case 812:
case 2236:
case 3935:
case 3257:
case 2394:
case 3382:
case 3807:
case 3513:
case 509:
case 600:
case 3840:
case 2746:
case 43:
case 2525:
case 539:
case 2725:
case 2219:
case 3378:
case 226:
case 2948:
case 2841:
case 581:
case 1873:
case 1163:
case 2814:
case 563:
case 3078:
case 469:
case 1078:
case 2868:
case 2178:
case 4085:
case 3873:
case 4066:
case 3281:
case 3960:
case 2574:
case 1840:
case 2909:
case 1056:
case 678:
case 3702:
case 433:
case 1462:
case 595:
case 2774:
case 2954:
case 577:
case 3996:
case 2295:
case 1935:
case 543:
case 1382:
case 1257:
case 557:
case 2156:
case 1513:
case 3194:
case 3843:
case 3361:
case 5:
case 3657:
case 318:
case 1348:
case 1428:
case 3481:
case 2816:
case 270:
case 933:
case 4018:
case 3510:
case 1805:
case 472:
case 1789:
case 3354:
case 3135:
case 2480:
case 2711:
case 266:
case 2396:
case 452:
case 746:
case 1196:
case 2822:
case 2619:
case 2744:
case 3054:
case 1457:
case 523:
case 2360:
case 969:
case 3309:
case 738:
case 1160:
case 3493:
case 2521:
case 3618:
case 154:
case 3451:
case 1033:
case 2632:
case 1333:
case 315:
case 2133:
case 3687:
case 3838:
case 1:
case 1979:
case 735:
case 1067:
case 1290:
case 1704:
case 3384:
case 1559:
case 3720:
case 1651:
case 1285:
case 1367:
case 1759:
case 705:
case 4028:
case 1266:
case 694:
case 339:
case 3251:
case 3685:
case 2331:
case 3293:
case 1131:
case 143:
case 3690:
case 2031:
case 1723:
case 1523:
case 697:
case 363:
case 2653:
case 2165:
case 1352:
case 16:
case 2847:
case 1365:
case 3030:
case 2691:
case 3264:
case 655:
case 856:
case 951:
case 496:
case 1485:
case 1052:
case 381:
case 971:
case 1949:
case 2800:
case 2250:
case 3706:
case 675:
case 3869:
case 3179:
case 3668:
case 2440:
case 1549:
case 3104:
case 1222:
case 262:
case 1372:
case 704:
case 695:
case 2205:
case 558:
case 1641:
case 1834:
case 2172:
case 456:
case 991:
case 2584:
case 643:
case 734:
case 3592:
case 2270:
case 1614:
case 657:
case 2407:
case 3792:
case 1239:
case 1388:
case 314:
case 197:
case 1923:
case 2188:
case 66:
case 4075:
case 3883:
case 3271:
case 3508:
case 155:
case 4000:
case 1317:
case 3021:
case 1088:
case 1216:
case 3708:
case 4012:
case 3920:
case 654:
case 2405:
case 3616:
case 2006:
case 1959:
case 674:
case 1422:
case 1042:
case 1880:
case 2530:
case 2142:
case 2306:
case 1779:
case 707:
case 1342:
case 1106:
case 1579:
case 1895:
case 2730:
case 259:
case 3731:
case 2115:
case 3214:
case 4077:
case 4045:
case 2828:
case 3622:
case 871:
case 3819:
case 386:
case 317:
case 3123:
case 2125:
case 1325:
case 2302:
case 2146:
case 1603:
case 1346:
case 1426:
case 1537:
case 1200:
case 492:
case 1794:
case 1850:
case 3074:
case 3113:
case 1594:
case 3612:
case 2911:
case 3910:
case 2398:
case 3677:
case 2098:
case 3403:
case 4039:
case 3424:
case 1447:
case 803:
case 1913:
case 78:
case 2890:
case 3796:
case 710:
case 2554:
case 1535:
case 3902:
case 698:
case 1277:
case 2601:
case 1376:
case 1245:
case 2709:
case 2176:
case 575:
case 2509:
case 2974:
case 4068:
case 3344:
case 1327:
case 1058:
case 1212:
case 178:
case 3600:
case 741:
case 3203:
case 283:
case 1358:
case 869:
case 1647:
case 1998:
case 3624:
case 1675:
case 1203:
case 130:
case 1891:
case 2401:
case 3212:
case 988:
case 2548:
case 3376:
case 4041:
case 3277:
case 2089:
case 1760:
case 2946:
case 1560:
case 761:
case 3327:
case 83:
case 3226:
case 783:
case 3735:
case 1424:
case 3027:
case 514:
case 3913:
case 80:
case 2389:
case 4014:
case 849:
case 412:
case 1596:
case 3535:
case 2578:
case 3763:
case 912:
case 3563:
case 2438:
case 1403:
case 2778:
case 2893:
case 1910:
case 1645:
case 2201:
case 3198:
case 2851:
case 1677:
case 221:
case 3426:
case 3850:
case 3046:
case 3794:
case 2269:
case 790:
case 3200:
case 2782:
case 586:
case 2582:
case 2556:
case 488:
case 1074:
case 3594:
case 3477:
case 2313:
case 1829:
case 1374:
case 2174:
case 2013:
case 3275:
case 4071:
case 3346:
case 3102:
case 1224:
case 618:
case 940:
case 2881:
case 2605:
case 2273:
case 222:
case 2323:
case 237:
case 1622:
case 3015:
case 1123:
case 186:
case 394:
case 3268:
case 3315:
case 1471:
case 2023:
case 2917:
case 1639:
case 207:
case 2670:
case 911:
case 3439:
case 2972:
case 3779:
case 816:
case 3106:
case 3342:
case 4003:
case 1099:
case 1836:
case 2199:
case 3422:
case 2752:
case 3880:
case 3042:
case 3468:
case 2640:
case 3088:
case 3216:
case 2473:
case 985:
case 375:
case 397:
case 114:
case 3388:
case 1414:
case 234:
case 2243:
case 411:
case 2607:
case 1883:
case 3072:
case 1592:
case 2359:
case 2767:
case 3614:
case 64:
case 1159:
case 2567:
case 3120:
case 2304:
case 1668:
case 3222:
case 3549:
case 1104:
case 500:
case 3749:
case 884:
case 2942:
case 440:
case 3641:
case 645:
case 1566:
case 941:
case 1585:
case 808:
case 1766:
case 1809:
case 3005:
case 1259:
case 3070:
case 1590:
case 838:
case 3305:
case 2835:
case 3122:
case 1204:
case 1790:
case 153:
case 35:
case 37:
case 147:
case 2071:
case 3914:
case 173:
case 2143:
case 2371:
case 1606:
case 3941:
case 3848:
case 2221:
case 1922:
case 2688:
case 1459:
case 364:
case 3420:
case 921:
case 1718:
case 625:
case 826:
case 2905:
case 3307:
case 680:
case 1404:
case 3564:
case 3340:
case 2299:
case 3971:
case 132:
case 2672:
case 1373:
case 212:
case 2863:
case 2341:
case 102:
case 3593:
case 1073:
case 1114:
case 501:
case 3659:
case 2041:
case 2314:
case 3751:
case 144:
case 3551:
case 1620:
case 441:
case 2795:
case 1213:
case 1830:
case 1557:
case 2024:
case 1369:
case 211:
case 2879:
case 2169:
case 131:
case 2595:
case 2444:
case 3100:
case 2324:
case 544:
case 776:
case 3147:
case 2411:
case 3202:
case 628:
case 1124:
case 1977:
case 2780:
case 2658:
case 1926:
case 2274:
case 3581:
case 1528:
case 1912:
case 3689:
case 240:
case 1001:
case 922:
case 3410:
case 4059:
case 2676:
case 1301:
case 2101:
case 3298:
case 907:
case 407:
case 1884:
case 4023:
case 835:
case 1413:
case 3145:
case 422:
case 606:
case 1755:
case 1900:
case 2849:
case 1289:
case 2211:
case 648:
case 2797:
case 1555:
case 791:
case 3210:
case 3833:
case 220:
case 285:
case 1602:
case 2138:
case 1103:
case 2003:
case 1038:
case 3112:
case 3498:
case 3613:
case 934:
case 3038:
case 2783:
case 1112:
case 1613:
case 2312:
case 1210:
case 2808:
case 1833:
case 2012:
case 2258:
case 668:
case 2901:
case 3338:
case 3900:
case 785:
case 2045:
case 3762:
case 291:
case 2077:
case 1402:
case 3562:
case 2446:
case 3555:
case 2326:
case 899:
case 2892:
case 3884:
case 459:
case 1867:
case 2345:
case 479:
case 2276:
case 1298:
case 959:
case 2644:
case 1581:
case 564:
case 2719:
case 3912:
case 276:
case 2611:
case 256:
case 2000:
case 2347:
case 1865:
case 1175:
case 3977:
case 301:
case 3124:
case 1202:
case 1886:
case 1147:
case 1852:
case 3926:
case 3610:
case 3213:
case 3830:
case 2047:
case 2536:
case 3757:
case 3369:
case 1100:
case 2075:
case 331:
case 2427:
case 1659:
case 1593:
case 3073:
case 302:
case 1751:
case 344:
case 2068:
case 1551:
case 990:
case 1793:
case 3916:
case 1604:
case 1878:
case 3223:
case 327:
case 3373:
case 2417:
case 1971:
case 1564:
case 2532:
case 3404:
case 1340:
case 3939:
case 2732:
case 3459:
case 2621:
case 3922:
case 613:
case 461:
case 2107:
case 2242:
case 1040:
case 1882:
case 1856:
case 1206:
case 292:
case 866:
case 3606:
case 3343:
case 3968:
case 1848:
case 2288:
case 2699:
case 1116:
case 15:
case 2316:
case 2591:
case 3423:
case 3043:
case 2753:
case 1070:
case 3590:
case 1623:
case 69:
case 3790:
case 1122:
case 2896:
case 2022:
case 1406:
case 3585:
case 490:
case 1139:
case 2442:
case 1220:
case 788:
case 1370:
case 3785:
case 870:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761314401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,];
var gg_b = "1761314401/";

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
