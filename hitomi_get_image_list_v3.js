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
case 3747:
case 1656:
case 4042:
case 1280:
case 1220:
case 549:
case 3810:
case 2006:
case 3291:
case 2393:
case 1118:
case 1633:
case 946:
case 396:
case 1030:
case 2320:
case 1078:
case 2125:
case 1730:
case 3041:
case 9:
case 437:
case 1504:
case 1513:
case 1910:
case 2396:
case 1486:
case 2631:
case 347:
case 484:
case 4037:
case 2304:
case 3958:
case 1744:
case 3697:
case 1465:
case 3610:
case 3015:
case 481:
case 175:
case 1384:
case 2820:
case 2321:
case 3117:
case 2461:
case 2511:
case 2626:
case 3733:
case 4069:
case 51:
case 1212:
case 1301:
case 273:
case 3335:
case 1213:
case 773:
case 360:
case 68:
case 1079:
case 196:
case 1908:
case 2739:
case 1148:
case 553:
case 214:
case 3418:
case 265:
case 1183:
case 1494:
case 1171:
case 1603:
case 1988:
case 3850:
case 55:
case 2351:
case 2573:
case 1083:
case 3646:
case 1281:
case 2254:
case 3955:
case 2671:
case 2489:
case 2644:
case 3711:
case 3557:
case 2201:
case 5:
case 125:
case 2322:
case 3679:
case 2948:
case 2220:
case 179:
case 771:
case 1991:
case 250:
case 3596:
case 2173:
case 1298:
case 1501:
case 931:
case 3329:
case 3077:
case 334:
case 980:
case 2022:
case 2226:
case 2816:
case 242:
case 2942:
case 945:
case 3091:
case 2931:
case 2536:
case 2992:
case 2799:
case 2469:
case 521:
case 517:
case 1562:
case 1311:
case 3175:
case 2555:
case 2319:
case 2084:
case 1625:
case 747:
case 2384:
case 4066:
case 1574:
case 2347:
case 3780:
case 3625:
case 924:
case 3035:
case 2889:
case 2763:
case 1383:
case 782:
case 4059:
case 1845:
case 2515:
case 2414:
case 2363:
case 38:
case 3337:
case 2225:
case 2233:
case 3505:
case 3419:
case 3085:
case 2668:
case 721:
case 15:
case 22:
case 1995:
case 1434:
case 331:
case 3415:
case 1397:
case 1418:
case 3296:
case 2732:
case 3705:
case 39:
case 1271:
case 1587:
case 1293:
case 3990:
case 1297:
case 1962:
case 3295:
case 524:
case 2381:
case 3473:
case 1366:
case 3965:
case 103:
case 3323:
case 2204:
case 1588:
case 778:
case 3376:
case 1423:
case 2230:
case 2455:
case 2090:
case 558:
case 2751:
case 1701:
case 3793:
case 3510:
case 1343:
case 1277:
case 2971:
case 616:
case 2712:
case 1276:
case 1638:
case 1136:
case 3333:
case 2890:
case 2507:
case 2501:
case 3819:
case 2492:
case 1862:
case 1233:
case 2032:
case 2327:
case 77:
case 3886:
case 2468:
case 2172:
case 107:
case 3713:
case 2131:
case 2516:
case 1215:
case 511:
case 1676:
case 211:
case 3305:
case 3845:
case 1149:
case 486:
case 2360:
case 3009:
case 2104:
case 3120:
case 1696:
case 2796:
case 526:
case 3833:
case 3614:
case 1239:
case 1300:
case 1689:
case 2568:
case 3021:
case 3568:
case 1289:
case 3717:
case 3914:
case 3741:
case 1322:
case 961:
case 2130:
case 2498:
case 3726:
case 410:
case 2029:
case 116:
case 3212:
case 1344:
case 3113:
case 1958:
case 1783:
case 176:
case 1048:
case 2285:
case 1049:
case 1006:
case 3475:
case 619:
case 2497:
case 3396:
case 3249:
case 1019:
case 1458:
case 304:
case 3782:
case 394:
case 416:
case 3230:
case 3328:
case 1403:
case 868:
case 264:
case 1700:
case 2685:
case 1640:
case 2481:
case 3824:
case 3749:
case 2048:
case 1139:
case 1907:
case 1642:
case 1564:
case 3476:
case 2670:
case 302:
case 3020:
case 1660:
case 472:
case 3728:
case 3109:
case 1052:
case 1329:
case 2448:
case 3245:
case 2527:
case 2195:
case 889:
case 575:
case 3224:
case 2474:
case 1573:
case 3423:
case 1704:
case 2969:
case 2064:
case 1454:
case 1870:
case 2727:
case 3314:
case 2431:
case 1071:
case 655:
case 2275:
case 3611:
case 3262:
case 1219:
case 3401:
case 1002:
case 2879:
case 3720:
case 984:
case 698:
case 3447:
case 1943:
case 3131:
case 765:
case 118:
case 2286:
case 638:
case 641:
case 1407:
case 4027:
case 2861:
case 4063:
case 3643:
case 3634:
case 460:
case 3101:
case 3394:
case 268:
case 1786:
case 3061:
case 722:
case 1119:
case 1404:
case 3238:
case 3935:
case 640:
case 3588:
case 2002:
case 337:
case 1792:
case 335:
case 386:
case 1539:
case 1025:
case 36:
case 2870:
case 4095:
case 4007:
case 1349:
case 2787:
case 3219:
case 1429:
case 2508:
case 3053:
case 1003:
case 1172:
case 292:
case 100:
case 2075:
case 4087:
case 3917:
case 966:
case 415:
case 1688:
case 2100:
case 1843:
case 3837:
case 2956:
case 1325:
case 2299:
case 985:
case 202:
case 2614:
case 3852:
case 1575:
case 1473:
case 2447:
case 1578:
case 1142:
case 3097:
case 4029:
case 3374:
case 982:
case 2243:
case 3942:
case 3991:
case 120:
case 487:
case 1706:
case 3994:
case 3673:
case 3456:
case 2442:
case 3148:
case 3387:
case 2656:
case 1279:
case 165:
case 1124:
case 2109:
case 274:
case 3115:
case 3281:
case 3363:
case 3040:
case 1611:
case 701:
case 200:
case 3661:
case 3825:
case 3769:
case 2976:
case 2154:
case 1261:
case 2719:
case 2924:
case 2815:
case 3518:
case 2804:
case 1211:
case 3609:
case 3890:
case 3553:
case 3022:
case 2951:
case 3384:
case 1368:
case 148:
case 3388:
case 1033:
case 1847:
case 3441:
case 1081:
case 705:
case 2183:
case 2238:
case 2061:
case 902:
case 2309:
case 3591:
case 3417:
case 2420:
case 1034:
case 1378:
case 927:
case 1831:
case 1382:
case 3334:
case 761:
case 1203:
case 195:
case 1351:
case 1004:
case 3125:
case 1412:
case 1961:
case 1312:
case 1591:
case 2374:
case 3771:
case 2378:
case 2463:
case 2589:
case 569:
case 3454:
case 1395:
case 2119:
case 3066:
case 3589:
case 689:
case 3315:
case 602:
case 8:
case 1542:
case 692:
case 1375:
case 3253:
case 2288:
case 34:
case 2765:
case 1884:
case 1576:
case 1614:
case 740:
case 2713:
case 2426:
case 3970:
case 2094:
case 3555:
case 66:
case 1803:
case 59:
case 2706:
case 458:
case 3170:
case 1131:
case 3578:
case 1754:
case 3757:
case 657:
case 1235:
case 1010:
case 2422:
case 614:
case 79:
case 843:
case 189:
case 270:
case 2478:
case 2996:
case 952:
case 2205:
case 3048:
case 2613:
case 1178:
case 3490:
case 3881:
case 2788:
case 2157:
case 986:
case 2435:
case 3043:
case 258:
case 3428:
case 232:
case 1586:
case 4086:
case 3151:
case 2383:
case 1654:
case 3228:
case 3221:
case 414:
case 906:
case 3443:
case 385:
case 1677:
case 540:
case 2219:
case 1015:
case 172:
case 1431:
case 1721:
case 111:
case 2810:
case 491:
case 288:
case 608:
case 1493:
case 3213:
case 2280:
case 2033:
case 1273:
case 815:
case 3327:
case 2283:
case 673:
case 3573:
case 888:
case 2227:
case 1755:
case 516:
case 3105:
case 2358:
case 2138:
case 3857:
case 3628:
case 510:
case 578:
case 1287:
case 926:
case 1650:
case 571:
case 609:
case 2058:
case 3523:
case 243:
case 2800:
case 2506:
case 3039:
case 1996:
case 922:
case 573:
case 439:
case 1035:
case 2365:
case 2639:
case 2635:
case 1725:
case 921:
case 882:
case 2037:
case 3037:
case 1528:
case 156:
case 2050:
case 3320:
case 3821:
case 3841:
case 3217:
case 3083:
case 3621:
case 3383:
case 2105:
case 1489:
case 1912:
case 2701:
case 1865:
case 1899:
case 207:
case 1848:
case 3362:
case 4035:
case 1117:
case 564:
case 2208:
case 3377:
case 3201:
case 3407:
case 3530:
case 2276:
case 2840:
case 744:
case 3087:
case 2530:
case 2290:
case 2766:
case 40:
case 3227:
case 442:
case 2126:
case 3160:
case 185:
case 3904:
case 3332:
case 3848:
case 3300:
case 186:
case 3282:
case 3150:
case 3902:
case 2394:
case 2139:
case 2223:
case 247:
case 1217:
case 3863:
case 2642:
case 384:
case 1734:
case 3876:
case 4028:
case 1483:
case 3162:
case 1881:
case 3531:
case 3689:
case 3564:
case 3302:
case 1717:
case 3570:
case 3002:
case 881:
case 1105:
case 1123:
case 766:
case 2229:
case 370:
case 2274:
case 2778:
case 808:
case 1024:
case 199:
case 1886:
case 2866:
case 3434:
case 2342:
case 1509:
case 1252:
case 2779:
case 3049:
case 2549:
case 2918:
case 251:
case 16:
case 2607:
case 2693:
case 293:
case 4064:
case 2346:
case 1964:
case 847:
case 2827:
case 2005:
case 2944:
case 971:
case 3139:
case 3606:
case 3755:
case 1495:
case 1969:
case 3058:
case 3962:
case 2860:
case 3060:
case 2182:
case 949:
case 3054:
case 3976:
case 71:
case 1009:
case 3158:
case 230:
case 1254:
case 447:
case 3422:
case 3042:
case 482:
case 3846:
case 1379:
case 3543:
case 1679:
case 993:
case 1259:
case 204:
case 2901:
case 132:
case 936:
case 2932:
case 3317:
case 3381:
case 2848:
case 726:
case 1980:
case 4022:
case 1547:
case 3938:
case 693:
case 2180:
case 2997:
case 2453:
case 1663:
case 353:
case 3107:
case 3086:
case 1838:
case 2088:
case 3114:
case 287:
case 897:
case 3624:
case 54:
case 2990:
case 2534:
case 1225:
case 190:
case 3817:
case 2307:
case 478:
case 3687:
case 712:
case 3438:
case 343:
case 3470:
case 2801:
case 901:
case 1014:
case 3950:
case 3763:
case 2834:
case 2892:
case 535:
case 205:
case 3136:
case 3761:
case 3839:
case 2110:
case 3820:
case 1880:
case 1251:
case 248:
case 2171:
case 1342:
case 652:
case 2599:
case 2936:
case 504:
case 3731:
case 279:
case 2480:
case 3615:
case 3908:
case 3047:
case 3279:
case 3988:
case 967:
case 1459:
case 3121:
case 2073:
case 1743:
case 325:
case 3156:
case 1317:
case 899:
case 3437:
case 812:
case 1549:
case 3346:
case 21:
case 2696:
case 3256:
case 1267:
case 50:
case 3638:
case 1389:
case 3171:
case 2991:
case 3574:
case 3633:
case 269:
case 2617:
case 2809:
case 3724:
case 3919:
case 543:
case 3361:
case 3234:
case 3583:
case 1415:
case 3978:
case 2018:
case 4012:
case 1887:
case 2473:
case 3939:
case 2070:
case 2934:
case 1814:
case 3969:
case 3457:
case 3094:
case 3200:
case 1462:
case 760:
case 1582:
case 1746:
case 3956:
case 2686:
case 3899:
case 1655:
case 3681:
case 1353:
case 1335:
case 2438:
case 2864:
case 2764:
case 595:
case 166:
case 1498:
case 1657:
case 1761:
case 225:
case 3721:
case 2921:
case 3997:
case 153:
case 3905:
case 3812:
case 2003:
case 3792:
case 780:
case 1898:
case 2314:
case 3885:
case 996:
case 42:
case 4092:
case 2215:
case 2301:
case 2089:
case 2831:
case 2077:
case 1720:
case 3896:
case 2041:
case 464:
case 3288:
case 2754:
case 4079:
case 227:
case 351:
case 991:
case 3:
case 1894:
case 1350:
case 236:
case 3834:
case 3199:
case 832:
case 587:
case 3411:
case 1229:
case 3521:
case 1439:
case 3579:
case 1947:
case 917:
case 2995:
case 431:
case 1247:
case 599:
case 2311:
case 164:
case 4057:
case 1435:
case 2957:
case 2236:
case 667:
case 1260:
case 3887:
case 1264:
case 4050:
case 1535:
case 1944:
case 1930:
case 1370:
case 1445:
case 3657:
case 1891:
case 1998:
case 3891:
case 950:
case 2652:
case 318:
case 519:
case 660:
case 2910:
case 2118:
case 2160:
case 1623:
case 960:
case 2410:
case 2953:
case 3796:
case 2646:
case 2519:
case 3813:
case 113:
case 2116:
case 3779:
case 3392:
case 2340:
case 3250:
case 2026:
case 2015:
case 1152:
case 1314:
case 1740:
case 1729:
case 3370:
case 2120:
case 3304:
case 1129:
case 3185:
case 1401:
case 874:
case 2153:
case 178:
case 1976:
case 3851:
case 453:
case 907:
case 3290:
case 737:
case 3566:
case 857:
case 2291:
case 2981:
case 1815:
case 1559:
case 3007:
case 976:
case 2148:
case 3421:
case 2004:
case 2150:
case 644:
case 3431:
case 3489:
case 887:
case 1352:
case 1446:
case 3685:
case 1061:
case 114:
case 2636:
case 261:
case 128:
case 3416:
case 3639:
case 548:
case 3372:
case 1742:
case 2470:
case 3466:
case 1916:
case 3827:
case 249:
case 628:
case 3341:
case 412:
case 3348:
case 44:
case 3488:
case 3520:
case 2371:
case 2361:
case 4093:
case 1810:
case 1179:
case 522:
case 2388:
case 3116:
case 568:
case 3666:
case 939:
case 3468:
case 226:
case 2441:
case 3127:
case 659:
case 2111:
case 1296:
case 690:
case 2514:
case 3469:
case 3503:
case 1826:
case 2517:
case 1096:
case 1621:
case 171:
case 2454:
case 3529:
case 3943:
case 2343:
case 2937:
case 1426:
case 978:
case 2269:
case 1480:
case 884:
case 155:
case 3318:
case 3355:
case 90:
case 1858:
case 1835:
case 2189:
case 854:
case 97:
case 879:
case 3677:
case 1180:
case 805:
case 3691:
case 1552:
case 2859:
case 119:
case 4074:
case 3480:
case 837:
case 216:
case 2968:
case 88:
case 2323:
case 3129:
case 2421:
case 727:
case 446:
case 617:
case 1620:
case 374:
case 1762:
case 731:
case 1805:
case 1937:
case 1927:
case 56:
case 871:
case 3122:
case 271:
case 3191:
case 3395:
case 102:
case 73:
case 3554:
case 970:
case 1955:
case 620:
case 702:
case 817:
case 3450:
case 1164:
case 2476:
case 3907:
case 534:
case 3093:
case 2807:
case 631:
case 1774:
case 2060:
case 1108:
case 2684:
case 3099:
case 839:
case 3461:
case 2356:
case 1601:
case 527:
case 1645:
case 3608:
case 2065:
case 1972:
case 2164:
case 2329:
case 1897:
case 565:
case 2867:
case 3433:
case 3783:
case 3944:
case 1064:
case 4015:
case 3967:
case 677:
case 1345:
case 824:
case 1631:
case 3723:
case 953:
case 1619:
case 2332:
case 2302:
case 2167:
case 3884:
case 858:
case 3112:
case 2610:
case 1295:
case 1500:
case 1984:
case 3909:
case 2209:
case 367:
case 259:
case 2445:
case 2929:
case 3785:
case 2027:
case 3088:
case 1145:
case 1752:
case 2838:
case 1719:
case 490:
case 1981:
case 2886:
case 1854:
case 1751:
case 3202:
case 3084:
case 1441:
case 1800:
case 1597:
case 0:
case 2525:
case 1285:
case 1481:
case 3513:
case 670:
case 1:
case 2443:
case 3336:
case 2620:
case 2354:
case 1262:
case 844:
case 3773:
case 2594:
case 3598:
case 3937:
case 1581:
case 3103:
case 1538:
case 3775:
case 3285:
case 252:
case 3181:
case 1402:
case 3134:
case 3255:
case 3365:
case 3676:
case 3244:
case 1341:
case 3102:
case 311:
case 772:
case 2678:
case 3342:
case 244:
case 999:
case 1856:
case 1757:
case 840:
case 2716:
case 3675:
case 962:
case 725:
case 2538:
case 1550:
case 777:
case 2982:
case 580:
case 319:
case 3665:
case 1928:
case 4014:
case 2078:
case 2760:
case 323:
case 583:
case 3090:
case 637:
case 1750:
case 3014:
case 860:
case 117:
case 665:
case 1433:
case 1911:
case 177:
case 1973:
case 3693:
case 3897:
case 2407:
case 1416:
case 110:
case 3980:
case 2986:
case 710:
case 2849:
case 3707:
case 2531:
case 3903:
case 589:
case 298:
case 2774:
case 3435:
case 320:
case 433:
case 3998:
case 3514:
case 3662:
case 3844:
case 3587:
case 3154:
case 2702:
case 514:
case 4032:
case 1133:
case 1249:
case 2257:
case 4047:
case 480:
case 4056:
case 2999:
case 2648:
case 3159:
case 3620:
case 3642:
case 94:
case 2063:
case 2364:
case 3888:
case 3699:
case 1331:
case 3594:
case 2324:
case 912:
case 3133:
case 3858:
case 2471:
case 2017:
case 813:
case 965:
case 316:
case 576:
case 245:
case 1639:
case 2856:
case 658:
case 3195:
case 682:
case 661:
case 2679:
case 1102:
case 2035:
case 826:
case 3104:
case 2179:
case 1592:
case 2409:
case 3581:
case 2720:
case 875:
case 969:
case 3672:
case 3840:
case 2700:
case 1154:
case 861:
case 3541:
case 1134:
case 1938:
case 3946:
case 3829:
case 2137:
case 3877:
case 1951:
case 2505:
case 105:
case 1332:
case 2496:
case 1186:
case 932:
case 266:
case 2008:
case 3420:
case 1308:
case 828:
case 3033:
case 2115:
case 1561:
case 3155:
case 443:
case 3452:
case 3966:
case 1918:
case 3368:
case 1692:
case 1076:
case 3019:
case 489:
case 1138:
case 1208:
case 662:
case 732:
case 3186:
case 1084:
case 706:
case 4055:
case 2124:
case 2736:
case 1487:
case 1604:
case 404:
case 2325:
case 162:
case 2181:
case 3584:
case 1090:
case 1533:
case 2824:
case 359:
case 282:
case 1823:
case 2907:
case 538:
case 1850:
case 1837:
case 2433:
case 3502:
case 2482:
case 1419:
case 1811:
case 3236:
case 1475:
case 848:
case 2158:
case 1760:
case 1992:
case 1461:
case 2062:
case 1001:
case 720:
case 3504:
case 1318:
case 3235:
case 146:
case 582:
case 2926:
case 728:
case 1511:
case 2382:
case 285:
case 3836:
case 541:
case 1599:
case 2837:
case 3406:
case 1091:
case 151:
case 3196:
case 3380:
case 3449:
case 2654:
case 2757:
case 3659:
case 3695:
case 1055:
case 1060:
case 1085:
case 956:
case 1361:
case 3868:
case 25:
case 467:
case 157:
case 1380:
case 2681:
case 1141:
case 3567:
case 842:
case 1367:
case 2051:
case 2915:
case 2896:
case 2331:
case 2746:
case 915:
case 2430:
case 3012:
case 542:
case 2277:
case 1406:
case 3453:
case 1484:
case 3730:
case 2911:
case 610:
case 3808:
case 6:
case 138:
case 3354:
case 1315:
case 3216:
case 1413:
case 2149:
case 1548:
case 3082:
case 2524:
case 3484:
case 2200:
case 436:
case 3870:
case 3260:
case 1758:
case 577:
case 407:
case 1174:
case 2943:
case 1904:
case 3073:
case 2844:
case 2192:
case 544:
case 1821:
case 2185:
case 3682:
case 3312:
case 1399:
case 735:
case 2676:
case 1878:
case 1716:
case 2241:
case 2841:
case 4088:
case 3023:
case 2177:
case 1544:
case 2133:
case 2452:
case 399:
case 2252:
case 2121:
case 957:
case 2772:
case 2369:
case 3110:
case 2707:
case 3197:
case 916:
case 833:
case 2168:
case 3756:
case 3636:
case 3240:
case 855:
case 2339:
case 555:
case 2142:
case 3203:
case 3790:
case 990:
case 167:
case 3787:
case 1304:
case 2744:
case 3849:
case 3963:
case 1425:
case 2176:
case 275:
case 1420:
case 632:
case 503:
case 1807:
case 3855:
case 3364:
case 1018:
case 1872:
case 3927:
case 3815:
case 3242:
case 2828:
case 430:
case 1545:
case 1860:
case 333:
case 1819:
case 2539:
case 2333:
case 2161:
case 2600:
case 390:
case 168:
case 2359:
case 1732:
case 3936:
case 2988:
case 2669:
case 2248:
case 1326:
case 2013:
case 497:
case 3425:
case 3874:
case 877:
case 3128:
case 2711:
case 3696:
case 1946:
case 2522:
case 531:
case 4081:
case 686:
case 1693:
case 3737:
case 1874:
case 91:
case 1844:
case 1796:
case 2692:
case 3860:
case 432:
case 998:
case 363:
case 4034:
case 3580:
case 3537:
case 903:
case 297:
case 2313:
case 1161:
case 1698:
case 2206:
case 1839:
case 46:
case 2913:
case 2602:
case 3462:
case 3989:
case 2580:
case 1524:
case 361:
case 3930:
case 1617:
case 822:
case 1971:
case 1227:
case 1288:
case 1714:
case 2683:
case 239:
case 1771:
case 2903:
case 3768:
case 2812:
case 1997:
case 1560:
case 1806:
case 2464:
case 2632:
case 1469:
case 2350:
case 2467:
case 2155:
case 834:
case 3525:
case 1305:
case 1116:
case 554:
case 1952:
case 3572:
case 1476:
case 2709:
case 2529:
case 557:
case 1257:
case 3788:
case 3698:
case 3640:
case 3478:
case 1206:
case 1054:
case 1488:
case 1303:
case 2310:
case 1363:
case 3208:
case 3485:
case 618:
case 579:
case 312:
case 1376:
case 327:
case 1852:
case 3622:
case 3390:
case 935:
case 2134:
case 2658:
case 2019:
case 3650:
case 3517:
case 838:
case 2900:
case 1464:
case 2459:
case 397:
case 3814:
case 2959:
case 3251:
case 3402:
case 1593:
case 3869:
case 1735:
case 3601:
case 869:
case 2486:
case 2854:
case 3161:
case 4046:
case 1386:
case 1460:
case 862:
case 3385:
case 3866:
case 1857:
case 1851:
case 1185:
case 2657:
case 1885:
case 2231:
case 4068:
case 135:
case 1132:
case 3799:
case 2305:
case 1125:
case 635:
case 3618:
case 3992:
case 2122:
case 41:
case 622:
case 2666:
case 2174:
case 3211:
case 3762:
case 3027:
case 913:
case 2725:
case 2618:
case 1278:
case 3446:
case 2010:
case 1921:
case 4008:
case 2972:
case 3283:
case 1820:
case 147:
case 768:
case 1648:
case 3826:
case 2025:
case 228:
case 1695:
case 1525:
case 3906:
case 642:
case 1665:
case 3532:
case 3522:
case 3357:
case 2571:
case 1167:
case 3130:
case 3277:
case 2203:
case 4062:
case 2020:
case 3700:
case 4019:
case 2318:
case 1031:
case 1248:
case 2558:
case 2623:
case 1813:
case 1553:
case 3472:
case 1932:
case 1160:
case 2680:
case 1728:
case 1784:
case 3933:
case 1781:
case 3306:
case 738:
case 525:
case 630:
case 1974:
case 1169:
case 2880:
case 2660:
case 342:
case 1568:
case 1950:
case 488:
case 2601:
case 115:
case 1354:
case 691:
case 3772:
case 585:
case 2521:
case 3135:
case 2893:
case 2733:
case 238:
case 1114:
case 2067:
case 1812:
case 3971:
case 3894:
case 301:
case 987:
case 223:
case 2462:
case 704:
case 2604:
case 494:
case 1427:
case 2457:
case 746:
case 975:
case 1724:
case 885:
case 329:
case 536:
case 2933:
case 3289:
case 246:
case 2853:
case 3444:
case 4017:
case 574:
case 2603:
case 1245:
case 1905:
case 829:
case 2087:
case 2202:
case 2960:
case 572:
case 3271:
case 505:
case 2021:
case 2923:
case 820:
case 810:
case 1042:
case 3660:
case 2509:
case 2080:
case 2737:
case 1491:
case 1364:
case 2645:
case 767:
case 3192:
case 1788:
case 3030:
case 830:
case 1532:
case 3301:
case 2145:
case 3647:
case 3389:
case 4070:
case 2379:
case 1791:
case 136:
case 719:
case 170:
case 3751:
case 3051:
case 2945:
case 663:
case 2723:
case 13:
case 1282:
case 2775:
case 979:
case 2624:
case 678:
case 3540:
case 1438:
case 3261:
case 3571:
case 2427:
case 438:
case 2830:
case 1246:
case 4025:
case 1198:
case 3794:
case 1769:
case 3928:
case 2906:
case 1455:
case 1286:
case 2544:
case 429:
case 3268:
case 816:
case 3629:
case 2898:
case 143:
case 2234:
case 1855:
case 474:
case 4024:
case 4061:
case 4006:
case 445:
case 2300:
case 267:
case 366:
case 420:
case 3410:
case 2353:
case 2938:
case 2605:
case 653:
case 3805:
case 72:
case 11:
case 1373:
case 2865:
case 1869:
case 2954:
case 1216:
case 3940:
case 2876:
case 2564:
case 1275:
case 1362:
case 729:
case 3339:
case 2400:
case 3658:
case 3552:
case 1016:
case 131:
case 2132:
case 2750:
case 2213:
case 1598:
case 3915:
case 198:
case 379:
case 1572:
case 3619:
case 1853:
case 1670:
case 3791:
case 1519:
case 2355:
case 3149:
case 2413:
case 60:
case 2170:
case 2391:
case 1028:
case 1485:
case 633:
case 2217:
case 191:
case 1523:
case 799:
case 2637:
case 427:
case 1037:
case 2941:
case 2024:
case 2052:
case 2066:
case 2273:
case 3931:
case 1153:
case 529:
case 1099:
case 2152:
case 1737:
case 1577:
case 709:
case 1422:
case 2869:
case 451:
case 1793:
case 350:
case 2574:
case 1268:
case 1801:
case 2419:
case 1068:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1684645202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,];
var gg_b = "1684645202/";

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
