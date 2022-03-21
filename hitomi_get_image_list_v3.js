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
case 765:
case 3734:
case 932:
case 308:
case 760:
case 3497:
case 2126:
case 2293:
case 3659:
case 1799:
case 2243:
case 2517:
case 648:
case 657:
case 1752:
case 1907:
case 469:
case 1569:
case 738:
case 3359:
case 1063:
case 3475:
case 2636:
case 3829:
case 1093:
case 2047:
case 582:
case 1036:
case 515:
case 3189:
case 210:
case 622:
case 1916:
case 909:
case 703:
case 2339:
case 512:
case 49:
case 382:
case 3712:
case 2474:
case 1607:
case 240:
case 1691:
case 416:
case 1522:
case 3967:
case 1570:
case 2054:
case 2204:
case 756:
case 3800:
case 2251:
case 2241:
case 1654:
case 3577:
case 1944:
case 299:
case 2442:
case 1028:
case 1840:
case 1473:
case 2555:
case 2791:
case 914:
case 772:
case 3944:
case 2655:
case 1785:
case 3976:
case 2947:
case 2324:
case 1853:
case 1391:
case 1358:
case 670:
case 2750:
case 110:
case 2681:
case 3067:
case 3385:
case 414:
case 1918:
case 258:
case 1915:
case 1098:
case 475:
case 1197:
case 1791:
case 591:
case 3808:
case 963:
case 972:
case 1120:
case 2684:
case 1779:
case 2070:
case 634:
case 1795:
case 3319:
case 2602:
case 463:
case 2003:
case 3958:
case 1516:
case 108:
case 90:
case 3295:
case 2427:
case 3480:
case 1424:
case 1815:
case 4004:
case 3173:
case 548:
case 2629:
case 3373:
case 1488:
case 1256:
case 1212:
case 3121:
case 68:
case 2551:
case 2709:
case 2272:
case 2111:
case 3462:
case 1867:
case 1378:
case 1525:
case 2710:
case 2461:
case 62:
case 782:
case 627:
case 1314:
case 1500:
case 1698:
case 750:
case 2431:
case 2632:
case 1281:
case 3854:
case 496:
case 2149:
case 58:
case 3100:
case 3468:
case 2382:
case 2005:
case 1450:
case 250:
case 3112:
case 1598:
case 3150:
case 165:
case 2661:
case 2248:
case 1528:
case 3205:
case 3819:
case 128:
case 1610:
case 1618:
case 1337:
case 3448:
case 1134:
case 1218:
case 3465:
case 21:
case 3793:
case 3486:
case 1274:
case 3687:
case 164:
case 2347:
case 839:
case 2258:
case 193:
case 2519:
case 502:
case 3041:
case 3443:
case 870:
case 1044:
case 3696:
case 1072:
case 227:
case 2142:
case 1199:
case 3773:
case 1359:
case 1251:
case 769:
case 2766:
case 297:
case 2351:
case 3600:
case 2777:
case 2455:
case 2365:
case 635:
case 1409:
case 2206:
case 1103:
case 3837:
case 2733:
case 2592:
case 1977:
case 100:
case 1601:
case 1024:
case 403:
case 1828:
case 3534:
case 1334:
case 1188:
case 3797:
case 3003:
case 23:
case 2412:
case 859:
case 2553:
case 1929:
case 2814:
case 80:
case 18:
case 3019:
case 53:
case 30:
case 336:
case 1738:
case 3470:
case 3116:
case 2508:
case 2395:
case 3705:
case 1065:
case 1775:
case 2379:
case 1706:
case 1040:
case 2780:
case 3172:
case 167:
case 1741:
case 2639:
case 71:
case 2537:
case 1238:
case 2741:
case 50:
case 3532:
case 3464:
case 4090:
case 2121:
case 3907:
case 2404:
case 3919:
case 539:
case 2701:
case 1733:
case 340:
case 138:
case 46:
case 1640:
case 2381:
case 3137:
case 2926:
case 1808:
case 1822:
case 2836:
case 2771:
case 2048:
case 3144:
case 3070:
case 2360:
case 3948:
case 678:
case 4007:
case 2198:
case 1850:
case 1170:
case 675:
case 1398:
case 274:
case 415:
case 2162:
case 4084:
case 3981:
case 88:
case 275:
case 2951:
case 55:
case 3361:
case 2565:
case 1292:
case 1059:
case 2664:
case 441:
case 1155:
case 4044:
case 2966:
case 3503:
case 885:
case 616:
case 1631:
case 3938:
case 1444:
case 1105:
case 3541:
case 3977:
case 630:
case 3666:
case 3395:
case 726:
case 133:
case 3957:
case 3685:
case 1342:
case 3044:
case 1081:
case 2975:
case 964:
case 790:
case 3111:
case 70:
case 1985:
case 1511:
case 260:
case 3665:
case 3455:
case 2112:
case 1695:
case 124:
case 1593:
case 490:
case 1041:
case 3217:
case 705:
case 897:
case 632:
case 2490:
case 3456:
case 2823:
case 2010:
case 1204:
case 3906:
case 3815:
case 1501:
case 1172:
case 465:
case 2603:
case 3321:
case 1254:
case 2096:
case 1240:
case 1092:
case 1306:
case 3993:
case 344:
case 1426:
case 1558:
case 1147:
case 836:
case 1468:
case 2212:
case 3805:
case 3681:
case 2409:
case 1085:
case 744:
case 3910:
case 1111:
case 2300:
case 799:
case 557:
case 342:
case 2614:
case 923:
case 1404:
case 584:
case 2124:
case 2833:
case 3642:
case 4035:
case 1999:
case 2817:
case 1112:
case 3635:
case 3990:
case 3086:
case 2165:
case 1461:
case 265:
case 3439:
case 788:
case 3234:
case 2497:
case 1412:
case 2423:
case 3463:
case 3421:
case 1138:
case 3085:
case 1505:
case 2641:
case 3736:
case 325:
case 3869:
case 2415:
case 872:
case 2390:
case 2094:
case 3315:
case 1963:
case 866:
case 521:
case 242:
case 2264:
case 3384:
case 1988:
case 3569:
case 2268:
case 1919:
case 3432:
case 1521:
case 3941:
case 3294:
case 3135:
case 1617:
case 3107:
case 2052:
case 1621:
case 2187:
case 1392:
case 3980:
case 222:
case 758:
case 1365:
case 3824:
case 2263:
case 2097:
case 3082:
case 1655:
case 437:
case 1213:
case 255:
case 1591:
case 864:
case 2922:
case 3255:
case 2081:
case 3369:
case 2867:
case 2450:
case 1239:
case 2008:
case 2318:
case 3602:
case 2971:
case 1346:
case 572:
case 913:
case 1953:
case 1623:
case 189:
case 4029:
case 319:
case 1870:
case 2253:
case 2207:
case 176:
case 1619:
case 2322:
case 322:
case 1191:
case 1247:
case 4005:
case 2613:
case 3444:
case 691:
case 170:
case 1699:
case 1347:
case 1495:
case 218:
case 3820:
case 4025:
case 2584:
case 3816:
case 67:
case 856:
case 2033:
case 3903:
case 735:
case 2505:
case 3142:
case 2444:
case 1258:
case 3491:
case 2464:
case 2764:
case 147:
case 1805:
case 229:
case 1193:
case 2861:
case 2691:
case 2633:
case 2456:
case 3623:
case 3104:
case 2765:
case 2371:
case 4077:
case 2189:
case 2862:
case 3965:
case 2898:
case 2788:
case 2544:
case 4057:
case 1338:
case 397:
case 3285:
case 423:
case 384:
case 2275:
case 209:
case 3209:
case 2618:
case 1118:
case 248:
case 786:
case 3848:
case 2308:
case 3140:
case 566:
case 75:
case 1764:
case 2167:
case 1641:
case 1455:
case 2660:
case 1167:
case 2036:
case 1994:
case 3431:
case 3548:
case 690:
case 2016:
case 1626:
case 3777:
case 3422:
case 2330:
case 1332:
case 48:
case 1460:
case 886:
case 3949:
case 1045:
case 3253:
case 4087:
case 2380:
case 550:
case 1789:
case 2954:
case 2154:
case 3077:
case 2858:
case 1566:
case 2424:
case 715:
case 2441:
case 3738:
case 1022:
case 1672:
case 1748:
case 3312:
case 2874:
case 3043:
case 448:
case 2572:
case 1934:
case 2282:
case 2677:
case 2860:
case 3493:
case 493:
case 3798:
case 333:
case 2787:
case 343:
case 3817:
case 991:
case 951:
case 1938:
case 2178:
case 3858:
case 3840:
case 2087:
case 3643:
case 574:
case 3254:
case 3850:
case 2911:
case 2588:
case 2428:
case 2566:
case 2928:
case 3458:
case 2281:
case 712:
case 820:
case 3828:
case 3337:
case 425:
case 2930:
case 2372:
case 1350:
case 2605:
case 3939:
case 2462:
case 3618:
case 2407:
case 570:
case 3391:
case 3557:
case 254:
case 3873:
case 3058:
case 2348:
case 3894:
case 2909:
case 3771:
case 362:
case 2983:
case 2306:
case 3588:
case 2932:
case 2659:
case 1975:
case 1004:
case 3175:
case 4027:
case 723:
case 3288:
case 1476:
case 1192:
case 1837:
case 3143:
case 3094:
case 2119:
case 2704:
case 114:
case 507:
case 581:
case 3023:
case 3902:
case 3416:
case 2838:
case 3244:
case 2231:
case 3165:
case 3412:
case 1470:
case 3122:
case 1964:
case 1159:
case 3356:
case 2727:
case 3314:
case 4021:
case 1491:
case 2790:
case 2818:
case 3445:
case 1388:
case 3668:
case 700:
case 573:
case 1291:
case 1606:
case 3516:
case 3271:
case 530:
case 2492:
case 1433:
case 2032:
case 2482:
case 3027:
case 1553:
case 2101:
case 11:
case 1073:
case 2888:
case 2934:
case 544:
case 1492:
case 2030:
case 1387:
case 2653:
case 1144:
case 1765:
case 3762:
case 2546:
case 1248:
case 1545:
case 87:
case 3284:
case 473:
case 555:
case 3898:
case 1351:
case 2425:
case 2746:
case 1643:
case 1980:
case 3196:
case 1390:
case 331:
case 2978:
case 1443:
case 1986:
case 3693:
case 1883:
case 3802:
case 3842:
case 1176:
case 3699:
case 1115:
case 1186:
case 3589:
case 3270:
case 3843:
case 2866:
case 2020:
case 14:
case 2216:
case 4081:
case 3933:
case 933:
case 1714:
case 251:
case 431:
case 3638:
case 516:
case 3822:
case 2177:
case 316:
case 2477:
case 3781:
case 2711:
case 2235:
case 3607:
case 449:
case 3155:
case 3606:
case 1664:
case 1935:
case 1839:
case 2568:
case 177:
case 2333:
case 3608:
case 3007:
case 2190:
case 1434:
case 900:
case 3280:
case 2918:
case 3240:
case 2955:
case 1403:
case 459:
case 1587:
case 3261:
case 432:
case 1042:
case 3796:
case 4014:
case 1410:
case 2916:
case 3787:
case 2933:
case 2378:
case 1260:
case 2775:
case 1846:
case 608:
case 3430:
case 1608:
case 2737:
case 2621:
case 1030:
case 3881:
case 1576:
case 819:
case 3806:
case 776:
case 861:
case 3435:
case 2820:
case 3584:
case 944:
case 2522:
case 3097:
case 1821:
case 2577:
case 1348:
case 2890:
case 1740:
case 894:
case 940:
case 1800:
case 514:
case 140:
case 69:
case 230:
case 3859:
case 1321:
case 3604:
case 135:
case 3145:
case 835:
case 4033:
case 191:
case 2628:
case 2762:
case 1253:
case 1386:
case 1309:
case 196:
case 1844:
case 1807:
case 2634:
case 925:
case 1878:
case 2725:
case 1195:
case 3905:
case 1674:
case 329:
case 3991:
case 3989:
case 985:
case 1158:
case 695:
case 2180:
case 1341:
case 1079:
case 4059:
case 3021:
case 1968:
case 1806:
case 1913:
case 3853:
case 341:
case 2739:
case 603:
case 3301:
case 2686:
case 1035:
case 2949:
case 1448:
case 2610:
case 1208:
case 4018:
case 2702:
case 2320:
case 640:
case 1067:
case 3419:
case 137:
case 3846:
case 444:
case 1920:
case 3053:
case 3193:
case 104:
case 3880:
case 4067:
case 2045:
case 2056:
case 2530:
case 1375:
case 19:
case 1362:
case 3711:
case 3757:
case 605:
case 1933:
case 389:
case 2075:
case 3784:
case 3552:
case 1077:
case 2254:
case 2839:
case 1080:
case 3884:
case 1169:
case 3546:
case 2446:
case 1550:
case 1148:
case 2880:
case 798:
case 2017:
case 3613:
case 1557:
case 2489:
case 1851:
case 1899:
case 2480:
case 2924:
case 3839:
case 3947:
case 3030:
case 3610:
case 3893:
case 1690:
case 1207:
case 3176:
case 2708:
case 1506:
case 1921:
case 1286:
case 282:
case 1753:
case 711:
case 2903:
case 877:
case 3364:
case 3507:
case 3408:
case 3236:
case 3238:
case 3537:
case 377:
case 1127:
case 3747:
case 2854:
case 2752:
case 290:
case 3985:
case 2460:
case 3861:
case 3343:
case 3523:
case 1058:
case 3429:
case 3519:
case 3911:
case 1716:
case 707:
case 3844:
case 1637:
case 3587:
case 1457:
case 2871:
case 1266:
case 1066:
case 3433:
case 1271:
case 1486:
case 4069:
case 1091:
case 2849:
case 1206:
case 1665:
case 3937:
case 2942:
case 3204:
case 485:
case 3380:
case 1389:
case 3648:
case 3674:
case 3714:
case 3415:
case 2345:
case 2883:
case 2864:
case 1859:
case 356:
case 931:
case 3870:
case 752:
case 3742:
case 1792:
case 1718:
case 3034:
case 3163:
case 2591:
case 29:
case 3707:
case 3704:
case 383:
case 763:
case 1335:
case 259:
case 1683:
case 370:
case 25:
case 3479:
case 1666:
case 2514:
case 2071:
case 1906:
case 1684:
case 1804:
case 698:
case 7:
case 1786:
case 3262:
case 4011:
case 1465:
case 3237:
case 3390:
case 881:
case 1003:
case 2014:
case 3162:
case 2539:
case 1507:
case 717:
case 1273:
case 263:
case 373:
case 1885:
case 4045:
case 2125:
case 1225:
case 1285:
case 1661:
case 713:
case 1400:
case 1856:
case 935:
case 727:
case 618:
case 4028:
case 235:
case 3664:
case 1104:
case 3576:
case 1722:
case 1259:
case 3062:
case 1877:
case 72:
case 911:
case 541:
case 2626:
case 292:
case 2182:
case 2249:
case 214:
case 484:
case 1061:
case 3722:
case 1712:
case 1353:
case 3488:
case 3399:
case 185:
case 217:
case 2355:
case 2793:
case 3278:
case 2597:
case 609:
case 1090:
case 2893:
case 1942:
case 103:
case 129:
case 2598:
case 983:
case 2980:
case 757:
case 3117:
case 148:
case 3481:
case 2376:
case 1406:
case 219:
case 284:
case 1014:
case 3017:
case 3161:
case 2745:
case 54:
case 543:
case 1472:
case 1852:
case 3690:
case 3692:
case 2321:
case 610:
case 3154:
case 3769:
case 3662:
case 158:
case 2401:
case 2147:
case 2316:
case 2611:
case 417:
case 3735:
case 1941:
case 587:
case 2459:
case 2943:
case 3520:
case 1653:
case 1567:
case 2763:
case 3680:
case 3877:
case 1270:
case 671:
case 3920:
case 2468:
case 4076:
case 1318:
case 352:
case 1001:
case 388:
case 1542:
case 538:
case 2362:
case 2511:
case 1149:
case 3407:
case 1585:
case 3466:
case 4050:
case 2510:
case 3103:
case 1639:
case 3057:
case 1232:
case 1909:
case 497:
case 1095:
case 2257:
case 45:
case 452:
case 1573:
case 1754:
case 2896:
case 4003:
case 888:
case 2479:
case 386:
case 2439:
case 3724:
case 4026:
case 460:
case 2729:
case 153:
case 283:
case 2367:
case 3579:
case 3305:
case 3676:
case 2694:
case 2929:
case 3513:
case 2846:
case 2868:
case 3251:
case 3671:
case 2856:
case 1005:
case 398:
case 3723:
case 2652:
case 3320:
case 1987:
case 2590:
case 3973:
case 1142:
case 12:
case 2239:
case 3555:
case 3170:
case 244:
case 1757:
case 783:
case 1547:
case 697:
case 3633:
case 3596:
case 2834:
case 4012:
case 4066:
case 1097:
case 118:
case 1021:
case 596:
case 311:
case 1107:
case 2586:
case 3864:
case 3632:
case 3585:
case 549:
case 1993:
case 971:
case 3971:
case 3198:
case 528:
case 106:
case 1926:
case 2962:
case 2969:
case 119:
case 2812:
case 429:
case 327:
case 3501:
case 2383:
case 3946:
case 2881:
case 2703:
case 781:
case 1020:
case 2968:
case 2562:
case 816:
case 2579:
case 2396:
case 2573:
case 2053:
case 289:
case 1116:
case 4038:
case 2869:
case 269:
case 3686:
case 2432:
case 685:
case 1603:
case 1826:
case 1459:
case 1102:
case 3146:
case 2172:
case 178:
case 2122:
case 1498:
case 3411:
case 34:
case 737:
case 2996:
case 2952:
case 3514:
case 4048:
case 3333:
case 3644:
case 2564:
case 1719:
case 1782:
case 420:
case 2847:
case 3427:
case 2803:
case 3982:
case 2226:
case 503:
case 3831:
case 1651:
case 2229:
case 84:
case 3718:
case 730:
case 186:
case 2662:
case 3728:
case 1414:
case 3133:
case 2789:
case 312:
case 1078:
case 770:
case 57:
case 2783:
case 1645:
case 3366:
case 3673:
case 1803:
case 2800:
case 3060:
case 4091:
case 829:
case 3578:
case 1644:
case 2718:
case 41:
case 2984:
case 1153:
case 3413:
case 880:
case 1161:
case 28:
case 2981:
case 3158:
case 6:
case 597:
case 2672:
case 1960:
case 1301:
case 4094:
case 98:
case 113:
case 3387:
case 3554:
case 2155:
case 1978:
case 884:
case 3813:
case 3959:
case 4061:
case 1331:
case 1129:
case 2982:
case 710:
case 3653:
case 664:
case 534:
case 3682:
case 293:
case 621:
case 3622:
case 1496:
case 2920:
case 1830:
case 767:
case 3573:
case 1629:
case 965:
case 3046:
case 4020:
case 731:
case 171:
case 1010:
case 3272:
case 1581:
case 1538:
case 2192:
case 2738:
case 4013:
case 3282:
case 663:
case 3506:
case 4031:
case 992:
case 2649:
case 1717:
case 1682:
case 3185:
case 3614:
case 3066:
case 1056:
case 626:
case 1817:
case 151:
case 522:
case 1908:
case 3952:
case 1466:
case 2373:
case 729:
case 1219:
case 2516:
case 296:
case 3942:
case 1048:
case 246:
case 3200:
case 2449:
case 1053:
case 3669:
case 4017:
case 155:
case 2680:
case 901:
case 823:
case 1109:
case 2224:
case 602:
case 1007:
case 2196:
case 2558:
case 3184:
case 2406:
case 1770:
case 3182:
case 3628:
case 3379:
case 2939:
case 3206:
case 1100:
case 1704:
case 1279:
case 2706:
case 3275:
case 3428:
case 2760:
case 588:
case 3326:
case 2705:
case 2548:
case 451:
case 3134:
case 2230:
case 2108:
case 346:
case 4085:
case 3350:
case 2397:
case 2181:
case 3313:
case 950:
case 3835:
case 1069:
case 3243:
case 845:
case 1122:
case 1325:
case 2782:
case 3759:
case 3715:
case 445:
case 241:
case 2029:
case 3266:
case 2757:
case 3438:
case 2013:
case 3199:
case 101:
case 1763:
case 1727:
case 3071:
case 3748:
case 3446:
case 834:
case 3677:
case 3994:
case 2526:
case 615:
case 1793:
case 428:
case 546:
case 2389:
case 3509:
case 3621:
case 3090:
case 1638:
case 3779:
case 3656:
case 223:
case 1377:
case 795:
case 3886:
case 305:
case 2707:
case 702:
case 1123:
case 3533:
case 3641:
case 2157:
case 4063:
case 2448:
case 1539:
case 677:
case 2440:
case 1013:
case 3717:
case 947:
case 3228:
case 3130:
case 1255:
case 2123:
case 1340:
case 2734:
case 2297:
case 1588:
case 1936:
case 1416:
case 3914:
case 2560:
case 116:
case 830:
case 1577:
case 1119:
case 1675:
case 2418:
case 817:
case 957:
case 2619:
case 800:
case 2095:
case 975:
case 2292:
case 688:
case 256:
case 661:
case 981:
case 1796:
case 1797:
case 184:
case 369:
case 3409:
case 3151:
case 982:
case 2332:
case 3474:
case 2279:
case 1280:
case 400:
case 682:
case 3856:
case 1871:
case 540:
case 2035:
case 2865:
case 3063:
case 598:
case 3774:
case 1604:
case 2913:
case 3603:
case 3328:
case 188:
case 1002:
case 2046:
case 889:
case 1352:
case 1868:
case 1729:
case 2093:
case 211:
case 3365:
case 2400:
case 376:
case 3388:
case 3338:
case 1983:
case 408:
case 2220:
case 1227:
case 907:
case 3855:
case 2644:
case 2164:
case 2878:
case 1649:
case 2118:
case 966:
case 969:
case 20:
case 3195:
case 761:
case 840:
case 2377:
case 3124:
case 3945:
case 3047:
case 1945:
case 510:
case 4070:
case 995:
case 2026:
case 3404:
case 145:
case 2416:
case 3708:
case 332:
case 488:
case 832:
case 1464:
case 77:
case 2973:
case 1099:
case 1788:
case 2799:
case 526:
case 379:
case 1294:
case 2559:
case 3401:
case 2501:
case 3194:
case 924:
case 666:
case 620:
case 3768:
case 390:
case 592:
case 1872:
case 2935:
case 1156:
case 1931:
case 22:
case 669:
case 1995:
case 3694:
case 2527:
case 3393:
case 152:
case 1187:
case 1841:
case 3570:
case 3629:
case 2554:
case 3790:
case 2956:
case 1130:
case 168:
case 231:
case 427:
case 3115:
case 2:
case 1467:
case 2528:
case 3436:
case 743:
case 266:
case 51:
case 708:
case 225:
case 387:
case 1602:
case 1700:
case 1991:
case 3298:
case 865:
case 804:
case 2673:
case 789:
case 3451:
case 494:
case 3987:
case 1950:
case 3868:
case 8:
case 681:
case 2541:
case 3751:
case 3899:
case 3377:
case 1972:
case 3113:
case 446:
case 553:
case 1018:
case 2067:
case 2098:
case 1051:
case 2756:
case 1630:
case 3081:
case 1074:
case 3950:
case 2260:
case 2349:
case 1382:
case 2302:
case 3245:
case 3091:
case 2408:
case 2989:
case 3357:
case 1559:
case 3535:
case 32:
case 4095:
case 3943:
case 2502:
case 3745:
case 3028:
case 1895:
case 2556:
case 2286:
case 792:
case 3810:
case 1150:
case 366:
case 2354:
case 3954:
case 2792:
case 3801:
case 1582:
case 2552:
case 564:
case 1533:
case 3857:
case 4054:
case 658:
case 1222:
case 3619:
case 3226:
case 3213:
case 3454:
case 3821:
case 873:
case 3530:
case 3331:
case 2445:
case 3698:
case 2399:
case 3591:
case 2666:
case 495:
case 2194:
case 2145:
case 279:
case 42:
case 201:
case 1747:
case 298:
case 1526:
case 1483:
case 4015:
case 1599:
case 3329:
case 895:
case 2712:
case 3626:
case 3215:
case 1854:
case 1694:
case 4001:
case 1070:
case 3637:
case 2274:
case 3908:
case 15:
case 614:
case 3098:
case 3316:
case 3928:
case 430:
case 948:
case 154:
case 1798:
case 916:
case 1298:
case 920:
case 3599:
case 2992:
case 1304:
case 3689:
case 304:
case 26:
case 1356:
case 474:
case 1166:
case 930:
case 318:
case 2700:
case 1295:
case 2341:
case 334:
case 899:
case 1667:
case 3307:
case 1071:
case 2328:
case 1824:
case 3000:
case 2394:
case 1820:
case 565:
case 1482:
case 2744:
case 1349:
case 2037:
case 1736:
case 3029:
case 1574:
case 141:
case 3076:
case 66:
case 1579:
case 2004:
case 2130:
case 3804:
case 1701:
case 986:
case 4083:
case 1462:
case 3968:
case 2808:
case 837:
case 3525:
case 1425:
case 2344:
case 187:
case 195:
case 2295:
case 197:
case 1360:
case 2495:
case 3247:
case 562:
case 347:
case 3753:
case 2802:
case 1880:
case 3025:
case 3084:
case 1171:
case 134:
case 1267:
case 105:
case 2278:
case 2904:
case 345:
case 595:
case 3544:
case 2011:
case 2323:
case 1177:
case 3152:
case 3504:
case 1039:
case 2682:
case 2569:
case 2964:
case 2936:
case 271:
case 740:
case 13:
case 2768:
case 1344:
case 734:
case 3702:
case 3169:
case 2724:
case 323:
case 2398:
case 2487:
case 2769:
case 980:
case 2392:
case 3202:
case 2491:
case 1374:
case 200:
case 718:
case 315:
case 2411:
case 2807:
case 1050:
case 1031:
case 3770:
case 1836:
case 1509:
case 2654:
case 237:
case 1813:
case 2034:
case 3921:
case 2767:
case 1196:
case 270:
case 3160:
case 746:
case 277:
case 3703:
case 3367:
case 2578:
case 3355:
case 1101:
case 3042:
case 692:
case 3292:
case 1397:
case 613:
case 3547:
case 4042:
case 2270:
case 3616:
case 806:
case 2747:
case 3302:
case 3558:
case 1276:
case 455:
case 268:
case 2472:
case 4023:
case 3539:
case 3109:
case 3159:
case 2608:
case 3274:
case 559:
case 1220:
case 3814:
case 83:
case 644:
case 2535:
case 922:
case 2475:
case 3709:
case 1012:
case 3197:
case 2963:
case 3192:
case 3652:
case 1742:
case 2161:
case 3875:
case 2202:
case 1595:
case 371:
case 934:
case 2524:
case 853:
case 979:
case 2905:
case 3916:
case 2465:
case 3033:
case 805:
case 2503:
case 1431:
case 509:
case 1721:
case 3248:
case 1565:
case 2028:
case 1469:
case 313:
case 2374:
case 220:
case 1132:
case 2023:
case 1157:
case 4010:
case 1484:
case 843:
case 803:
case 3223:
case 1265:
case 1231:
case 3178:
case 2134:
case 2937:
case 3609:
case 3088:
case 1023:
case 2550:
case 1173:
case 2563:
case 1329:
case 1517:
case 1734:
case 827:
case 202:
case 3424:
case 3040:
case 1816:
case 3036:
case 3016:
case 3106:
case 1064:
case 1162:
case 142:
case 1771:
case 1556:
case 2576:
case 228:
case 2493:
case 3375:
case 2044:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1647903601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,];
var gg_b = "1647903601/";

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
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
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
