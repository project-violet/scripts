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
case 2143:
case 2632:
case 2214:
case 3995:
case 2225:
case 1428:
case 2188:
case 3254:
case 3801:
case 2244:
case 376:
case 1660:
case 567:
case 2563:
case 2361:
case 1520:
case 3153:
case 2227:
case 2058:
case 410:
case 1007:
case 3887:
case 38:
case 3997:
case 1971:
case 3490:
case 948:
case 368:
case 3083:
case 1151:
case 1659:
case 2392:
case 3048:
case 3320:
case 145:
case 3608:
case 3241:
case 402:
case 24:
case 815:
case 3364:
case 3833:
case 184:
case 3037:
case 922:
case 1647:
case 1434:
case 337:
case 770:
case 3822:
case 2586:
case 82:
case 2771:
case 2889:
case 2999:
case 2251:
case 1114:
case 1243:
case 1831:
case 808:
case 1213:
case 157:
case 4058:
case 2070:
case 210:
case 1167:
case 3315:
case 1446:
case 3494:
case 1784:
case 406:
case 1875:
case 926:
case 2302:
case 2686:
case 2737:
case 545:
case 1547:
case 3400:
case 1664:
case 2357:
case 2240:
case 1515:
case 1136:
case 3317:
case 2942:
case 1308:
case 1165:
case 1524:
case 1545:
case 520:
case 2766:
case 129:
case 1479:
case 3250:
case 1073:
case 3172:
case 167:
case 1140:
case 1742:
case 2074:
case 2349:
case 2532:
case 3359:
case 219:
case 1935:
case 2491:
case 3338:
case 1712:
case 2663:
case 1110:
case 1966:
case 138:
case 2321:
case 2523:
case 3758:
case 584:
case 973:
case 3278:
case 3739:
case 2894:
case 3698:
case 2376:
case 2909:
case 1856:
case 2462:
case 765:
case 2748:
case 358:
case 1937:
case 698:
case 3203:
case 3652:
case 2076:
case 918:
case 3792:
case 884:
case 2234:
case 2720:
case 3681:
case 2612:
case 1763:
case 440:
case 3605:
case 1287:
case 2642:
case 2133:
case 2599:
case 905:
case 607:
case 236:
case 1201:
case 3453:
case 2896:
case 3059:
case 2986:
case 3761:
case 4055:
case 108:
case 380:
case 2413:
case 2019:
case 3607:
case 2488:
case 1128:
case 4002:
case 2609:
case 3813:
case 3326:
case 795:
case 3047:
case 2853:
case 1373:
case 1444:
case 3597:
case 183:
case 1425:
case 2057:
case 77:
case 820:
case 1414:
case 3231:
case 3998:
case 3888:
case 1008:
case 1395:
case 2684:
case 3045:
case 786:
case 1811:
case 225:
case 2002:
case 277:
case 3371:
case 4049:
case 1397:
case 1841:
case 2764:
case 845:
case 2187:
case 1427:
case 324:
case 4021:
case 389:
case 1537:
case 1671:
case 1179:
case 3366:
case 1291:
case 1959:
case 2806:
case 1465:
case 838:
case 4092:
case 3697:
case 307:
case 2923:
case 3337:
case 597:
case 3673:
case 2745:
case 1116:
case 1626:
case 2932:
case 52:
case 3695:
case 432:
case 4061:
case 1467:
case 2230:
case 3194:
case 3581:
case 2512:
case 1723:
case 3020:
case 2092:
case 2358:
case 2339:
case 3318:
case 1732:
case 1307:
case 3406:
case 2279:
case 1583:
case 621:
case 3719:
case 3721:
case 2191:
case 2699:
case 971:
case 2872:
case 1305:
case 1098:
case 3908:
case 829:
case 583:
case 867:
case 624:
case 3050:
case 151:
case 3522:
case 2886:
case 2010:
case 500:
case 4067:
case 1461:
case 390:
case 1174:
case 3331:
case 3533:
case 830:
case 154:
case 1675:
case 1954:
case 744:
case 2040:
case 4065:
case 699:
case 688:
case 3271:
case 3782:
case 235:
case 4036:
case 2729:
case 1531:
case 1677:
case 1864:
case 1333:
case 66:
case 891:
case 713:
case 2863:
case 853:
case 3303:
case 3501:
case 1387:
case 3078:
case 2197:
case 2067:
case 512:
case 1656:
case 561:
case 1301:
case 1796:
case 564:
case 3587:
case 193:
case 2274:
case 2195:
case 3725:
case 435:
case 3714:
case 1385:
case 3898:
case 2694:
case 2823:
case 863:
case 3109:
case 3601:
case 1860:
case 587:
case 3356:
case 3283:
case 690:
case 2832:
case 3685:
case 1455:
case 2778:
case 448:
case 3184:
case 1252:
case 1772:
case 516:
case 2379:
case 2906:
case 2044:
case 1556:
case 1950:
case 1838:
case 2594:
case 4051:
case 1457:
case 3765:
case 2014:
case 554:
case 36:
case 1205:
case 3736:
case 1706:
case 3562:
case 3235:
case 2270:
case 2750:
case 1847:
case 112:
case 1419:
case 3710:
case 2972:
case 2181:
case 1421:
case 3112:
case 2604:
case 1575:
case 828:
case 2105:
case 164:
case 2368:
case 3377:
case 3142:
case 593:
case 3633:
case 1043:
case 1449:
case 3591:
case 1476:
case 4025:
case 1362:
case 3423:
case 4014:
case 3029:
case 902:
case 2082:
case 3011:
case 3375:
case 65:
case 2330:
case 1577:
case 1139:
case 274:
case 2030:
case 3075:
case 3264:
case 4079:
case 1704:
case 3897:
case 39:
case 1871:
case 2553:
case 1062:
case 3480:
case 369:
case 3163:
case 3093:
case 1789:
case 1903:
case 327:
case 3513:
case 3329:
case 1650:
case 4016:
case 2731:
case 3985:
case 714:
case 1343:
case 1541:
case 3077:
case 1091:
case 893:
case 1669:
case 4046:
case 660:
case 1511:
case 1313:
case 471:
case 1678:
case 1298:
case 816:
case 601:
case 539:
case 2261:
case 542:
case 2344:
case 2473:
case 659:
case 2904:
case 2497:
case 1554:
case 887:
case 3220:
case 3922:
case 2596:
case 2990:
case 4068:
case 3056:
case 2672:
case 1977:
case 2249:
case 91:
case 2842:
case 1578:
case 669:
case 3852:
case 2219:
case 925:
case 864:
case 1001:
case 3881:
case 977:
case 3991:
case 2812:
case 675:
case 3807:
case 10:
case 1087:
case 1155:
case 1818:
case 3746:
case 418:
case 1654:
case 2367:
case 3378:
case 2696:
case 1848:
case 3409:
case 2756:
case 1883:
case 3003:
case 1700:
case 4028:
case 940:
case 360:
case 2276:
case 2775:
case 163:
case 3730:
case 3643:
case 3132:
case 1033:
case 1439:
case 1956:
case 2793:
case 1550:
case 2809:
case 3123:
case 778:
case 2900:
case 3245:
case 2653:
case 936:
case 800:
case 3031:
case 3217:
case 2028:
case 1611:
case 1119:
case 766:
case 218:
case 3412:
case 2481:
case 1835:
case 3350:
case 752:
case 1866:
case 2452:
case 1569:
case 757:
case 648:
case 1299:
case 147:
case 3863:
case 1892:
case 1679:
case 1171:
case 1982:
case 3067:
case 3197:
case 1464:
case 2585:
case 490:
case 565:
case 1616:
case 170:
case 3173:
case 434:
case 3600:
case 2913:
case 1534:
case 1861:
case 1072:
case 781:
case 3694:
case 2714:
case 2725:
case 3065:
case 3195:
case 3754:
case 2943:
case 25:
case 1713:
case 155:
case 2226:
case 3590:
case 1006:
case 958:
case 3589:
case 3328:
case 886:
case 1925:
case 1743:
case 373:
case 1788:
case 1914:
case 2069:
case 2691:
case 2463:
case 335:
case 972:
case 3711:
case 2180:
case 2782:
case 720:
case 231:
case 87:
case 817:
case 1304:
case 1927:
case 1668:
case 2112:
case 3972:
case 2266:
case 3690:
case 348:
case 3270:
case 1053:
case 203:
case 2740:
case 1857:
case 2377:
case 2142:
case 1965:
case 882:
case 3368:
case 1530:
case 2011:
case 3082:
case 1460:
case 547:
case 46:
case 1183:
case 2423:
case 738:
case 1209:
case 1148:
case 4054:
case 2041:
case 1284:
case 499:
case 3330:
case 3107:
case 1118:
case 2375:
case 1855:
case 2283:
case 1579:
case 1300:
case 1137:
case 729:
case 2356:
case 403:
case 1445:
case 2248:
case 3823:
case 767:
case 1424:
case 3239:
case 673:
case 2767:
case 3346:
case 2685:
case 322:
case 4041:
case 1447:
case 1634:
case 3044:
case 1096:
case 1166:
case 1212:
case 1516:
case 288:
case 299:
case 4029:
case 26:
case 1242:
case 1417:
case 3408:
case 2765:
case 1546:
case 3594:
case 3025:
case 3495:
case 475:
case 1928:
case 4093:
case 1667:
case 3473:
case 186:
case 907:
case 3261:
case 1426:
case 2186:
case 4075:
case 783:
case 1665:
case 1787:
case 17:
case 1636:
case 3497:
case 1525:
case 3046:
case 1164:
case 3672:
case 433:
case 3899:
case 2056:
case 3880:
case 3990:
case 3596:
case 1471:
case 4077:
case 2922:
case 3016:
case 2341:
case 29:
case 2543:
case 847:
case 2264:
case 2075:
case 1733:
case 1640:
case 374:
case 2588:
case 2329:
case 3382:
case 227:
case 1610:
case 2163:
case 2093:
case 2499:
case 1120:
case 2480:
case 3351:
case 3553:
case 3198:
case 3068:
case 4056:
case 2985:
case 3731:
case 870:
case 1582:
case 715:
case 1551:
case 1286:
case 582:
case 2901:
case 1946:
case 2215:
case 3994:
case 1540:
case 1418:
case 3407:
case 204:
case 3255:
case 2643:
case 1448:
case 3653:
case 259:
case 305:
case 3202:
case 2369:
case 2245:
case 517:
case 1762:
case 2613:
case 1089:
case 3809:
case 3777:
case 2217:
case 3405:
case 3310:
case 3452:
case 1159:
case 1791:
case 2350:
case 3481:
case 1979:
case 1306:
case 1682:
case 1567:
case 3336:
case 2805:
case 3842:
case 1627:
case 924:
case 3365:
case 1117:
case 2259:
case 3812:
case 2779:
case 2238:
case 1147:
case 404:
case 3221:
case 921:
case 1466:
case 1839:
case 1115:
case 3367:
case 1930:
case 1536:
case 1124:
case 1232:
case 2807:
case 3276:
case 2962:
case 2003:
case 3756:
case 2409:
case 4031:
case 1223:
case 3696:
case 3572:
case 3034:
case 1797:
case 3487:
case 2608:
case 476:
case 856:
case 1084:
case 3804:
case 3251:
case 3889:
case 3890:
case 3771:
case 988:
case 3980:
case 237:
case 2211:
case 185:
case 2037:
case 2229:
case 619:
case 4048:
case 1154:
case 1828:
case 223:
case 1655:
case 1974:
case 1773:
case 1386:
case 1602:
case 1253:
case 48:
case 2035:
case 2066:
case 2196:
case 2774:
case 3225:
case 1431:
case 2885:
case 2995:
case 1042:
case 3632:
case 113:
case 1592:
case 1676:
case 276:
case 3623:
case 3244:
case 592:
case 2801:
case 1012:
case 2018:
case 2887:
case 3058:
case 903:
case 1649:
case 3227:
case 2598:
case 3433:
case 2083:
case 709:
case 716:
case 423:
case 3265:
case 3532:
case 3074:
case 4071:
case 1150:
case 596:
case 1781:
case 3663:
case 2338:
case 3491:
case 1692:
case 1846:
case 3894:
case 3718:
case 764:
case 3267:
case 4026:
case 2278:
case 2360:
case 585:
case 3748:
case 610:
case 1323:
case 1521:
case 1816:
case 3800:
case 1493:
case 3376:
case 866:
case 2324:
case 1958:
case 95:
case 3355:
case 1830:
case 1557:
case 2907:
case 2071:
case 2345:
case 3737:
case 513:
case 3240:
case 1868:
case 3735:
case 2981:
case 2347:
case 3912:
case 192:
case 3766:
case 2496:
case 2047:
case 3101:
case 3609:
case 1961:
case 2888:
case 3185:
case 794:
case 1454:
case 3228:
case 2843:
case 552:
case 2573:
case 2371:
case 221:
case 730:
case 1289:
case 377:
case 3963:
case 1103:
case 325:
case 1882:
case 1992:
case 844:
case 224:
case 31:
case 3187:
case 3055:
case 2595:
case 2024:
case 3764:
case 841:
case 2015:
case 2681:
case 111:
case 1023:
case 1411:
case 4017:
case 3122:
case 2060:
case 162:
case 746:
case 2203:
case 1574:
case 1032:
case 3133:
case 3642:
case 885:
case 3019:
case 280:
case 424:
case 3021:
case 901:
case 2761:
case 3986:
case 1844:
case 959:
case 3896:
case 2453:
case 336:
case 4015:
case 421:
case 896:
case 1131:
case 3374:
case 3443:
case 1798:
case 4045:
case 3488:
case 742:
case 3216:
case 166:
case 1469:
case 1193:
case 1063:
case 640:
case 739:
case 3512:
case 1175:
case 3246:
case 1294:
case 2505:
case 489:
case 498:
case 3339:
case 933:
case 1955:
case 3699:
case 3191:
case 3061:
case 2721:
case 4064:
case 969:
case 1450:
case 677:
case 2406:
case 332:
case 625:
case 3759:
case 2507:
case 2749:
case 61:
case 892:
case 1865:
case 99:
case 1539:
case 1342:
case 3370:
case 3806:
case 1086:
case 950:
case 1921:
case 2366:
case 298:
case 1708:
case 3717:
case 4020:
case 1949:
case 2277:
case 543:
case 1840:
case 556:
case 2337:
case 2100:
case 1156:
case 562:
case 207:
case 3724:
case 1384:
case 2695:
case 3715:
case 3932:
case 514:
case 3333:
case 3864:
case 2528:
case 131:
case 3322:
case 600:
case 2390:
case 1691:
case 1069:
case 3492:
case 1180:
case 1782:
case 2788:
case 354:
case 1331:
case 3174:
case 2914:
case 3295:
case 2925:
case 3954:
case 2630:
case 3675:
case 2006:
case 1522:
case 351:
case 3273:
case 1050:
case 2713:
case 1662:
case 316:
case 309:
case 588:
case 3693:
case 1226:
case 599:
case 1725:
case 1943:
case 1587:
case 15:
case 1898:
case 270:
case 2861:
case 3656:
case 2534:
case 2072:
case 1486:
case 1744:
case 3796:
case 3301:
case 833:
case 2616:
case 3387:
case 33:
case 1727:
case 1078:
case 1585:
case 827:
case 664:
case 3929:
case 3911:
case 2892:
case 2982:
case 992:
case 710:
case 3820:
case 2280:
case 89:
case 612:
case 1054:
case 1765:
case 2546:
case 1687:
case 16:
case 2821:
case 3170:
case 3772:
case 3252:
case 199:
case 687:
case 3838:
case 2447:
case 2634:
case 3950:
case 2096:
case 3281:
case 2394:
case 1218:
case 1685:
case 4053:
case 3207:
case 2415:
case 465:
case 1184:
case 859:
case 2424:
case 479:
case 3455:
case 3402:
case 804:
case 996:
case 1248:
case 1109:
case 609:
case 2137:
case 2300:
case 2579:
case 2876:
case 3824:
case 2628:
case 2967:
case 2118:
case 693:
case 3978:
case 2568:
case 3577:
case 913:
case 1041:
case 1432:
case 2284:
case 3158:
case 2209:
case 3476:
case 1591:
case 719:
case 706:
case 1237:
case 2183:
case 1423:
case 63:
case 1808:
case 3088:
case 103:
case 1633:
case 1142:
case 55:
case 364:
case 2438:
case 3391:
case 265:
case 2459:
case 2053:
case 1112:
case 941:
case 361:
case 1622:
case 3419:
case 279:
case 312:
case 3013:
case 2551:
case 966:
case 4094:
case 47:
case 3161:
case 3091:
case 1901:
case 3511:
case 952:
case 1895:
case 495:
case 60:
case 1077:
case 3343:
case 3789:
case 1163:
case 628:
case 1499:
case 169:
case 1480:
case 978:
case 3062:
case 3192:
case 2934:
case 736:
case 1513:
case 1311:
case 2640:
case 19:
case 1897:
case 1543:
case 1220:
case 642:
case 150:
case 2000:
case 2544:
case 639:
case 2471:
case 2787:
case 831:
case 2525:
case 2164:
case 2094:
case 504:
case 2514:
case 394:
case 330:
case 2396:
case 777:
case 2928:
case 663:
case 3678:
case 71:
case 890:
case 2785:
case 2437:
case 3848:
case 575:
case 646:
case 2644:
case 2223:
case 1716:
case 1260:
case 527:
case 2145:
case 160:
case 1962:
case 1003:
case 3883:
case 569:
case 3794:
case 59:
case 3818:
case 2614:
case 30:
case 3087:
case 1807:
case 2625:
case 3654:
case 2536:
case 2930:
case 1852:
case 328:
case 3470:
case 1259:
case 1991:
case 803:
case 2435:
case 3001:
case 1779:
case 282:
case 2968:
case 3578:
case 1805:
case 3157:
case 3835:
case 962:
case 2979:
case 2306:
case 3569:
case 86:
case 2651:
case 2159:
case 956:
case 3149:
case 3641:
case 899:
case 914:
case 888:
case 694:
case 2762:
case 1613:
case 2160:
case 3022:
case 630:
case 1123:
case 2483:
case 3956:
case 3550:
case 2448:
case 3837:
case 732:
case 159:
case 2916:
case 1245:
case 1369:
case 2510:
case 3176:
case 104:
case 3458:
case 1730:
case 1643:
case 363:
case 1688:
case 1215:
case 2418:
case 3799:
case 629:
case 241:
case 1083:
case 1489:
case 1490:
case 979:
case 3182:
case 2561:
case 965:
case 667:
case 3638:
case 824:
case 1048:
case 3659:
case 773:
case 2649:
case 1018:
case 3007:
case 18:
case 821:
case 3660:
case 4084:
case 2296:
case 1801:
case 3081:
case 2012:
case 2592:
case 3926:
case 3052:
case 320:
case 2676:
case 3005:
case 1885:
case 3398:
case 1995:
case 2042:
case 213:
case 3428:
case 1774:
case 4009:
case 444:
case 357:
case 3213:
case 2602:
case 2386:
case 2828:
case 123:
case 3624:
case 441:
case 2655:
case 3114:
case 3125:
case 137:
case 1211:
case 3647:
case 726:
case 1229:
case 1037:
case 4042:
case 381:
case 2009:
case 1822:
case 638:
case 3127:
case 4012:
case 1241:
case 3617:
case 384:
case 2657:
case 1364:
case 1952:
case 2502:
case 1026:
case 3545:
case 947:
case 367:
case 576:
case 1347:
case 1172:
case 1891:
case 1770:
case 292:
case 3136:
case 4080:
case 3664:
case 2555:
case 1905:
case 3524:
case 1317:
case 1345:
case 1269:
case 1400:
case 1071:
case 970:
case 3893:
case 3547:
case 3709:
case 3784:
case 58:
case 1494:
case 2178:
case 3918:
case 3167:
case 3097:
case 3517:
case 1508:
case 3875:
case 2958:
case 3559:
case 748:
case 657:
case 2493:
case 2661:
case 2099:
case 2169:
case 3937:
case 537:
case 2519:
case 2521:
case 1739:
case 1278:
case 807:
case 2475:
case 1758:
case 1698:
case 492:
case 2332:
case 2707:
case 2781:
case 3110:
case 2576:
case 2970:
case 2879:
case 2752:
case 2150:
case 681:
case 2272:
case 3966:
case 898:
case 3140:
case 523:
case 3468:
case 2477:
case 684:
case 2798:
case 2814:
case 1607:
case 3618:
case 2825:
case 243:
case 2658:
case 1059:
case 2844:
case 823:
case 3648:
case 3201:
case 308:
case 7:
case 598:
case 2441:
case 2574:
case 2032:
case 32:
case 315:
case 1203:
case 2380:
case 2429:
case 1189:
case 397:
case 2023:
case 3482:
case 507:
case 2204:
case 1015:
case 3427:
case 124:
case 1595:
case 3635:
case 3829:
case 2290:
case 3134:
case 3222:
case 2851:
case 1573:
case 3666:
case 1371:
case 121:
case 2289:
case 456:
case 383:
case 1843:
case 1888:
case 3395:
case 462:
case 1231:
case 4023:
case 1326:
case 1813:
case 2961:
case 3444:
case 1496:
case 3786:
case 3373:
case 3571:
case 414:
case 4032:
case 2384:
case 1064:
case 1275:
case 1755:
case 3467:
case 2478:
case 986:
case 1100:
case 1337:
case 3869:
case 107:
case 2976:
case 2570:
case 3262:
case 872:
case 452:
case 3465:
case 4063:
case 3436:
case 62:
case 2921:
case 1472:
case 580:
case 1366:
case 3537:
case 3179:
case 1335:
case 995:
case 3959:
case 2558:
case 2836:
case 3917:
case 2177:
case 2342:
case 1908:
case 3305:
case 3168:
case 1507:
case 1749:
case 3440:
case 3583:
case 3381:
case 3947:
case 1406:
case 3352:
case 1721:
case 278:
case 524:
case 1505:
case 3924:
case 2867:
case 3130:
case 3307:
case 3732:
case 252:
case 1256:
case 1383:
case 1776:
case 1581:
case 2902:
case 718:
case 266:
case 1020:
case 2063:
case 1401:
case 3253:
case 506:
case 519:
case 3773:
case 2645:
case 396:
case 2144:
case 1726:
case 3154:
case 2615:
case 836:
case 3828:
case 1980:
case 900:
case 1890:
case 1771:
case 3009:
case 1889:
case 1999:
case 4005:
case 2647:
case 2434:
case 385:
case 1282:
case 3657:
case 284:
case 420:
case 75:
case 2617:
case 2127:
case 3797:
case 692:
case 81:
case 3834:
case 2780:
case 3111:
case 2182:
case 2971:
case 912:
case 790:
case 3129:
case 2803:
case 961:
case 1433:
case 825:
case 1227:
case 1039:
case 877:
case 457:
case 1058:
case 3676:
case 1563:
case 1361:
case 2926:
case 484:
case 1244:
case 102:
case 1113:
case 1225:
case 481:
case 2428:
case 734:
case 313:
case 1143:
case 2398:
case 3431:
case 2005:
case 951:
case 3816:
case 3323:
case 4095:
case 3519:
case 2937:
case 1909:
case 2856:
case 3661:
case 3493:
case 2538:
case 1462:
case 3080:
case 1800:
case 2559:
case 3707:
case 54:
case 954:
case 1267:
case 2560:
case 1319:
case 238:
case 1321:
case 1523:
case 3752:
case 3879:
case 3692:
case 119:
case 2620:
case 106:
case 685:
case 1491:
case 3970:
case 987:
case 510:
case 2712:
case 1663:
case 2110:
case 3477:
case 2468:
case 1532:
case 1349:
case 2140:
case 2742:
case 2479:
case 392:
case 2073:
case 1912:
case 1735:
case 2545:
case 1766:
case 229:
case 1942:
case 2308:
case 849:
case 93:
case 2877:
case 644:
case 3868:
case 832:
case 1240:
case 2709:
case 2547:
case 799:
case 2416:
case 1302:
case 1737:
case 2948:
case 2517:
case 438:
case 3939:
case 613:
case 2446:
case 408:
case 1187:
case 2427:
case 3204:
case 2397:
case 3289:
case 2666:
case 3851:
case 2222:
case 2134:
case 2920:
case 125:
case 3670:
case 177:
case 2635:
case 2395:
case 2008:
case 1684:
case 3454:
case 283:
case 1057:
case 532:
case 2637:
case 2571:
case 42:
case 2786:
case 2373:
case 666:
case 750:
case 549:
case 3961:
case 1101:
case 140:
case 3658:
case 1443:
case 1374:
case 3639:
case 3131:
case 810:
case 2618:
case 79:
case 1488:
case 3798:
case 2683:
case 208:
case 769:
case 1413:
case 1019:
case 1599:
case 775:
case 2201:
case 136:
case 2648:
case 22:
case 1642:
case 3032:
case 3574:
case 2964:
case 362:
case 942:
case 4008:
case 2482:
case 1720:
case 3411:
case 1122:
case 297:
case 2763:
case 3429:
case 3380:
case 356:
case 215:
case 84:
case 483:
case 3957:
case 2518:
case 2305:
case 3539:
case 3836:
case 3558:
case 378:
case 2548:
case 540:
case 1699:
case 1061:
case 1191:
case 1872:
case 1759:
case 132:
case 759:
case 2947:
case 3294:
case 3175:
case 2732:
case 2307:
case 3955:
case 1339:
case 1542:
case 2924:
case 51:
case 525:
case 946:
case 2945:
case 577:
case 3902:
case 1512:
case 352:
case 1932:
case 2535:
case 2262:
case 2116:
case 3976:
case 930:
case 1923:
case 2869:
case 2960:
case 2566:
case 1745:
case 806:
case 819:
case 2465:
case 3949:
case 1268:
case 2291:
case 662:
case 1806:
case 536:
case 2850:
case 760:
case 3919:
case 1036:
case 2385:
case 3646:
case 1694:
case 1274:
case 1195:
case 1065:
case 737:
case 2503:
case 2301:
case 3072:
case 2656:
case 1600:
case 1173:
case 370:
case 1067:
case 8:
case 2387:
case 23:
case 451:
case 3299:
case 3951:
case 929:
case 454:
case 3679:
case 3982:
case 3171:
case 874:
case 1334:
case 665:
case 3528:
case 1741:
case 3668:
case 2864:
case 2531:
case 2492:
case 135:
case 287:
case 2322:
case 3389:
case 493:
case 173:
case 3743:
case 2954:
case 3925:
case 2295:
case 3914:
case 78:
case 1010:
case 2693:
case 355:
case 768:
case 216:
case 3713:
case 43:
case 3006:
case 1886:
case 1590:
case 1996:
case 3284:
case 2815:
case 2139:
case 2631:
case 2577:
case 3568:
case 2978:
case 3967:
case 400:
case 3628:
case 2824:
case 1769:
case 2845:
case 1082:
case 3802:
case 772:
case 920:
case 3209:
case 3148:
case 2362:
case 1368:
case 1105:
case 3965:
case 2449:
case 2088:
case 2817:
case 2575:
case 148:
case 212:
case 379:
case 2419:
case 1181:
case 1689:
case 2421:
case 2706:
case 3053:
case 3459:
case 526:
case 647:
case 2391:
case 2847:
case 2593:
case 1750:
case 1014:
case 2205:
case 818:
case 1025:
case 984:
case 3940:
case 2281:
case 1500:
case 2859:
case 3096:
case 3634:
case 2838:
case 2252:
case 3910:
case 2170:
case 3821:
case 2455:
case 4013:
case 412:
case 3424:
case 3415:
case 1832:
case 1346:
case 4043:
case 464:
case 3137:
case 2969:
case 1316:
case 535:
case 3471:
case 3544:
case 1880:
case 1899:
case 1989:
case 317:
case 3263:
case 505:
case 1016:
case 1292:
case 294:
case 3094:
case 3525:
case 446:
case 2554:
case 37:
case 3787:
case 873:
case 453:
case 518:
case 1344:
case 1473:
case 386:
case 3426:
case 230:
case 1261:
case 2298:
case 2931:
case 724:
case 3667:
case 4062:
case 3928:
case 1325:
case 2529:
case 2826:
case 2511:
case 494:
case 2313:
case 2091:
case 3286:
case 246:
case 3551:
case 2474:
case 826:
case 2343:
case 491:
case 1198:
case 1731:
case 682:
case 1382:
case 2871:
case 2192:
case 3120:
case 780:
case 171:
case 1:
case 2903:
case 2704:
case 253:
case 3733:
case 3640:
case 3159:
case 617:
case 915:
case 3306:
case 3682:
case 242:
case 118:
case 2629:
case 695:
case 1481:
case 997:
case 3791:
case 822:
case 92:
case 1405:
case 2641:
case 2208:
case 2176:
case 3510:
case 3916:
case 686:
case 1793:
case 2550:
case 3090:
case 3160:
case 3762:
case 1407:
case 3946:
case 3540:
case 3004:
case 1775:
case 2458:
case 2033:
case 1255:
case 2883:
case 2700:
case 1034:
case 1572:
case 1696:
case 2848:
case 3437:
case 3930:
case 3536:
case 574:
case 2975:
case 3115:
case 3839:
case 439:
case 3625:
case 2087:
case 3232:
case 3124:
case 2001:
case 1812:
case 2470:
case 707:
case 1221:
case 228:
case 3147:
case 463:
case 1219:
case 1842:
case 2157:
case 2085:
case 848:
case 2578:
case 3117:
case 2977:
case 1108:
case 3968:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754636401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,];
var gg_b = "1754636401/";

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
