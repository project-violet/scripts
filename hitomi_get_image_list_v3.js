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
case 3040:
case 4081:
case 1724:
case 3976:
case 1591:
case 3928:
case 1494:
case 895:
case 2925:
case 350:
case 1943:
case 3988:
case 1930:
case 2568:
case 2969:
case 3589:
case 2336:
case 435:
case 2049:
case 3565:
case 3172:
case 387:
case 2520:
case 364:
case 1784:
case 2637:
case 2467:
case 1918:
case 2895:
case 2472:
case 3058:
case 521:
case 802:
case 3898:
case 4052:
case 714:
case 3773:
case 808:
case 1297:
case 700:
case 1397:
case 1716:
case 2851:
case 3983:
case 2091:
case 342:
case 1549:
case 1948:
case 1068:
case 531:
case 524:
case 988:
case 168:
case 999:
case 3907:
case 3726:
case 1974:
case 2109:
case 1555:
case 2775:
case 643:
case 666:
case 3893:
case 3010:
case 1950:
case 218:
case 2356:
case 433:
case 580:
case 3786:
case 4000:
case 1084:
case 1315:
case 2404:
case 2223:
case 454:
case 682:
case 3292:
case 2871:
case 2847:
case 3740:
case 1024:
case 2283:
case 1966:
case 2360:
case 1339:
case 699:
case 2328:
case 3073:
case 3385:
case 1575:
case 3936:
case 2755:
case 1141:
case 872:
case 3369:
case 2207:
case 2388:
case 186:
case 91:
case 849:
case 1954:
case 1259:
case 1162:
case 3964:
case 1111:
case 309:
case 2307:
case 3285:
case 385:
case 1902:
case 2699:
case 1768:
case 945:
case 1239:
case 2791:
case 2260:
case 1106:
case 770:
case 1780:
case 2421:
case 2735:
case 3956:
case 2817:
case 3086:
case 2611:
case 3392:
case 49:
case 4072:
case 1199:
case 3710:
case 1215:
case 3078:
case 2323:
case 83:
case 1345:
case 2452:
case 2606:
case 3026:
case 3453:
case 3410:
case 3864:
case 2138:
case 395:
case 850:
case 3191:
case 1129:
case 227:
case 110:
case 1189:
case 1567:
case 2419:
case 1610:
case 1165:
case 1834:
case 3382:
case 2752:
case 3856:
case 3009:
case 302:
case 2917:
case 260:
case 1312:
case 1420:
case 2153:
case 2665:
case 2435:
case 3231:
case 3668:
case 740:
case 3295:
case 2491:
case 254:
case 308:
case 975:
case 2298:
case 848:
case 3331:
case 692:
case 879:
case 3149:
case 698:
case 973:
case 2133:
case 842:
case 1342:
case 3251:
case 861:
case 1640:
case 2293:
case 1866:
case 752:
case 2704:
case 689:
case 393:
case 3282:
case 605:
case 3557:
case 3222:
case 907:
case 1633:
case 104:
case 2892:
case 3271:
case 2475:
case 3796:
case 2144:
case 1686:
case 3426:
case 3883:
case 3486:
case 1848:
case 3823:
case 4055:
case 1303:
case 1626:
case 673:
case 169:
case 2186:
case 989:
case 1416:
case 378:
case 883:
case 905:
case 1532:
case 2700:
case 3175:
case 3616:
case 2081:
case 3993:
case 1401:
case 3577:
case 349:
case 1208:
case 607:
case 1504:
case 3709:
case 1850:
case 372:
case 223:
case 2982:
case 3511:
case 1552:
case 3876:
case 3860:
case 233:
case 3828:
case 1673:
case 1614:
case 1830:
case 1446:
case 2885:
case 4019:
case 1227:
case 3473:
case 977:
case 1203:
case 2995:
case 2173:
case 3599:
case 3998:
case 1521:
case 1484:
case 2004:
case 1581:
case 3371:
case 3347:
case 675:
case 4091:
case 3624:
case 1828:
case 3673:
case 3287:
case 3552:
case 1414:
case 1876:
case 2305:
case 2839:
case 3227:
case 906:
case 994:
case 236:
case 54:
case 725:
case 513:
case 197:
case 3614:
case 3830:
case 1888:
case 1506:
case 3203:
case 1998:
case 2146:
case 3794:
case 374:
case 411:
case 2062:
case 4029:
case 2942:
case 3484:
case 2041:
case 1371:
case 3581:
case 1347:
case 1426:
case 676:
case 719:
case 414:
case 12:
case 1247:
case 1796:
case 3686:
case 2011:
case 3303:
case 1486:
case 539:
case 3678:
case 2116:
case 2845:
case 2099:
case 369:
case 3416:
case 3874:
case 1601:
case 3644:
case 3813:
case 95:
case 3090:
case 172:
case 1993:
case 1175:
case 1444:
case 3387:
case 1577:
case 149:
case 3504:
case 515:
case 3658:
case 1395:
case 862:
case 2655:
case 976:
case 2037:
case 1331:
case 3342:
case 1251:
case 1458:
case 1149:
case 868:
case 1433:
case 2777:
case 1282:
case 517:
case 193:
case 1557:
case 2762:
case 3870:
case 691:
case 3905:
case 3640:
case 2908:
case 2509:
case 3500:
case 2879:
case 841:
case 1222:
case 2649:
case 1836:
case 3129:
case 1191:
case 2706:
case 301:
case 3802:
case 310:
case 1453:
case 844:
case 727:
case 2180:
case 1096:
case 2120:
case 2711:
case 3567:
case 3653:
case 694:
case 3834:
case 2057:
case 2897:
case 2691:
case 2489:
case 1680:
case 1009:
case 1119:
case 2635:
case 3261:
case 2429:
case 1295:
case 108:
case 240:
case 459:
case 1231:
case 2799:
case 754:
case 3480:
case 3902:
case 2789:
case 458:
case 3111:
case 109:
case 1964:
case 1285:
case 1044:
case 1738:
case 2243:
case 1225:
case 2681:
case 270:
case 2887:
case 3934:
case 684:
case 452:
case 2729:
case 3239:
case 3199:
case 874:
case 1121:
case 1710:
case 2997:
case 1086:
case 1392:
case 2652:
case 2190:
case 2411:
case 3345:
case 4037:
case 2514:
case 440:
case 2632:
case 2318:
case 2544:
case 259:
case 2477:
case 630:
case 2441:
case 1740:
case 4057:
case 3763:
case 78:
case 1325:
case 869:
case 1132:
case 2250:
case 3966:
case 2586:
case 3339:
case 3805:
case 3046:
case 2526:
case 3162:
case 3259:
case 1014:
case 1385:
case 3177:
case 2274:
case 1936:
case 2330:
case 3141:
case 2578:
case 148:
case 3397:
case 211:
case 4062:
case 930:
case 1038:
case 4041:
case 362:
case 2533:
case 179:
case 3701:
case 368:
case 2457:
case 142:
case 1923:
case 3068:
case 1409:
case 161:
case 712:
case 1496:
case 538:
case 2959:
case 2254:
case 3157:
case 646:
case 3279:
case 1907:
case 3974:
case 341:
case 1786:
case 896:
case 2270:
case 1893:
case 1100:
case 2266:
case 2334:
case 532:
case 1928:
case 665:
case 3535:
case 1960:
case 2370:
case 3724:
case 810:
case 2366:
case 3137:
case 528:
case 1694:
case 2354:
case 967:
case 187:
case 426:
case 984:
case 164:
case 3379:
case 1565:
case 1058:
case 1714:
case 3918:
case 920:
case 214:
case 2842:
case 4011:
case 1782:
case 1017:
case 2241:
case 3445:
case 3692:
case 792:
case 420:
case 353:
case 86:
case 2623:
case 509:
case 3150:
case 1722:
case 3003:
case 2801:
case 2450:
case 2413:
case 2399:
case 1183:
case 652:
case 467:
case 926:
case 789:
case 2547:
case 658:
case 2474:
case 3087:
case 3459:
case 25:
case 2430:
case 1469:
case 2660:
case 703:
case 2115:
case 2676:
case 2517:
case 1485:
case 3290:
case 2628:
case 3439:
case 1795:
case 3669:
case 936:
case 294:
case 2994:
case 1425:
case 2443:
case 2139:
case 355:
case 1160:
case 3937:
case 1615:
case 1176:
case 777:
case 1128:
case 3143:
case 1188:
case 2341:
case 640:
case 2418:
case 1071:
case 1972:
case 2362:
case 2824:
case 430:
case 542:
case 1022:
case 4030:
case 3703:
case 2664:
case 2434:
case 579:
case 324:
case 331:
case 2197:
case 636:
case 1981:
case 1717:
case 548:
case 1396:
case 4043:
case 446:
case 463:
case 1164:
case 1309:
case 1835:
case 3911:
case 1952:
case 2880:
case 3102:
case 2357:
case 1051:
case 3012:
case 3889:
case 3727:
case 3134:
case 561:
case 357:
case 4048:
case 2337:
case 3166:
case 3170:
case 1855:
case 1932:
case 128:
case 1095:
case 122:
case 3977:
case 3941:
case 2179:
case 3708:
case 3042:
case 550:
case 3154:
case 2705:
case 3479:
case 4013:
case 1771:
case 2454:
case 1747:
case 2863:
case 2636:
case 2466:
case 1849:
case 2470:
case 1679:
case 334:
case 321:
case 958:
case 3105:
case 1447:
case 1471:
case 959:
case 1278:
case 3384:
case 2108:
case 1574:
case 1832:
case 1226:
case 14:
case 113:
case 597:
case 1286:
case 1804:
case 3671:
case 316:
case 36:
case 1513:
case 1550:
case 2766:
case 8:
case 3039:
case 3346:
case 53:
case 2043:
case 1373:
case 3201:
case 2405:
case 1244:
case 1314:
case 743:
case 766:
case 3408:
case 3487:
case 2074:
case 1919:
case 1344:
case 1627:
case 3899:
case 1881:
case 1273:
case 2103:
case 2890:
case 3427:
case 745:
case 2013:
case 3617:
case 1935:
case 3811:
case 3560:
case 115:
case 3576:
case 1386:
case 1092:
case 549:
case 3528:
case 3224:
case 3403:
case 2127:
case 572:
case 390:
case 1378:
case 2569:
case 3045:
case 1530:
case 2187:
case 3284:
case 3806:
case 2048:
case 2585:
case 2702:
case 614:
case 2920:
case 1603:
case 1340:
case 1210:
case 2946:
case 2066:
case 747:
case 3363:
case 1198:
case 2054:
case 267:
case 491:
case 2142:
case 2894:
case 1333:
case 2984:
case 3564:
case 2289:
case 3837:
case 3461:
case 1358:
case 3442:
case 3695:
case 1769:
case 2730:
case 2743:
case 1661:
case 1725:
case 3280:
case 2924:
case 1872:
case 2229:
case 914:
case 1566:
case 1570:
case 900:
case 2329:
case 1612:
case 1975:
case 2365:
case 1193:
case 788:
case 3759:
case 3536:
case 595:
case 3412:
case 406:
case 2112:
case 494:
case 2748:
case 799:
case 2002:
case 281:
case 4005:
case 834:
case 1240:
case 502:
case 821:
case 1792:
case 3263:
case 1097:
case 2391:
case 2986:
case 3566:
case 3338:
case 3570:
case 2809:
case 2335:
case 2122:
case 2926:
case 288:
case 501:
case 2182:
case 3258:
case 3193:
case 1759:
case 477:
case 1368:
case 2579:
case 1745:
case 2723:
case 2249:
case 2493:
case 2319:
case 2064:
case 781:
case 2056:
case 3792:
case 1263:
case 2896:
case 918:
case 2783:
case 3240:
case 3310:
case 3353:
case 2195:
case 1715:
case 3333:
case 2036:
case 767:
case 1079:
case 2914:
case 2349:
case 405:
case 3785:
case 3358:
case 596:
case 2355:
case 1442:
case 504:
case 498:
case 1220:
case 832:
case 1564:
case 1268:
case 1739:
case 2760:
case 3872:
case 2498:
case 3867:
case 3661:
case 720:
case 3238:
case 1059:
case 765:
case 407:
case 1899:
case 3627:
case 3821:
case 571:
case 1487:
case 3344:
case 2117:
case 1427:
case 1797:
case 245:
case 3881:
case 3687:
case 1403:
case 1224:
case 190:
case 3852:
case 3935:
case 1811:
case 315:
case 473:
case 1560:
case 3386:
case 3092:
case 1576:
case 3326:
case 3530:
case 1588:
case 2023:
case 1989:
case 80:
case 3378:
case 569:
case 1284:
case 1965:
case 3417:
case 3832:
case 2559:
case 475:
case 2958:
case 34:
case 3574:
case 3550:
case 116:
case 1862:
case 1671:
case 3025:
case 3373:
case 1039:
case 763:
case 2060:
case 3608:
case 4093:
case 1346:
case 21:
case 2147:
case 3244:
case 3949:
case 3314:
case 3548:
case 2545:
case 1408:
case 574:
case 329:
case 3095:
case 2858:
case 776:
case 1166:
case 4023:
case 1042:
case 1708:
case 1154:
case 2372:
case 1061:
case 1593:
case 273:
case 2367:
case 1941:
case 635:
case 3296:
case 37:
case 2840:
case 1479:
case 2670:
case 207:
case 1394:
case 2833:
case 937:
case 3849:
case 3679:
case 623:
case 4007:
case 124:
case 131:
case 41:
case 466:
case 1598:
case 2456:
case 1294:
case 4088:
case 1703:
case 3819:
case 3717:
case 625:
case 3396:
case 3082:
case 2542:
case 2464:
case 2853:
case 2561:
case 3981:
case 2093:
case 4060:
case 1102:
case 3697:
case 2272:
case 1787:
case 3051:
case 541:
case 1012:
case 3835:
case 1911:
case 3164:
case 3309:
case 3952:
case 332:
case 2838:
case 3156:
case 954:
case 157:
case 338:
case 1906:
case 817:
case 2873:
case 203:
case 2643:
case 1625:
case 933:
case 4056:
case 3469:
case 3639:
case 2428:
case 3425:
case 1685:
case 1669:
case 1439:
case 2630:
case 2814:
case 3128:
case 488:
case 2332:
case 1143:
case 2125:
case 277:
case 3176:
case 660:
case 1937:
case 2252:
case 1130:
case 2587:
case 1415:
case 2185:
case 654:
case 1957:
case 3505:
case 2886:
case 84:
case 3107:
case 813:
case 2909:
case 1692:
case 2508:
case 3722:
case 1113:
case 1150:
case 2483:
case 1003:
case 69:
case 3900:
case 3875:
case 2878:
case 2648:
case 1:
case 3659:
case 3183:
case 2844:
case 2674:
case 935:
case 791:
case 289:
case 447:
case 2996:
case 2650:
case 1459:
case 1390:
case 1148:
case 2381:
case 3123:
case 2189:
case 3168:
case 2165:
case 2834:
case 2572:
case 3120:
case 3711:
case 588:
case 3706:
case 2129:
case 795:
case 924:
case 1665:
case 3799:
case 2480:
case 1689:
case 1000:
case 340:
case 1298:
case 2468:
case 2790:
case 655:
case 160:
case 4024:
case 3057:
case 980:
case 2312:
case 3691:
case 3897:
case 2420:
case 1629:
case 2242:
case 1947:
case 2361:
case 2212:
case 1455:
case 2342:
case 6:
case 19:
case 1072:
case 653:
case 3037:
case 1140:
case 3163:
case 3655:
case 4001:
case 2500:
case 921:
case 2094:
case 934:
case 2633:
case 2870:
case 352:
case 1293:
case 1449:
case 3908:
case 1704:
case 3777:
case 1158:
case 9:
case 3006:
case 2303:
case 2626:
case 1892:
case 1475:
case 3101:
case 1144:
case 3011:
case 2686:
case 1052:
case 545:
case 72:
case 953:
case 634:
case 2401:
case 2387:
case 1126:
case 2850:
case 2090:
case 1982:
case 269:
case 1186:
case 3099:
case 1021:
case 326:
case 2327:
case 3859:
case 778:
case 2614:
case 2830:
case 1869:
case 125:
case 870:
case 2227:
case 2308:
case 3184:
case 624:
case 3839:
case 1772:
case 631:
case 441:
case 2673:
case 3077:
case 2484:
case 1004:
case 4080:
case 3062:
case 3942:
case 955:
case 2794:
case 274:
case 2818:
case 2424:
case 1173:
case 468:
case 2521:
case 543:
case 51:
case 2930:
case 1568:
case 1264:
case 1049:
case 764:
case 3354:
case 1520:
case 2535:
case 3370:
case 1580:
case 3538:
case 2137:
case 3366:
case 750:
case 3234:
case 1925:
case 1256:
case 3510:
case 3553:
case 3861:
case 3667:
case 3672:
case 3194:
case 2746:
case 3842:
case 1637:
case 3915:
case 1831:
case 471:
case 2519:
case 1895:
case 507:
case 779:
case 474:
case 3065:
case 616:
case 66:
case 742:
case 2701:
case 268:
case 3457:
case 748:
case 2080:
case 1400:
case 2609:
case 1035:
case 3812:
case 3029:
case 311:
case 3270:
case 858:
case 2950:
case 118:
case 1356:
case 1882:
case 241:
case 761:
case 2279:
case 1236:
case 575:
case 2555:
case 2157:
case 3302:
case 1871:
case 1641:
case 1662:
case 1432:
case 18:
case 916:
case 96:
case 3248:
case 3544:
case 3477:
case 3441:
case 1749:
case 3462:
case 3632:
case 577:
case 1388:
case 3526:
case 2259:
case 1376:
case 3586:
case 2970:
case 3343:
case 3213:
case 1328:
case 3887:
case 2016:
case 592:
case 3729:
case 2239:
case 836:
case 1260:
case 1791:
case 2106:
case 1228:
case 1421:
case 3499:
case 3243:
case 3313:
case 3350:
case 1584:
case 1307:
case 1288:
case 3230:
case 2720:
case 1481:
case 2001:
case 709:
case 3621:
case 2902:
case 404:
case 3765:
case 598:
case 2768:
case 4094:
case 3789:
case 2215:
case 3411:
case 1452:
case 2345:
case 1606:
case 1075:
case 3218:
case 1719:
case 1546:
case 1817:
case 1611:
case 3652:
case 990:
case 1383:
case 3997:
case 3228:
case 493:
case 2690:
case 1499:
case 1243:
case 3421:
case 2956:
case 1313:
case 1681:
case 3260:
case 1765:
case 1827:
case 1621:
case 1374:
case 209:
case 2964:
case 3584:
case 833:
case 2152:
case 3307:
case 3288:
case 1230:
case 2285:
case 939:
case 2044:
case 1190:
case 3719:
case 1411:
case 3606:
case 617:
case 2078:
case 3323:
case 1348:
case 2121:
case 2710:
case 1997:
case 55:
case 3546:
case 2086:
case 2392:
case 3817:
case 2740:
case 3662:
case 38:
case 3283:
case 3677:
case 3871:
case 3847:
case 402:
case 3641:
case 3516:
case 594:
case 408:
case 1462:
case 506:
case 1248:
case 1318:
case 1544:
case 159:
case 1477:
case 2733:
case 3223:
case 3404:
case 1526:
case 2385:
case 2014:
case 2936:
case 3207:
case 3388:
case 1330:
case 1578:
case 2104:
case 2369:
case 2325:
case 835:
case 3328:
case 2073:
case 3196:
case 1457:
case 242:
case 1065:
case 89:
case 768:
case 1945:
case 2409:
case 1812:
case 3657:
case 111:
case 43:
case 3563:
case 1029:
case 2983:
case 613:
case 1540:
case 318:
case 629:
case 2786:
case 1270:
case 837:
case 2100:
case 2010:
case 261:
case 2778:
case 1558:
case 1959:
case 3019:
case 312:
case 2907:
case 3109:
case 3364:
case 2172:
case 2033:
case 3520:
case 3969:
case 3568:
case 3264:
case 250:
case 744:
case 449:
case 827:
case 2960:
case 1370:
case 1366:
case 42:
case 114:
case 1842:
case 1553:
case 2773:
case 1667:
case 1861:
case 3472:
case 3055:
case 3467:
case 1915:
case 3831:
case 1737:
case 1124:
case 461:
case 2888:
case 325:
case 2506:
case 2828:
case 3825:
case 1184:
case 2511:
case 4010:
case 4053:
case 2414:
case 2860:
case 3772:
case 2646:
case 1839:
case 3590:
case 563:
case 2624:
case 1942:
case 448:
case 1077:
case 3004:
case 638:
case 2371:
case 3114:
case 4038:
case 632:
case 3995:
case 2599:
case 2684:
case 442:
case 771:
case 4058:
case 622:
case 956:
case 2486:
case 1006:
case 565:
case 1675:
case 1116:
case 1845:
case 2426:
case 2883:
case 3892:
case 319:
case 628:
case 450:
case 2709:
case 3982:
case 323:
case 2993:
case 1757:
case 2616:
case 3081:
case 2444:
case 4040:
case 249:
case 2541:
case 3021:
case 769:
case 126:
case 3700:
case 1859:
case 2807:
case 3922:
case 3133:
case 3455:
case 2251:
case 39:
case 1596:
case 3947:
case 4086:
case 3971:
case 3067:
case 567:
case 584:
case 4026:
case 3398:
case 351:
case 1655:
case 1037:
case 3140:
case 2331:
case 337:
case 485:
case 796:
case 4044:
case 3732:
case 409:
case 2440:
case 1649:
case 704:
case 2836:
case 1741:
case 2433:
case 1777:
case 3158:
case 1762:
case 152:
case 3449:
case 97:
case 483:
case 4073:
case 2096:
case 2382:
case 1120:
case 2856:
case 3419:
case 3393:
case 1927:
case 2410:
case 295:
case 710:
case 2537:
case 4014:
case 938:
case 3594:
case 581:
case 208:
case 140:
case 3721:
case 60:
case 2438:
case 3000:
case 1057:
case 3781:
case 2351:
case 2680:
case 1489:
case 2009:
case 202:
case 2119:
case 1635:
case 3917:
case 898:
case 432:
case 716:
case 76:
case 2286:
case 679:
case 2513:
case 2550:
case 4051:
case 1770:
case 642:
case 1766:
case 1018:
case 2447:
case 3275:
case 2278:
case 892:
case 3736:
case 2955:
case 3958:
case 24:
case 3559:
case 213:
case 2244:
case 1405:
case 3147:
case 2085:
case 2548:
case 2949:
case 3545:
case 3933:
case 31:
case 3060:
case 1592:
case 3605:
case 661:
case 3940:
case 983:
case 805:
case 163:
case 2025:
case 4082:
case 3028:
case 1963:
case 3953:
case 3910:
case 664:
case 2687:
case 2273:
case 1103:
case 1050:
case 1013:
case 985:
case 3007:
case 803:
case 165:
case 239:
case 2919:
case 909:
case 2214:
case 2530:
case 1187:
case 1048:
case 1585:
case 2417:
case 3375:
case 526:
case 1920:
case 2326:
case 2852:
case 3756:
case 2935:
case 422:
case 1980:
case 3539:
case 215:
case 790:
case 2092:
case 3083:
case 1525:
case 3036:
case 3349:
case 3914:
case 3219:
case 1054:
case 1718:
case 1142:
case 2333:
case 3131:
case 2210:
case 1946:
case 685:
case 3195:
case 2661:
case 2867:
case 3235:
case 552:
case 3728:
case 2238:
case 2642:
case 3291:
case 1229:
case 120:
case 3498:
case 1984:
case 1289:
case 1698:
case 2358:
case 2769:
case 456:
case 3788:
case 2193:
case 2800:
case 3978:
case 942:
case 1774:
case 3926:
case 3707:
case 873:
case 3986:
case 2570:
case 382:
case 2338:
case 3122:
case 1713:
case 1750:
case 130:
case 1329:
case 1916:
case 2240:
case 2310:
case 2353:
case 3249:
case 3944:
case 1901:
case 3319:
case 3151:
case 1112:
case 1002:
case 961:
case 2482:
case 2492:
case 3878:
case 3648:
case 256:
case 398:
case 392:
case 2782:
case 2505:
case 3886:
case 1448:
case 2017:
case 1241:
case 3352:
case 3423:
case 2107:
case 1683:
case 1159:
case 1547:
case 949:
case 843:
case 866:
case 3407:
case 81:
case 1474:
case 1816:
case 972:
case 693:
case 3844:
case 978:
case 3192:
case 3674:
case 389:
case 1413:
case 191:
case 3798:
case 3460:
case 3814:
case 997:
case 3503:
case 1994:
case 106:
case 3221:
case 2731:
case 1299:
case 3488:
case 1676:
case 1005:
case 3281:
case 1517:
case 303:
case 3873:
case 3643:
case 1628:
case 608:
case 3169:
case 1377:
case 2967:
case 1418:
case 3185:
case 2071:
case 20:
case 1824:
case 3618:
case 377:
case 3527:
case 3125:
case 3464:
case 3810:
case 697:
case 2981:
case 1656:
case 1402:
case 2717:
case 2082:
case 3542:
case 429:
case 995:
case 731:
case 1434:
case 2819:
case 1595:
case 2921:
case 3456:
case 1237:
case 757:
case 44:
case 413:
case 1820:
case 2309:
case 2164:
case 2835:
case 902:
case 2952:
case 780:
case 3838:
case 232:
case 2051:
case 373:
case 222:
case 415:
case 3367:
case 2136:
case 2209:
case 1179:
case 1582:
case 3372:
case 1705:
case 0:
case 3200:
case 1337:
case 2031:
case 176:
case 1522:
case 3098:
case 228:
case 3858:
case 2095:
case 1636:
case 1466:
case 672:
case 1470:
case 2679:
case 439:
case 649:
case 3833:
case 3436:
case 3840:
case 1551:
case 3512:
case 993:
case 678:
case 1454:
case 2747:
case 722:
case 2154:
case 3257:
case 1372:
case 3705:
case 671:
case 3582:
case 2593:
case 2977:
case 1367:
case 3179:
case 1200:
case 2170:
case 728:
case 376:
case 904:
case 2394:
case 4059:
case 221:
case 3470:
case 3551:
case 3454:
case 1840:
case 2479:
case 1670:
case 881:
case 3990:
case 3656:
case 3402:
case 1634:
case 1810:
case 1853:
case 4039:
case 910:
case 3595:
case 2999:
case 901:
case 2294:
case 3531:
case 2703:
case 2497:
case 3820:
case 4015:
case 3868:
case 1300:
case 2727:
case 738:
case 3357:
case 2102:
case 518:
case 732:
case 2911:
case 3880:
case 1428:
case 1503:
case 306:
case 3994:
case 3299:
case 3443:
case 1460:
case 1630:
case 1814:
case 1873:
case 103:
case 865:
case 1643:
case 3628:
case 3660:
case 3846:
case 1488:
case 3430:
case 3115:
case 3676:
case 2008:
case 2118:
case 3517:
case 1281:
case 3824:
case 3341:
case 2130:
case 2415:
case 1185:
case 2143:
case 3884:
case 974:
case 3206:
case 3139:
case 255:
case 2937:
case 198:
case 1232:
case 2150:
case 3623:
case 756:
case 3262:
case 3159:
case 253:
case 2957:
case 1793:
case 3241:
case 1352:
case 1909:
case 3311:
case 1508:
case 2174:
case 1996:
case 2390:
case 3571:
case 2148:
case 604:
case 1381:
case 696:
case 2712:
case 1321:
case 3399:
case 2027:
case 846:
case 3801:
case 863:
case 1844:
case 1192:
case 1674:
case 1255:
case 968:
case 1182:
case 1978:
case 330:
case 2097:
case 2857:
case 3329:
case 876:
case 962:
case 1809:
case 1335:
case 1122:
case 560:
case 941:
case 3034:
case 1783:
case 3693:
case 3916:
case 4008:
case 686:
case 1151:
case 554:
case 3112:
case 1723:
case 3002:
case 3748:
case 1249:
case 1319:
case 2622:
case 3054:
case 3718:
case 3894:
case 1219:
case 1973:
case 2363:
case 59:
case 4087:
case 1131:
case 3066:
case 3070:
case 1776:
case 3229:
case 1291:
case 453:
case 1760:
case 2556:
case 1498:
case 2280:
case 1728:
case 537:
case 1355:
case 2220:
case 3730:
case 2695:
case 2564:
case 4:
case 2631:
case 2461:
case 2837:
case 3890:
case 2427:
case 3103:
case 3050:
case 3013:
case 1910:
case 894:
case 2316:
case 806:
case 365:
case 1007:
case 3074:
case 1515:
case 3920:
case 1764:
case 3968:
case 2045:
case 2588:
case 535:
case 1023:
case 3569:
case 3187:
case 3585:
case 2965:
case 2929:
case 3127:
case 2403:
case 2224:
case 3734:
case 715:
case 3525:
case 290:
case 1539:
case 2560:
case 1938:
case 4061:
case 533:
case 4012:
case 26:
case 480:
case 2862:
case 2324:
case 3766:
case 668:
case 2647:
case 2877:
case 2671:
case 457:
case 1736:
case 1559:
case 1958:
case 3754:
case 74:
case 713:
case 525:
case 3108:
case 2015:
case 2384:
case 1933:
case 986:
case 166:
case 431:
case 729:
case 424:
case 641:
case 1171:
case 3030:
case 1545:
case 1088:
case 2408:
case 363:
case 346:
case 2583:
case 3963:
case 2039:
case 1060:
case 891:
case 2346:
case 2216:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750028401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,];
var gg_b = "1750028401/";

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
