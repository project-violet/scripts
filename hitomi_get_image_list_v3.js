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
case 684:
case 2717:
case 17:
case 4058:
case 2996:
case 2200:
case 727:
case 1598:
case 2459:
case 1767:
case 3191:
case 3381:
case 384:
case 3258:
case 2579:
case 2201:
case 1328:
case 3919:
case 3028:
case 168:
case 2898:
case 2964:
case 3132:
case 1706:
case 2376:
case 1080:
case 630:
case 3318:
case 3703:
case 1717:
case 27:
case 3076:
case 1200:
case 438:
case 2600:
case 1459:
case 940:
case 3454:
case 513:
case 1579:
case 1201:
case 2955:
case 3924:
case 377:
case 3969:
case 2425:
case 268:
case 2081:
case 128:
case 1731:
case 1018:
case 1929:
case 2914:
case 1376:
case 862:
case 2080:
case 1786:
case 2575:
case 990:
case 1982:
case 1001:
case 220:
case 160:
case 319:
case 338:
case 2455:
case 2036:
case 73:
case 1681:
case 1834:
case 2281:
case 2358:
case 3301:
case 3628:
case 1464:
case 2273:
case 3915:
case 454:
case 2618:
case 2414:
case 3300:
case 2268:
case 2000:
case 707:
case 825:
case 1575:
case 2959:
case 120:
case 2982:
case 260:
case 2333:
case 2172:
case 2681:
case 3419:
case 979:
case 208:
case 3771:
case 1402:
case 3228:
case 1925:
case 3541:
case 1358:
case 1148:
case 2218:
case 1618:
case 2673:
case 802:
case 430:
case 3493:
case 1280:
case 2668:
case 1414:
case 3783:
case 2993:
case 408:
case 3898:
case 2874:
case 3018:
case 2132:
case 2465:
case 2028:
case 821:
case 154:
case 72:
case 328:
case 1535:
case 3482:
case 2381:
case 2191:
case 3201:
case 3749:
case 703:
case 1658:
case 590:
case 1574:
case 2380:
case 460:
case 4001:
case 3200:
case 3996:
case 579:
case 1465:
case 1132:
case 3914:
case 548:
case 814:
case 861:
case 1028:
case 277:
case 3902:
case 1835:
case 473:
case 2535:
case 1381:
case 1191:
case 3236:
case 1258:
case 3955:
case 2658:
case 67:
case 300:
case 778:
case 2076:
case 1190:
case 37:
case 2703:
case 2574:
case 600:
case 2318:
case 3767:
case 1368:
case 2915:
case 3280:
case 4081:
case 3268:
case 737:
case 1770:
case 1783:
case 598:
case 373:
case 3414:
case 1540:
case 1336:
case 2424:
case 2033:
case 673:
case 1228:
case 3925:
case 3402:
case 1771:
case 2301:
case 1757:
case 3358:
case 1541:
case 320:
case 763:
case 47:
case 1058:
case 2954:
case 2841:
case 3455:
case 3534:
case 2840:
case 3575:
case 799:
case 620:
case 832:
case 400:
case 2276:
case 3464:
case 3673:
case 3218:
case 1915:
case 1839:
case 2540:
case 428:
case 2447:
case 2770:
case 1300:
case 770:
case 1424:
case 308:
case 889:
case 1033:
case 2757:
case 1469:
case 4018:
case 2771:
case 1954:
case 3333:
case 119:
case 1276:
case 3496:
case 585:
case 2119:
case 1249:
case 1124:
case 2692:
case 4044:
case 3627:
case 3589:
case 1169:
case 2736:
case 730:
case 3552:
case 2267:
case 3244:
case 2045:
case 3203:
case 22:
case 407:
case 1606:
case 510:
case 1231:
case 203:
case 986:
case 3733:
case 2991:
case 2630:
case 2701:
case 2249:
case 1119:
case 2124:
case 1357:
case 1649:
case 1736:
case 956:
case 2169:
case 777:
case 2667:
case 754:
case 333:
case 1383:
case 1147:
case 2217:
case 12:
case 1617:
case 4027:
case 1045:
case 3644:
case 1990:
case 2606:
case 3070:
case 3852:
case 547:
case 1884:
case 3083:
case 3889:
case 2230:
case 249:
case 3057:
case 1630:
case 2812:
case 3125:
case 170:
case 3027:
case 3306:
case 3948:
case 2115:
case 875:
case 2804:
case 3822:
case 518:
case 2897:
case 1686:
case 1067:
case 2031:
case 263:
case 1597:
case 3270:
case 1768:
case 1543:
case 1006:
case 738:
case 2718:
case 3846:
case 4057:
case 33:
case 2030:
case 2562:
case 3509:
case 2154:
case 3728:
case 1327:
case 63:
case 1512:
case 1781:
case 4083:
case 137:
case 3809:
case 3330:
case 1049:
case 2862:
case 1017:
case 20:
case 3776:
case 3044:
case 1843:
case 2245:
case 1897:
case 2067:
case 2165:
case 2432:
case 3670:
case 3885:
case 1031:
case 3683:
case 3522:
case 2773:
case 1303:
case 2543:
case 2006:
case 307:
case 1154:
case 2327:
case 2491:
case 3657:
case 3392:
case 3182:
case 199:
case 969:
case 423:
case 1889:
case 2733:
case 603:
case 167:
case 4006:
case 1057:
case 3630:
case 997:
case 3206:
case 1852:
case 529:
case 2196:
case 3370:
case 1448:
case 2164:
case 3617:
case 3932:
case 1805:
case 2129:
case 3045:
case 1114:
case 470:
case 1227:
case 3357:
case 40:
case 1758:
case 3119:
case 1102:
case 378:
case 2889:
case 593:
case 77:
case 463:
case 4031:
case 267:
case 2155:
case 2071:
case 649:
case 1505:
case 499:
case 678:
case 1386:
case 2852:
case 700:
case 1196:
case 3584:
case 1164:
case 1552:
case 3700:
case 2448:
case 768:
case 437:
case 1244:
case 2603:
case 2805:
case 3217:
case 4049:
case 4092:
case 36:
case 2758:
case 4017:
case 2227:
case 1472:
case 1627:
case 66:
case 1589:
case 54:
case 2102:
case 910:
case 3154:
case 2728:
case 1671:
case 107:
case 2271:
case 3030:
case 1349:
case 1392:
case 1657:
case 663:
case 699:
case 1670:
case 586:
case 363:
case 2283:
case 1522:
case 1885:
case 1317:
case 2846:
case 3303:
case 3344:
case 551:
case 3804:
case 3017:
case 637:
case 1776:
case 2306:
case 1044:
case 3897:
case 2822:
case 4086:
case 59:
case 337:
case 1809:
case 773:
case 2182:
case 2392:
case 2349:
case 3491:
case 3327:
case 2671:
case 1728:
case 207:
case 1509:
case 3781:
case 947:
case 1283:
case 2522:
case 3490:
case 2683:
case 1367:
case 760:
case 3768:
case 1270:
case 3543:
case 2317:
case 1846:
case 3245:
case 1948:
case 2044:
case 1306:
case 2776:
case 2546:
case 2331:
case 3067:
case 3686:
case 2972:
case 3862:
case 2330:
case 1125:
case 1027:
case 370:
case 2809:
case 3398:
case 2966:
case 1487:
case 464:
case 2374:
case 2518:
case 1580:
case 3160:
case 3876:
case 1743:
case 594:
case 3709:
case 2762:
case 742:
case 4040:
case 1120:
case 1712:
case 847:
case 4039:
case 2079:
case 1923:
case 2438:
case 234:
case 215:
case 2907:
case 2873:
case 855:
case 2880:
case 2994:
case 3239:
case 3640:
case 3722:
case 1966:
case 3110:
case 2743:
case 604:
case 2487:
case 2704:
case 424:
case 885:
case 1762:
case 304:
case 3111:
case 3926:
case 180:
case 1335:
case 2712:
case 3456:
case 1634:
case 3035:
case 3999:
case 3828:
case 2923:
case 250:
case 3913:
case 3074:
case 1675:
case 3639:
case 1994:
case 1868:
case 2098:
case 404:
case 624:
case 2987:
case 3426:
case 316:
case 3533:
case 2801:
case 3858:
case 2679:
case 1501:
case 3499:
case 3442:
case 2341:
case 2536:
case 2034:
case 2075:
case 3274:
case 3108:
case 882:
case 2177:
case 664:
case 2466:
case 3375:
case 3040:
case 1987:
case 1800:
case 839:
case 2836:
case 792:
case 364:
case 575:
case 311:
case 1801:
case 897:
case 1341:
case 1679:
case 2938:
case 3635:
case 976:
case 2784:
case 2407:
case 774:
case 2698:
case 3995:
case 2500:
case 3463:
case 2494:
case 1177:
case 1151:
case 1576:
case 3675:
case 1746:
case 1913:
case 3907:
case 571:
case 315:
case 2239:
case 1639:
case 3868:
case 3881:
case 3634:
case 1137:
case 1999:
case 1828:
case 1926:
case 104:
case 1111:
case 1641:
case 2709:
case 1379:
case 2528:
case 3335:
case 2240:
case 1640:
case 84:
case 458:
case 741:
case 3518:
case 3374:
case 2913:
case 1495:
case 1963:
case 3098:
case 576:
case 2035:
case 2456:
case 3923:
case 2828:
case 4075:
case 2111:
case 204:
case 2641:
case 3453:
case 1161:
case 3797:
case 975:
case 3573:
case 3704:
case 3487:
case 3743:
case 1160:
case 2413:
case 3340:
case 2752:
case 972:
case 2108:
case 450:
case 2274:
case 3341:
case 2442:
case 2499:
case 1558:
case 3679:
case 1635:
case 3034:
case 2789:
case 3536:
case 3150:
case 78:
case 111:
case 994:
case 796:
case 2705:
case 1375:
case 3987:
case 2995:
case 2478:
case 2039:
case 3784:
case 434:
case 2674:
case 4079:
case 3494:
case 1108:
case 1442:
case 415:
case 2558:
case 2635:
case 886:
case 1789:
case 3938:
case 1235:
case 3836:
case 1533:
case 2334:
case 358:
case 2041:
case 264:
case 851:
case 2375:
case 312:
case 89:
case 2040:
case 1937:
case 2212:
case 1142:
case 1604:
case 474:
case 2178:
case 2243:
case 1113:
case 1352:
case 2886:
case 2297:
case 3222:
case 3194:
case 3052:
case 3166:
case 1586:
case 3883:
case 342:
case 2988:
case 3246:
case 2545:
case 1911:
case 1126:
case 3871:
case 3857:
case 492:
case 2961:
case 3089:
case 642:
case 2734:
case 241:
case 2937:
case 2262:
case 3557:
case 1662:
case 505:
case 3450:
case 2845:
case 1178:
case 1243:
case 4009:
case 2604:
case 1204:
case 3583:
case 3740:
case 153:
case 2408:
case 1886:
case 1297:
case 3570:
case 2084:
case 283:
case 704:
case 3646:
case 1775:
case 3116:
case 2911:
case 522:
case 1734:
case 3009:
case 2156:
case 525:
case 1892:
case 2530:
case 2867:
case 1385:
case 2908:
case 2346:
case 3803:
case 3844:
case 3951:
case 15:
case 1488:
case 3304:
case 935:
case 687:
case 716:
case 2410:
case 2806:
case 1567:
case 3397:
case 3652:
case 1460:
case 3421:
case 1684:
case 1831:
case 724:
case 2411:
case 191:
case 387:
case 1309:
case 914:
case 8:
case 565:
case 1156:
case 374:
case 2892:
case 1437:
case 357:
case 645:
case 3022:
case 1531:
case 2385:
case 345:
case 2097:
case 674:
case 1346:
case 1806:
case 3046:
case 3774:
case 392:
case 3503:
case 1322:
case 711:
case 2831:
case 2798:
case 3289:
case 4052:
case 966:
case 3735:
case 1411:
case 442:
case 2461:
case 2830:
case 1592:
case 1549:
case 291:
case 2309:
case 692:
case 848:
case 2857:
case 2871:
case 341:
case 879:
case 2089:
case 641:
case 2883:
case 2870:
case 2166:
case 902:
case 561:
case 2246:
case 1921:
case 1646:
case 3243:
case 3204:
case 925:
case 2005:
case 353:
case 3163:
case 3297:
case 1451:
case 3212:
case 936:
case 653:
case 715:
case 1741:
case 3662:
case 1209:
case 1571:
case 1871:
case 346:
case 1857:
case 3910:
case 1166:
case 383:
case 2285:
case 1685:
case 1883:
case 1246:
case 2116:
case 2921:
case 521:
case 2646:
case 646:
case 1005:
case 3113:
case 3845:
case 750:
case 3352:
case 3697:
case 1222:
case 2583:
case 1384:
case 3389:
case 2571:
case 2450:
case 890:
case 2557:
case 48:
case 1735:
case 396:
case 4084:
case 3592:
case 287:
case 1544:
case 962:
case 1774:
case 3284:
case 2397:
case 2652:
case 1252:
case 589:
case 3531:
case 3867:
case 145:
case 2844:
case 2605:
case 2977:
case 38:
case 1205:
case 3530:
case 174:
case 3156:
case 3062:
case 2009:
case 1827:
case 2950:
case 1138:
case 840:
case 1312:
case 2735:
case 712:
case 187:
case 3309:
case 1527:
case 3830:
case 3461:
case 1420:
case 292:
case 1304:
case 691:
case 922:
case 1343:
case 2252:
case 1187:
case 1421:
case 3460:
case 3385:
case 3195:
case 905:
case 1803:
case 3004:
case 1977:
case 2205:
case 3506:
case 1951:
case 3043:
case 532:
case 817:
case 2827:
case 2138:
case 1950:
case 3012:
case 3909:
case 331:
case 2962:
case 819:
case 259:
case 545:
case 2237:
case 1139:
case 1904:
case 631:
case 2008:
case 1943:
case 1260:
case 2484:
case 3221:
case 2707:
case 744:
case 1351:
case 1610:
case 1140:
case 4020:
case 3985:
case 3220:
case 2661:
case 189:
case 775:
case 1350:
case 1611:
case 592:
case 1723:
case 1141:
case 4021:
case 3726:
case 1962:
case 405:
case 1237:
case 159:
case 3405:
case 2997:
case 636:
case 3848:
case 2716:
case 2904:
case 132:
case 3452:
case 587:
case 3946:
case 2260:
case 1484:
case 1688:
case 2610:
case 1210:
case 2350:
case 3572:
case 941:
case 106:
case 1661:
case 3742:
case 3799:
case 422:
case 2611:
case 3489:
case 2723:
case 1211:
case 201:
case 1135:
case 884:
case 425:
case 605:
case 3179:
case 3422:
case 2590:
case 3905:
case 3651:
case 1174:
case 3952:
case 1010:
case 2060:
case 3756:
case 114:
case 221:
case 402:
case 830:
case 2061:
case 3337:
case 3361:
case 2462:
case 1320:
case 2135:
case 4077:
case 465:
case 1412:
case 3251:
case 431:
case 3360:
case 1590:
case 3277:
case 2208:
case 3388:
case 1404:
case 4050:
case 794:
case 2984:
case 3795:
case 2010:
case 235:
case 3021:
case 1060:
case 2890:
case 362:
case 877:
case 261:
case 121:
case 996:
case 542:
case 1061:
case 3020:
case 166:
case 1572:
case 1799:
case 1742:
case 3661:
case 2220:
case 55:
case 4011:
case 414:
case 1308:
case 3484:
case 1946:
case 3688:
case 2985:
case 3794:
case 3210:
case 2763:
case 606:
case 3766:
case 265:
case 2175:
case 125:
case 2051:
case 2077:
case 3962:
case 820:
case 2909:
case 632:
case 2872:
case 2134:
case 136:
case 2620:
case 808:
case 3261:
case 4088:
case 3350:
case 3141:
case 2489:
case 1778:
case 2621:
case 2308:
case 202:
case 1221:
case 3260:
case 2946:
case 1548:
case 2452:
case 3140:
case 1763:
case 596:
case 3610:
case 4061:
case 3139:
case 2922:
case 2405:
case 1077:
case 995:
case 3904:
case 3716:
case 2848:
case 1175:
case 1051:
case 3943:
case 225:
case 131:
case 58:
case 1909:
case 1134:
case 236:
case 1050:
case 3637:
case 3912:
case 2337:
case 2989:
case 583:
case 828:
case 3061:
case 489:
case 3088:
case 2952:
case 666:
case 546:
case 621:
case 1485:
case 1251:
case 1360:
case 776:
case 3608:
case 3404:
case 945:
case 3787:
case 3443:
case 3591:
case 2179:
case 3753:
case 974:
case 3011:
case 314:
case 1756:
case 361:
case 3891:
case 2020:
case 326:
case 3738:
case 1952:
case 626:
case 2795:
case 1446:
case 3984:
case 541:
case 3890:
case 614:
case 2485:
case 122:
case 335:
case 2360:
case 3174:
case 1651:
case 105:
case 2251:
case 1310:
case 459:
case 2198:
case 3135:
case 2361:
case 1650:
case 3037:
case 2250:
case 1179:
case 800:
case 432:
case 4026:
case 494:
case 375:
case 2859:
case 1616:
case 644:
case 2087:
case 2666:
case 344:
case 1737:
case 2525:
case 675:
case 2053:
case 1825:
case 1711:
case 3554:
case 2109:
case 4013:
case 765:
case 2694:
case 3865:
case 731:
case 2788:
case 2760:
case 1207:
case 2975:
case 1559:
case 83:
case 2616:
case 3940:
case 1087:
case 1395:
case 3565:
case 1185:
case 2737:
case 702:
case 1053:
case 3941:
case 3854:
case 3626:
case 2356:
case 1882:
case 1525:
case 807:
case 3353:
case 1223:
case 934:
case 2582:
case 2825:
case 2711:
case 2623:
case 1934:
case 2038:
case 3720:
case 3197:
case 2122:
case 1694:
case 2294:
case 2559:
case 3104:
case 1498:
case 2207:
case 3143:
case 2564:
case 1363:
case 3593:
case 2152:
case 2687:
case 2529:
case 1378:
case 1514:
case 2708:
case 912:
case 2313:
case 3777:
case 3751:
case 504:
case 3519:
case 1253:
case 2855:
case 722:
case 3441:
case 2342:
case 1638:
case 4095:
case 1023:
case 3656:
case 171:
case 2326:
case 1555:
case 1829:
case 2814:
case 3316:
case 3063:
case 1998:
case 1864:
case 2094:
case 2596:
case 2287:
case 444:
case 1564:
case 3184:
case 833:
case 2378:
case 3307:
case 2253:
case 3026:
case 3524:
case 475:
case 2502:
case 3569:
case 1189:
case 762:
case 1399:
case 3935:
case 1802:
case 1238:
case 988:
case 3042:
case 867:
case 2555:
case 1979:
case 672:
case 2434:
case 3819:
case 4056:
case 3847:
case 2829:
case 3013:
case 1007:
case 1814:
case 2475:
case 2864:
case 1939:
case 2663:
case 863:
case 3694:
case 1104:
case 471:
case 3498:
case 4023:
case 3975:
case 3607:
case 1815:
case 1721:
case 3109:
case 1353:
case 2554:
case 899:
case 1112:
case 1642:
case 732:
case 3761:
case 2338:
case 512:
case 1626:
case 3053:
case 1854:
case 3525:
case 3216:
case 3087:
case 1565:
case 3185:
case 3395:
case 1663:
case 3294:
case 823:
case 1474:
case 2278:
case 2613:
case 2721:
case 2815:
case 1678:
case 2104:
case 3623:
case 3825:
case 3711:
case 3582:
case 4007:
case 2353:
case 1299:
case 2699:
case 3038:
case 3356:
case 2626:
case 2941:
case 2854:
case 789:
case 3616:
case 2565:
case 2316:
case 1847:
case 3105:
case 2439:
case 1013:
case 2078:
case 3094:
case 4038:
case 1893:
case 1695:
case 2063:
case 2295:
case 676:
case 3802:
case 3238:
case 1099:
case 376:
case 3326:
case 1819:
case 2656:
case 2824:
case 194:
case 2519:
case 2323:
case 911:
case 2750:
case 3399:
case 1569:
case 3687:
case 3564:
case 2547:
case 82:
case 1307:
case 2013:
case 671:
case 1078:
case 3829:
case 272:
case 534:
case 2893:
case 1063:
case 3475:
case 3638:
case 371:
case 515:
case 849:
case 2256:
case 3555:
case 924:
case 2524:
case 2026:
case 294:
case 916:
case 2569:
case 735:
case 1750:
case 2394:
case 3363:
case 761:
case 1440:
case 1777:
case 726:
case 816:
case 2133:
case 256:
case 2949:
case 151:
case 3927:
case 824:
case 3048:
case 96:
case 19:
case 2632:
case 2917:
case 2796:
case 7:
case 1445:
case 2931:
case 3470:
case 1348:
case 3551:
case 1906:
case 410:
case 1714:
case 3577:
case 3483:
case 2690:
case 507:
case 2930:
case 1158:
case 949:
case 2372:
case 3136:
case 3550:
case 978:
case 3457:
case 186:
case 2691:
case 318:
case 156:
case 3072:
case 251:
case 811:
case 2755:
case 1632:
case 92:
case 1486:
case 3851:
case 2967:
case 618:
case 447:
case 3100:
case 1931:
case 243:
case 2290:
case 1729:
case 697:
case 2906:
case 53:
case 455:
case 2158:
case 3101:
case 1930:
case 109:
case 3769:
case 286:
case 452:
case 3754:
case 1782:
case 3272:
case 533:
case 3403:
case 24:
case 1510:
case 2945:
case 3118:
case 90:
case 1759:
case 3648:
case 2032:
case 2560:
case 497:
case 2090:
case 1431:
case 1176:
case 647:
case 1888:
case 2810:
case 1537:
case 1430:
case 2091:
case 129:
case 269:
case 1861:
case 655:
case 4048:
case 2511:
case 2782:
case 937:
case 685:
case 2449:
case 2492:
case 3391:
case 1561:
case 1837:
case 3672:
case 3427:
case 2986:
case 2417:
case 3168:
case 1588:
case 14:
case 1032:
case 3521:
case 1560:
case 3173:
case 1467:
case 385:
case 1090:
case 2431:
case 527:
case 2860:
case 610:
case 963:
case 229:
case 1091:
case 169:
case 999:
case 2537:
case 1811:
case 3971:
case 3930:
case 967:
case 1101:
case 3691:
case 1769:
case 888:
case 309:
case 2136:
case 2471:
case 3372:
case 3764:
case 609:
case 1100:
case 3690:
case 2577:
case 570:
case 1903:
case 1877:
case 1851:
case 933:
case 656:
case 3133:
case 1850:
case 50:
case 3949:
case 4090:
case 297:
case 2724:
case 643:
case 1719:
case 563:
case 1136:
case 3702:
case 493:
case 469:
case 717:
case 2100:
case 4091:
case 3906:
case 1551:
case 1747:
case 3290:
case 3714:
case 2944:
case 252:
case 3808:
case 39:
case 812:
case 3445:
case 3967:
case 2850:
case 858:
case 239:
case 3755:
case 3091:
case 247:
case 3725:
case 1957:
case 110:
case 2715:
case 1332:
case 255:
case 1765:
case 3810:
case 393:
case 2444:
case 1168:
case 779:
case 1390:
case 2648:
case 185:
case 3945:
case 451:
case 2118:
case 56:
case 880:
case 49:
case 1520:
case 1181:
case 1427:
case 1672:
case 64:
case 2272:
case 3837:
case 503:
case 3537:
case 3861:
case 329:
case 210:
case 2971:
case 155:
case 481:
case 93:
case 1821:
case 1715:
case 3860:
case 3431:
case 3176:
case 3888:
case 2983:
case 2970:
case 629:
case 2168:
case 3986:
case 1444:
case 1648:
case 285:
case 3759:
case 1118:
case 2180:
case 2521:
case 2390:
case 3782:
case 52:
case 3511:
case 2427:
case 2672:
case 2181:
case 2391:
case 3449:
case 1296:
case 3131:
case 2365:
case 97:
case 1059:
case 2732:
case 900:
case 1655:
case 3130:
case 3556:
case 240:
case 198:
case 2202:
case 1602:
case 3933:
case 2791:
case 968:
case 1354:
case 2553:
case 887:
case 2025:
case 3619:
case 3382:
case 2481:
case 1103:
case 4024:
case 2790:
case 2629:
case 1144:
case 2214:
case 3015:
case 2473:
case 4069:
case 2587:
case 3693:
case 1365:
case 3595:
case 845:
case 538:
case 519:
case 1732:
case 3106:
case 2059:
case 2082:
case 874:
case 1255:
case 3958:
case 857:
case 2655:
case 1936:
case 413:
case 928:
case 1791:
case 1202:
case 1838:
case 4093:
case 298:
case 3428:
case 3624:
case 1481:
case 2354:
case 1553:
case 1790:
case 2144:
case 2614:
case 2229:
case 4019:
case 3247:
case 892:
case 3065:
case 3293:
case 1480:
case 1473:
case 3167:
case 2816:
case 1347:
case 1659:
case 895:
case 1170:
case 1866:
case 1393:
case 313:
case 3563:
case 3302:
case 755:
case 2369:
case 3654:
case 1171:
case 3826:
case 1682:
case 2282:
case 1523:
case 1157:
case 3928:
case 1225:
case 2823:
case 41:
case 2625:
case 4065:
case 1981:
case 3265:
case 1968:
case 1894:
case 842:
case 2064:
case 554:
case 1014:
case 1807:
case 3813:
case 3615:
case 3145:
case 1973:
case 1507:
case 3329:
case 3976:
case 1259:
case 2393:
case 1096:
case 710:
case 2170:
case 1369:
case 3772:
case 1324:
case 1282:
case 2523:
case 2171:
case 2055:
case 2225:
case 3024:
case 148:
case 1625:
case 3069:
case 2002:
case 2981:
case 785:
case 2894:
case 973:
case 1918:
case 3215:
case 530:
case 2973:
case 756:
case 3214:
case 3790:
case 11:
case 2647:
case 1247:
case 2117:
case 2895:
case 3480:
case 1293:
case 3587:
case 1167:
case 508:
case 1669:
case 1428:
case 896:
case 1856:
case 2619:
case 2192:
case 977:
case 3553:
case 4014:
case 1325:
case 3255:
case 3365:
case 3696:
case 3732:
case 1359:
case 1647:
case 2247:
case 1117:
case 85:
case 1015:
case 3418:
case 479:
case 698:
case 3264:
case 751:
case 1933:
case 4064:
case 573:
case 2428:
case 1269:
case 2669:
case 4029:
case 930:
case 891:
case 1619:
case 2856:
case 2219:
case 1149:
case 3655:
case 1054:
case 317:
case 2958:
case 984:
case 3082:
case 1130:
case 2325:
case 3900:
case 2595:
case 1131:
case 617:
case 520:
case 2106:
case 498:
case 2093:
case 1186:
case 1396:
case 3029:
case 1215:
case 2615:
case 2813:
case 3625:
case 1024:
case 2019:
case 2928:
case 841:
case 2842:
case 2899:
case 3369:
case 1599:
case 2302:
case 1254:
case 500:
case 3507:
case 2578:
case 2563:
case 853:
case 213:
case 2396:
case 2665:
case 2863:
case 3894:
case 3968:
case 1047:
case 1145:
case 3014:
case 2526:
case 1355:
case 1019:
case 3981:
case 2069:
case 1842:
case 1899:
case 1302:
case 2772:
case 919:
case 938:
case 2254:
case 3055:
case 3436:
case 1654:
case 3171:
case 3682:
case 3659:
case 690:
case 729:
case 1314:
case 3866:
case 3183:
case 440:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745398801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,];
var gg_b = "1745398801/";

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
