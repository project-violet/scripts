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
case 1303:
case 1829:
case 3803:
case 1842:
case 2373:
case 2451:
case 3414:
case 3583:
case 2328:
case 2407:
case 3511:
case 1477:
case 1269:
case 2343:
case 1872:
case 2802:
case 3240:
case 26:
case 349:
case 3921:
case 2227:
case 2385:
case 2246:
case 3295:
case 3463:
case 1110:
case 2612:
case 56:
case 3575:
case 3545:
case 2132:
case 1035:
case 985:
case 2276:
case 4075:
case 2462:
case 1206:
case 1058:
case 773:
case 3019:
case 811:
case 2991:
case 520:
case 2405:
case 1475:
case 311:
case 1684:
case 2288:
case 1898:
case 3398:
case 3289:
case 1652:
case 863:
case 1661:
case 750:
case 1514:
case 2865:
case 1483:
case 3156:
case 1490:
case 1037:
case 127:
case 542:
case 2387:
case 4047:
case 3297:
case 967:
case 159:
case 3514:
case 1547:
case 324:
case 1156:
case 409:
case 3037:
case 1526:
case 2121:
case 1916:
case 3924:
case 2551:
case 827:
case 4014:
case 359:
case 2454:
case 2482:
case 327:
case 1577:
case 3932:
case 683:
case 163:
case 1019:
case 2653:
case 1194:
case 3563:
case 923:
case 195:
case 464:
case 1289:
case 3652:
case 2562:
case 111:
case 2496:
case 3898:
case 3684:
case 3445:
case 1398:
case 1681:
case 3950:
case 215:
case 2885:
case 1463:
case 1295:
case 2994:
case 935:
case 3191:
case 3058:
case 1613:
case 1545:
case 3035:
case 2420:
case 1590:
case 3447:
case 2873:
case 1342:
case 3303:
case 1329:
case 2636:
case 694:
case 3842:
case 3872:
case 2302:
case 1921:
case 678:
case 1240:
case 149:
case 1664:
case 2268:
case 1511:
case 515:
case 552:
case 2448:
case 2895:
case 1327:
case 2632:
case 1346:
case 3827:
case 1015:
case 2774:
case 1376:
case 2306:
case 1704:
case 2478:
case 2984:
case 2952:
case 2423:
case 3267:
case 3479:
case 156:
case 1228:
case 2739:
case 2203:
case 3300:
case 2870:
case 1071:
case 3434:
case 148:
case 1041:
case 1868:
case 906:
case 2057:
case 990:
case 408:
case 739:
case 3493:
case 3265:
case 3936:
case 3480:
case 3044:
case 1534:
case 880:
case 2566:
case 358:
case 3825:
case 914:
case 130:
case 380:
case 2492:
case 1161:
case 1522:
case 4008:
case 1549:
case 2055:
case 361:
case 631:
case 2650:
case 1184:
case 3701:
case 313:
case 2889:
case 1299:
case 1388:
case 2509:
case 861:
case 4060:
case 346:
case 2486:
case 2930:
case 161:
case 1560:
case 587:
case 3912:
case 4079:
case 681:
case 3522:
case 3549:
case 921:
case 414:
case 3152:
case 2523:
case 908:
case 417:
case 3579:
case 1694:
case 2578:
case 113:
case 3299:
case 830:
case 89:
case 1265:
case 284:
case 660:
case 4034:
case 2004:
case 158:
case 3431:
case 2715:
case 1074:
case 565:
case 1738:
case 3800:
case 2242:
case 1300:
case 3273:
case 3228:
case 3580:
case 1164:
case 2136:
case 98:
case 3243:
case 2466:
case 3868:
case 1531:
case 2272:
case 1368:
case 62:
case 4080:
case 3327:
case 3285:
case 1846:
case 293:
case 3460:
case 406:
case 2395:
case 1827:
case 2586:
case 1267:
case 3610:
case 356:
case 1479:
case 3376:
case 2806:
case 1876:
case 3570:
case 536:
case 847:
case 1115:
case 76:
case 3283:
case 50:
case 2012:
case 1938:
case 4040:
case 2380:
case 2282:
case 3211:
case 347:
case 3392:
case 1030:
case 2831:
case 1497:
case 3540:
case 573:
case 1658:
case 2157:
case 2546:
case 470:
case 273:
case 3275:
case 612:
case 2296:
case 655:
case 4095:
case 3904:
case 2576:
case 904:
case 1495:
case 550:
case 2860:
case 588:
case 2971:
case 2781:
case 3174:
case 1117:
case 3144:
case 2941:
case 2379:
case 742:
case 3809:
case 1878:
case 3619:
case 1470:
case 1736:
case 87:
case 3247:
case 2618:
case 303:
case 3226:
case 2915:
case 157:
case 3469:
case 2525:
case 1052:
case 2155:
case 288:
case 803:
case 3866:
case 3139:
case 453:
case 1247:
case 1226:
case 103:
case 918:
case 407:
case 3736:
case 854:
case 17:
case 238:
case 404:
case 3440:
case 1597:
case 1139:
case 3084:
case 1277:
case 2849:
case 3637:
case 469:
case 1712:
case 538:
case 1174:
case 2822:
case 2360:
case 2427:
case 1348:
case 3263:
case 2308:
case 2476:
case 1378:
case 2730:
case 3309:
case 2879:
case 3141:
case 1275:
case 2036:
case 3753:
case 1595:
case 791:
case 3506:
case 1064:
case 1245:
case 1386:
case 752:
case 3171:
case 1283:
case 2893:
case 1081:
case 2880:
case 3955:
case 2939:
case 2500:
case 3030:
case 2331:
case 970:
case 2568:
case 1211:
case 3569:
case 416:
case 522:
case 1392:
case 2659:
case 2875:
case 941:
case 1805:
case 332:
case 662:
case 2937:
case 1585:
case 3750:
case 271:
case 1671:
case 3499:
case 966:
case 2794:
case 832:
case 2657:
case 126:
case 2498:
case 4002:
case 1465:
case 2883:
case 1091:
case 2890:
case 2032:
case 1918:
case 1573:
case 3502:
case 3033:
case 2756:
case 677:
case 3882:
case 1721:
case 1010:
case 1716:
case 2847:
case 301:
case 3473:
case 3351:
case 2638:
case 919:
case 328:
case 2118:
case 3443:
case 4065:
case 239:
case 64:
case 3307:
case 2958:
case 3094:
case 468:
case 1249:
case 1222:
case 3485:
case 3644:
case 1617:
case 3260:
case 3732:
case 2363:
case 1599:
case 3674:
case 3362:
case 175:
case 1320:
case 3617:
case 875:
case 1732:
case 992:
case 3249:
case 2791:
case 1820:
case 2223:
case 2598:
case 3862:
case 696:
case 1208:
case 1056:
case 419:
case 3599:
case 2278:
case 1674:
case 2403:
case 3851:
case 1351:
case 3234:
case 2347:
case 1639:
case 1724:
case 1307:
case 3807:
case 1094:
case 3402:
case 1443:
case 2542:
case 2529:
case 3135:
case 2159:
case 3573:
case 3918:
case 2390:
case 4043:
case 2383:
case 3280:
case 3091:
case 2919:
case 3158:
case 3382:
case 205:
case 1882:
case 3010:
case 3721:
case 3543:
case 3615:
case 1487:
case 4028:
case 1854:
case 1033:
case 3354:
case 2572:
case 505:
case 132:
case 3671:
case 3805:
case 2375:
case 2016:
case 3396:
case 4085:
case 882:
case 3641:
case 2406:
case 1262:
case 2378:
case 1476:
case 1308:
case 2589:
case 763:
case 2809:
case 3379:
case 3220:
case 2144:
case 2174:
case 1822:
case 3781:
case 795:
case 1104:
case 3322:
case 1446:
case 711:
case 1427:
case 1360:
case 388:
case 27:
case 138:
case 94:
case 3915:
case 2277:
case 350:
case 1207:
case 888:
case 619:
case 203:
case 1:
case 2226:
case 4025:
case 2247:
case 1251:
case 1053:
case 3334:
case 2619:
case 1834:
case 400:
case 850:
case 3254:
case 1568:
case 3831:
case 1659:
case 2392:
case 140:
case 3380:
case 244:
case 1880:
case 2283:
case 749:
case 974:
case 1939:
case 2570:
case 30:
case 336:
case 2245:
case 1488:
case 45:
case 80:
case 1944:
case 962:
case 836:
case 3527:
case 3784:
case 3974:
case 1296:
case 822:
case 10:
case 2489:
case 1576:
case 1546:
case 498:
case 322:
case 2753:
case 1917:
case 173:
case 3205:
case 462:
case 1254:
case 3331:
case 2497:
case 3568:
case 3500:
case 3939:
case 4068:
case 2938:
case 2115:
case 1012:
case 3893:
case 257:
case 2084:
case 724:
case 8:
case 1155:
case 188:
case 1525:
case 1764:
case 2366:
case 3251:
case 1400:
case 3:
case 1618:
case 759:
case 254:
case 838:
case 1941:
case 996:
case 3879:
case 1588:
case 2309:
case 554:
case 3262:
case 3476:
case 3308:
case 3446:
case 557:
case 3427:
case 3360:
case 2901:
case 692:
case 3849:
case 2637:
case 44:
case 1971:
case 1349:
case 1322:
case 1377:
case 3877:
case 3472:
case 3266:
case 3118:
case 2959:
case 2443:
case 228:
case 3935:
case 3638:
case 445:
case 3442:
case 3429:
case 1403:
case 780:
case 201:
case 3847:
case 2565:
case 758:
case 2724:
case 1326:
case 2639:
case 3655:
case 3314:
case 3826:
case 761:
case 1598:
case 1021:
case 1710:
case 2674:
case 2362:
case 1278:
case 3733:
case 3363:
case 2260:
case 2732:
case 1248:
case 746:
case 1863:
case 604:
case 1791:
case 713:
case 3845:
case 2896:
case 1345:
case 912:
case 371:
case 499:
case 3937:
case 1016:
case 3875:
case 1292:
case 105:
case 2882:
case 3756:
case 2502:
case 3032:
case 1529:
case 1383:
case 2354:
case 2615:
case 1811:
case 3292:
case 4042:
case 1890:
case 748:
case 2465:
case 2293:
case 4072:
case 805:
case 3159:
case 2573:
case 455:
case 412:
case 526:
case 1845:
case 226:
case 1657:
case 2396:
case 3375:
case 3016:
case 2805:
case 2671:
case 282:
case 756:
case 1601:
case 1937:
case 3278:
case 945:
case 1733:
case 2467:
case 3710:
case 3021:
case 2222:
case 2249:
case 1363:
case 3863:
case 3248:
case 139:
case 1472:
case 2587:
case 1118:
case 1266:
case 2402:
case 3377:
case 2807:
case 1958:
case 1877:
case 3326:
case 3814:
case 2716:
case 730:
case 575:
case 1638:
case 1050:
case 2851:
case 3403:
case 1562:
case 3399:
case 1899:
case 2398:
case 3150:
case 1496:
case 211:
case 3018:
case 3405:
case 4020:
case 342:
case 3991:
case 1454:
case 3387:
case 614:
case 2577:
case 1482:
case 617:
case 1551:
case 511:
case 1121:
case 1116:
case 690:
case 2664:
case 2372:
case 1843:
case 2240:
case 36:
case 249:
case 2921:
case 1302:
case 3124:
case 3582:
case 3407:
case 2583:
case 3373:
case 3451:
case 1200:
case 747:
case 3462:
case 3276:
case 2545:
case 3596:
case 42:
case 191:
case 2681:
case 1737:
case 549:
case 3246:
case 2295:
case 2463:
case 3385:
case 815:
case 3059:
case 1132:
case 3420:
case 402:
case 2191:
case 2058:
case 1462:
case 4005:
case 1385:
case 479:
case 3505:
case 3737:
case 1612:
case 3956:
case 92:
case 2477:
case 1582:
case 1407:
case 3116:
case 3268:
case 1554:
case 16:
case 3302:
case 68:
case 1124:
case 1343:
case 1373:
case 3200:
case 1719:
case 2303:
case 3873:
case 3828:
case 2447:
case 4051:
case 431:
case 3507:
case 259:
case 3454:
case 754:
case 960:
case 1225:
case 2661:
case 3551:
case 757:
case 3121:
case 2037:
case 2490:
case 224:
case 729:
case 1288:
case 2898:
case 1150:
case 2684:
case 2652:
case 2563:
case 142:
case 981:
case 4062:
case 2475:
case 1018:
case 1405:
case 337:
case 701:
case 561:
case 1964:
case 187:
case 1621:
case 2074:
case 1715:
case 1397:
case 1004:
case 258:
case 2656:
case 2044:
case 184:
case 2480:
case 728:
case 513:
case 664:
case 2694:
case 1298:
case 3930:
case 2888:
case 2757:
case 1523:
case 3509:
case 3889:
case 213:
case 1578:
case 1389:
case 672:
case 933:
case 2701:
case 4009:
case 1548:
case 261:
case 2560:
case 2039:
case 494:
case 2479:
case 732:
case 165:
case 1586:
case 1409:
case 3952:
case 3478:
case 3984:
case 1806:
case 2181:
case 3774:
case 3112:
case 1717:
case 1395:
case 3744:
case 2827:
case 3632:
case 193:
case 3895:
case 2113:
case 478:
case 497:
case 2449:
case 2953:
case 1592:
case 3369:
case 1869:
case 1136:
case 1340:
case 2368:
case 1272:
case 1466:
case 2434:
case 3001:
case 2738:
case 1370:
case 3203:
case 1616:
case 31:
case 3624:
case 3739:
case 3340:
case 3272:
case 3466:
case 1840:
case 248:
case 3592:
case 978:
case 3869:
case 3136:
case 2580:
case 994:
case 1961:
case 1739:
case 1624:
case 1870:
case 2800:
case 1001:
case 1478:
case 1984:
case 2704:
case 1306:
case 2015:
case 3586:
case 635:
case 3409:
case 893:
case 1952:
case 2691:
case 548:
case 3395:
case 865:
case 1632:
case 1895:
case 2327:
case 726:
case 1448:
case 2299:
case 3298:
case 1486:
case 2579:
case 3523:
case 623:
case 4078:
case 2152:
case 1055:
case 2549:
case 1038:
case 530:
case 775:
case 1650:
case 4023:
case 3771:
case 3715:
case 2431:
case 3397:
case 884:
case 2325:
case 1897:
case 1566:
case 2161:
case 137:
case 1492:
case 29:
case 384:
case 910:
case 134:
case 3997:
case 206:
case 197:
case 23:
case 1603:
case 2628:
case 3168:
case 3216:
case 2439:
case 3779:
case 741:
case 2723:
case 1813:
case 3092:
case 1146:
case 1557:
case 3989:
case 2778:
case 3830:
case 2988:
case 2444:
case 506:
case 1760:
case 2748:
case 3381:
case 590:
case 2080:
case 2291:
case 2106:
case 2786:
case 1906:
case 3884:
case 3852:
case 3504:
case 695:
case 833:
case 484:
case 487:
case 876:
case 2517:
case 3995:
case 3221:
case 1009:
case 2792:
case 3023:
case 214:
case 937:
case 3048:
case 1538:
case 2049:
case 1125:
case 2022:
case 3970:
case 987:
case 3969:
case 4055:
case 1078:
case 1023:
case 810:
case 3009:
case 521:
case 4038:
case 624:
case 1793:
case 2539:
case 2665:
case 768:
case 508:
case 310:
case 3361:
case 3538:
case 1852:
case 208:
case 434:
case 3066:
case 883:
case 792:
case 2574:
case 3384:
case 3906:
case 176:
case 1698:
case 751:
case 1884:
case 2294:
case 221:
case 3250:
case 2471:
case 3330:
case 3404:
case 2233:
case 1830:
case 1779:
case 3127:
case 2195:
case 1092:
case 125:
case 3557:
case 1989:
case 993:
case 1749:
case 3881:
case 3760:
case 3232:
case 4057:
case 397:
case 2602:
case 1672:
case 2766:
case 1997:
case 2170:
case 1100:
case 3224:
case 2140:
case 1455:
case 1168:
case 2230:
case 2606:
case 1054:
case 716:
case 1082:
case 1310:
case 3763:
case 1646:
case 2332:
case 379:
case 3668:
case 452:
case 1103:
case 1987:
case 3559:
case 2535:
case 96:
case 2707:
case 879:
case 3005:
case 2324:
case 2143:
case 2816:
case 3172:
case 3714:
case 1747:
case 3965:
case 3236:
case 585:
case 4059:
case 3356:
case 1625:
case 920:
case 1856:
case 572:
case 267:
case 1020:
case 1459:
case 680:
case 509:
case 2187:
case 264:
case 2903:
case 1783:
case 1928:
case 2252:
case 1894:
case 1688:
case 1745:
case 646:
case 942:
case 1985:
case 2537:
case 2705:
case 3253:
case 3198:
case 3051:
case 1007:
case 3688:
case 2796:
case 1394:
case 881:
case 420:
case 2850:
case 1198:
case 630:
case 2321:
case 3020:
case 2782:
case 3459:
case 1356:
case 2165:
case 718:
case 2458:
case 860:
case 3518:
case 3790:
case 3777:
case 3096:
case 3987:
case 1559:
case 179:
case 648:
case 32:
case 2640:
case 1965:
case 102:
case 1600:
case 1005:
case 3726:
case 1418:
case 2316:
case 2824:
case 3747:
case 2213:
case 3082:
case 2011:
case 1810:
case 656:
case 235:
case 3833:
case 3676:
case 2998:
case 3054:
case 2832:
case 1763:
case 2695:
case 2167:
case 3646:
case 3212:
case 1891:
case 952:
case 2090:
case 46:
case 915:
case 1421:
case 3835:
case 199:
case 541:
case 3692:
case 647:
case 3977:
case 3858:
case 1358:
case 3787:
case 2085:
case 706:
case 566:
case 1182:
case 3947:
case 1765:
case 3516:
case 1154:
case 2798:
case 266:
case 1257:
case 355:
case 2494:
case 3686:
case 2920:
case 3799:
case 2043:
case 3072:
case 241:
case 3029:
case 1196:
case 3042:
case 2073:
case 2271:
case 1963:
case 971:
case 2591:
case 3623:
case 1609:
case 2163:
case 2679:
case 2087:
case 519:
case 3204:
case 2996:
case 3678:
case 2217:
case 489:
case 2622:
case 3162:
case 3521:
case 2954:
case 3151:
case 1666:
case 2114:
case 4021:
case 3983:
case 3990:
case 1819:
case 2729:
case 2634:
case 2318:
case 219:
case 2147:
case 3666:
case 2126:
case 3702:
case 657:
case 3255:
case 1728:
case 2703:
case 3238:
case 1945:
case 3609:
case 1623:
case 2065:
case 292:
case 439:
case 2244:
case 3550:
case 1975:
case 2660:
case 1799:
case 112:
case 1686:
case 3003:
case 1450:
case 3196:
case 4024:
case 2190:
case 3358:
case 2907:
case 1787:
case 2631:
case 3421:
case 1835:
case 2951:
case 3524:
case 3765:
case 78:
case 3154:
case 3182:
case 3914:
case 1789:
case 3841:
case 936:
case 1696:
case 2357:
case 90:
case 1512:
case 3960:
case 2301:
case 973:
case 440:
case 362:
case 632:
case 1453:
case 1949:
case 216:
case 785:
case 3186:
case 3000:
case 1797:
case 3815:
case 2193:
case 2180:
case 1682:
case 2235:
case 3259:
case 374:
case 877:
case 3536:
case 486:
case 1027:
case 1046:
case 898:
case 950:
case 628:
case 1740:
case 764:
case 3769:
case 3931:
case 2134:
case 1218:
case 1839:
case 3339:
case 2700:
case 1993:
case 2338:
case 1770:
case 3651:
case 2149:
case 3662:
case 2552:
case 2804:
case 2584:
case 2413:
case 709:
case 2481:
case 1109:
case 3123:
case 1844:
case 3553:
case 2179:
case 1148:
case 300:
case 3620:
case 518:
case 1662:
case 2097:
case 450:
case 1123:
case 800:
case 3109:
case 1553:
case 253:
case 1607:
case 1931:
case 3088:
case 553:
case 3740:
case 14:
case 3993:
case 3980:
case 1651:
case 2611:
case 1259:
case 3315:
case 940:
case 3797:
case 1536:
case 1192:
case 2461:
case 436:
case 2683:
case 3934:
case 174:
case 2131:
case 2857:
case 3696:
case 2484:
case 2513:
case 4012:
case 2452:
case 1068:
case 2070:
case 1871:
case 162:
case 3371:
case 682:
case 3922:
case 1186:
case 1605:
case 2675:
case 1960:
case 192:
case 1065:
case 3649:
case 776:
case 2785:
case 1905:
case 2648:
case 3217:
case 2678:
case 2945:
case 3433:
case 733:
case 3087:
case 3679:
case 3163:
case 2623:
case 1239:
case 2728:
case 319:
case 2424:
case 3318:
case 3634:
case 2983:
case 2319:
case 2107:
case 688:
case 2911:
case 819:
case 2743:
case 1147:
case 3114:
case 168:
case 2098:
case 2151:
case 2521:
case 3954:
case 650:
case 3693:
case 555:
case 2787:
case 1631:
case 3456:
case 2977:
case 1183:
case 482:
case 1359:
case 2692:
case 1067:
case 2835:
case 3591:
case 3073:
case 2042:
case 2450:
case 1145:
case 341:
case 2029:
case 1533:
case 4091:
case 2072:
case 3043:
case 2105:
case 366:
case 1271:
case 2196:
case 982:
case 4033:
case 1494:
case 1510:
case 166:
case 3962:
case 3533:
case 1043:
case 1241:
case 3111:
case 2154:
case 1680:
case 797:
case 3951:
case 2524:
case 778:
case 640:
case 2421:
case 3907:
case 1456:
case 3183:
case 3703:
case 2819:
case 1742:
case 2416:
case 3239:
case 3818:
case 4056:
case 1318:
case 710:
case 1954:
case 2702:
case 3126:
case 1982:
case 1772:
case 2666:
case 3556:
case 368:
case 638:
case 3905:
case 2120:
case 351:
case 3244:
case 1217:
case 392:
case 3491:
case 3065:
case 1622:
case 428:
case 3410:
case 1679:
case 1163:
case 2609:
case 2767:
case 1433:
case 975:
case 3561:
case 1838:
case 3700:
case 1626:
case 1647:
case 1677:
case 3464:
case 369:
case 0:
case 1089:
case 3768:
case 457:
case 807:
case 3663:
case 1746:
case 2344:
case 153:
case 4052:
case 3237:
case 304:
case 1108:
case 731:
case 307:
case 1160:
case 3413:
case 3552:
case 1097:
case 2374:
case 1430:
case 1986:
case 2706:
case 1801:
case 577:
case 671:
case 316:
case 1070:
case 2871:
case 3301:
case 1675:
case 1948:
case 4030:
case 1581:
case 3069:
case 3357:
case 1978:
case 3909:
case 1923:
case 1452:
case 3530:
case 574:
case 1095:
case 944:
case 779:
case 1131:
case 1683:
case 3966:
case 170:
case 3235:
case 298:
case 947:
case 3006:
case 3258:
case 1564:
case 2815:
case 3193:
case 4064:
case 3131:
case 3690:
case 2934:
case 72:
case 3683:
case 3095:
case 2027:
case 1006:
case 2654:
case 3564:
case 605:
case 1235:
case 143:
case 3675:
case 3948:
case 2922:
case 2453:
case 116:
case 447:
case 2371:
case 1301:
case 3040:
case 2789:
case 2979:
case 1069:
case 3978:
case 3645:
case 353:
case 1481:
case 47:
case 1179:
case 3727:
case 2844:
case 3746:
case 1804:
case 3776:
case 3986:
case 296:
case 1149:
case 107:
case 1584:
case 781:
case 1413:
case 2166:
case 2839:
case 3647:
case 3855:
case 2770:
case 954:
case 3219:
case 169:
case 3089:
case 2740:
case 689:
case 3992:
case 1768:
case 929:
case 2088:
case 3927:
case 233:
case 961:
case 3946:
case 1353:
case 1544:
case 430:
case 3517:
case 121:
case 3853:
case 946:
case 1574:
case 2504:
case 3976:
case 2698:
case 276:
case 4017:
case 3786:
case 1539:
case 2793:
case 3022:
case 1900:
case 576:
case 317:
case 2861:
case 2048:
case 817:
case 3079:
case 3792:
case 620:
case 2023:
case 2940:
case 890:
case 3439:
case 83:
case 1140:
case 3628:
case 3169:
case 806:
case 456:
case 2629:
case 2364:
case 2672:
case 2086:
case 1170:
case 3080:
case 2749:
case 4041:
case 2381:
case 3748:
case 712:
case 3571:
case 755:
case 3685:
case 3474:
case 3541:
case 4071:
case 1195:
case 2092:
case 1709:
case 2313:
case 1748:
case 652:
case 1106:
case 2881:
case 1080:
case 1312:
case 2176:
case 3709:
case 2146:
case 1723:
case 594:
case 2127:
case 3031:
case 3233:
case 1541:
case 1778:
case 2330:
case 1169:
case 3336:
case 1439:
case 2224:
case 1925:
case 106:
case 3170:
case 948:
case 278:
case 13:
case 3766:
case 190:
case 1515:
case 1643:
case 2864:
case 297:
case 38:
case 117:
case 446:
case 2361:
case 3060:
case 210:
case 3539:
case 1049:
case 1079:
case 1792:
case 3968:
case 2009:
case 461:
case 4039:
case 3008:
case 114:
case 2969:
case 930:
case 2731:
case 1687:
case 3353:
case 3471:
case 1517:
case 3544:
case 2250:
case 2188:
case 321:
case 1853:
case 745:
case 4074:
case 3189:
case 808:
case 458:
case 283:
case 1946:
case 3294:
case 2906:
case 821:
case 4044:
case 1699:
case 3574:
case 2066:
case 308:
case 3261:
case 1519:
case 1942:
case 3187:
case 3821:
case 1321:
case 1972:
case 1458:
case 1697:
case 2062:
case 2356:
case 2198:
case 1850:
case 963:
case 2051:
case 427:
case 2253:
case 3350:
case 3705:
case 1026:
case 3014:
case 1047:
case 872:
case 2394:
case 3284:
case 995:
case 3252:
case 911:
case 3332:
case 2763:
case 2891:
case 1281:
case 135:
case 2810:
case 1213:
case 3606:
case 2333:
case 1998:
case 777:
case 2600:
case 2236:
case 3419:
case 1670:
case 202:
case 3751:
case 2965:
case 798:
case 61:
case 1824:
case 2714:
case 3324:
case 3535:
case 3669:
case 3173:
case 2142:
case 1045:
case 2129:
case 3558:
case 279:
case 3128:
case 774:
case 3316:
case 2747:
case 2726:
case 3670:
case 1419:
case 1751:
case 3640:
case 22:
case 1128:
case 1669:
case 1535:
case 1707:
case 1173:
case 2391:
case 3437:
case 3090:
case 2212:
case 3083:
case 3695:
case 835:
case 2646:
case 2054:
case 1606:
case 3998:
case 1762:
case 2833:
case 665:
case 3011:
case 1185:
case 185:
case 1705:
case 323:
case 3026:
case 3047:
case 560:
case 172:
case 281:
case 1350:
case 823:
case 109:
case 1252:
case 3077:
case 2745:
case 2894:
case 1284:
case 3942:
case 2783:
case 2790:
case 684:
case 3929:
case 164:
case 2973:
case 1261:
case 2928:
case 924:
case 3519:
case 927:
case 3165:
case 3697:
case 3782:
case 1821:
case 167:
case 2020:
case 2711:
case 260:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757361601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,];
var gg_b = "1757361601/";

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
