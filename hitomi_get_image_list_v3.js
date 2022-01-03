// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

var window = 1;
var document = 1;
var name = 1;
var location = 1;
var customElements = 1;
var history = 1;
var locationbar = 1;
var menubar = 1;
var personalbar = 1;
var scrollbars = 1;
var statusbar = 1;
var toolbar = 1;
var status = 1;
var closed = 1;
var frames = 1;
var length = 1;
var top = 1;
var opener = 1;
var parent = 1;
var frameElement = 1;
var navigator = 1;
var origin = 1;
var external = 1;
var screen = 1;
var innerWidth = 1;
var innerHeight = 1;
var scrollX = 1;
var pageXOffset = 1;
var scrollY = 1;
var pageYOffset = 1;
var visualViewport = 1;
var screenX = 1;
var screenY = 1;
var outerWidth = 1;
var outerHeight = 1;
var devicePixelRatio = 1;
var clientInformation = 1;
var screenLeft = 1;
var screenTop = 1;
var defaultStatus = 1;
var defaultstatus = 1;
var styleMedia = 1;
var onsearch = 1;
var isSecureContext = 1;
var performance = 1;
var onappinstalled = 1;
var onbeforeinstallprompt = 1;
var crypto = 1;
var indexedDB = 1;
var webkitStorageInfo = 1;
var sessionStorage = 1;
var localStorage = 1;
var onbeforexrselect = 1;
var onabort = 1;
var onblur = 1;
var oncancel = 1;
var oncanplay = 1;
var oncanplaythrough = 1;
var onchange = 1;
var onclick = 1;
var onclose = 1;
var oncontextmenu = 1;
var oncuechange = 1;
var ondblclick = 1;
var ondrag = 1;
var ondragend = 1;
var ondragenter = 1;
var ondragleave = 1;
var ondragover = 1;
var ondragstart = 1;
var ondrop = 1;
var ondurationchange = 1;
var onemptied = 1;
var onended = 1;
var onerror = 1;
var onfocus = 1;
var onformdata = 1;
var oninput = 1;
var oninvalid = 1;
var onkeydown = 1;
var onkeypress = 1;
var onkeyup = 1;
var onload = 1;
var onloadeddata = 1;
var onloadedmetadata = 1;
var onloadstart = 1;
var onmousedown = 1;
var onmouseenter = 1;
var onmouseleave = 1;
var onmousemove = 1;
var onmouseout = 1;
var onmouseover = 1;
var onmouseup = 1;
var onmousewheel = 1;
var onpause = 1;
var onplay = 1;
var onplaying = 1;
var onprogress = 1;
var onratechange = 1;
var onreset = 1;
var onresize = 1;
var onscroll = 1;
var onseeked = 1;
var onseeking = 1;
var onselect = 1;
var onstalled = 1;
var onsubmit = 1;
var onsuspend = 1;
var ontimeupdate = 1;
var ontoggle = 1;
var onvolumechange = 1;
var onwaiting = 1;
var onwebkitanimationend = 1;
var onwebkitanimationiteration = 1;
var onwebkitanimationstart = 1;
var onwebkittransitionend = 1;
var onwheel = 1;
var onauxclick = 1;
var ongotpointercapture = 1;
var onlostpointercapture = 1;
var onpointerdown = 1;
var onpointermove = 1;
var onpointerup = 1;
var onpointercancel = 1;
var onpointerover = 1;
var onpointerout = 1;
var onpointerenter = 1;
var onpointerleave = 1;
var onselectstart = 1;
var onselectionchange = 1;
var onanimationend = 1;
var onanimationiteration = 1;
var onanimationstart = 1;
var ontransitionrun = 1;
var ontransitionstart = 1;
var ontransitionend = 1;
var ontransitioncancel = 1;
var onafterprint = 1;
var onbeforeprint = 1;
var onbeforeunload = 1;
var onhashchange = 1;
var onlanguagechange = 1;
var onmessage = 1;
var onmessageerror = 1;
var onoffline = 1;
var ononline = 1;
var onpagehide = 1;
var onpageshow = 1;
var onpopstate = 1;
var onrejectionhandled = 1;
var onstorage = 1;
var onunhandledrejection = 1;
var onunload = 1;
var alert = 1;
var atob = 1;
var blur = 1;
var btoa = 1;
var cancelAnimationFrame = 1;
var cancelIdleCallback = 1;
var captureEvents = 1;
var clearInterval = 1;
var clearTimeout = 1;
var close = 1;
var confirm = 1;
var createImageBitmap = 1;
var fetch = 1;
var find = 1;
var focus = 1;
var getComputedStyle = 1;
var getSelection = 1;
var matchMedia = 1;
var moveBy = 1;
var moveTo = 1;
var open = 1;
var postMessage = 1;
var print = 1;
var prompt = 1;
var queueMicrotask = 1;
var releaseEvents = 1;
var reportError = 1;
var requestAnimationFrame = 1;
var requestIdleCallback = 1;
var resizeBy = 1;
var resizeTo = 1;
var scroll = 1;
var scrollBy = 1;
var scrollTo = 1;
var setInterval = 1;
var setTimeout = 1;
var stop = 1;
var webkitCancelAnimationFrame = 1;
var webkitRequestAnimationFrame = 1;
var chrome = 1;
var caches = 1;
var cookieStore = 1;
var ondevicemotion = 1;
var ondeviceorientation = 1;
var ondeviceorientationabsolute = 1;
var showDirectoryPicker = 1;
var showOpenFilePicker = 1;
var showSaveFilePicker = 1;
var originAgentCluster = 1;
var trustedTypes = 1;
var speechSynthesis = 1;
var onpointerrawupdate = 1;
var crossOriginIsolated = 1;
var scheduler = 1;
var openDatabase = 1;
var webkitRequestFileSystem = 1;
var webkitResolveLocalFileSystemURL = 1;
var cr = 1;
var JSCompiler_renameProperty = 1;
var ShadyCSS = 1;

