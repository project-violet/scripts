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
case 401:
case 2451:
case 3269:
case 319:
case 1547:
case 1694:
case 1418:
case 846:
case 133:
case 2452:
case 83:
case 1878:
case 20:
case 4029:
case 2203:
case 1156:
case 2955:
case 2647:
case 3151:
case 3229:
case 3997:
case 2553:
case 1717:
case 85:
case 3365:
case 1284:
case 842:
case 3075:
case 3244:
case 1359:
case 3387:
case 786:
case 704:
case 1305:
case 247:
case 2869:
case 1877:
case 1674:
case 2829:
case 48:
case 2648:
case 1012:
case 2058:
case 1255:
case 3998:
case 910:
case 876:
case 1718:
case 1898:
case 1348:
case 1559:
case 3706:
case 3378:
case 3462:
case 2994:
case 3054:
case 3363:
case 3523:
case 750:
case 3461:
case 1420:
case 2259:
case 89:
case 1702:
case 193:
case 1008:
case 1466:
case 2030:
case 1701:
case 3644:
case 3597:
case 2953:
case 3093:
case 725:
case 3847:
case 1655:
case 1137:
case 1865:
case 3397:
case 278:
case 3700:
case 2162:
case 2355:
case 3578:
case 1274:
case 815:
case 1609:
case 730:
case 2161:
case 2036:
case 1045:
case 1460:
case 3323:
case 361:
case 2106:
case 2584:
case 1114:
case 223:
case 1887:
case 653:
case 3859:
case 1007:
case 3987:
case 1959:
case 1503:
case 1948:
case 318:
case 2974:
case 3761:
case 1720:
case 3073:
case 58:
case 3577:
case 3762:
case 2247:
case 3406:
case 1169:
case 129:
case 2177:
case 565:
case 586:
case 628:
case 2602:
case 880:
case 3072:
case 2484:
case 2234:
case 3500:
case 4050:
case 3039:
case 926:
case 1076:
case 3797:
case 2709:
case 3817:
case 3300:
case 582:
case 1070:
case 1129:
case 3477:
case 3638:
case 3723:
case 1251:
case 168:
case 1015:
case 2755:
case 669:
case 1252:
case 364:
case 2178:
case 2163:
case 3834:
case 1520:
case 425:
case 740:
case 3321:
case 1326:
case 299:
case 1090:
case 2850:
case 450:
case 2409:
case 3497:
case 1366:
case 3798:
case 2952:
case 2620:
case 1703:
case 3109:
case 2197:
case 673:
case 590:
case 3091:
case 2666:
case 2784:
case 1096:
case 2856:
case 2217:
case 1560:
case 3521:
case 3361:
case 173:
case 404:
case 627:
case 1902:
case 2474:
case 3082:
case 2260:
case 1013:
case 1517:
case 3081:
case 1901:
case 2226:
case 3906:
case 465:
case 3237:
case 2266:
case 1405:
case 482:
case 2617:
case 237:
case 3174:
case 1747:
case 298:
case 1080:
case 3900:
case 1459:
case 1317:
case 2019:
case 2634:
case 6:
case 1926:
case 3214:
case 2552:
case 206:
case 1960:
case 1334:
case 1705:
case 3922:
case 1534:
case 3238:
case 128:
case 1861:
case 1652:
case 259:
case 1042:
case 2351:
case 1748:
case 4038:
case 2774:
case 611:
case 3656:
case 2352:
case 962:
case 3425:
case 84:
case 3488:
case 852:
case 1966:
case 143:
case 1318:
case 1391:
case 3590:
case 3132:
case 498:
case 2037:
case 1392:
case 3941:
case 3131:
case 2935:
case 1946:
case 437:
case 834:
case 1427:
case 282:
case 1136:
case 1768:
case 1062:
case 1454:
case 1021:
case 964:
case 779:
case 457:
case 1728:
case 2282:
case 3596:
case 660:
case 2799:
case 1591:
case 558:
case 747:
case 905:
case 2108:
case 2333:
case 1940:
case 1592:
case 3840:
case 2731:
case 3980:
case 1000:
case 2246:
case 1235:
case 459:
case 2732:
case 2499:
case 322:
case 3407:
case 1428:
case 3315:
case 1767:
case 2779:
case 1571:
case 3745:
case 749:
case 1372:
case 3515:
case 3986:
case 61:
case 2639:
case 1371:
case 3219:
case 1727:
case 1473:
case 484:
case 2672:
case 887:
case 3376:
case 3708:
case 3882:
case 3002:
case 763:
case 1982:
case 3913:
case 2107:
case 3881:
case 4019:
case 1716:
case 3996:
case 537:
case 894:
case 11:
case 2335:
case 1346:
case 497:
case 3018:
case 1540:
case 3892:
case 3341:
case 3189:
case 362:
case 1635:
case 3891:
case 598:
case 3541:
case 2272:
case 3542:
case 3990:
case 2050:
case 2489:
case 366:
case 2640:
case 1546:
case 3034:
case 502:
case 778:
case 160:
case 2291:
case 3104:
case 1795:
case 1815:
case 2292:
case 3586:
case 2789:
case 559:
case 230:
case 2111:
case 635:
case 1475:
case 1582:
case 250:
case 1381:
case 584:
case 1382:
case 3976:
case 3743:
case 225:
case 506:
case 1971:
case 924:
case 3871:
case 2682:
case 888:
case 620:
case 2404:
case 1972:
case 3872:
case 577:
case 4036:
case 2735:
case 2304:
case 1231:
case 3486:
case 478:
case 3413:
case 1481:
case 1279:
case 2180:
case 2267:
case 549:
case 1604:
case 2616:
case 1575:
case 1310:
case 240:
case 2227:
case 3907:
case 2113:
case 1583:
case 3512:
case 1375:
case 645:
case 2254:
case 799:
case 2293:
case 2186:
case 1516:
case 1985:
case 3885:
case 3649:
case 2504:
case 112:
case 3657:
case 3135:
case 2931:
case 2695:
case 2268:
case 1440:
case 2389:
case 2932:
case 797:
case 3441:
case 2228:
case 1088:
case 2830:
case 1808:
case 579:
case 423:
case 1595:
case 3827:
case 1927:
case 116:
case 758:
case 547:
case 1439:
case 3912:
case 1812:
case 2668:
case 918:
case 3476:
case 2858:
case 2295:
case 1098:
case 702:
case 4057:
case 578:
case 2673:
case 3224:
case 3816:
case 1368:
case 1528:
case 1916:
case 1585:
case 616:
case 1472:
case 2029:
case 1373:
case 1289:
case 3257:
case 784:
case 1385:
case 612:
case 463:
case 851:
case 1568:
case 1699:
case 739:
case 1077:
case 2685:
case 2849:
case 3875:
case 1975:
case 2399:
case 3307:
case 706:
case 3790:
case 1910:
case 145:
case 1679:
case 2857:
case 3636:
case 2332:
case 1593:
case 2433:
case 3508:
case 1527:
case 1367:
case 1632:
case 2196:
case 1995:
case 2693:
case 2044:
case 2579:
case 447:
case 1327:
case 2210:
case 1063:
case 3630:
case 1354:
case 3496:
case 1078:
case 2275:
case 1393:
case 2532:
case 757:
case 3308:
case 3943:
case 1843:
case 1492:
case 3133:
case 2864:
case 2022:
case 3154:
case 2785:
case 2021:
case 186:
case 1281:
case 2130:
case 1333:
case 104:
case 473:
case 630:
case 1819:
case 934:
case 1799:
case 2591:
case 1037:
case 650:
case 3696:
case 3430:
case 467:
case 2391:
case 2842:
case 5:
case 954:
case 625:
case 805:
case 1935:
case 220:
case 2427:
case 1691:
case 2061:
case 392:
case 2136:
case 3185:
case 2754:
case 2006:
case 3128:
case 2886:
case 733:
case 2793:
case 1672:
case 2339:
case 308:
case 1038:
case 1246:
case 2235:
case 2880:
case 4042:
case 3670:
case 443:
case 1731:
case 941:
case 2767:
case 1779:
case 3242:
case 3736:
case 428:
case 3168:
case 753:
case 3241:
case 2572:
case 2710:
case 2890:
case 309:
case 1050:
case 411:
case 2340:
case 4076:
case 2775:
case 573:
case 3749:
case 1272:
case 1535:
case 2546:
case 352:
case 3276:
case 332:
case 4070:
case 21:
case 1335:
case 2896:
case 2716:
case 1056:
case 567:
case 3519:
case 2157:
case 3270:
case 2783:
case 3051:
case 2635:
case 4:
case 3758:
case 3215:
case 2540:
case 2124:
case 3464:
case 3764:
case 3458:
case 2876:
case 150:
case 3110:
case 2483:
case 2416:
case 2233:
case 793:
case 1682:
case 1404:
case 2972:
case 3290:
case 2971:
case 3613:
case 2795:
case 2815:
case 686:
case 1292:
case 37:
case 2158:
case 543:
case 988:
case 1112:
case 427:
case 824:
case 130:
case 2581:
case 2375:
case 4008:
case 2740:
case 991:
case 3349:
case 533:
case 3181:
case 140:
case 1227:
case 1113:
case 1999:
case 3719:
case 3899:
case 1675:
case 2928:
case 1186:
case 2516:
case 3208:
case 1610:
case 1293:
case 1304:
case 2968:
case 1683:
case 372:
case 2232:
case 727:
case 2973:
case 4045:
case 553:
case 1616:
case 2481:
case 1180:
case 1267:
case 3557:
case 2119:
case 1589:
case 2993:
case 2782:
case 3524:
case 3140:
case 1285:
case 2088:
case 2808:
case 35:
case 2446:
case 2299:
case 342:
case 216:
case 711:
case 3094:
case 2595:
case 212:
case 2689:
case 2967:
case 7:
case 3146:
case 1389:
case 3357:
case 768:
case 1142:
case 1273:
case 1931:
case 1695:
case 3324:
case 1268:
case 821:
case 2065:
case 1069:
case 2385:
case 3172:
case 2568:
case 769:
case 974:
case 275:
case 2910:
case 1685:
case 931:
case 1849:
case 3139:
case 670:
case 4043:
case 2975:
case 1733:
case 433:
case 2791:
case 2811:
case 1673:
case 1599:
case 728:
case 2439:
case 861:
case 1858:
case 3958:
case 2098:
case 1029:
case 1170:
case 2289:
case 2471:
case 2916:
case 1115:
case 3804:
case 3084:
case 2472:
case 773:
case 1275:
case 1579:
case 1210:
case 2063:
case 1531:
case 2843:
case 2739:
case 3964:
case 2492:
case 2393:
case 1532:
case 1190:
case 3924:
case 1216:
case 3192:
case 1824:
case 3530:
case 944:
case 3889:
case 1332:
case 3009:
case 4011:
case 1989:
case 3212:
case 1196:
case 3055:
case 2995:
case 18:
case 3211:
case 2527:
case 39:
case 2367:
case 3665:
case 2156:
case 3298:
case 3855:
case 1594:
case 1647:
case 2434:
case 803:
case 1203:
case 177:
case 648:
case 2284:
case 3118:
case 149:
case 1057:
case 1553:
case 2897:
case 2717:
case 3809:
case 2547:
case 1452:
case 1451:
case 1394:
case 3625:
case 86:
case 3456:
case 2653:
case 1844:
case 3134:
case 1829:
case 3297:
case 512:
case 755:
case 1648:
case 4023:
case 1984:
case 2011:
case 445:
case 720:
case 2559:
case 2903:
case 1752:
case 1374:
case 2718:
case 3263:
case 391:
case 179:
case 181:
case 1605:
case 3278:
case 1574:
case 678:
case 147:
case 1659:
case 735:
case 2305:
case 810:
case 1309:
case 760:
case 3738:
case 3031:
case 2655:
case 3166:
case 2137:
case 1161:
case 3120:
case 1036:
case 2460:
case 1355:
case 2274:
case 3344:
case 1121:
case 3160:
case 3714:
case 3894:
case 1994:
case 575:
case 4087:
case 2701:
case 1953:
case 1509:
case 3678:
case 3437:
case 2702:
case 915:
case 2466:
case 1030:
case 1205:
case 2684:
case 3737:
case 2402:
case 1974:
case 2303:
case 2948:
case 1100:
case 2138:
case 2401:
case 1384:
case 1247:
case 1603:
case 3569:
case 1106:
case 3225:
case 677:
case 1584:
case 3288:
case 2253:
case 795:
case 2760:
case 4088:
case 3102:
case 4025:
case 2726:
case 2294:
case 331:
case 2887:
case 2959:
case 908:
case 1198:
case 980:
case 2917:
case 1709:
case 2501:
case 3338:
case 3514:
case 606:
case 2252:
case 197:
case 387:
case 520:
case 3600:
case 2251:
case 268:
case 1484:
case 1601:
case 2302:
case 659:
case 3606:
case 2076:
case 716:
case 158:
case 211:
case 2403:
case 227:
case 2703:
case 1951:
case 2366:
case 354:
case 1952:
case 2320:
case 3729:
case 1666:
case 1784:
case 3956:
case 992:
case 2934:
case 1163:
case 2520:
case 2090:
case 3950:
case 389:
case 3621:
case 698:
case 3537:
case 3033:
case 2566:
case 3622:
case 1617:
case 907:
case 97:
case 2800:
case 1838:
case 3148:
case 2317:
case 455:
case 3261:
case 2747:
case 3262:
case 2013:
case 2517:
case 3221:
case 435:
case 273:
case 1474:
case 2902:
case 1814:
case 3105:
case 1226:
case 4022:
case 2086:
case 3356:
case 932:
case 885:
case 1494:
case 1618:
case 866:
case 560:
case 3200:
case 2651:
case 102:
case 2861:
case 2920:
case 2041:
case 1352:
case 3937:
case 1165:
case 243:
case 3147:
case 2042:
case 1351:
case 1453:
case 1188:
case 2447:
case 909:
case 184:
case 638:
case 1552:
case 2759:
case 1019:
case 1634:
case 139:
case 94:
case 2705:
case 2822:
case 3556:
case 1202:
case 952:
case 2960:
case 2334:
case 1201:
case 269:
case 488:
case 3493:
case 400:
case 3391:
case 1590:
case 541:
case 1408:
case 2430:
case 3841:
case 1941:
case 3061:
case 3136:
case 587:
case 1020:
case 292:
case 320:
case 2167:
case 3773:
case 3062:
case 3768:
case 1396:
case 3467:
case 1445:
case 2213:
case 296:
case 3633:
case 1596:
case 3785:
case 2154:
case 3591:
case 335:
case 1390:
case 3592:
case 2286:
case 1840:
case 1026:
case 666:
case 1576:
case 2615:
case 685:
case 554:
case 122:
case 3235:
case 208:
case 3880:
case 280:
case 3485:
case 1315:
case 3428:
case 3571:
case 4035:
case 2173:
case 3767:
case 2242:
case 838:
case 2128:
case 3006:
case 3886:
case 3372:
case 3371:
case 1570:
case 1882:
case 534:
case 3339:
case 662:
case 911:
case 1708:
case 897:
case 1913:
case 1996:
case 2195:
case 487:
case 884:
case 2642:
case 232:
case 3992:
case 1341:
case 2464:
case 3124:
case 2758:
case 626:
case 806:
case 3635:
case 588:
case 943:
case 1711:
case 1342:
case 3157:
case 2519:
case 1189:
case 3783:
case 2270:
case 162:
case 802:
case 3340:
case 2424:
case 2319:
case 166:
case 3890:
case 395:
case 3495:
case 969:
case 774:
case 1619:
case 731:
case 252:
case 24:
case 1034:
case 2680:
case 207:
case 1970:
case 1586:
case 2116:
case 1104:
case 3410:
case 1380:
case 2183:
case 967:
case 3475:
case 2296:
case 3158:
case 857:
case 454:
case 471:
case 489:
case 2110:
case 1580:
case 3381:
case 1411:
case 3149:
case 434:
case 1976:
case 4033:
case 2175:
case 2764:
case 3939:
case 3382:
case 3971:
case 3972:
case 1872:
case 1386:
case 898:
case 3416:
case 2611:
case 3973:
case 3746:
case 4079:
case 2612:
case 1868:
case 3968:
case 1658:
case 3279:
case 1311:
case 3510:
case 1413:
case 3383:
case 1312:
case 2549:
case 2358:
case 3583:
case 3087:
case 2899:
case 3807:
case 2719:
case 1511:
case 1480:
case 2349:
case 3375:
case 276:
case 771:
case 734:
case 1885:
case 1828:
case 3516:
case 1624:
case 1867:
case 1135:
case 23:
case 3967:
case 246:
case 312:
case 1657:
case 3845:
case 741:
case 2831:
case 1047:
case 1780:
case 863:
case 2832:
case 2419:
case 2357:
case 1908:
case 474:
case 3808:
case 1441:
case 62:
case 2364:
case 431:
case 1442:
case 2094:
case 1664:
case 242:
case 1827:
case 3446:
case 25:
case 3927:
case 3098:
case 1912:
case 3983:
case 1003:
case 1507:
case 603:
case 4089:
case 12:
case 3791:
case 2804:
case 3472:
case 1816:
case 3471:
case 3373:
case 713:
case 1264:
case 3568:
case 3328:
case 3385:
case 2243:
case 794:
case 3077:
case 3573:
case 3699:
case 66:
case 3975:
case 3910:
case 1636:
case 2889:
case 2009:
case 3097:
case 2957:
case 2191:
case 2530:
case 3204:
case 2924:
case 2192:
case 1345:
case 1770:
case 788:
case 3632:
case 3023:
case 3554:
case 3631:
case 1258:
case 2055:
case 3327:
case 2536:
case 3771:
case 1496:
case 878:
case 3354:
case 2608:
case 1249:
case 3772:
case 215:
case 914:
case 3393:
case 2964:
case 1943:
case 2330:
case 3843:
case 2277:
case 1269:
case 3150:
case 618:
case 333:
case 3043:
case 3418:
case 3653:
case 870:
case 2456:
case 3878:
case 2688:
case 708:
case 572:
case 780:
case 3434:
case 2298:
case 2855:
case 2665:
case 912:
case 4084:
case 1997:
case 3717:
case 1151:
case 1229:
case 2450:
case 3284:
case 2118:
case 1365:
case 1152:
case 1525:
case 1075:
case 291:
case 2263:
case 796:
case 1387:
case 3548:
case 3417:
case 1977:
case 3877:
case 542:
case 1016:
case 3674:
case 4055:
case 2756:
case 2297:
case 546:
case 49:
case 117:
case 2929:
case 1803:
case 683:
case 3559:
case 1587:
case 2117:
case 4009:
case 3011:
case 792:
case 2894:
case 1462:
case 1054:
case 1706:
case 1363:
case 3008:
case 3466:
case 3702:
case 3825:
case 1093:
case 1644:
case 2853:
case 2663:
case 3701:
case 1965:
case 3865:
case 3655:
case 1847:
case 2031:
case 945:
case 3947:
case 2738:
case 2623:
case 707:
case 77:
case 3274:
case 1563:
case 442:
case 1377:
case 2529:
case 2369:
case 1722:
case 3905:
case 2288:
case 1859:
case 2099:
case 231:
case 2101:
case 752:
case 1598:
case 3294:
case 274:
case 251:
case 732:
case 1848:
case 3948:
case 2874:
case 446:
case 1577:
case 1073:
case 59:
case 43:
case 3720:
case 1406:
case 1068:
case 801:
case 2414:
case 1762:
case 2698:
case 2744:
case 1071:
case 596:
case 1763:
case 436:
case 452:
case 1306:
case 1778:
case 3403:
case 75:
case 3301:
case 3076:
case 1039:
case 241:
case 2338:
case 4051:
case 3:
case 73:
case 1256:
case 4052:
case 432:
case 1477:
case 3070:
case 287:
case 1506:
case 1184:
case 1562:
case 3520:
case 1321:
case 2769:
case 3934:
case 1777:
case 1423:
case 3566:
case 882:
case 2622:
case 234:
case 2621:
case 1497:
case 3090:
case 105:
case 289:
case 865:
case 2852:
case 2337:
case 3918:
case 3526:
case 955:
case 1798:
case 886:
case 1818:
case 508:
case 772:
case 2851:
case 1091:
case 3703:
case 1478:
case 1637:
case 1155:
case 1522:
case 1362:
case 47:
case 1361:
case 1521:
case 2444:
case 1082:
case 1802:
case 1725:
case 1788:
case 373:
case 2222:
case 3448:
case 2221:
case 124:
case 2914:
case 54:
case 496:
case 552:
case 850:
case 556:
case 664:
case 492:
case 1765:
case 1487:
case 2148:
case 3459:
case 3317:
case 2261:
case 79:
case 288:
case 1900:
case 200:
case 1153:
case 2206:
case 294:
case 3447:
case 213:
case 3926:
case 995:
case 1214:
case 1826:
case 369:
case 3334:
case 3821:
case 2556:
case 3822:
case 1194:
case 3705:
case 1922:
case 3920:
case 1820:
case 507:
case 1961:
case 3534:
case 57:
case 3862:
case 2356:
case 480:
case 3318:
case 343:
case 1488:
case 1866:
case 1656:
case 3041:
case 1425:
case 2095:
case 1298:
case 3955:
case 1665:
case 377:
case 2923:
case 30:
case 722:
case 2588:
case 816:
case 2152:
case 2525:
case 3024:
case 1089:
case 3553:
case 349:
case 510:
case 674:
case 2229:
case 1450:
case 2325:
case 2565:
case 3064:
case 651:
case 812:
case 1277:
case 219:
case 3353:
case 2978:
case 1688:
case 1297:
case 3984:
case 1884:
case 2016:
case 2083:
case 3374:
case 191:
case 1750:
case 644:
case 379:
case 2244:
case 1278:
case 2075:
case 3574:
case 3049:
case 3605:
case 940:
case 3869:
case 1969:
case 3659:
case 347:
case 2700:
case 1738:
case 1623:
case 378:
case 2397:
case 1032:
case 3309:
case 144:
case 691:
case 1031:
case 1079:
case 2421:
case 3248:
case 1120:
case 98:
case 3162:
case 3121:
case 1344:
case 1160:
case 2523:
case 1894:
case 3122:
case 2462:
case 3555:
case 3994:
case 2093:
case 3953:
case 3509:
case 2597:
case 2644:
case 1853:
case 1663:
case 283:
case 3205:
case 1437:
case 1678:
case 1874:
case 3974:
case 218:
case 2629:
case 2848:
case 2406:
case 1265:
case 2762:
case 1698:
case 2577:
case 762:
case 1329:
case 3603:
case 2722:
case 3584:
case 2805:
case 2085:
case 1288:
case 1225:
case 2028:
case 2721:
case 261:
case 1529:
case 1369:
case 2598:
case 1102:
case 1099:
case 1677:
case 1438:
case 2400:
case 3198:
case 694:
case 462:
case 141:
case 1338:
case 1103:
case 2817:
case 3709:
case 3218:
case 2184:
case 1514:
case 1469:
case 2723:
case 1600:
case 397:
case 187:
case 3484:
case 2072:
case 3602:
case 703:
case 2778:
case 4034:
case 2071:
case 1429:
case 2250:
case 3177:
case 2614:
case 2498:
case 2039:
case 3234:
case 466:
case 1538:
case 2091:
case 3620:
case 522:
case 2092:
case 1337:
case 154:
case 3123:
case 3217:
case 710:
case 1956:
case 2155:
case 2522:
case 3784:
case 2321:
case 1769:
case 2834:
case 2423:
case 3626:
case 3455:
case 965:
case 2322:
case 986:
case 3178:
case 904:
case 526:
case 1621:
case 3409:
case 205:
case 399:
case 171:
case 3850:
case 1622:
case 134:
case 1537:
case 337:
case 3617:
case 4020:
case 1148:
case 3220:
case 562:
case 2900:
case 930:
case 689:
case 2765:
case 654:
case 585:
case 2081:
case 1159:
case 3753:
case 2802:
case 860:
case 4026:
case 950:
case 357:
case 1105:
case 3794:
case 1914:
case 3618:
case 3494:
case 895:
case 72:
case 2820:
case 2961:
case 1200:
case 1147:
case 2866:
case 3837:
case 2425:
case 3453:
case 422:
case 641:
case 384:
case 81:
case 2040:
case 3125:
case 3188:
case 2214:
case 3634:
case 3551:
case 306:
case 2860:
case 2921:
case 2596:
case 3282:
case 607:
case 3281:
case 365:
case 1690:
case 386:
case 1436:
case 3333:
case 2840:
case 4082:
case 999:
case 1919:
case 1193:
case 4081:
case 3819:
case 2707:
case 2941:
case 2132:
case 2396:
case 382:
case 3145:
case 2020:
case 192:
case 1280:
case 2846:
case 1835:
case 719:
case 2570:
case 1128:
case 3240:
case 564:
case 656:
case 632:
case 2515:
case 1185:
case 721:
case 2913:
case 2199:
case 2882:
case 868:
case 4040:
case 1730:
case 2407:
case 1670:
case 3499:
case 3246:
case 2980:
case 3038:
case 390:
case 938:
case 829:
case 4046:
case 1242:
case 3779:
case 2315:
case 997:
case 811:
case 1241:
case 64:
case 1457:
case 984:
case 3489:
case 2542:
case 109:
case 1749:
case 939:
case 3143:
case 2541:
case 136:
case 14:
case 524:
case 3335:
case 1642:
case 156:
case 1641:
case 2996:
case 3056:
case 3704:
case 1195:
case 3646:
case 1270:
case 1052:
case 2341:
case 1758:
case 2443:
case 2839:
case 1686:
case 1175:
case 1764:
case 405:
case 2313:
case 2580:
case 350:
case 2411:
case 692:
case 2586:
case 696:
case 2104:
case 1680:
case 2970:
case 873:
case 1296:
case 3112:
case 4092:
case 998:
case 330:
case 2380:
case 2513:
case 1183:
case 1558:
case 981:
case 1349:
case 483:
case 2059:
case 1899:
case 1181:
case 519:
case 2480:
case 2230:
case 2005:
case 2649:
case 2885:
case 2828:
case 4054:
case 3186:
case 947:
case 4027:
case 705:
case 3293:
case 3610:
case 2486:
case 3304:
case 2658:
case 172:
case 3683:
case 2741:
case 1074:
case 615:
case 1549:
case 1358:
case 2311:
case 210:
case 2413:
case 3589:
case 1557:
case 2442:
case 1930:
case 2908:
case 3285:
case 203:
case 2343:
case 1524:
case 3228:
case 142:
case 461:
case 15:
case 963:
case 1094:
case 1643:
case 2854:
case 2135:
case 1879:
case 146:
case 833:
case 2657:
case 517:
case 90:
case 3142:
case 3273:
case 2780:
case 26:
case 370:
case 418:
case 1357:
case 3932:
case 1564:
case 3268:
case 2543:
case 2047:
case 3931:
case 3069:
case 923:
case 1607:
case 2470:
case 421:
case 1171:
case 63:
case 1243:
case 2415:
case 1172:
case 2307:
case 3399:
case 3733:
case 3628:
case 3685:
case 948:
case 583:
case 3176:
case 2003:
case 2507:
case 2883:
case 2911:
case 3858:
case 3295:
case 3668:
case 1804:
case 3115:
case 3904:
case 1084:
case 642:
case 2816:
case 2796:
case 3275:
case 2630:
case 672:
case 2249:
case 561:
case 2545:
case 3044:
case 3693:
case 2133:
case 115:
case 3532:
case 1530:
case 978:
case 3331:
case 3824:
case 1192:
case 3857:
case 1957:
case 518:
case 2490:
case 4083:
case 4016:
case 3196:
case 2770:
case 893:
case 3283:
case 38:
case 814:
case 417:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746554402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,];
var gg_b = "1746554402/";

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
