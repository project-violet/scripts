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
case 3505:
case 3809:
case 3948:
case 1538:
case 4006:
case 9:
case 3370:
case 2872:
case 2908:
case 3911:
case 2195:
case 2545:
case 3268:
case 3486:
case 634:
case 2947:
case 1776:
case 1579:
case 1875:
case 335:
case 2216:
case 3329:
case 3932:
case 381:
case 1884:
case 1457:
case 730:
case 3907:
case 2185:
case 493:
case 1200:
case 1064:
case 3496:
case 2675:
case 3613:
case 286:
case 3488:
case 1083:
case 2497:
case 4008:
case 2906:
case 827:
case 3442:
case 2152:
case 2402:
case 3521:
case 1739:
case 3393:
case 1910:
case 444:
case 1799:
case 1146:
case 12:
case 1371:
case 1405:
case 1155:
case 2314:
case 1033:
case 209:
case 3955:
case 3438:
case 970:
case 776:
case 2694:
case 3201:
case 2218:
case 3383:
case 2634:
case 2558:
case 1789:
case 2961:
case 47:
case 3412:
case 2100:
case 736:
case 1378:
case 3783:
case 3643:
case 3481:
case 3824:
case 1116:
case 3247:
case 2603:
case 2232:
case 3916:
case 2714:
case 3039:
case 3590:
case 1339:
case 3208:
case 2344:
case 2968:
case 2527:
case 3491:
case 3078:
case 3089:
case 2248:
case 590:
case 3431:
case 1426:
case 247:
case 3580:
case 3869:
case 2901:
case 3261:
case 1141:
case 674:
case 668:
case 2819:
case 2359:
case 3573:
case 232:
case 375:
case 3941:
case 1531:
case 1480:
case 1323:
case 1428:
case 1512:
case 3023:
case 806:
case 1252:
case 631:
case 2966:
case 1581:
case 2404:
case 337:
case 2523:
case 2331:
case 2742:
case 1315:
case 1756:
case 1559:
case 3737:
case 152:
case 2576:
case 2779:
case 3608:
case 2611:
case 1635:
case 3444:
case 4013:
case 1674:
case 3787:
case 3647:
case 2203:
case 2692:
case 120:
case 3963:
case 80:
case 2381:
case 2632:
case 1846:
case 1685:
case 3015:
case 646:
case 2607:
case 311:
case 993:
case 2874:
case 191:
case 73:
case 741:
case 1758:
case 2885:
case 538:
case 2860:
case 2786:
case 1184:
case 2065:
case 2028:
case 998:
case 3459:
case 3109:
case 1811:
case 1351:
case 1134:
case 539:
case 2599:
case 2030:
case 2796:
case 712:
case 3577:
case 1544:
case 2539:
case 2090:
case 579:
case 615:
case 2396:
case 2571:
case 818:
case 194:
case 1751:
case 573:
case 2943:
case 28:
case 2429:
case 210:
case 3625:
case 3058:
case 1453:
case 1103:
case 744:
case 564:
case 854:
case 578:
case 3762:
case 819:
case 1818:
case 2470:
case 1514:
case 2057:
case 2021:
case 1254:
case 77:
case 1841:
case 1272:
case 2618:
case 3601:
case 3822:
case 912:
case 2712:
case 1249:
case 59:
case 148:
case 502:
case 3169:
case 3387:
case 2641:
case 2398:
case 1969:
case 2284:
case 2433:
case 3617:
case 3666:
case 3840:
case 2342:
case 2275:
case 377:
case 3213:
case 3045:
case 2388:
case 3553:
case 2379:
case 867:
case 1715:
case 1816:
case 430:
case 1185:
case 1160:
case 2884:
case 3502:
case 95:
case 2192:
case 2070:
case 2542:
case 2723:
case 537:
case 2875:
case 3353:
case 1556:
case 266:
case 450:
case 1759:
case 3974:
case 3108:
case 704:
case 2111:
case 997:
case 1849:
case 1545:
case 2894:
case 1908:
case 3995:
case 627:
case 2182:
case 2538:
case 3587:
case 2598:
case 600:
case 422:
case 834:
case 1558:
case 3161:
case 1694:
case 762:
case 109:
case 901:
case 1487:
case 1314:
case 511:
case 103:
case 2910:
case 333:
case 1402:
case 2739:
case 3777:
case 542:
case 1906:
case 3456:
case 1437:
case 606:
case 3415:
case 2473:
case 885:
case 831:
case 688:
case 1282:
case 2235:
case 1551:
case 84:
case 869:
case 559:
case 2399:
case 2771:
case 1344:
case 2295:
case 2922:
case 3168:
case 553:
case 2339:
case 1211:
case 260:
case 3125:
case 1714:
case 1077:
case 1232:
case 1603:
case 2116:
case 1207:
case 2167:
case 874:
case 558:
case 2389:
case 868:
case 2378:
case 2285:
case 364:
case 378:
case 1450:
case 4022:
case 3166:
case 3624:
case 1917:
case 3059:
case 39:
case 3550:
case 11:
case 1246:
case 2323:
case 2465:
case 1515:
case 132:
case 3427:
case 3451:
case 962:
case 2118:
case 4040:
case 1901:
case 207:
case 1026:
case 1607:
case 4009:
case 1073:
case 995:
case 3478:
case 2660:
case 1720:
case 651:
case 3091:
case 1632:
case 3705:
case 220:
case 1692:
case 396:
case 2674:
case 829:
case 3439:
case 3861:
case 2477:
case 401:
case 1611:
case 823:
case 3081:
case 1391:
case 1779:
case 2756:
case 581:
case 3373:
case 252:
case 2855:
case 1154:
case 2219:
case 1523:
case 1090:
case 1172:
case 1539:
case 3949:
case 922:
case 1895:
case 1149:
case 1796:
case 3972:
case 2327:
case 2134:
case 3476:
case 1655:
case 2062:
case 2909:
case 3380:
case 497:
case 1028:
case 1080:
case 2184:
case 756:
case 1885:
case 1786:
case 3113:
case 291:
case 2832:
case 2175:
case 1874:
case 2892:
case 2841:
case 3790:
case 462:
case 3036:
case 1021:
case 3728:
case 3801:
case 2818:
case 3583:
case 2358:
case 1386:
case 887:
case 1263:
case 1616:
case 2453:
case 3780:
case 3640:
case 3866:
case 110:
case 226:
case 1429:
case 145:
case 18:
case 3533:
case 1336:
case 3357:
case 3593:
case 2727:
case 294:
case 2751:
case 2356:
case 654:
case 619:
case 3773:
case 1791:
case 613:
case 1275:
case 2924:
case 3825:
case 3529:
case 3038:
case 1433:
case 249:
case 1800:
case 2087:
case 243:
case 1493:
case 956:
case 1398:
case 1781:
case 2969:
case 840:
case 3042:
case 1234:
case 248:
case 3570:
case 2249:
case 3079:
case 3088:
case 2345:
case 1618:
case 2785:
case 2645:
case 2760:
case 1620:
case 3449:
case 1858:
case 1707:
case 2066:
case 642:
case 1123:
case 3976:
case 1638:
case 2017:
case 447:
case 212:
case 1214:
case 896:
case 1341:
case 2795:
case 329:
case 2836:
case 2271:
case 23:
case 2563:
case 1642:
case 3018:
case 4077:
case 1679:
case 500:
case 2300:
case 910:
case 716:
case 3989:
case 3340:
case 527:
case 3897:
case 3253:
case 3513:
case 2888:
case 2575:
case 2879:
case 480:
case 1316:
case 3016:
case 2658:
case 637:
case 2820:
case 1746:
case 3710:
case 2752:
case 1572:
case 2025:
case 2061:
case 150:
case 3690:
case 2424:
case 2503:
case 1346:
case 1171:
case 3055:
case 3193:
case 3543:
case 299:
case 3628:
case 293:
case 2352:
case 387:
case 1010:
case 2469:
case 2276:
case 122:
case 2114:
case 3680:
case 1519:
case 1815:
case 2223:
case 2627:
case 298:
case 1767:
case 1983:
case 821:
case 1631:
case 3626:
case 1382:
case 409:
case 3419:
case 1691:
case 565:
case 855:
case 3673:
case 658:
case 3164:
case 1827:
case 1311:
case 1851:
case 2395:
case 3277:
case 2047:
case 27:
case 2299:
case 583:
case 3170:
case 3129:
case 486:
case 1392:
case 2374:
case 340:
case 1681:
case 1741:
case 1332:
case 78:
case 2008:
case 659:
case 3011:
case 1718:
case 2385:
case 3048:
case 710:
case 2278:
case 1612:
case 2289:
case 244:
case 3082:
case 1839:
case 3945:
case 703:
case 1461:
case 1595:
case 932:
case 2120:
case 3508:
case 1024:
case 3265:
case 4057:
case 162:
case 1987:
case 276:
case 3280:
case 2198:
case 3187:
case 2905:
case 3369:
case 2507:
case 3452:
case 980:
case 786:
case 1585:
case 1560:
case 48:
case 708:
case 3228:
case 3324:
case 1997:
case 3137:
case 3290:
case 410:
case 2188:
case 1406:
case 3230:
case 2142:
case 772:
case 2136:
case 2772:
case 3485:
case 1734:
case 2921:
case 2196:
case 2749:
case 1212:
case 2957:
case 681:
case 1303:
case 3709:
case 3474:
case 1281:
case 3435:
case 1158:
case 2699:
case 1876:
case 2043:
case 861:
case 551:
case 3226:
case 2555:
case 525:
case 104:
case 1242:
case 684:
case 3034:
case 2719:
case 2990:
case 1279:
case 1466:
case 3094:
case 416:
case 3829:
case 3525:
case 2930:
case 1962:
case 34:
case 1500:
case 1417:
case 1384:
case 780:
case 986:
case 4026:
case 3309:
case 1703:
case 2980:
case 2965:
case 1298:
case 3084:
case 3205:
case 101:
case 2372:
case 3870:
case 909:
case 374:
case 732:
case 1394:
case 2245:
case 1220:
case 675:
case 519:
case 1401:
case 903:
case 864:
case 878:
case 2349:
case 554:
case 2013:
case 1127:
case 1151:
case 2541:
case 1115:
case 4028:
case 2131:
case 317:
case 3915:
case 2973:
case 4030:
case 1468:
case 802:
case 2518:
case 2422:
case 4090:
case 747:
case 3653:
case 567:
case 3566:
case 3769:
case 2440:
case 1296:
case 2112:
case 3517:
case 4065:
case 3257:
case 4080:
case 1950:
case 2679:
case 2748:
case 3637:
case 256:
case 2413:
case 460:
case 1001:
case 1656:
case 3475:
case 2642:
case 3366:
case 1271:
case 3317:
case 2711:
case 3708:
case 1795:
case 2176:
case 1409:
case 2732:
case 2698:
case 2341:
case 1159:
case 2214:
case 112:
case 948:
case 30:
case 3959:
case 1774:
case 2707:
case 3301:
case 2858:
case 1785:
case 2620:
case 1760:
case 3805:
case 3509:
case 1898:
case 3000:
case 1838:
case 1025:
case 2139:
case 1594:
case 752:
case 3177:
case 1144:
case 2746:
case 2686:
case 2199:
case 1820:
case 534:
case 3270:
case 1658:
case 1534:
case 2856:
case 3229:
case 2316:
case 2755:
case 1888:
case 1575:
case 1879:
case 3325:
case 624:
case 3463:
case 926:
case 1300:
case 2189:
case 1700:
case 2983:
case 853:
case 563:
case 1006:
case 1651:
case 54:
case 1627:
case 814:
case 748:
case 2716:
case 2355:
case 1114:
case 2259:
case 222:
case 3826:
case 2010:
case 2993:
case 1812:
case 193:
case 319:
case 1352:
case 4064:
case 2933:
case 858:
case 2171:
case 1503:
case 1881:
case 4070:
case 1061:
case 2307:
case 3828:
case 1289:
case 2612:
case 1385:
case 920:
case 2443:
case 1360:
case 1008:
case 295:
case 2332:
case 3153:
case 3095:
case 1374:
case 907:
case 1953:
case 3717:
case 3074:
case 17:
case 952:
case 1395:
case 2311:
case 1239:
case 2827:
case 2851:
case 877:
case 3060:
case 2348:
case 2691:
case 3085:
case 367:
case 2964:
case 2382:
case 3880:
case 2631:
case 3569:
case 4093:
case 3865:
case 1592:
case 1754:
case 2937:
case 2574:
case 1188:
case 1532:
case 1179:
case 2406:
case 3446:
case 661:
case 2560:
case 494:
case 1410:
case 1507:
case 3998:
case 1582:
case 2763:
case 1198:
case 3938:
case 176:
case 3105:
case 881:
case 638:
case 1511:
case 2899:
case 2595:
case 2461:
case 1844:
case 3877:
case 1251:
case 1227:
case 3482:
case 2823:
case 546:
case 2291:
case 204:
case 1215:
case 3604:
case 1319:
case 2231:
case 1043:
case 3448:
case 182:
case 1555:
case 2876:
case 327:
case 2408:
case 1639:
case 2784:
case 2644:
case 3492:
case 3432:
case 1546:
case 3936:
case 46:
case 3250:
case 1678:
case 1957:
case 2212:
case 1749:
case 1196:
case 2734:
case 1136:
case 3121:
case 3996:
case 3157:
case 2794:
case 3407:
case 960:
case 2127:
case 2151:
case 3743:
case 2401:
case 3522:
case 1013:
case 1349:
case 1245:
case 2394:
case 2220:
case 201:
case 3180:
case 170:
case 3165:
case 452:
case 1980:
case 2703:
case 3441:
case 2009:
case 1567:
case 1671:
case 3202:
case 2417:
case 3633:
case 2962:
case 3072:
case 1256:
case 602:
case 2466:
case 2279:
case 69:
case 3313:
case 587:
case 2375:
case 3130:
case 1719:
case 1516:
case 966:
case 760:
case 3467:
case 2236:
case 3054:
case 2296:
case 25:
case 2425:
case 1440:
case 3981:
case 365:
case 136:
case 875:
case 884:
case 1518:
case 306:
case 1258:
case 2286:
case 388:
case 1:
case 905:
case 673:
case 1973:
case 1354:
case 3126:
case 297:
case 679:
case 3173:
case 540:
case 1191:
case 1541:
case 1926:
case 3961:
case 2383:
case 4092:
case 1161:
case 3218:
case 138:
case 3241:
case 591:
case 2438:
case 3487:
case 974:
case 3854:
case 2498:
case 1609:
case 4007:
case 4082:
case 2217:
case 3402:
case 2946:
case 2333:
case 139:
case 1777:
case 3744:
case 985:
case 3906:
case 161:
case 969:
case 415:
case 386:
case 2266:
case 1106:
case 3675:
case 963:
case 804:
case 2613:
case 3160:
case 2436:
case 2329:
case 862:
case 2932:
case 281:
case 1147:
case 3174:
case 2992:
case 1240:
case 1974:
case 3759:
case 734:
case 1108:
case 2268:
case 771:
case 3053:
case 3849:
case 3908:
case 682:
case 1222:
case 1995:
case 3872:
case 2948:
case 2809:
case 763:
case 1624:
case 3966:
case 3917:
case 3462:
case 1117:
case 1550:
case 157:
case 275:
case 3255:
case 1669:
case 2526:
case 2941:
case 3819:
case 3515:
case 3359:
case 2573:
case 1753:
case 1427:
case 56:
case 1451:
case 670:
case 2918:
case 3901:
case 2304:
case 3248:
case 2431:
case 2078:
case 2491:
case 173:
case 6:
case 717:
case 2122:
case 3968:
case 2733:
case 1377:
case 3211:
case 594:
case 2208:
case 1168:
case 3714:
case 2039:
case 2590:
case 3077:
case 1044:
case 2916:
case 2824:
case 1900:
case 3207:
case 429:
case 178:
case 164:
case 2412:
case 3450:
case 2661:
case 987:
case 3539:
case 3835:
case 3172:
case 52:
case 2934:
case 3599:
case 3030:
case 3796:
case 2994:
case 3655:
case 1269:
case 2109:
case 1504:
case 1380:
case 1365:
case 1328:
case 3080:
case 1610:
case 3589:
case 3646:
case 2027:
case 1113:
case 723:
case 1390:
case 1224:
case 2975:
case 2810:
case 915:
case 2350:
case 1031:
case 940:
case 2243:
case 463:
case 1489:
case 505:
case 1478:
case 469:
case 1091:
case 124:
case 3381:
case 485:
case 1705:
case 431:
case 2963:
case 4034:
case 3738:
case 2787:
case 2647:
case 196:
case 2702:
case 1861:
case 1499:
case 2608:
case 468:
case 1081:
case 3391:
case 3576:
case 3648:
case 4084:
case 3779:
case 1954:
case 1373:
case 856:
case 1326:
case 3154:
case 3331:
case 3682:
case 3523:
case 237:
case 2124:
case 2337:
case 1020:
case 923:
case 2397:
case 2213:
case 155:
case 1529:
case 1825:
case 1726:
case 2617:
case 434:
case 1098:
case 471:
case 3781:
case 3398:
case 2414:
case 2387:
case 2169:
case 1209:
case 3234:
case 3320:
case 3483:
case 1079:
case 3294:
case 787:
case 2056:
case 1730:
case 3119:
case 560:
case 850:
case 3470:
case 2668:
case 1583:
case 1086:
case 1866:
case 1640:
case 2903:
case 1780:
case 2625:
case 1765:
case 3429:
case 214:
case 3943:
case 1533:
case 38:
case 1817:
case 3336:
case 253:
case 1593:
case 946:
case 1143:
case 715:
case 3396:
case 3571:
case 2456:
case 1613:
case 1488:
case 1266:
case 2106:
case 3083:
case 1704:
case 3863:
case 1110:
case 239:
case 1333:
case 1946:
case 1557:
case 2014:
case 3910:
case 233:
case 2952:
case 3146:
case 3371:
case 467:
case 2609:
case 3155:
case 3093:
case 4060:
case 1438:
case 4085:
case 1955:
case 662:
case 238:
case 1420:
case 2445:
case 3789:
case 1809:
case 3598:
case 906:
case 3148:
case 988:
case 3654:
case 3538:
case 516:
case 3029:
case 1370:
case 305:
case 1911:
case 2222:
case 3520:
case 2458:
case 418:
case 3111:
case 3834:
case 1225:
case 3776:
case 3875:
case 2353:
case 2597:
case 876:
case 3192:
case 135:
case 181:
case 3542:
case 1932:
case 3107:
case 413:
case 2985:
case 2960:
case 965:
case 1436:
case 3457:
case 454:
case 1907:
case 419:
case 3064:
case 1918:
case 3118:
case 2101:
case 601:
case 3591:
case 3376:
case 2669:
case 836:
case 3531:
case 1526:
case 3465:
case 184:
case 3512:
case 3428:
case 1023:
case 1770:
case 202:
case 2843:
case 3581:
case 3430:
case 2624:
case 451:
case 1528:
case 3004:
case 3260:
case 278:
case 3389:
case 2562:
case 2900:
case 1783:
case 3167:
case 789:
case 1481:
case 870:
case 3116:
case 3274:
case 2044:
case 783:
case 1916:
case 360:
case 2125:
case 2168:
case 1208:
case 3339:
case 697:
case 3295:
case 2377:
case 58:
case 3235:
case 927:
case 1793:
case 273:
case 1491:
case 2415:
case 1089:
case 3426:
case 900:
case 1565:
case 3892:
case 919:
case 503:
case 1975:
case 391:
case 509:
case 465:
case 1984:
case 3758:
case 489:
case 1362:
case 656:
case 3652:
case 2328:
case 2504:
case 2365:
case 508:
case 1459:
case 2269:
case 1994:
case 792:
case 70:
case 3351:
case 3134:
case 2972:
case 3194:
case 3544:
case 1661:
case 2757:
case 3050:
case 2326:
case 3756:
case 352:
case 1737:
case 3855:
case 2081:
case 1608:
case 1647:
case 296:
case 4049:
case 3674:
case 3163:
case 812:
case 4072:
case 320:
case 3846:
case 3685:
case 3745:
case 2489:
case 1015:
case 2478:
case 1243:
case 2031:
case 725:
case 1350:
case 400:
case 844:
case 1056:
case 1822:
case 2088:
case 3345:
case 1750:
case 3097:
case 992:
case 90:
case 1387:
case 1414:
case 3002:
case 3969:
case 718:
case 2471:
case 3867:
case 1302:
case 3087:
case 4019:
case 2529:
case 2825:
case 1840:
case 2726:
case 1397:
case 177:
case 713:
case 2020:
case 1553:
case 3715:
case 1124:
case 2773:
case 754:
case 3816:
case 925:
case 3727:
case 394:
case 2321:
case 695:
case 898:
case 3600:
case 1903:
case 2640:
case 2866:
case 1058:
case 547:
case 3453:
case 893:
case 1762:
case 2801:
case 3818:
case 3358:
case 2728:
case 899:
case 158:
case 2919:
case 2790:
case 3514:
case 2067:
case 1805:
case 1000:
case 2454:
case 958:
case 3838:
case 1368:
case 1177:
case 2322:
case 3658:
case 1270:
case 3977:
case 3534:
case 125:
case 2837:
case 246:
case 3575:
case 3300:
case 616:
case 3584:
case 4039:
case 2018:
case 3656:
case 3001:
case 852:
case 1697:
case 341:
case 3271:
case 33:
case 1602:
case 1317:
case 3836:
case 3735:
case 977:
case 223:
case 3795:
case 2041:
case 711:
case 229:
case 3409:
case 3159:
case 2976:
case 3017:
case 10:
case 3774:
case 1959:
case 1283:
case 1301:
case 3645:
case 228:
case 3886:
case 1828:
case 344:
case 2082:
case 3278:
case 1650:
case 3289:
case 3385:
case 2048:
case 610:
case 1701:
case 848:
case 1403:
case 759:
case 714:
case 3008:
case 1830:
case 1153:
case 3374:
case 1347:
case 1890:
case 3335:
case 937:
case 2170:
case 2092:
case 3047:
case 37:
case 3299:
case 86:
case 55:
case 3395:
case 2277:
case 3239:
case 758:
case 2673:
case 1060:
case 2419:
case 167:
case 1766:
case 2626:
case 1865:
case 3700:
case 118:
case 894:
case 1361:
case 3651:
case 3006:
case 398:
case 3891:
case 826:
case 1873:
case 2665:
case 3114:
case 1826:
case 1052:
case 2310:
case 911:
case 2850:
case 2971:
case 113:
case 2543:
case 777:
case 2722:
case 3881:
case 3424:
case 2630:
case 3061:
case 2690:
case 1482:
case 1604:
case 3043:
case 2226:
case 3555:
case 1448:
case 1713:
case 2003:
case 2495:
case 3639:
case 2561:
case 1986:
case 2677:
case 82:
case 2958:
case 1492:
case 4045:
case 330:
case 477:
case 1250:
case 781:
case 3689:
case 3196:
case 3749:
case 3957:
case 735:
case 1019:
case 1510:
case 4058:
case 1988:
case 3592:
case 1979:
case 2547:
case 3188:
case 3532:
case 2324:
case 2290:
case 608:
case 805:
case 2228:
case 1262:
case 3410:
case 2452:
case 1998:
case 556:
case 2369:
case 866:
case 3905:
case 3623:
case 3198:
case 1938:
case 1105:
case 2265:
case 376:
case 2280:
case 2508:
case 3511:
case 1920:
case 3251:
case 1467:
case 2221:
case 2400:
case 2517:
case 1054:
case 981:
case 3112:
case 336:
case 2653:
case 3181:
case 3422:
case 2501:
case 106:
case 1670:
case 3258:
case 2063:
case 442:
case 3814:
case 1991:
case 1126:
case 3131:
case 3354:
case 1664:
case 1743:
case 1683:
case 1522:
case 1418:
case 2075:
case 775:
case 268:
case 3245:
case 2951:
case 632:
case 2568:
case 1165:
case 437:
case 1441:
case 2864:
case 263:
case 3567:
case 3928:
case 269:
case 1128:
case 1072:
case 1237:
case 3256:
case 231:
case 3930:
case 1313:
case 1853:
case 1130:
case 3719:
case 522:
case 61:
case 784:
case 3189:
case 3696:
case 3178:
case 1657:
case 4059:
case 1989:
case 402:
case 1621:
case 1978:
case 2325:
case 582:
case 2463:
case 1253:
case 1897:
case 1513:
case 3856:
case 225:
case 1837:
case 2229:
case 2270:
case 2944:
case 1322:
case 1710:
case 3139:
case 3572:
case 2264:
case 1887:
case 1454:
case 2000:
case 3904:
case 457:
case 2509:
case 530:
case 2706:
case 128:
case 2434:
case 479:
case 3620:
case 473:
case 2494:
case 3707:
case 1472:
case 20:
case 292:
case 1976:
case 3554:
case 1605:
case 3214:
case 3732:
case 3341:
case 1041:
case 478:
case 3711:
case 2821:
case 2484:
case 2317:
case 123:
case 2293:
case 2697:
case 3642:
case 2366:
case 576:
case 2637:
case 356:
case 2475:
case 1018:
case 3679:
case 4044:
case 3748:
case 3382:
case 536:
case 1007:
case 3964:
case 1419:
case 2060:
case 3348:
case 2085:
case 1673:
case 2204:
case 3311:
case 2308:
case 3827:
case 3851:
case 438:
case 2717:
case 1092:
case 1129:
case 2035:
case 694:
case 140:
case 395:
case 5:
case 2095:
case 3681:
case 2403:
case 924:
case 2650:
case 433:
case 2828:
case 790:
case 2306:
case 649:
case 3346:
case 1722:
case 3171:
case 1543:
case 3933:
case 1971:
case 2768:
case 254:
case 1133:
case 1665:
case 3519:
case 3815:
case 2873:
case 3716:
case 845:
case 648:
case 88:
case 3767:
case 218:
case 3794:
case 2510:
case 666:
case 2157:
case 1485:
case 2019:
case 1460:
case 2936:
case 2250:
case 3212:
case 455:
case 1506:
case 964:
case 978:
case 421:
case 3447:
case 803:
case 2492:
case 3281:
case 3784:
case 200:
case 2986:
case 4042:
case 1495:
case 2411:
case 1003:
case 3876:
case 2448:
case 979:
case 886:
case 1273:
case 3823:
case 1945:
case 3839:
case 3461:
case 53:
case 3145:
case 1508:
case 738:
case 1265:
case 541:
case 2938:
case 2455:
case 2998:
case 3069:
case 2262:
case 3585:
case 3560:
case 2446:
case 3902:
case 1228:
case 739:
case 3156:
case 1290:
case 2942:
case 3406:
case 1956:
case 1230:
case 1547:
case 3937:
case 733:
case 490:
case 2979:
case 2931:
case 779:
case 3115:
case 773:
case 1063:
case 3468:
case 206:
case 81:
case 1653:
case 764:
case 778:
case 3363:
case 1150:
case 1517:
case 2912:
case 1893:
case 660:
case 2467:
case 1034:
case 847:
case 2049:
case 2853:
case 2297:
case 79:
case 3466:
case 1094:
case 3288:
case 1525:
case 939:
case 185:
case 2540:
case 131:
case 2128:
case 598:
case 14:
case 3962:
case 3384:
case 3500:
case 2633:
case 3417:
case 169:
case 4091:
case 0:
case 2693:
case 3238:
case 2441:
case 3703:
case 4012:
case 2287:
case 1084:
case 938:
case 1205:
case 2165:
case 301:
case 1870:
case 3394:
case 1927:
case 168:
case 174:
case 3220:
case 4081:
case 1951:
case 1075:
case 2418:
case 2522:
case 593:
case 3127:
case 3151:
case 757:
case 2683:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1762196401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,];
var gg_b = "1762196401/";

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