var gg = { m: function(g) {
var o = 0;
switch (g) {
case 637:
case 952:
case 2700:
case 1648:
case 947:
case 1761:
case 2710:
case 2743:
case 2446:
case 98:
case 697:
case 2157:
case 484:
case 409:
case 1042:
case 3099:
case 1697:
case 419:
case 3780:
case 2309:
case 765:
case 1394:
case 3168:
case 2649:
case 2040:
case 1063:
case 242:
case 1348:
case 539:
case 1709:
case 985:
case 3824:
case 1988:
case 2161:
case 3841:
case 1967:
case 843:
case 1157:
case 3988:
case 2365:
case 3817:
case 610:
case 3738:
case 2934:
case 824:
case 3832:
case 3222:
case 2556:
case 3016:
case 3931:
case 2939:
case 810:
case 1625:
case 3252:
case 327:
case 2137:
case 705:
case 3457:
case 2228:
case 1059:
case 1105:
case 376:
case 2176:
case 3545:
case 360:
case 116:
case 567:
case 1077:
case 1218:
case 17:
case 1671:
case 1582:
case 3607:
case 2827:
case 2254:
case 2911:
case 454:
case 902:
case 1693:
case 2758:
case 1461:
case 710:
case 2502:
case 1607:
case 245:
case 3555:
case 825:
case 2730:
case 3092:
case 1875:
case 2487:
case 1863:
case 3540:
case 1234:
case 1814:
case 4081:
case 3:
case 237:
case 93:
case 3830:
case 3417:
case 2114:
case 3742:
case 1345:
case 1728:
case 770:
case 3546:
case 3603:
case 1584:
case 2462:
case 3616:
case 3298:
case 1682:
case 1851:
case 1894:
case 2159:
case 2291:
case 3764:
case 2440:
case 3734:
case 1590:
case 3379:
case 3896:
case 3983:
case 2862:
case 3321:
case 74:
case 3787:
case 1687:
case 1979:
case 1384:
case 997:
case 573:
case 148:
case 1627:
case 1250:
case 4028:
case 2942:
case 3589:
case 444:
case 4072:
case 2891:
case 3371:
case 3018:
case 1713:
case 340:
case 50:
case 735:
case 752:
case 3482:
case 3058:
case 2624:
case 1330:
case 3201:
case 1347:
case 1871:
case 3879:
case 3779:
case 2648:
case 1990:
case 2545:
case 2943:
case 2774:
case 2469:
case 3086:
case 845:
case 1771:
case 1604:
case 4035:
case 1228:
case 2283:
case 3693:
case 892:
case 4068:
case 4006:
case 846:
case 2488:
case 1529:
case 469:
case 3677:
case 2554:
case 1239:
case 549:
case 3257:
case 571:
case 114:
case 1811:
case 3500:
case 448:
case 522:
case 3577:
case 1362:
case 1542:
case 1355:
case 391:
case 930:
case 2046:
case 1397:
case 2541:
case 349:
case 890:
case 620:
case 1662:
case 1183:
case 2529:
case 3767:
case 955:
case 3934:
case 3700:
case 4047:
case 2708:
case 1314:
case 2193:
case 2482:
case 2055:
case 3611:
case 72:
case 3690:
case 4015:
case 1766:
case 475:
case 1091:
case 1049:
case 472:
case 39:
case 1370:
case 3903:
case 2836:
case 2110:
case 3130:
case 2563:
case 3774:
case 3173:
case 1806:
case 2661:
case 241:
case 488:
case 1767:
case 3847:
case 306:
case 541:
case 2257:
case 1562:
case 3009:
case 2613:
case 3517:
case 3535:
case 2866:
case 1010:
case 871:
case 2347:
case 401:
case 157:
case 2499:
case 3925:
case 2897:
case 3891:
case 4037:
case 3280:
case 2022:
case 1896:
case 1810:
case 3333:
case 1523:
case 1047:
case 3565:
case 1613:
case 970:
case 1266:
case 3592:
case 2892:
case 1770:
case 44:
case 850:
case 154:
case 2493:
case 626:
case 1956:
case 3089:
case 244:
case 659:
case 3959:
case 3844:
case 1643:
case 2093:
case 4016:
case 2904:
case 313:
case 2360:
case 2295:
case 1906:
case 3981:
case 1951:
case 1452:
case 2069:
case 862:
case 2435:
case 3212:
case 79:
case 3958:
case 2036:
case 251:
case 2673:
case 2702:
case 231:
case 3810:
case 2456:
case 4061:
case 722:
case 1428:
case 3430:
case 1959:
case 3580:
case 3129:
case 875:
case 1389:
case 326:
case 2148:
case 1113:
case 760:
case 3998:
case 1116:
case 3468:
case 940:
case 799:
case 584:
case 3035:
case 2888:
case 3599:
case 761:
case 2210:
case 1998:
case 803:
case 1012:
case 1623:
case 976:
case 152:
case 181:
case 3215:
case 1411:
case 47:
case 1642:
case 1856:
case 3137:
case 10:
case 876:
case 2736:
case 639:
case 2027:
case 809:
case 757:
case 1128:
case 1491:
case 3459:
case 625:
case 1658:
case 1469:
case 2020:
case 479:
case 2064:
case 3806:
case 1559:
case 3205:
case 1719:
case 695:
case 3566:
case 2431:
case 3034:
case 1246:
case 3190:
case 165:
case 34:
case 3232:
case 3600:
case 2986:
case 3656:
case 2091:
case 3291:
case 2932:
case 90:
case 3353:
case 3066:
case 802:
case 2436:
case 310:
case 1258:
case 1917:
case 585:
case 243:
case 415:
case 280:
case 105:
case 309:
case 3579:
case 1608:
case 126:
case 3694:
case 2845:
case 387:
case 57:
case 2639:
case 1641:
case 3906:
case 1985:
case 1427:
case 2450:
case 4043:
case 1429:
case 2885:
case 3122:
case 830:
case 3128:
case 2478:
case 2153:
case 594:
case 2124:
case 1941:
case 3801:
case 390:
case 3882:
case 1369:
case 525:
case 1322:
case 907:
case 276:
case 3131:
case 2095:
case 3407:
case 897:
case 2188:
case 2006:
case 9:
case 3213:
case 2576:
case 3818:
case 834:
case 1480:
case 949:
case 480:
case 1782:
case 2003:
case 1432:
case 1817:
case 1357:
case 158:
case 2410:
case 3054:
case 1245:
case 1672:
case 551:
case 1172:
case 2961:
case 2206:
case 1256:
case 1976:
case 515:
case 2844:
case 3075:
case 64:
case 483:
case 3502:
case 2219:
case 2089:
case 3662:
case 1340:
case 1364:
case 3651:
case 396:
case 1897:
case 1178:
case 3133:
case 1849:
case 1758:
case 1297:
case 1522:
case 1206:
case 2828:
case 160:
case 1381:
case 3120:
case 2112:
case 1524:
case 3187:
case 2780:
case 1783:
case 1162:
case 431:
case 1881:
case 1017:
case 2363:
case 2938:
case 1813:
case 2118:
case 2015:
case 3243:
case 2664:
case 743:
case 493:
case 2198:
case 1873:
case 1932:
case 3174:
case 1866:
case 1852:
case 4048:
case 1212:
case 1071:
case 2379:
case 209:
case 780:
case 3604:
case 3508:
case 3085:
case 494:
case 1141:
case 3503:
case 2598:
case 2893:
case 2383:
case 1922:
case 1877:
case 595:
case 3245:
case 1090:
case 2789:
case 2740:
case 1315:
case 893:
case 2251:
case 657:
case 1004:
case 693:
case 2812:
case 1961:
case 3158:
case 1185:
case 2583:
case 1734:
case 847:
case 1812:
case 1224:
case 1181:
case 205:
case 3357:
case 3304:
case 1438:
case 1762:
case 1169:
case 3277:
case 2530:
case 1289:
case 2356:
case 1496:
case 1748:
case 2570:
case 1647:
case 1940:
case 2014:
case 2772:
case 84:
case 2391:
case 736:
case 2142:
case 2532:
case 2544:
case 3078:
case 1506:
case 3200:
case 534:
case 1508:
case 489:
case 2402:
case 1860:
case 832:
case 1231:
case 2801:
case 1571:
case 131:
case 146:
case 3972:
case 3620:
case 3568:
case 3488:
case 364:
case 3928:
case 2626:
case 4079:
case 2595:
case 2727:
case 2756:
case 912:
case 153:
case 2506:
case 2009:
case 187:
case 1598:
case 2749:
case 3698:
case 3924:
case 2988:
case 2023:
case 3977:
case 3318:
case 840:
case 1492:
case 3661:
case 960:
case 2374:
case 1781:
case 1321:
case 3861:
case 2714:
case 3065:
case 1809:
case 3451:
case 520:
case 2308:
case 3825:
case 1920:
case 428:
case 651:
case 3848:
case 2473:
case 2248:
case 467:
case 464:
case 266:
case 689:
case 2339:
case 3986:
case 323:
case 3015:
case 2983:
case 3068:
case 1711:
case 91:
case 1965:
case 789:
case 299:
case 703:
case 4064:
case 4017:
case 482:
case 2689:
case 3041:
case 2765:
case 3067:
case 2623:
case 2616:
case 2973:
case 867:
case 3733:
case 103:
case 687:
case 3309:
case 2785:
case 1376:
case 2936:
case 1466:
case 1868:
case 487:
case 898:
case 1264:
case 873:
case 255:
case 2810:
case 1391:
case 1198:
case 2136:
case 2535:
case 2761:
case 2298:
case 3970:
case 2852:
case 2080:
case 514:
case 70:
case 1145:
case 2359:
case 3808:
case 2732:
case 3296:
case 577:
case 2798:
case 3559:
case 1354:
case 1173:
case 857:
case 2190:
case 1537:
case 3071:
case 1597:
case 1398:
case 3650:
case 2762:
case 3046:
case 1415:
case 1495:
case 3340:
case 4045:
case 1841:
case 3433:
case 1934:
case 2107:
case 2677:
case 3255:
case 2404:
case 508:
case 3630:
case 225:
case 2466:
case 2971:
case 3403:
case 1179:
case 3679:
case 468:
case 282:
case 1775:
case 3919:
case 880:
case 3186:
case 3435:
case 175:
case 348:
case 2853:
case 3169:
case 1726:
case 3453:
case 2970:
case 995:
case 2200:
case 3069:
case 14:
case 1075:
case 2910:
case 1136:
case 202:
case 2968:
case 2984:
case 3601:
case 1791:
case 2927:
case 1774:
case 305:
case 227:
case 210:
case 641:
case 4057:
case 1094:
case 169:
case 375:
case 3851:
case 2685:
case 3400:
case 3834:
case 2416:
case 296:
case 1378:
case 2916:
case 1210:
case 2028:
case 1007:
case 3029:
case 2405:
case 1013:
case 3612:
case 178:
case 2605:
case 1977:
case 2208:
case 453:
case 2384:
case 2790:
case 2244:
case 1686:
case 2192:
case 3846:
case 1008:
case 3337:
case 3982:
case 3942:
case 2121:
case 2486:
case 3247:
case 3552:
case 1723:
case 1749:
case 973:
case 40:
case 358:
case 3230:
case 1914:
case 3207:
case 3813:
case 339:
case 2186:
case 1592:
case 3647:
case 816:
case 3359:
case 3504:
case 1704:
case 438:
case 4040:
case 3915:
case 1459:
case 3765:
case 2329:
case 1089:
case 1794:
case 2414:
case 2376:
case 337:
case 41:
case 163:
case 4052:
case 2946:
case 779:
case 1665:
case 2361:
case 1465:
case 753:
case 563:
case 1422:
case 1521:
case 974:
case 1061:
case 629:
case 319:
case 3408:
case 1421:
case 1822:
case 1420:
case 223:
case 1500:
case 3490:
case 1669:
case 3467:
case 325:
case 1611:
case 1367:
case 4055:
case 540:
case 182:
case 1400:
case 1375:
case 1834:
case 3631:
case 3363:
case 2126:
case 3335:
case 1331:
case 416:
case 1112:
case 3538:
case 1649:
case 246:
case 548:
case 26:
case 2406:
case 564:
case 2935:
case 1632:
case 252:
case 3478:
case 1471:
case 2665:
case 61:
case 1292:
case 3438:
case 507:
case 966:
case 1372:
case 2990:
case 2475:
case 2807:
case 2427:
case 2337:
case 1790:
case 281:
case 1117:
case 92:
case 1854:
case 12:
case 2189:
case 3242:
case 1891:
case 2969:
case 3625:
case 1586:
case 2826:
case 975:
case 716:
case 3776:
case 3302:
case 3447:
case 2951:
case 2976:
case 1277:
case 3951:
case 3431:
case 1106:
case 1987:
case 2245:
case 1271:
case 1413:
case 2752:
case 1938:
case 899:
case 934:
case 3626:
case 1994:
case 1792:
case 269:
case 22:
case 2633:
case 1580:
case 2045:
case 1957:
case 2289:
case 3673:
case 557:
case 345:
case 3002:
case 3516:
case 1242:
case 3107:
case 1745:
case 721:
case 4046:
case 1219:
case 1100:
case 575:
case 3945:
case 257:
case 1088:
case 3424:
case 2850:
case 2373:
case 2202:
case 2878:
case 3007:
case 1510:
case 2312:
case 1784:
case 1892:
case 189:
case 2960:
case 1484:
case 1072:
case 3450:
case 2348:
case 3315:
case 1507:
case 762:
case 3916:
case 1513:
case 924:
case 981:
case 2334:
case 1531:
case 874:
case 3307:
case 1831:
case 2716:
case 1186:
case 3613:
case 3614:
case 8:
case 4026:
case 460:
case 2555:
case 2896:
case 2233:
case 2485:
case 2433:
case 1494:
case 2657:
case 3829:
case 891:
case 3077:
case 989:
case 3836:
case 3166:
case 1514:
case 1633:
case 562:
case 3938:
case 773:
case 3682:
case 1973:
case 3558:
case 3044:
case 2100:
case 3062:
case 1209:
case 3827:
case 3464:
case 925:
case 1388:
case 1361:
case 3393:
case 2523:
case 3103:
case 1918:
case 1205:
case 1325:
case 2281:
case 707:
case 1298:
case 1588:
case 758:
case 910:
case 624:
case 2759:
case 2235:
case 2331:
case 817:
case 121:
case 2527:
case 2742:
case 1434:
case 261:
case 2519:
case 2247:
case 519:
case 3576:
case 1188:
case 20:
case 2632:
case 249:
case 190:
case 2635:
case 3012:
case 239:
case 389:
case 1756:
case 1351:
case 3907:
case 1251:
case 3290:
case 1026:
case 321:
case 2174:
case 768:
case 233:
case 1585:
case 3419:
case 2351:
case 2614:
case 2686:
case 4089:
case 1903:
case 598:
case 1192:
case 1705:
case 933:
case 2940:
case 3445:
case 2646:
case 3463:
case 119:
case 236:
case 3803:
case 2837:
case 3436:
case 247:
case 1140:
case 2090:
case 2638:
case 3873:
case 2127:
case 2914:
case 3961:
case 3171:
case 669:
case 1450:
case 459:
case 674:
case 2567:
case 2824:
case 1070:
case 1541:
case 3750:
case 546:
case 1253:
case 1040:
case 3074:
case 3726:
case 3412:
case 2382:
case 1437:
case 1276:
case 1257:
case 3006:
case 3569:
case 2539:
case 967:
case 784:
case 3777:
case 2238:
case 2518:
case 3866:
case 1646:
case 3950:
case 1311:
case 566:
case 2696:
case 201:
case 3722:
case 89:
case 4066:
case 1528:
case 347:
case 593:
case 3868:
case 23:
case 1765:
case 456:
case 3739:
case 1463:
case 527:
case 3768:
case 3859:
case 1175:
case 1629:
case 1840:
case 235:
case 1610:
case 1890:
case 1660:
case 3746:
case 2063:
case 918:
case 2800:
case 2596:
case 3941:
case 2656:
case 579:
case 2666:
case 675:
case 2876:
case 1374:
case 3021:
case 683:
case 3991:
case 1736:
case 3686:
case 801:
case 1050:
case 1701:
case 1942:
case 2457:
case 827:
case 2171:
case 1925:
case 436:
case 4058:
case 3398:
case 676:
case 2858:
case 2848:
case 133:
case 2524:
case 2061:
case 980:
case 1702:
case 1430:
case 2049:
case 32:
case 3854:
case 3248:
case 4070:
case 3688:
case 3513:
case 3744:
case 55:
case 3406:
case 3037:
case 1084:
case 4075:
case 3593:
case 2652:
case 3203:
case 1835:
case 3653:
case 2783:
case 1448:
case 86:
case 3554:
case 3132:
case 3000:
case 501:
case 1828:
case 3954:
case 3993:
case 3199:
case 1931:
case 4010:
case 334:
case 1225:
case 547:
case 341:
case 636:
case 2460:
case 701:
case 748:
case 4041:
case 1252:
case 644:
case 3270:
case 1123:
case 2508:
case 3045:
case 1241:
case 320:
case 1688:
case 604:
case 2371:
case 1417:
case 1546:
case 3826:
case 2280:
case 3262:
case 978:
case 1360:
case 619:
case 2520:
case 606:
case 3081:
case 2604:
case 2678:
case 1167:
case 2216:
case 1600:
case 1328:
case 139:
case 599:
case 1392:
case 458:
case 3560:
case 1024:
case 4030:
case 2588:
case 2906:
case 3927:
case 948:
case 2060:
case 2224:
case 365:
case 877:
case 2330:
case 385:
case 922:
case 2608:
case 1018:
case 3665:
case 316:
case 67:
case 1850:
case 3918:
case 3268:
case 3484:
case 1236:
case 2744:
case 3573:
case 662:
case 3588:
case 2985:
case 2947:
case 3080:
case 601:
case 3281:
case 2083:
case 718:
case 3300:
case 3389:
case 1963:
case 692:
case 2860:
case 597:
case 2324:
case 3184:
case 2840:
case 1970:
case 16:
case 2108:
case 1477:
case 1282:
case 3465:
case 338:
case 3897:
case 1280:
case 3953:
case 1044:
case 3791:
case 1288:
case 3386:
case 2004:
case 990:
case 3672:
case 2413:
case 200:
case 1964:
case 1416:
case 2729:
case 3759:
case 2788:
case 3659:
case 2292:
case 1547:
case 2364:
case 3701:
case 3619:
case 1409:
case 96:
case 3472:
case 1005:
case 2494:
case 2679:
case 2687:
case 1893:
case 2267:
case 3036:
case 666:
case 578:
case 263:
case 2771:
case 4042:
case 2513:
case 3059:
case 3609:
case 605:
case 2463:
case 2491:
case 1981:
case 2084:
case 314:
case 1645:
case 3098:
case 301:
case 437:
case 3940:
case 2318:
case 1284:
case 2031:
case 1368:
case 900:
case 2008:
case 1138:
case 583:
case 377:
case 678:
case 2362:
case 1596:
case 3192:
case 959:
case 2010:
case 82:
case 1757:
case 638:
case 2030:
case 449:
case 151:
case 406:
case 2344:
case 1878:
case 1406:
case 3475:
case 1335:
case 1820:
case 1019:
case 2013:
case 3816:
case 3492:
case 1768:
case 2179:
case 1028:
case 2551:
case 1196:
case 1516:
case 4082:
case 1187:
case 3543:
case 3292:
case 1051:
case 3341:
case 3238:
case 3704:
case 2849:
case 2194:
case 2582:
case 2647:
case 1407:
case 3233:
case 2813:
case 318:
case 1353:
case 3497:
case 2130:
case 1594:
case 3714:
case 2385:
case 538:
case 1744:
case 2629:
case 1176:
case 2877:
case 2278:
case 931:
case 2116:
case 1486:
case 3990:
case 2591:
case 3889:
case 3741:
case 2634:
case 2546:
case 3912:
case 167:
case 3444:
case 1455:
case 3144:
case 2838:
case 733:
case 754:
case 747:
case 1848:
case 3227:
case 2561:
case 1046:
case 1444:
case 3501:
case 603:
case 1122:
case 851:
case 1778:
case 2747:
case 3193:
case 3621:
case 781:
case 1485:
case 3636:
case 1859:
case 1410:
case 183:
case 1885:
case 384:
case 2843:
case 253:
case 2590:
case 4033:
case 745:
case 221:
case 80:
case 2560:
case 616:
case 979:
case 1269:
case 2401:
case 2012:
case 720:
case 769:
case 3527:
case 950:
case 3798:
case 288:
case 2643:
case 220:
case 2908:
case 656:
case 21:
case 1316:
case 670:
case 3926:
case 1606:
case 2536:
case 1552:
case 35:
case 3515:
case 2132:
case 4073:
case 3301:
case 2149:
case 3151:
case 1750:
case 3096:
case 3890:
case 100:
case 560:
case 3127:
case 502:
case 654:
case 3410:
case 1548:
case 4071:
case 886:
case 498:
case 2418:
case 173:
case 1992:
case 2641:
case 1833:
case 2425:
case 510:
case 3663:
case 1301:
case 115:
case 555:
case 3575:
case 2234:
case 2928:
case 1751:
case 1780:
case 1268:
case 2445:
case 2873:
case 4013:
case 1081:
case 1972:
case 2979:
case 888:
case 3115:
case 3865:
case 996:
case 1273:
case 521:
case 3416:
case 569:
case 3119:
case 715:
case 1954:
case 3869:
case 2603:
case 3608:
case 1933:
case 1664:
case 1882:
case 2889:
case 397:
case 3224:
case 3272:
case 1130:
case 634:
case 2966:
case 3204:
case 939:
case 1029:
case 380:
case 820:
case 2804:
case 3895:
case 218:
case 170:
case 1505:
case 723:
case 3283:
case 1439:
case 1752:
case 3675:
case 553:
case 1324:
case 635:
case 3314:
case 43:
case 111:
case 272:
case 1414:
case 818:
case 1204:
case 3855:
case 24:
case 2572:
case 2684:
case 3273:
case 1153:
case 188:
case 3011:
case 3820:
case 3136:
case 1870:
case 991:
case 2042:
case 2343:
case 1451:
case 3708:
case 3428:
case 293:
case 1555:
case 1935:
case 3056:
case 3377:
case 2945:
case 2094:
case 2975:
case 3948:
case 3984:
case 3196:
case 2415:
case 1630:
case 491:
case 3253:
case 1509:
case 2252:
case 3602:
case 1909:
case 1327:
case 3648:
case 1479:
case 3399:
case 1096:
case 4067:
case 1861:
case 3740:
case 27:
case 3176:
case 550:
case 2357:
case 174:
case 1000:
case 4091:
case 811:
case 3561:
case 2622:
case 2423:
case 2197:
case 1601:
case 277:
case 2594:
case 794:
case 312:
case 3483:
case 267:
case 2997:
case 2438:
case 1373:
case 2146:
case 3226:
case 2204:
case 778:
case 3597:
case 2881:
case 3807:
case 2250:
case 3288:
case 2120:
case 1358:
case 3185:
case 1777:
case 4018:
case 1255:
case 285:
case 3367:
case 2088:
case 2037:
case 1440:
case 617:
case 3618:
case 2180:
case 3639:
case 1020:
case 739:
case 3087:
case 1733:
case 2680:
case 3319:
case 3553:
case 2693:
case 2169:
case 2143:
case 142:
case 1291:
case 2926:
case 3479:
case 887:
case 512:
case 1826:
case 4039:
case 1109:
case 1929:
case 2662:
case 3256:
case 3884:
case 3952:
case 3547:
case 129:
case 3491:
case 3369:
case 382:
case 1789:
case 1213:
case 3584:
case 3814:
case 954:
case 2370:
case 3511:
case 4069:
case 756:
case 1578:
case 3973:
case 523:
case 1021:
case 764:
case 2303:
case 322:
case 3100:
case 3506:
case 2606:
case 1838:
case 1286:
case 2683:
case 680:
case 2320:
case 477:
case 3043:
case 3590:
case 3118:
case 2458:
case 2043:
case 361:
case 3856:
case 1982:
case 113:
case 2501:
case 435:
case 1386:
case 724:
case 179:
case 858:
case 3760:
case 2490:
case 1905:
case 368:
case 2978:
case 2905:
case 141:
case 2133:
case 908:
case 2994:
case 2568:
case 2640:
case 524:
case 2817:
case 1200:
case 2258:
case 3755:
case 1576:
case 704:
case 101:
case 60:
case 3533:
case 2550:
case 2302:
case 2358:
case 3384:
case 3874:
case 3735:
case 623:
case 2757:
case 3860:
case 1203:
case 2745:
case 1845:
case 388:
case 2833:
case 4065:
case 1603:
case 3134:
case 3955:
case 785:
case 574:
case 1067:
case 1454:
case 3116:
case 1743:
case 1147:
case 53:
case 2421:
case 2842:
case 3320:
case 474:
case 2207:
case 3900:
case 4077:
case 1296:
case 2352:
case 790:
case 1248:
case 3717:
case 2372:
case 1054:
case 2032:
case 2336:
case 2038:
case 3696:
case 2096:
case 85:
case 855:
case 1275:
case 2346:
case 3705:
case 3541:
case 87:
case 2472:
case 2396:
case 1888:
case 1534:
case 839:
case 1034:
case 2779:
case 3831:
case 2168:
case 3671:
case 2307:
case 2497:
case 1318:
case 1302:
case 2338:
case 3783:
case 2782:
case 2794:
case 3297:
case 51:
case 4088:
case 1563:
case 4004:
case 630:
case 532:
case 1290:
case 3716:
case 2574:
case 294:
case 4001:
case 3563:
case 317:
case 3312:
case 3510:
case 4060:
case 1501:
case 212:
case 2611:
case 3189:
case 1171:
case 2899:
case 2721:
case 3605:
case 1520:
case 2839:
case 76:
case 3634:
case 2734:
case 2158:
case 2617:
case 665:
case 3932:
case 842:
case 766:
case 362:
case 485:
case 1408:
case 1144:
case 2407:
case 1457:
case 1675:
case 2767:
case 49:
case 1798:
case 4011:
case 2663:
case 394:
case 219:
case 1715:
case 3221:
case 2713:
case 104:
case 1714:
case 1462:
case 3097:
case 4008:
case 229:
case 2658:
case 965:
case 1184:
case 3480:
case 3218:
case 3811:
case 3975:
case 919:
case 2992:
case 1636:
case 2294:
case 2394:
case 1692:
case 1165:
case 1512:
case 3090:
case 366:
case 3429:
case 3278:
case 3394:
case 3229:
case 4083:
case 861:
case 462:
case 2375:
case 2746:
case 929:
case 3461:
case 1:
case 445:
case 3454:
case 1869:
case 1436:
case 3053:
case 1651:
case 4012:
case 1755:
case 2496:
case 3876:
case 3965:
case 526:
case 2054:
case 1118:
case 3095:
case 885:
case 587:
case 1446:
case 2314:
case 3949:
case 813:
case 1223:
case 2369:
case 2558:
case 719:
case 3234:
case 717:
case 713:
case 1710:
case 4063:
case 1898:
case 529:
case 2195:
case 2559:
case 2509:
case 3850:
case 1425:
case 2944:
case 870:
case 3670:
case 3183:
case 1911:
case 291:
case 383:
case 3052:
case 2880:
case 2786:
case 3887:
case 2669:
case 895:
case 2105:
case 1793:
case 2941:
case 2461:
case 823:
case 1211:
case 106:
case 331:
case 2841:
case 1199:
case 2504:
case 2537:
case 466:
case 2864:
case 953:
case 4032:
case 558:
case 511:
case 2902:
case 698:
case 2993:
case 3718:
case 3507:
case 500:
case 45:
case 671:
case 1526:
case 3241:
case 386:
case 3003:
case 2162:
case 3809:
case 2151:
case 2270:
case 3748:
case 2822:
case 3289:
case 2823:
case 1003:
case 2654:
case 420:
case 1904:
case 3179:
case 400:
case 2967:
case 240:
case 3396:
case 194:
case 2221:
case 869:
case 4084:
case 3175:
case 2489:
case 3564:
case 2345:
case 1404:
case 1796:
case 2522:
case 1086:
case 1802:
case 3345:
case 1379:
case 3549:
case 591:
case 988:
case 1538:
case 463:
case 1612:
case 586:
case 2644:
case 2150:
case 3536:
case 68:
case 492:
case 2366:
case 31:
case 3762:
case 2811:
case 3570:
case 1295:
case 3642:
case 3640:
case 3154:
case 3725:
case 663:
case 2305:
case 328:
case 2068:
case 2026:
case 727:
case 2152:
case 2300:
case 2304:
case 2900:
case 259:
case 4092:
case 2857:
case 1156:
case 4036:
case 694:
case 4087:
case 3202:
case 2503:
case 835:
case 2340:
case 2589:
case 917:
case 2803:
case 343:
case 661:
case 2430:
case 4062:
case 1333:
case 2471:
case 580:
case 3858:
case 1035:
case 1326:
case 2778:
case 1230:
case 2690:
case 3165:
case 928:
case 3606:
case 2808:
case 3372:
case 2123:
case 56:
case 3101:
case 581:
case 3114:
case 2797:
case 2448:
case 3405:
case 3349:
case 3063:
case 2099:
case 3254:
case 3635:
case 2155:
case 2851:
case 2432:
case 2578:
case 2671:
case 423:
case 150:
case 2059:
case 109:
case 278:
case 379:
case 1786:
case 185:
case 1984:
o =  0;break;
default: o = 1;
}
if (typeof localStorage !== 'object') { return 3; }
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1641179942/'
};


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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg.m(x));
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg.b + gg.s(hash)}/${hash}.${
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
    btresult.push(
      `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
    );
    stresult.push(
      `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
    );
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}
