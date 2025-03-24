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
case 3010:
case 993:
case 1651:
case 3629:
case 1916:
case 650:
case 1460:
case 2808:
case 690:
case 1065:
case 3799:
case 2148:
case 2352:
case 3415:
case 3223:
case 3237:
case 784:
case 1025:
case 1348:
case 565:
case 263:
case 894:
case 2497:
case 2629:
case 2799:
case 3752:
case 3352:
case 2263:
case 2274:
case 289:
case 2223:
case 4054:
case 2325:
case 430:
case 2365:
case 3180:
case 2949:
case 470:
case 2765:
case 2554:
case 1264:
case 2687:
case 3617:
case 190:
case 3365:
case 3954:
case 700:
case 1099:
case 3110:
case 3835:
case 3765:
case 3549:
case 1125:
case 2402:
case 3470:
case 1165:
case 321:
case 1310:
case 3538:
case 277:
case 3183:
case 2039:
case 206:
case 3512:
case 1887:
case 464:
case 2424:
case 3912:
case 2464:
case 2156:
case 1783:
case 302:
case 337:
case 3879:
case 1270:
case 2538:
case 636:
case 676:
case 672:
case 632:
case 914:
case 607:
case 2512:
case 1014:
case 980:
case 117:
case 3982:
case 1817:
case 1441:
case 3464:
case 1313:
case 1423:
case 1215:
case 1550:
case 316:
case 169:
case 1406:
case 1463:
case 1474:
case 3714:
case 176:
case 1339:
case 3056:
case 136:
case 3260:
case 1739:
case 3851:
case 1114:
case 1297:
case 2139:
case 803:
case 216:
case 57:
case 1285:
case 2314:
case 3784:
case 452:
case 492:
case 2260:
case 648:
case 2851:
case 496:
case 1184:
case 323:
case 3793:
case 1330:
case 2408:
case 35:
case 3393:
case 3269:
case 3229:
case 1820:
case 1251:
case 2042:
case 1944:
case 1959:
case 3815:
case 3606:
case 2885:
case 3663:
case 744:
case 96:
case 3637:
case 41:
case 2793:
case 485:
case 2269:
case 25:
case 3042:
case 2229:
case 1992:
case 2921:
case 2130:
case 2815:
case 2674:
case 1592:
case 2623:
case 2637:
case 1058:
case 29:
case 2194:
case 3142:
case 3758:
case 2435:
case 3358:
case 557:
case 40:
case 826:
case 2295:
case 4021:
case 2943:
case 3802:
case 261:
case 2142:
case 2758:
case 3194:
case 3435:
case 73:
case 77:
case 1571:
case 3641:
case 1536:
case 1394:
case 3870:
case 3030:
case 268:
case 361:
case 1093:
case 1907:
case 2540:
case 2596:
case 188:
case 2479:
case 1602:
case 2734:
case 2873:
case 424:
case 584:
case 3189:
case 2119:
case 2824:
case 1495:
case 1670:
case 3540:
case 1719:
case 643:
case 3873:
case 3301:
case 3864:
case 4018:
case 3701:
case 3940:
case 808:
case 3824:
case 3777:
case 1417:
case 3119:
case 1327:
case 3390:
case 1733:
case 1874:
case 2932:
case 1034:
case 818:
case 3127:
case 1429:
case 3451:
case 3019:
case 1190:
case 935:
case 1697:
case 3167:
case 2518:
case 975:
case 2988:
case 2790:
case 2390:
case 3918:
case 2746:
case 3932:
case 4040:
case 2346:
case 2133:
case 3532:
case 2660:
case 2019:
case 2588:
case 2620:
case 2167:
case 3951:
case 1929:
case 2686:
case 3259:
case 1221:
case 1850:
case 3244:
case 703:
case 193:
case 1745:
case 787:
case 1969:
case 153:
case 3488:
case 2418:
case 2432:
case 3145:
case 2805:
case 3178:
case 526:
case 433:
case 3292:
case 857:
case 522:
case 1028:
case 1778:
case 3432:
case 2145:
case 3768:
case 2579:
case 2496:
case 2882:
case 2440:
case 3078:
case 1168:
case 2045:
case 4051:
case 1128:
case 1654:
case 2768:
case 2838:
case 360:
case 2812:
case 713:
case 1243:
case 3045:
case 3207:
case 1517:
case 2698:
case 693:
case 3236:
case 467:
case 2109:
case 948:
case 800:
case 1638:
case 2849:
case 2854:
case 2057:
case 409:
case 2781:
case 114:
case 1471:
case 2381:
case 3443:
case 766:
case 3854:
case 3849:
case 374:
case 3935:
case 739:
case 1296:
case 1682:
case 1709:
case 180:
case 518:
case 3009:
case 1853:
case 794:
case 1288:
case 969:
case 104:
case 1357:
case 34:
case 3461:
case 1605:
case 508:
case 359:
case 907:
case 936:
case 976:
case 3157:
case 2009:
case 299:
case 501:
case 2461:
case 259:
case 884:
case 2421:
case 1081:
case 2157:
case 3216:
case 1621:
case 1563:
case 3644:
case 1523:
case 1537:
case 3191:
case 1450:
case 2762:
case 711:
case 1937:
case 3253:
case 16:
case 1391:
case 2072:
case 2216:
case 442:
case 3286:
case 2659:
case 1162:
case 1122:
case 2191:
case 2405:
case 3832:
case 4024:
case 539:
case 718:
case 2000:
case 2253:
case 3322:
case 3072:
case 2888:
case 4073:
case 4064:
case 2840:
case 1372:
case 2482:
case 3412:
case 1772:
case 158:
case 1062:
case 2755:
case 865:
case 3172:
case 3298:
case 431:
case 2100:
case 2636:
case 2524:
case 3482:
case 3924:
case 3973:
case 2438:
case 1700:
case 320:
case 3755:
case 1300:
case 701:
case 3524:
case 3902:
case 205:
case 2126:
case 2166:
case 2454:
case 2449:
case 4015:
case 1726:
case 3843:
case 1031:
case 675:
case 1076:
case 722:
case 2902:
case 3347:
case 1366:
case 3747:
case 1836:
case 1871:
case 1640:
case 3126:
case 140:
case 4085:
case 3449:
case 1282:
case 3454:
case 2502:
case 5:
case 38:
case 1104:
case 1131:
case 1453:
case 1176:
case 175:
case 3821:
case 3003:
case 2585:
case 135:
case 3731:
case 3776:
case 1960:
case 3704:
case 455:
case 28:
case 3985:
case 844:
case 2066:
case 2997:
case 2003:
case 2821:
case 2250:
case 1892:
case 2731:
case 2776:
case 2861:
case 2304:
case 2026:
case 2814:
case 802:
case 3087:
case 1978:
case 2129:
case 2017:
case 877:
case 2490:
case 42:
case 2169:
case 1652:
case 493:
case 2751:
case 3648:
case 1578:
case 2230:
case 2095:
case 2087:
case 1427:
case 3129:
case 2884:
case 3675:
case 3017:
case 1545:
case 2:
case 1467:
case 3351:
case 1079:
case 182:
case 1729:
case 133:
case 1769:
case 1839:
case 3230:
case 173:
case 1293:
case 2528:
case 1856:
case 303:
case 682:
case 1795:
case 686:
case 3294:
case 3029:
case 1051:
case 673:
case 1419:
case 633:
case 3195:
case 2968:
case 930:
case 3477:
case 1625:
case 1317:
case 505:
case 3528:
case 3680:
case 2069:
case 2779:
case 2195:
case 1883:
case 2434:
case 3968:
case 1787:
case 1277:
case 3735:
case 394:
case 3865:
case 964:
case 109:
case 74:
case 1201:
case 1909:
case 1234:
case 2289:
case 3911:
case 1494:
case 1135:
case 2981:
case 167:
case 294:
case 863:
case 520:
case 3683:
case 2335:
case 2511:
case 2825:
case 1442:
case 2656:
case 1880:
case 889:
case 3981:
case 254:
case 414:
case 3708:
case 2493:
case 2639:
case 266:
case 1108:
case 2227:
case 279:
case 2899:
case 821:
case 362:
case 2708:
case 3493:
case 992:
case 1557:
case 996:
case 119:
case 667:
case 609:
case 1614:
case 3267:
case 734:
case 828:
case 3227:
case 3233:
case 1290:
case 3899:
case 599:
case 3962:
case 3484:
case 2890:
case 2041:
case 4055:
case 2123:
case 678:
case 559:
case 2163:
case 2174:
case 201:
case 3562:
case 1064:
case 1723:
case 1737:
case 3275:
case 3414:
case 1991:
case 1827:
case 1306:
case 1706:
case 1363:
case 1299:
case 3137:
case 1591:
case 2522:
case 985:
case 146:
case 671:
case 3106:
case 2248:
case 3630:
case 1693:
case 347:
case 1124:
case 3141:
case 1500:
case 3694:
case 1173:
case 1164:
case 3006:
case 4062:
case 1265:
case 458:
case 3074:
case 1341:
case 3037:
case 3373:
case 1413:
case 1900:
case 1225:
case 4022:
case 3773:
case 3764:
case 138:
case 247:
case 2210:
case 3642:
case 451:
case 1972:
case 2006:
case 2877:
case 2324:
case 2364:
case 2373:
case 1483:
case 2023:
case 2037:
case 2834:
case 2764:
case 2773:
case 1658:
case 715:
case 3425:
case 3213:
case 1503:
case 1601:
case 2858:
case 1634:
case 2689:
case 695:
case 2302:
case 3619:
case 1966:
case 127:
case 1894:
case 1410:
case 1903:
case 1097:
case 3283:
case 1085:
case 85:
case 1102:
case 3702:
case 2256:
case 3689:
case 2619:
case 2060:
case 2370:
case 4076:
case 2947:
case 849:
case 89:
case 222:
case 1448:
case 2397:
case 2239:
case 435:
case 1002:
case 2893:
case 1185:
case 2931:
case 2667:
case 2627:
case 2633:
case 861:
case 3385:
case 1070:
case 322:
case 3397:
case 705:
case 3904:
case 1830:
case 3239:
case 1115:
case 3976:
case 3931:
case 3893:
case 627:
case 3504:
case 3499:
case 3667:
case 3576:
case 1646:
case 3531:
case 3627:
case 2385:
case 3160:
case 4025:
case 3952:
case 2999:
case 1548:
case 2116:
case 4065:
case 1262:
case 834:
case 1948:
case 874:
case 3098:
case 3552:
case 728:
case 1386:
case 2153:
case 3291:
case 2952:
case 3999:
case 973:
case 986:
case 145:
case 933:
case 3645:
case 721:
case 3431:
case 1716:
case 2552:
case 645:
case 310:
case 1426:
case 2086:
case 1466:
case 3811:
case 3447:
case 1403:
case 3525:
case 1910:
case 789:
case 170:
case 4052:
case 130:
case 3053:
case 3925:
case 3200:
case 2272:
case 384:
case 3349:
case 3754:
case 1798:
case 2811:
case 1398:
case 3881:
case 84:
case 2525:
case 899:
case 1628:
case 2925:
case 2349:
case 2354:
case 490:
case 3198:
case 1668:
case 2754:
case 2828:
case 3382:
case 2312:
case 3609:
case 3782:
case 164:
case 357:
case 2338:
case 1913:
case 2738:
case 712:
case 1005:
case 696:
case 3266:
case 1513:
case 1611:
case 3226:
case 692:
case 1472:
case 3828:
case 2609:
case 2782:
case 3312:
case 3338:
case 1983:
case 257:
case 417:
case 3738:
case 561:
case 1583:
case 2050:
case 1112:
case 1138:
case 1681:
case 2226:
case 2514:
case 472:
case 407:
case 436:
case 860:
case 483:
case 225:
case 523:
case 59:
case 2657:
case 1878:
case 469:
case 3422:
case 2914:
case 1012:
case 3984:
case 2150:
case 1939:
case 3514:
case 1204:
case 737:
case 196:
case 3305:
case 1350:
case 3705:
case 152:
case 1082:
case 1491:
case 3914:
case 3150:
case 156:
case 2984:
case 2691:
case 1622:
case 512:
case 27:
case 516:
case 2593:
case 2159:
case 23:
case 2361:
case 2007:
case 2245:
case 2876:
case 2993:
case 2721:
case 1392:
case 2321:
case 4058:
case 37:
case 2278:
case 3159:
case 33:
case 1457:
case 3144:
case 3361:
case 3804:
case 3007:
case 3831:
case 3761:
case 1759:
case 3721:
case 1744:
case 946:
case 3036:
case 1359:
case 1344:
case 3411:
case 1994:
case 1736:
case 1771:
case 1866:
case 3044:
case 1803:
case 1707:
case 685:
case 61:
case 971:
case 1307:
case 3743:
case 344:
case 3171:
case 2958:
case 2672:
case 1143:
case 749:
case 3107:
case 4093:
case 2411:
case 3481:
case 2059:
case 815:
case 978:
case 2343:
case 577:
case 2743:
case 938:
case 537:
case 3558:
case 244:
case 1228:
case 1542:
case 1268:
case 2107:
case 3396:
case 3934:
case 3796:
case 124:
case 1088:
case 3340:
case 2428:
case 3740:
case 3666:
case 1196:
case 488:
case 528:
case 3603:
case 1140:
case 1211:
case 1919:
case 3626:
case 1032:
case 2901:
case 2977:
case 4046:
case 2740:
case 481:
case 2577:
case 521:
case 2603:
case 1989:
case 2534:
case 2626:
case 1281:
case 2546:
case 443:
case 2590:
case 4034:
case 1478:
case 3318:
case 4001:
case 589:
case 3332:
case 3732:
case 1567:
case 3546:
case 3590:
case 365:
case 3388:
case 955:
case 1891:
case 3788:
case 3257:
case 2732:
case 2862:
case 3946:
case 624:
case 1967:
case 1546:
case 3631:
case 3676:
case 3445:
case 922:
case 1590:
case 2132:
case 3533:
case 1990:
case 3933:
case 3927:
case 3967:
case 3096:
case 3118:
case 2676:
case 2188:
case 2445:
case 4019:
case 1718:
case 2891:
case 1822:
case 2933:
case 2040:
case 1732:
case 1332:
case 4033:
case 2519:
case 2800:
case 1468:
case 3589:
case 590:
case 3872:
case 4067:
case 224:
case 2196:
case 3281:
case 2919:
case 2140:
case 1934:
case 3519:
case 1855:
case 729:
case 2589:
case 1396:
case 2018:
case 1740:
case 324:
case 1340:
case 3088:
case 3647:
case 3196:
case 2281:
case 3919:
case 1534:
case 743:
case 1501:
case 3140:
case 2989:
case 1092:
case 2336:
case 4030:
case 1481:
case 2371:
case 2994:
case 2307:
case 541:
case 918:
case 2409:
case 2594:
case 2143:
case 3542:
case 3371:
case 3994:
case 2942:
case 3771:
case 3736:
case 3307:
case 548:
case 947:
case 1743:
case 3061:
case 1343:
case 1171:
case 1600:
case 30:
case 3655:
case 2228:
case 3409:
case 67:
case 911:
case 3594:
case 644:
case 3161:
case 1691:
case 2662:
case 1144:
case 17:
case 4042:
case 1993:
case 1876:
case 1245:
case 3043:
case 1804:
case 901:
case 1071:
case 2392:
case 3759:
case 3622:
case 49:
case 2457:
case 3662:
case 2530:
case 1278:
case 4094:
case 532:
case 507:
case 908:
case 2930:
case 2043:
case 2344:
case 285:
case 423:
case 21:
case 576:
case 45:
case 2744:
case 3792:
case 2759:
case 3845:
case 3204:
case 125:
case 962:
case 1705:
case 3750:
case 1305:
case 1657:
case 2038:
case 939:
case 1150:
case 356:
case 4083:
case 2012:
case 3539:
case 3105:
case 2878:
case 296:
case 748:
case 1584:
case 2204:
case 2939:
case 2750:
case 1462:
case 412:
case 252:
case 3038:
case 3012:
case 256:
case 2105:
case 2491:
case 1312:
case 1828:
case 1712:
case 2913:
case 1338:
case 893:
case 264:
case 3112:
case 3583:
case 2005:
case 437:
case 3681:
case 2611:
case 3138:
case 994:
case 364:
case 1455:
case 783:
case 954:
case 1050:
case 1203:
case 2583:
case 3247:
case 3005:
case 3182:
case 1226:
case 732:
case 2138:
case 1086:
case 3398:
case 2910:
case 2403:
case 1881:
case 2154:
case 2809:
case 270:
case 3580:
case 2255:
case 3628:
case 3668:
case 4075:
case 987:
case 428:
case 588:
case 1016:
case 3910:
case 2980:
case 1811:
case 330:
case 3809:
case 1053:
case 2628:
case 600:
case 184:
case 1354:
case 1349:
case 913:
case 3049:
case 2222:
case 100:
case 3753:
case 2548:
case 345:
case 1153:
case 2386:
case 1476:
case 4080:
case 750:
case 2786:
case 2857:
case 814:
case 3222:
case 2054:
case 2049:
case 2975:
case 1186:
case 2353:
case 1678:
case 529:
case 1098:
case 245:
case 2716:
case 3386:
case 4010:
case 395:
case 3720:
case 3070:
case 1797:
case 126:
case 1931:
case 1976:
case 3360:
case 3760:
case 1239:
case 1499:
case 1667:
case 1531:
case 1120:
case 740:
case 3214:
case 3475:
case 1160:
case 1633:
case 593:
case 295:
case 2720:
case 2070:
case 4026:
case 2360:
case 3002:
case 3185:
case 2760:
case 4003:
case 3284:
case 1452:
case 2214:
case 1385:
case 553:
case 48:
case 52:
case 3085:
case 2566:
case 2677:
case 2526:
case 2170:
case 2601:
case 2926:
case 1302:
case 405:
case 2097:
case 3480:
case 3842:
case 3015:
case 3526:
case 1465:
case 3170:
case 622:
case 1256:
case 735:
case 3903:
case 3410:
case 3097:
case 327:
case 1947:
case 626:
case 2480:
case 231:
case 2124:
case 338:
case 3889:
case 514:
case 2173:
case 2164:
case 2456:
case 1642:
case 3972:
case 2265:
case 580:
case 4091:
case 2225:
case 3483:
case 1210:
case 3819:
case 1141:
case 2889:
case 2572:
case 3456:
case 1694:
case 111:
case 1074:
case 1063:
case 76:
case 1724:
case 1006:
case 2972:
case 3741:
case 3900:
case 2658:
case 3225:
case 3413:
case 1764:
case 944:
case 1834:
case 1023:
case 1955:
case 2483:
case 1801:
case 1373:
case 3867:
case 97:
case 3723:
case 3337:
case 1414:
case 3991:
case 751:
case 3306:
case 3774:
case 1123:
case 1137:
case 1174:
case 3693:
case 1630:
case 1106:
case 504:
case 618:
case 2737:
case 2064:
case 2337:
case 881:
case 2299:
case 3252:
case 2763:
case 2774:
case 2306:
case 2827:
case 2833:
case 1922:
case 1562:
case 108:
case 242:
case 714:
case 3557:
case 162:
case 166:
case 319:
case 654:
case 2684:
case 694:
case 3246:
case 3875:
case 139:
case 3957:
case 3035:
case 1899:
case 179:
case 1233:
case 1227:
case 1308:
case 890:
case 219:
case 499:
case 850:
case 2290:
case 209:
case 2277:
case 2234:
case 2909:
case 474:
case 2201:
case 2509:
case 3442:
case 2494:
case 1289:
case 591:
case 267:
case 1613:
case 309:
case 558:
case 1735:
case 3909:
case 1825:
case 704:
case 1511:
case 662:
case 1219:
case 3494:
case 2880:
case 1656:
case 2008:
case 997:
case 367:
case 666:
case 2395:
case 1568:
case 3489:
case 4045:
case 2665:
case 460:
case 872:
case 2317:
case 6:
case 540:
case 2179:
case 1928:
case 832:
case 1069:
case 3795:
case 3856:
case 103:
case 793:
case 1779:
case 1029:
case 2489:
case 1434:
case 984:
case 753:
case 4078:
case 1401:
case 2883:
case 3665:
case 3625:
case 2258:
case 2787:
case 3717:
case 3179:
case 3545:
case 1017:
case 3151:
case 3433:
case 1814:
case 1446:
case 3699:
case 113:
case 3729:
case 603:
case 1751:
case 3329:
case 1351:
case 3945:
case 373:
case 3369:
case 2545:
case 1884:
case 2151:
case 2699:
case 3652:
case 1:
case 2729:
case 282:
case 817:
case 2329:
case 2369:
case 575:
case 273:
case 286:
case 3578:
case 2839:
case 2769:
case 1648:
case 233:
case 2176:
case 2453:
case 2104:
case 2688:
case 235:
case 1585:
case 2859:
case 80:
case 2920:
case 426:
case 3486:
case 18:
case 2632:
case 3176:
case 3131:
case 2618:
case 1915:
case 3520:
case 3104:
case 1997:
case 375:
case 727:
case 3960:
case 1376:
case 3416:
case 1776:
case 1861:
case 1731:
case 605:
case 3031:
case 3807:
case 3726:
case 1843:
case 105:
case 1747:
case 3766:
case 3871:
case 3303:
case 3836:
case 1347:
case 1126:
case 340:
case 615:
case 3640:
case 1570:
case 2212:
case 1103:
case 3147:
case 1454:
case 1902:
case 2807:
case 2004:
case 2726:
case 2766:
case 2871:
case 3498:
case 885:
case 2282:
case 2147:
case 2772:
case 1924:
case 1091:
case 2372:
case 3254:
case 3249:
case 1840:
case 418:
case 351:
case 2062:
case 3300:
case 1964:
case 1973:
case 1896:
case 391:
case 961:
case 298:
case 3643:
case 746:
case 1524:
case 1636:
case 3541:
case 1100:
case 1671:
case 3155:
case 4037:
case 3372:
case 2254:
case 2300:
case 4006:
case 4074:
case 411:
case 1298:
case 968:
case 567:
case 447:
case 2155:
case 2574:
case 2563:
case 738:
case 2506:
case 401:
case 2450:
case 2661:
case 2537:
case 2523:
case 1362:
case 2055:
case 2923:
case 4041:
case 1762:
case 2791:
case 2963:
case 2974:
case 1322:
case 2391:
case 3621:
case 1644:
case 3506:
case 1405:
case 95:
case 1191:
case 1253:
case 1000:
case 3937:
case 3923:
case 3055:
case 1888:
case 479:
case 2853:
case 439:
case 2357:
case 204:
case 830:
case 870:
case 466:
case 2816:
case 3081:
case 2459:
case 634:
case 2232:
case 709:
case 199:
case 3357:
case 14:
case 916:
case 304:
case 3757:
case 159:
case 3605:
case 3444:
case 2492:
case 1157:
case 3011:
case 3471:
case 3436:
case 1711:
case 314:
case 1311:
case 906:
case 659:
case 937:
case 1109:
case 1535:
case 719:
case 578:
case 1854:
case 2638:
case 3111:
case 380:
case 3309:
case 699:
case 64:
case 3682:
case 3296:
case 2436:
case 1781:
case 571:
case 845:
case 3181:
case 2709:
case 2682:
case 1496:
case 160:
case 2987:
case 1440:
case 3595:
case 1882:
case 3517:
case 3243:
case 1236:
case 773:
case 896:
case 2649:
case 1768:
case 2654:
case 2917:
case 1728:
case 1812:
case 892:
case 2595:
case 1328:
case 928:
case 527:
case 2243:
case 852:
case 403:
case 3128:
case 2221:
case 1292:
case 1178:
case 2345:
case 2969:
case 293:
case 864:
case 595:
case 3778:
case 22:
case 1418:
case 3378:
case 253:
case 2529:
case 1259:
case 3221:
case 3850:
case 1244:
case 3929:
case 3969:
case 393:
case 3745:
case 353:
case 1488:
case 4087:
case 660:
case 2874:
case 2727:
case 831:
case 3685:
case 1918:
case 871:
case 2806:
case 1932:
case 2767:
case 2823:
case 2001:
case 2190:
case 1089:
case 3208:
case 2146:
case 243:
case 3733:
case 3727:
case 3077:
case 3615:
case 3327:
case 3034:
case 3837:
case 915:
case 1746:
case 1167:
case 3697:
case 3146:
case 2208:
case 1588:
case 3101:
case 381:
case 2789:
case 3177:
case 1479:
case 288:
case 1067:
case 1334:
case 1701:
case 1996:
case 1864:
case 1873:
case 1777:
case 1119:
case 3417:
case 1940:
case 2487:
case 1033:
case 2101:
case 2670:
case 2319:
case 3789:
case 3602:
case 281:
case 388:
case 2177:
case 3389:
case 2090:
case 1189:
case 3487:
case 530:
case 920:
case 1194:
case 3673:
case 3624:
case 3536:
case 69:
case 2742:
case 3794:
case 2342:
case 65:
case 1870:
case 3279:
case 3907:
case 1295:
case 564:
case 1287:
case 2673:
case 2664:
case 1142:
case 2536:
case 2624:
case 444:
case 2794:
case 2279:
case 2394:
case 3342:
case 2907:
case 4044:
case 168:
case 2860:
case 2730:
case 592:
case 4071:
case 2959:
case 2820:
case 4007:
case 2544:
case 47:
case 2559:
case 1885:
case 3592:
case 43:
case 552:
case 3860:
case 123:
case 1961:
case 1793:
case 1897:
case 2992:
case 3251:
case 661:
case 1521:
case 3559:
case 3544:
case 1674:
case 1606:
case 70:
case 1130:
case 19:
case 2058:
case 1623:
case 1637:
case 1561:
case 3285:
case 2550:
case 2215:
case 1083:
case 2423:
case 2474:
case 2463:
case 1784:
case 2406:
case 2739:
case 2869:
case 236:
case 2339:
case 585:
case 283:
case 276:
case 51:
case 2950:
case 3608:
case 3184:
case 2297:
case 232:
case 2829:
case 1013:
case 3215:
case 3437:
case 3463:
case 764:
case 1714:
case 112:
case 602:
case 3739:
case 3869:
case 1260:
case 3339:
case 2184:
case 372:
case 3950:
case 959:
case 606:
case 3114:
case 177:
case 341:
case 137:
case 796:
case 1879:
case 3270:
case 2202:
case 106:
case 3356:
case 3895:
case 1582:
case 3441:
case 1424:
case 2084:
case 1982:
case 3014:
case 2887:
case 2783:
case 3635:
case 2383:
case 756:
case 241:
case 1538:
case 348:
case 497:
case 1512:
case 2895:
case 4050:
case 2441:
case 2817:
case 882:
case 217:
case 2313:
case 886:
case 3783:
case 833:
case 50:
case 2713:
case 1938:
case 1075:
case 2598:
case 689:
case 3264:
case 3273:
case 3099:
case 1765:
case 1110:
case 1835:
case 1949:
case 1954:
case 663:
case 3679:
case 1549:
case 121:
case 2780:
case 3165:
case 1695:
case 484:
case 3598:
case 290:
case 524:
case 2264:
case 819:
case 3052:
case 2224:
case 2099:
case 4053:
case 1402:
case 3998:
case 3780:
case 2165:
case 128:
case 3152:
case 2553:
case 1080:
case 3348:
case 1808:
case 3986:
case 2460:
case 2916:
case 1352:
case 2516:
case 2065:
case 2953:
case 867:
case 2775:
case 3553:
case 1669:
case 1497:
case 2152:
case 2748:
case 3199:
case 3420:
case 2348:
case 3651:
case 1629:
case 770:
case 1263:
case 730:
case 1206:
case 3516:
case 3375:
case 3953:
case 3025:
case 1223:
case 3775:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1742814002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,];
var gg_b = "1742814002/";

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
