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
case 3039:
case 2874:
case 3593:
case 2186:
case 1560:
case 3522:
case 1495:
case 1516:
case 1176:
case 3344:
case 30:
case 3123:
case 1887:
case 397:
case 278:
case 1558:
case 1135:
case 3571:
case 2488:
case 3046:
case 3347:
case 1815:
case 3846:
case 3327:
case 2074:
case 5:
case 2856:
case 326:
case 2179:
case 3938:
case 2301:
case 2893:
case 3653:
case 4005:
case 216:
case 3940:
case 257:
case 1908:
case 1209:
case 852:
case 2149:
case 2168:
case 396:
case 1116:
case 1836:
case 282:
case 1297:
case 1337:
case 1258:
case 1262:
case 500:
case 851:
case 325:
case 589:
case 1493:
case 1574:
case 827:
case 2553:
case 3006:
case 850:
case 3621:
case 3963:
case 2738:
case 3700:
case 640:
case 3904:
case 660:
case 3853:
case 2698:
case 276:
case 1300:
case 1051:
case 737:
case 1303:
case 2395:
case 2757:
case 1509:
case 2120:
case 3934:
case 3274:
case 139:
case 2458:
case 3579:
case 720:
case 3840:
case 3125:
case 1638:
case 1883:
case 2690:
case 3893:
case 817:
case 1350:
case 502:
case 472:
case 1728:
case 2323:
case 1869:
case 1941:
case 548:
case 378:
case 539:
case 656:
case 3295:
case 1014:
case 1788:
case 2032:
case 2896:
case 2912:
case 3999:
case 1955:
case 3500:
case 3723:
case 38:
case 4091:
case 250:
case 3806:
case 1439:
case 546:
case 1919:
case 3915:
case 3824:
case 1167:
case 2393:
case 1223:
case 3771:
case 974:
case 59:
case 2573:
case 1923:
case 3232:
case 107:
case 2857:
case 3179:
case 2232:
case 206:
case 26:
case 464:
case 1332:
case 1616:
case 3374:
case 2668:
case 3229:
case 35:
case 20:
case 1731:
case 3704:
case 2315:
case 3212:
case 3193:
case 2962:
case 1340:
case 300:
case 554:
case 1016:
case 3467:
case 3495:
case 3304:
case 2823:
case 2001:
case 2112:
case 236:
case 612:
case 1:
case 2413:
case 3552:
case 1607:
case 1053:
case 127:
case 1549:
case 3817:
case 3339:
case 715:
case 3783:
case 1862:
case 811:
case 976:
case 3973:
case 2627:
case 2428:
case 3819:
case 2281:
case 3551:
case 2899:
case 169:
case 3203:
case 3210:
case 1504:
case 73:
case 2234:
case 3354:
case 1917:
case 1389:
case 3088:
case 2992:
case 1976:
case 2613:
case 482:
case 3135:
case 936:
case 528:
case 3030:
case 3214:
case 1898:
case 3828:
case 390:
case 1685:
case 2909:
case 621:
case 1767:
case 1068:
case 3308:
case 3984:
case 1622:
case 2118:
case 654:
case 809:
case 926:
case 3036:
case 768:
case 2031:
case 810:
case 885:
case 123:
case 421:
case 3430:
case 3841:
case 2943:
case 1907:
case 1733:
case 2157:
case 1003:
case 700:
case 3411:
case 3281:
case 2294:
case 2219:
case 1567:
case 3694:
case 2523:
case 1732:
case 1041:
case 1952:
case 1950:
case 1082:
case 2511:
case 2775:
case 916:
case 3691:
case 370:
case 1310:
case 686:
case 2326:
case 3016:
case 4002:
case 3672:
case 3434:
case 1787:
case 2068:
case 1604:
case 1422:
case 1282:
case 1011:
case 4068:
case 3799:
case 1406:
case 3436:
case 3892:
case 3122:
case 1791:
case 3914:
case 1512:
case 2733:
case 3980:
case 2128:
case 1353:
case 561:
case 3472:
case 3330:
case 354:
case 2657:
case 918:
case 2950:
case 1578:
case 1761:
case 374:
case 3561:
case 2432:
case 463:
case 1644:
case 3386:
case 1057:
case 3689:
case 927:
case 842:
case 2045:
case 1729:
case 838:
case 2450:
case 156:
case 3557:
case 3512:
case 2107:
case 993:
case 1099:
case 2913:
case 1794:
case 3042:
case 3092:
case 1519:
case 3020:
case 140:
case 2780:
case 3842:
case 3044:
case 2071:
case 726:
case 1370:
case 1692:
case 1375:
case 3987:
case 1128:
case 1894:
case 3916:
case 2568:
case 517:
case 2985:
case 238:
case 1659:
case 27:
case 1201:
case 1678:
case 3609:
case 2878:
case 467:
case 3412:
case 1245:
case 1861:
case 2109:
case 2565:
case 1673:
case 1777:
case 2039:
case 2291:
case 2018:
case 2641:
case 3572:
case 1624:
case 1967:
case 874:
case 2769:
case 1572:
case 1666:
case 3873:
case 2310:
case 983:
case 937:
case 2293:
case 178:
case 3998:
case 1230:
case 465:
case 1147:
case 3451:
case 3600:
case 3680:
case 1569:
case 1143:
case 2541:
case 292:
case 3387:
case 892:
case 971:
case 2084:
case 2861:
case 1202:
case 3871:
case 247:
case 2870:
case 3729:
case 1891:
case 167:
case 1628:
case 1274:
case 2535:
case 4064:
case 1224:
case 2312:
case 1352:
case 2085:
case 802:
case 279:
case 3313:
case 714:
case 1694:
case 2931:
case 1721:
case 1889:
case 615:
case 744:
case 3909:
case 2886:
case 2688:
case 1257:
case 13:
case 2555:
case 3359:
case 770:
case 122:
case 3181:
case 3720:
case 2452:
case 3875:
case 1698:
case 2808:
case 2590:
case 1748:
case 3121:
case 3643:
case 1431:
case 218:
case 1542:
case 3478:
case 1544:
case 2322:
case 2855:
case 3469:
case 1726:
case 3944:
case 2571:
case 3363:
case 3623:
case 2964:
case 1648:
case 1975:
case 3789:
case 1693:
case 3971:
case 1657:
case 2745:
case 1152:
case 154:
case 557:
case 1270:
case 3010:
case 2988:
case 1583:
case 460:
case 878:
case 1345:
case 3626:
case 3930:
case 2072:
case 2957:
case 351:
case 3666:
case 1228:
case 358:
case 2946:
case 384:
case 3328:
case 3297:
case 2693:
case 1662:
case 2850:
case 3480:
case 3747:
case 3912:
case 4048:
case 1720:
case 961:
case 3375:
case 2634:
case 2884:
case 2731:
case 673:
case 1798:
case 668:
case 1988:
case 1943:
case 3199:
case 3420:
case 3113:
case 1704:
case 2419:
case 2625:
case 2052:
case 881:
case 2261:
case 4017:
case 2284:
case 1388:
case 1469:
case 2687:
case 1368:
case 321:
case 80:
case 1701:
case 913:
case 3165:
case 2485:
case 3741:
case 2199:
case 83:
case 3711:
case 1373:
case 1459:
case 2572:
case 3050:
case 3874:
case 3525:
case 2483:
case 2190:
case 3096:
case 2752:
case 2709:
case 3686:
case 11:
case 453:
case 1554:
case 1381:
case 2917:
case 607:
case 1071:
case 3355:
case 184:
case 2123:
case 2631:
case 1775:
case 2268:
case 2175:
case 1606:
case 3558:
case 1671:
case 2024:
case 1745:
case 2075:
case 2318:
case 4080:
case 630:
case 1828:
case 3518:
case 587:
case 3164:
case 2830:
case 2771:
case 3685:
case 3379:
case 873:
case 3527:
case 2198:
case 779:
case 3216:
case 1982:
case 2518:
case 3548:
case 2630:
case 1534:
case 2364:
case 90:
case 616:
case 1132:
case 1244:
case 2116:
case 3399:
case 1746:
case 2362:
case 147:
case 3775:
case 2493:
case 1268:
case 703:
case 1267:
case 2651:
case 1140:
case 392:
case 1287:
case 2786:
case 2822:
case 1786:
case 1444:
case 763:
case 2436:
case 77:
case 2221:
case 4003:
case 2918:
case 799:
case 1547:
case 308:
case 1175:
case 1594:
case 3110:
case 2813:
case 1457:
case 562:
case 1747:
case 2952:
case 2716:
case 1710:
case 584:
case 1187:
case 1573:
case 1600:
case 3769:
case 1387:
case 2974:
case 3185:
case 604:
case 498:
case 2265:
case 4006:
case 3697:
case 2333:
case 3204:
case 2960:
case 1831:
case 4032:
case 915:
case 1248:
case 4066:
case 2008:
case 423:
case 3371:
case 76:
case 1356:
case 1849:
case 3247:
case 1994:
case 3696:
case 3126:
case 144:
case 3171:
case 819:
case 3611:
case 2217:
case 180:
case 1864:
case 2646:
case 2961:
case 4020:
case 2494:
case 1235:
case 356:
case 1810:
case 1289:
case 1094:
case 2618:
case 2376:
case 2355:
case 98:
case 3238:
case 3021:
case 2949:
case 2561:
case 2029:
case 2210:
case 701:
case 579:
case 3144:
case 3285:
case 3271:
case 2335:
case 2468:
case 365:
case 774:
case 2218:
case 1537:
case 3189:
case 3415:
case 1737:
case 1342:
case 1386:
case 3913:
case 3804:
case 2415:
case 2817:
case 3821:
case 2142:
case 3276:
case 86:
case 2824:
case 2304:
case 3477:
case 3669:
case 650:
case 3802:
case 1414:
case 2966:
case 884:
case 1328:
case 1216:
case 3665:
case 1980:
case 3112:
case 2601:
case 1781:
case 1338:
case 3596:
case 1524:
case 2710:
case 2660:
case 2410:
case 2223:
case 2750:
case 3702:
case 1557:
case 203:
case 3954:
case 2548:
case 1466:
case 3128:
case 2789:
case 2761:
case 4073:
case 1597:
case 515:
case 1960:
case 619:
case 3482:
case 2534:
case 284:
case 1436:
case 3570:
case 3777:
case 2172:
case 1867:
case 3606:
case 2331:
case 55:
case 1137:
case 17:
case 2923:
case 2833:
case 1711:
case 1814:
case 1536:
case 259:
case 124:
case 1214:
case 1545:
case 3807:
case 3587:
case 248:
case 580:
case 3440:
case 932:
case 1922:
case 3879:
case 2521:
case 1530:
case 713:
case 3728:
case 3474:
case 3102:
case 2191:
case 787:
case 3911:
case 1502:
case 2083:
case 1872:
case 957:
case 1092:
case 3772:
case 985:
case 2820:
case 312:
case 2144:
case 644:
case 285:
case 349:
case 3629:
case 568:
case 2135:
case 1738:
case 3413:
case 1322:
case 3974:
case 2236:
case 2967:
case 1219:
case 3715:
case 2260:
case 1314:
case 2351:
case 2296:
case 790:
case 2434:
case 2516:
case 128:
case 776:
case 290:
case 1129:
case 2578:
case 717:
case 958:
case 2272:
case 316:
case 1997:
case 4056:
case 275:
case 3148:
case 3589:
case 626:
case 3759:
case 1261:
case 1317:
case 256:
case 1817:
case 2065:
case 3523:
case 938:
case 386:
case 3655:
case 152:
case 3668:
case 4042:
case 32:
case 2705:
case 1826:
case 2831:
case 3825:
case 263:
case 3269:
case 4057:
case 1608:
case 1592:
case 1321:
case 559:
case 2549:
case 695:
case 2812:
case 2092:
case 1131:
case 3270:
case 716:
case 1409:
case 2520:
case 1986:
case 1164:
case 181:
case 371:
case 3205:
case 760:
case 3301:
case 4000:
case 3219:
case 3955:
case 2007:
case 2818:
case 3722:
case 183:
case 1533:
case 1848:
case 1076:
case 1766:
case 2451:
case 721:
case 3962:
case 904:
case 46:
case 2017:
case 2394:
case 4016:
case 1598:
case 3845:
case 683:
case 3080:
case 2379:
case 407:
case 3307:
case 1571:
case 3111:
case 302:
case 339:
case 1903:
case 1091:
case 1048:
case 37:
case 1062:
case 1192:
case 2866:
case 541:
case 2327:
case 598:
case 2194:
case 2470:
case 1032:
case 3086:
case 552:
case 3751:
case 1432:
case 24:
case 4043:
case 1992:
case 1212:
case 447:
case 3458:
case 2125:
case 3494:
case 2188:
case 1931:
case 3889:
case 906:
case 2076:
case 327:
case 1576:
case 808:
case 3905:
case 1302:
case 3868:
case 2061:
case 1346:
case 114:
case 3017:
case 1523:
case 772:
case 1719:
case 812:
case 476:
case 2215:
case 2156:
case 1995:
case 2056:
case 1832:
case 844:
case 4033:
case 2354:
case 3215:
case 1993:
case 3315:
case 1018:
case 3138:
case 4054:
case 3546:
case 350:
case 2414:
case 2713:
case 64:
case 2717:
case 2387:
case 1222:
case 1226:
case 1170:
case 1489:
case 1627:
case 1477:
case 3002:
case 1239:
case 1263:
case 2113:
case 578:
case 380:
case 980:
case 1842:
case 594:
case 1189:
case 973:
case 2390:
case 2173:
case 2350:
case 3244:
case 1122:
case 1393:
case 1926:
case 3567:
case 1854:
case 1415:
case 3085:
case 3084:
case 426:
case 1139:
case 833:
case 1359:
case 4037:
case 2663:
case 1479:
case 547:
case 2770:
case 1843:
case 249:
case 803:
case 509:
case 419:
case 710:
case 4076:
case 1881:
case 1953:
case 897:
case 2570:
case 1964:
case 468:
case 499:
case 2865:
case 749:
case 840:
case 2259:
case 3280:
case 1293:
case 473:
case 3967:
case 2455:
case 3675:
case 2976:
case 3045:
case 2692:
case 221:
case 3405:
case 3601:
case 3252:
case 2933:
case 1801:
case 2490:
case 3959:
case 2262:
case 2459:
case 258:
case 1002:
case 865:
case 3108:
case 303:
case 3265:
case 3595:
case 1897:
case 780:
case 3031:
case 2046:
case 237:
case 3925:
case 917:
case 711:
case 2814:
case 3132:
case 1146:
case 977:
case 2832:
case 2208:
case 2497:
case 214:
case 835:
case 1424:
case 1546:
case 4015:
case 3739:
case 2306:
case 2314:
case 1021:
case 2567:
case 2250:
case 1824:
case 3117:
case 400:
case 3671:
case 3628:
case 1326:
case 3726:
case 1103:
case 2801:
case 1319:
case 2166:
case 2938:
case 800:
case 1760:
case 822:
case 2165:
case 2810:
case 3240:
case 1979:
case 348:
case 233:
case 2475:
case 1902:
case 648:
case 388:
case 1180:
case 807:
case 3025:
case 620:
case 336:
case 1390:
case 2400:
case 2910:
case 544:
case 1812:
case 1252:
case 818:
case 3575:
case 3519:
case 4050:
case 165:
case 1759:
case 2500:
case 379:
case 3453:
case 3763:
case 3153:
case 2682:
case 3537:
case 2607:
case 3176:
case 1452:
case 2720:
case 2014:
case 3778:
case 3429:
case 1111:
case 3146:
case 3177:
case 2184:
case 313:
case 860:
case 2242:
case 3827:
case 3180:
case 1669:
case 1860:
case 352:
case 3140:
case 745:
case 2108:
case 1978:
case 1850:
case 1033:
case 3939:
case 1473:
case 1273:
case 1758:
case 2740:
case 3794:
case 2418:
case 981:
case 919:
case 637:
case 3830:
case 1840:
case 870:
case 2121:
case 1265:
case 2753:
case 1398:
case 2161:
case 740:
case 78:
case 2754:
case 3312:
case 177:
case 121:
case 1564:
case 133:
case 324:
case 2380:
case 2724:
case 116:
case 2715:
case 251:
case 310:
case 2226:
case 3062:
case 1740:
case 274:
case 3325:
case 2704:
case 558:
case 1665:
case 1709:
case 651:
case 2145:
case 3560:
case 3256:
case 2132:
case 2064:
case 369:
case 126:
case 413:
case 571:
case 1458:
case 4009:
case 1703:
case 2099:
case 1254:
case 1278:
case 4021:
case 1527:
case 3336:
case 3947:
case 622:
case 3130:
case 2044:
case 269:
case 2661:
case 2282:
case 1744:
case 1093:
case 634:
case 3906:
case 2703:
case 3120:
case 3907:
case 2424:
case 1442:
case 1006:
case 3390:
case 2285:
case 1250:
case 3865:
case 635:
case 1362:
case 3864:
case 3605:
case 3254:
case 814:
case 331:
case 1968:
case 4023:
case 946:
case 2903:
case 1647:
case 1311:
case 1039:
case 3568:
case 1973:
case 3294:
case 1005:
case 1713:
case 150:
case 1497:
case 1460:
case 1514:
case 220:
case 3466:
case 1596:
case 3460:
case 2569:
case 1196:
case 2902:
case 2106:
case 3577:
case 84:
case 2971:
case 3100:
case 3009:
case 1151:
case 2877:
case 2359:
case 3485:
case 4041:
case 2816:
case 712:
case 1113:
case 212:
case 323:
case 1136:
case 3801:
case 3812:
case 1957:
case 2906:
case 2240:
case 2454:
case 385:
case 2695:
case 3924:
case 3023:
case 3291:
case 628:
case 2222:
case 3048:
case 1866:
case 2227:
case 555:
case 428:
case 4052:
case 3717:
case 1455:
case 1853:
case 2811:
case 344:
case 3850:
case 746:
case 1323:
case 433:
case 143:
case 3833:
case 2581:
case 997:
case 3306:
case 1689:
case 3104:
case 3529:
case 510:
case 444:
case 2042:
case 3156:
case 106:
case 3231:
case 3627:
case 1307:
case 2158:
case 1918:
case 1229:
case 1448:
case 3798:
case 3550:
case 2119:
case 525:
case 891:
case 992:
case 2609:
case 110:
case 3168:
case 2783:
case 1430:
case 606:
case 1966:
case 2174:
case 6:
case 4039:
case 2999:
case 1691:
case 3882:
case 3636:
case 1124:
case 2557:
case 907:
case 88:
case 1013:
case 2012:
case 1283:
case 1040:
case 2711:
case 672:
case 722:
case 320:
case 3067:
case 2278:
case 2803:
case 3351:
case 2225:
case 1937:
case 2867:
case 3262:
case 100:
case 767:
case 438:
case 3591:
case 3350:
case 1750:
case 2344:
case 1518:
case 1806:
case 2577:
case 2793:
case 1339:
case 4051:
case 1705:
case 2619:
case 2587:
case 3514:
case 1446:
case 3267:
case 1301:
case 964:
case 2860:
case 2340:
case 3645:
case 493:
case 2342:
case 3957:
case 2891:
case 2749:
case 25:
case 3041:
case 3610:
case 1749:
case 1159:
case 446:
case 2821:
case 771:
case 895:
case 2544:
case 1034:
case 2289:
case 2049:
case 4022:
case 2945:
case 1237:
case 2991:
case 1987:
case 3647:
case 1420:
case 3730:
case 1974:
case 3521:
case 2169:
case 3398:
case 2889:
case 1851:
case 74:
case 160:
case 4090:
case 4069:
case 3847:
case 2532:
case 166:
case 1700:
case 1776:
case 3054:
case 394:
case 342:
case 3682:
case 872:
case 3282:
case 1211:
case 1816:
case 1090:
case 1819:
case 2914:
case 1246:
case 1271:
case 3213:
case 2080:
case 984:
case 3927:
case 450:
case 3899:
case 3670:
case 857:
case 155:
case 2708:
case 623:
case 1991:
case 1651:
case 1163:
case 2403:
case 3637:
case 1178:
case 3705:
case 1288:
case 3888:
case 267:
case 3933:
case 1983:
case 1115:
case 527:
case 3742:
case 3706:
case 3520:
case 2164:
case 742:
case 1632:
case 3836:
case 1789:
case 2685:
case 2529:
case 1009:
case 2905:
case 1019:
case 2230:
case 3362:
case 3903:
case 52:
case 2846:
case 1857:
case 1208:
case 2667:
case 1946:
case 521:
case 2617:
case 550:
case 1295:
case 1015:
case 2975:
case 3698:
case 3978:
case 1921:
case 48:
case 862:
case 158:
case 1467:
case 1670:
case 3162:
case 3069:
case 3223:
case 2664:
case 2806:
case 1298:
case 1412:
case 2791:
case 1752:
case 1784:
case 3333:
case 125:
case 3008:
case 3599:
case 1465:
case 1677:
case 1194:
case 3389:
case 2016:
case 306:
case 44:
case 1635:
case 3598:
case 1645:
case 3553:
case 104:
case 979:
case 1951:
case 956:
case 2021:
case 689:
case 2013:
case 2181:
case 1623:
case 2940:
case 2290:
case 2593:
case 185:
case 2321:
case 198:
case 96:
case 3198:
case 519:
case 361:
case 1935:
case 1419:
case 3183:
case 3866:
case 2433:
case 1870:
case 2037:
case 2489:
case 2642:
case 3935:
case 690:
case 1743:
case 2530:
case 470:
case 1156:
case 3902:
case 2464:
case 988:
case 3370:
case 1830:
case 2670:
case 4083:
case 876:
case 2473:
case 2277:
case 3997:
case 2787:
case 3447:
case 2271:
case 3876:
case 813:
case 1803:
case 3708:
case 3448:
case 540:
case 601:
case 418:
case 575:
case 3515:
case 1253:
case 2486:
case 3858:
case 908:
case 1453:
case 945:
case 2405:
case 775:
case 2507:
case 15:
case 545:
case 2928:
case 2718:
case 4087:
case 943:
case 2338:
case 2349:
case 3977:
case 2019:
case 3490:
case 1213:
case 1038:
case 186:
case 2562:
case 3167:
case 341:
case 4092:
case 3547:
case 4029:
case 2790:
case 1443:
case 1089:
case 3822:
case 208:
case 1308:
case 2700:
case 2526:
case 3457:
case 3060:
case 1617:
case 2453:
case 3818:
case 542:
case 1958:
case 2927:
case 1177:
case 503:
case 2484:
case 1004:
case 2611:
case 92:
case 2160:
case 36:
case 1341:
case 2051:
case 497:
case 1643:
case 69:
case 2981:
case 3424:
case 368:
case 1989:
case 2409:
case 1161:
case 4:
case 2479:
case 1418:
case 1236:
case 3695:
case 2207:
case 3201:
case 3207:
case 1000:
case 239:
case 1026:
case 3392:
case 3446:
case 2372:
case 1969:
case 3105:
case 1591:
case 3744:
case 1483:
case 1684:
case 3368:
case 2170:
case 847:
case 314:
case 94:
case 2256:
case 676:
case 1367:
case 3848:
case 3838:
case 3586:
case 3648:
case 3103:
case 1193:
case 431:
case 430:
case 965:
case 1484:
case 947:
case 940:
case 2729:
case 2741:
case 1154:
case 1220:
case 295:
case 3366:
case 1028:
case 225:
case 97:
case 2324:
case 328:
case 1070:
case 2439:
case 2924:
case 2536:
case 1676:
case 1251:
case 3286:
case 195:
case 201:
case 538:
case 200:
case 3266:
case 3540:
case 1626:
case 1590:
case 2564:
case 2127:
case 3175:
case 488:
case 2280:
case 3018:
case 2147:
case 1893:
case 987:
case 1280:
case 3372:
case 3504:
case 3287:
case 1474:
case 1079:
case 646:
case 1911:
case 271:
case 570:
case 1056:
case 3237:
case 2574:
case 235:
case 1408:
case 898:
case 315:
case 2908:
case 2721:
case 3139:
case 2287:
case 3634:
case 863:
case 966:
case 2353:
case 2794:
case 1735:
case 1104:
case 696:
case 3483:
case 512:
case 3603:
case 3236:
case 1712:
case 661:
case 191:
case 3019:
case 3584:
case 3813:
case 3942:
case 2178:
case 4078:
case 113:
case 859:
case 3612:
case 910:
case 3619:
case 2639:
case 3659:
case 288:
case 2365:
case 2416:
case 3776:
case 3293:
case 1646:
case 608:
case 2491:
case 3660:
case 2942:
case 3857:
case 2615:
case 3142:
case 2655:
case 4013:
case 197:
case 1333:
case 3206:
case 2495:
case 1343:
case 489:
case 112:
case 1588:
case 1639:
case 347:
case 1682:
case 2900:
case 2193:
case 624:
case 2963:
case 1166:
case 1636:
case 3133:
case 610:
case 1331:
case 3064:
case 1255:
case 1336:
case 1488:
case 2640:
case 1580:
case 3574:
case 3055:
case 2689:
case 63:
case 2890:
case 2385:
case 2929:
case 2445:
case 582:
case 2081:
case 663:
case 3545:
case 1663:
case 474:
case 338:
case 2228:
case 1284:
case 942:
case 3921:
case 293:
case 1349:
case 2993:
case 1169:
case 1059:
case 192:
case 1906:
case 2254:
case 1550:
case 1487:
case 415:
case 1046:
case 1312:
case 1553:
case 2437:
case 2408:
case 2002:
case 514:
case 1985:
case 3738:
case 3190:
case 228:
case 2712:
case 2406:
case 678:
case 3764:
case 2251:
case 706:
case 1956:
case 1426:
case 2648:
case 40:
case 2329:
case 406:
case 3106:
case 2465:
case 3090:
case 3341:
case 2994:
case 3118:
case 1119:
case 581:
case 752:
case 536:
case 1088:
case 1845:
case 3388:
case 3724:
case 1329:
case 1585:
case 1405:
case 1912:
case 1763:
case 346:
case 294:
case 2477:
case 2492:
case 408:
case 1764:
case 120:
case 3322:
case 3710:
case 1279:
case 3555:
case 2255:
case 1155:
case 931:
case 1247:
case 3513:
case 3493:
case 1055:
case 791:
case 1972:
case 1914:
case 3484:
case 3038:
case 1879:
case 2456:
case 403:
case 3646:
case 602:
case 3114:
case 2187:
case 1675:
case 815:
case 1360:
case 2584:
case 2684:
case 674:
case 2725:
case 2588:
case 899:
case 3676:
case 3679:
case 893:
case 1954:
case 1575:
case 401:
case 2585:
case 3491:
case 4079:
case 280:
case 529:
case 1447:
case 1811:
case 2742:
case 3192:
case 3814:
case 230:
case 3335:
case 1924:
case 1932:
case 2117:
case 3890:
case 2747:
case 2756:
case 309:
case 1565:
case 1010:
case 3367:
case 245:
case 3592:
case 1961:
case 3770:
case 1058:
case 2683:
case 3588:
case 1605:
case 1141:
case 1118:
case 101:
case 1724:
case 3321:
case 1050:
case 1185:
case 2307:
case 2847:
case 3063:
case 633:
case 1410:
case 1959:
case 439:
case 252:
case 889:
case 691:
case 3613:
case 2797:
case 3886:
case 3098:
case 1186:
case 3253:
case 3255:
case 2608:
case 2898:
case 1369:
case 3289:
case 2273:
case 769:
case 2430:
case 3337:
case 3625:
case 2916:
case 3773:
case 1528:
case 1052:
case 1871:
case 2563:
case 3869:
case 1940:
case 3787:
case 3492:
case 3755:
case 1468:
case 3564:
case 204:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1732014001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,];
var gg_b = "1732014001/";

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
