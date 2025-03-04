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
var o = 1;
switch (g) {
case 590:
case 3924:
case 3589:
case 2794:
case 1211:
case 3090:
case 2749:
case 91:
case 940:
case 544:
case 3782:
case 1307:
case 4018:
case 1938:
case 792:
case 2755:
case 3831:
case 3227:
case 668:
case 1356:
case 1317:
case 136:
case 2977:
case 1573:
case 2948:
case 2880:
case 1366:
case 591:
case 135:
case 2430:
case 4030:
case 1910:
case 1670:
case 1254:
case 416:
case 1784:
case 309:
case 809:
case 1446:
case 415:
case 1906:
case 3096:
case 3979:
case 685:
case 2376:
case 1916:
case 2563:
case 2436:
case 3112:
case 3243:
case 1161:
case 536:
case 1528:
case 1983:
case 639:
case 1775:
case 2660:
case 3534:
case 288:
case 3778:
case 651:
case 167:
case 535:
case 243:
case 191:
case 1967:
case 3525:
case 403:
case 237:
case 1643:
case 2518:
case 3695:
case 2343:
case 1731:
case 1540:
case 1823:
case 2902:
case 3796:
case 879:
case 2442:
case 1698:
case 379:
case 1084:
case 292:
case 766:
case 827:
case 2530:
case 2741:
case 985:
case 1473:
case 1333:
case 2633:
case 3329:
case 1075:
case 951:
case 986:
case 2508:
case 3581:
case 1219:
case 3047:
case 2672:
case 1432:
case 3664:
case 3875:
case 3082:
case 788:
case 3385:
case 154:
case 1159:
case 743:
case 737:
case 1169:
case 3:
case 3790:
case 2135:
case 8:
case 1546:
case 3601:
case 2124:
case 2688:
case 2453:
case 3884:
case 48:
case 2065:
case 641:
case 3374:
case 2362:
case 968:
case 3971:
case 4087:
case 3148:
case 3177:
case 2352:
case 1145:
case 4063:
case 2536:
case 2463:
case 3023:
case 2892:
case 2606:
case 4058:
case 2622:
case 1322:
case 3379:
case 1025:
case 1261:
case 77:
case 4068:
case 3028:
case 3198:
case 260:
case 822:
case 1832:
case 322:
case 3531:
case 1596:
case 426:
case 1950:
case 1482:
case 2044:
case 131:
case 1367:
case 946:
case 1357:
case 1164:
case 596:
case 1316:
case 478:
case 1873:
case 945:
case 2129:
case 3226:
case 425:
case 3202:
case 3127:
case 2638:
case 530:
case 2791:
case 1447:
case 1214:
case 2600:
case 3669:
case 1300:
case 3475:
case 4092:
case 2174:
case 531:
case 2492:
case 195:
case 874:
case 374:
case 2513:
case 2610:
case 1828:
case 2887:
case 1693:
case 258:
case 559:
case 3645:
case 3834:
case 92:
case 732:
case 4037:
case 3825:
case 1917:
case 196:
case 2437:
case 3746:
case 20:
case 1590:
case 44:
case 3152:
case 2818:
case 2568:
case 2320:
case 3248:
case 584:
case 1620:
case 2121:
case 2091:
case 1523:
case 562:
case 1988:
case 1840:
case 3539:
case 2927:
case 3797:
case 634:
case 2558:
case 3773:
case 3277:
case 3985:
case 761:
case 27:
case 1582:
case 3170:
case 981:
case 956:
case 2224:
case 3371:
case 2962:
case 3614:
case 3431:
case 304:
case 804:
case 2998:
case 758:
case 3728:
case 162:
case 1081:
case 3575:
case 232:
case 2403:
case 184:
case 1547:
case 1846:
case 1119:
case 2005:
case 2326:
case 2302:
case 1626:
case 2537:
case 646:
case 1109:
case 1490:
case 2015:
case 3176:
case 549:
case 408:
case 2312:
case 2279:
case 3661:
case 1612:
case 3651:
case 2744:
case 4086:
case 2486:
case 2592:
case 2413:
case 1933:
case 1875:
case 461:
case 2138:
case 1082:
case 2786:
case 628:
case 2444:
case 854:
case 226:
case 3159:
case 2256:
case 675:
case 2713:
case 527:
case 2100:
case 676:
case 2499:
case 1601:
case 905:
case 579:
case 1270:
case 3388:
case 1884:
case 3039:
case 1425:
case 1611:
case 1374:
case 2058:
case 2674:
case 1971:
case 1177:
case 913:
case 2068:
case 3145:
case 2207:
case 1023:
case 1193:
case 2703:
case 2395:
case 2855:
case 3540:
case 2260:
case 2092:
case 1796:
case 3823:
case 2122:
case 24:
case 2250:
case 2780:
case 5:
case 458:
case 2354:
case 2505:
case 1078:
case 2951:
case 3497:
case 1329:
case 708:
case 3882:
case 2629:
case 2183:
case 75:
case 3219:
case 2849:
case 1047:
case 2116:
case 3432:
case 1664:
case 3372:
case 2080:
case 890:
case 844:
case 3922:
case 1619:
case 2272:
case 3264:
case 2544:
case 1979:
case 3916:
case 3161:
case 1112:
case 3676:
case 1747:
case 3295:
case 4091:
case 3360:
case 3528:
case 3983:
case 778:
case 1298:
case 726:
case 367:
case 1778:
case 391:
case 1321:
case 509:
case 1924:
case 1589:
case 2621:
case 208:
case 3104:
case 975:
case 448:
case 1262:
case 1935:
case 2841:
case 25:
case 606:
case 4015:
case 2013:
case 1252:
case 1782:
case 2086:
case 3938:
case 710:
case 1831:
case 3532:
case 2945:
case 2768:
case 3356:
case 3317:
case 836:
case 3573:
case 3366:
case 835:
case 3739:
case 2405:
case 3597:
case 3670:
case 2008:
case 862:
case 362:
case 1728:
case 901:
case 1575:
case 884:
case 3846:
case 671:
case 2753:
case 2257:
case 3119:
case 2995:
case 3734:
case 3626:
case 2206:
case 2160:
case 3109:
case 3490:
case 1584:
case 2361:
case 2964:
case 3612:
case 1661:
case 2018:
case 900:
case 117:
case 2891:
case 3933:
case 773:
case 1248:
case 3620:
case 1604:
case 2210:
case 3988:
case 3840:
case 2036:
case 2555:
case 1539:
case 437:
case 2815:
case 2565:
case 4041:
case 2441:
case 1773:
case 1277:
case 2156:
case 849:
case 2742:
case 3259:
case 3582:
case 1170:
case 1614:
case 2200:
case 2166:
case 2549:
case 1974:
case 2671:
case 78:
case 1659:
case 3478:
case 1097:
case 2899:
case 623:
case 2736:
case 1032:
case 1921:
case 3447:
case 2844:
case 2635:
case 2369:
case 66:
case 1335:
case 1475:
case 395:
case 895:
case 3111:
case 1162:
case 3966:
case 1220:
case 3204:
case 3828:
case 2345:
case 3089:
case 3693:
case 1834:
case 896:
case 3917:
case 396:
case 1825:
case 1746:
case 721:
case 1889:
case 2087:
case 3306:
case 3322:
case 3034:
case 453:
case 3025:
case 2730:
case 715:
case 2541:
case 28:
case 1212:
case 1143:
case 3423:
case 4055:
case 2063:
case 1028:
case 3832:
case 3596:
case 4049:
case 3950:
case 3482:
case 970:
case 3154:
case 574:
case 3357:
case 3164:
case 3316:
case 3873:
case 2172:
case 859:
case 3383:
case 1202:
case 1953:
case 3743:
case 3247:
case 1019:
case 2817:
case 286:
case 1795:
case 3631:
case 3414:
case 2396:
case 1275:
case 1181:
case 3798:
case 169:
case 2928:
case 538:
case 239:
case 2866:
case 285:
case 3341:
case 307:
case 1754:
case 3999:
case 1009:
case 3404:
case 542:
case 3076:
case 471:
case 3223:
case 2255:
case 3727:
case 2997:
case 1548:
case 2785:
case 665:
case 2613:
case 666:
case 187:
case 1577:
case 2850:
case 2021:
case 1593:
case 1239:
case 569:
case 2932:
case 138:
case 2265:
case 3070:
case 2538:
case 2294:
case 1711:
case 1402:
case 2774:
case 314:
case 142:
case 2500:
case 1942:
case 89:
case 2249:
case 3569:
case 3282:
case 2603:
case 1936:
case 3132:
case 2416:
case 2833:
case 3394:
case 2721:
case 2457:
case 3854:
case 2483:
case 4083:
case 3349:
case 2085:
case 3864:
case 2872:
case 3197:
case 1682:
case 3027:
case 2467:
case 4067:
case 966:
case 2382:
case 193:
case 3355:
case 1189:
case 1623:
case 552:
case 739:
case 2323:
case 2668:
case 3895:
case 1368:
case 240:
case 3052:
case 1520:
case 2946:
case 21:
case 2422:
case 4006:
case 294:
case 3290:
case 786:
case 1011:
case 3062:
case 1358:
case 3639:
case 988:
case 1862:
case 2637:
case 937:
case 943:
case 1337:
case 1477:
case 1448:
case 2692:
case 1095:
case 4010:
case 3043:
case 2347:
case 1647:
case 2199:
case 2400:
case 1827:
case 1709:
case 4000:
case 692:
case 3675:
case 3296:
case 3469:
case 829:
case 329:
case 3459:
case 1502:
case 1526:
case 2940:
case 1054:
case 2438:
case 4038:
case 824:
case 281:
case 324:
case 2990:
case 2556:
case 2035:
case 2472:
case 1704:
case 2332:
case 2024:
case 2194:
case 3464:
case 1632:
case 2397:
case 1986:
case 3454:
case 2883:
case 2857:
case 255:
case 1059:
case 3246:
case 2566:
case 2373:
case 1498:
case 2642:
case 3077:
case 33:
case 2155:
case 3093:
case 3689:
case 2822:
case 1443:
case 2507:
case 2165:
case 3495:
case 1139:
case 3048:
case 3509:
case 1628:
case 2810:
case 2663:
case 1576:
case 1980:
case 1877:
case 157:
case 428:
case 734:
case 1353:
case 2215:
case 3845:
case 1462:
case 3411:
case 1893:
case 3726:
case 475:
case 2996:
case 3702:
case 660:
case 2838:
case 2488:
case 3401:
case 3869:
case 932:
case 1427:
case 2800:
case 245:
case 1992:
case 3196:
case 547:
case 405:
case 2466:
case 4066:
case 3554:
case 2572:
case 2244:
case 648:
case 1937:
case 4017:
case 246:
case 3681:
case 819:
case 802:
case 2608:
case 3228:
case 1640:
case 2141:
case 4007:
case 564:
case 960:
case 1543:
case 2978:
case 1318:
case 1051:
case 1820:
case 3595:
case 3012:
case 1225:
case 2947:
case 1234:
case 632:
case 3315:
case 3861:
case 1812:
case 958:
case 3949:
case 2982:
case 133:
case 90:
case 263:
case 1289:
case 2636:
case 3391:
case 2724:
case 2735:
case 3020:
case 3409:
case 67:
case 2460:
case 3748:
case 1014:
case 234:
case 3419:
case 3232:
case 182:
case 3965:
case 1826:
case 2923:
case 1802:
case 1745:
case 2346:
case 1646:
case 3493:
case 1561:
case 1811:
case 2384:
case 2981:
case 3337:
case 1098:
case 1128:
case 3477:
case 2187:
case 3134:
case 3125:
case 3719:
case 3930:
case 611:
case 705:
case 1551:
case 2153:
case 3064:
case 2885:
case 4024:
case 3647:
case 2424:
case 2375:
case 4035:
case 3231:
case 3827:
case 352:
case 2435:
case 3709:
case 1675:
case 64:
case 1296:
case 2033:
case 129:
case 1459:
case 455:
case 3054:
case 2280:
case 3936:
case 1394:
case 2088:
case 2694:
case 1991:
case 1854:
case 1349:
case 1864:
case 3682:
case 2829:
case 893:
case 2203:
case 1355:
case 3189:
case 1504:
case 3623:
case 678:
case 276:
case 1895:
case 3520:
case 2756:
case 3843:
case 2213:
case 275:
case 1062:
case 1365:
case 1639:
case 228:
case 3898:
case 2479:
case 1770:
case 2665:
case 4079:
case 3386:
case 1223:
case 1727:
case 2007:
case 1451:
case 1809:
case 2268:
case 3876:
case 3548:
case 3690:
case 387:
case 887:
case 3701:
case 3239:
case 3593:
case 1461:
case 3412:
case 2136:
case 838:
case 1545:
case 1070:
case 2066:
case 3711:
case 1559:
case 3402:
case 205:
case 445:
case 3426:
case 1146:
case 342:
case 842:
case 3942:
case 2535:
case 2056:
case 1752:
case 446:
case 1819:
case 65:
case 1569:
case 926:
case 2989:
case 2524:
case 3953:
case 775:
case 1743:
case 2925:
case 3019:
case 3795:
case 2130:
case 2934:
case 3275:
case 2331:
case 369:
case 776:
case 3963:
case 1341:
case 2118:
case 1944:
case 2579:
case 910:
case 2821:
case 2050:
case 42:
case 3284:
case 2292:
case 2060:
case 3009:
case 3420:
case 1999:
case 1076:
case 701:
case 1861:
case 2242:
case 2574:
case 2186:
case 833:
case 2738:
case 3289:
case 1391:
case 3336:
case 3004:
case 502:
case 218:
case 519:
case 1020:
case 1409:
case 1851:
case 3552:
case 616:
case 450:
case 3769:
case 3958:
case 1748:
case 364:
case 1419:
case 2939:
case 451:
case 3527:
case 882:
case 485:
case 700:
case 3826:
case 3802:
case 1501:
case 3745:
case 1297:
case 973:
case 439:
case 3646:
case 2706:
case 3992:
case 620:
case 1196:
case 3131:
case 1305:
case 1554:
case 3330:
case 2180:
case 1564:
case 1814:
case 3308:
case 102:
case 2984:
case 2529:
case 270:
case 3640:
case 2263:
case 3543:
case 3318:
case 271:
case 1012:
case 3061:
case 2757:
case 468:
case 2421:
case 98:
case 2615:
case 3234:
case 2783:
case 3598:
case 1315:
case 200:
case 41:
case 440:
case 172:
case 2137:
case 1240:
case 3848:
case 3980:
case 857:
case 3877:
case 357:
case 1625:
case 2931:
case 3462:
case 1726:
case 494:
case 2192:
case 2006:
case 2083:
case 2699:
case 2230:
case 53:
case 1519:
case 1344:
case 441:
case 3751:
case 2835:
case 2644:
case 921:
case 3281:
case 3069:
case 1720:
case 4029:
case 572:
case 915:
case 398:
case 898:
case 3632:
case 2038:
case 3986:
case 1182:
case 3059:
case 771:
case 26:
case 13:
case 3342:
case 2389:
case 2521:
case 3903:
case 1093:
case 223:
case 673:
case 3139:
case 3714:
case 2158:
case 2363:
case 3218:
case 2848:
case 2576:
case 581:
case 3137:
case 659:
case 1560:
case 2184:
case 300:
case 2628:
case 3022:
case 1550:
case 3334:
case 2893:
case 3006:
case 1996:
case 3474:
case 4062:
case 1215:
case 3931:
case 1079:
case 3016:
case 2761:
case 1205:
case 3057:
case 3083:
case 1838:
case 2281:
case 3485:
case 747:
case 580:
case 733:
case 962:
case 3644:
case 2427:
case 801:
case 301:
case 2632:
case 2704:
case 1472:
case 599:
case 1332:
case 298:
case 1990:
case 3000:
case 1556:
case 1517:
case 1867:
case 1566:
case 695:
case 1857:
case 2673:
case 477:
case 949:
case 1883:
case 2697:
case 3038:
case 1397:
case 1806:
case 823:
case 1822:
case 2903:
case 3521:
case 1642:
case 2498:
case 86:
case 1771:
case 3158:
case 2714:
case 2139:
case 3236:
case 2443:
case 180:
case 996:
case 163:
case 247:
case 545:
case 1982:
case 1450:
case 2759:
case 12:
case 3242:
case 2812:
case 2562:
case 1460:
case 2552:
case 2336:
case 4076:
case 2004:
case 818:
case 3691:
case 546:
case 1636:
case 134:
case 2646:
case 2745:
case 1588:
case 2826:
case 1923:
case 959:
case 2470:
case 2330:
case 4070:
case 52:
case 1630:
case 2131:
case 1533:
case 414:
case 145:
case 931:
case 49:
case 3984:
case 3529:
case 370:
case 870:
case 2937:
case 2308:
case 146:
case 1572:
case 3871:
case 3180:
case 534:
case 3767:
case 1618:
case 2543:
case 2051:
case 2820:
case 1978:
case 3975:
case 662:
case 3287:
case 3615:
case 2234:
case 798:
case 2598:
case 1947:
case 3421:
case 684:
case 2061:
case 551:
case 1613:
case 635:
case 3268:
case 1686:
case 1255:
case 1997:
case 2386:
case 689:
case 3136:
case 2412:
case 1265:
case 238:
case 4012:
case 3788:
case 1021:
case 1850:
case 1390:
case 636:
case 4026:
case 2402:
case 4002:
case 3066:
case 1538:
case 1294:
case 3524:
case 550:
case 2303:
case 3017:
case 1249:
case 1500:
case 242:
case 2942:
case 2987:
case 2275:
case 3471:
case 2696:
case 1396:
case 151:
case 186:
case 1817:
case 3925:
case 2019:
case 2795:
case 691:
case 2953:
case 2963:
case 1516:
case 269:
case 568:
case 2181:
case 3108:
case 1928:
case 2284:
case 3733:
case 3237:
case 3821:
case 1506:
case 2754:
case 3641:
case 3118:
case 2764:
case 1807:
case 1115:
case 690:
case 3060:
case 3981:
case 2337:
case 4077:
case 2908:
case 1637:
case 3384:
case 43:
case 991:
case 2862:
case 3163:
case 1241:
case 742:
case 3874:
case 2852:
case 1410:
case 2719:
case 2134:
case 541:
case 3187:
case 2448:
case 3760:
case 3375:
case 3435:
case 51:
case 3072:
case 2647:
case 787:
case 540:
case 3424:
case 1144:
case 594:
case 2054:
case 2502:
case 1940:
case 1888:
case 3750:
case 3033:
case 989:
case 3694:
case 2001:
case 1833:
case 2682:
case 1872:
case 3571:
case 3142:
case 3213:
case 11:
case 3717:
case 3655:
case 2623:
case 3479:
case 3339:
case 3665:
case 328:
case 828:
case 2358:
case 654:
case 1658:
case 1074:
case 194:
case 2305:
case 617:
case 1605:
case 3630:
case 3466:
case 3299:
case 3533:
case 845:
case 1706:
case 219:
case 518:
case 2681:
case 170:
case 3456:
case 346:
case 846:
case 3244:
case 922:
case 73:
case 3572:
case 1180:
case 171:
case 1263:
case 3141:
case 3407:
case 3978:
case 2315:
case 487:
case 1421:
case 1716:
case 1186:
case 3450:
case 1574:
case 2949:
case 1242:
case 1113:
case 32:
case 2861:
case 604:
case 3735:
case 2409:
case 2851:
case 2190:
case 3724:
case 3636:
case 2391:
case 2965:
case 4019:
case 1710:
case 1585:
case 2748:
case 469:
case 3346:
case 2273:
case 2955:
case 2297:
case 2793:
case 3588:
case 1103:
case 4064:
case 3472:
case 3194:
case 500:
case 1429:
case 452:
case 856:
case 3517:
case 3433:
case 3566:
case 3857:
case 3149:
case 4054:
case 2182:
case 3883:
case 1038:
case 719:
case 2093:
case 123:
case 3155:
case 1168:
case 1879:
case 16:
case 3771:
case 1158:
case 501:
case 1010:
case 1236:
case 3663:
case 1137:
case 3810:
case 3560:
case 899:
case 2509:
case 399:
case 3550:
case 1334:
case 3996:
case 2845:
case 2634:
case 1931:
case 3215:
case 2411:
case 3079:
case 1325:
case 3653:
case 4001:
case 56:
case 3488:
case 2147:
case 3205:
case 1230:
case 1057:
case 2401:
case 2399:
case 1208:
case 1835:
case 2344:
case 493:
case 2519:
case 2869:
case 1067:
case 3483:
case 3721:
case 1088:
case 1694:
case 3833:
case 841:
case 341:
case 1203:
case 3382:
case 1829:
case 2197:
case 707:
case 1649:
case 3085:
case 2514:
case 2349:
case 2052:
case 1213:
case 31:
case 81:
case 3668:
case 176:
case 1717:
case 3323:
case 2504:
case 457:
case 2770:
case 128:
case 2365:
case 2290:
case 2062:
case 1766:
case 3422:
case 3406:
case 894:
case 394:
case 1981:
case 2811:
case 2561:
case 1163:
case 3241:
case 1874:
case 1153:
case 714:
case 3410:
case 2905:
case 3692:
case 1187:
case 1760:
case 4069:
case 2675:
case 2469:
case 3029:
case 3199:
case 1435:
case 2776:
case 498:
case 576:
case 3438:
case 3378:
case 2459:
case 4059:
case 1750:
case 3888:
case 528:
case 229:
case 464:
case 1331:
case 513:
case 2414:
case 3396:
case 1925:
case 351:
case 3567:
case 2247:
case 1130:
case 3856:
case 885:
case 3680:
case 385:
case 3516:
case 339:
case 839:
case 3583:
case 1108:
case 3928:
case 927:
case 1733:
case 1821:
case 1237:
case 2140:
case 2944:
case 207:
case 433:
case 1641:
case 2341:
case 506:
case 2076:
case 2404:
case 2999:
case 3115:
case 1292:
case 609:
case 1060:
case 3785:
case 3613:
case 1268:
case 4051:
case 3686:
case 2727:
case 1007:
case 3997:
case 3510:
case 3860:
case 113:
case 3932:
case 4061:
case 3021:
case 3850:
case 3191:
case 868:
case 1258:
case 2559:
case 2762:
case 3294:
case 3603:
case 1989:
case 2819:
case 2569:
case 106:
case 3500:
case 1535:
case 29:
case 873:
case 1638:
case 373:
case 2907:
case 2478:
case 2338:
case 3359:
case 3635:
case 4047:
case 3624:
case 2101:
case 1791:
case 3736:
case 2310:
case 1586:
case 1513:
case 2111:
case 1348:
case 1174:
case 597:
case 295:
case 1492:
case 2956:
case 2677:
case 3042:
case 933:
case 1853:
case 947:
case 2917:
case 698:
case 158:
case 3053:
case 2261:
case 88:
case 38:
case 3679:
case 3919:
case 3730:
case 2322:
case 1606:
case 1622:
case 3087:
case 2781:
case 160:
case 3708:
case 1468:
case 2251:
case 3455:
case 3063:
case 749:
case 1667:
case 2154:
case 2482:
case 1044:
case 2832:
case 3133:
case 1715:
case 259:
case 558:
case 2316:
case 50:
case 2873:
case 1616:
case 2164:
case 321:
case 3267:
case 821:
case 284:
case 2547:
case 796:
case 132:
case 3008:
case 1998:
case 2626:
case 2602:
case 1005:
case 3995:
case 2119:
case 3216:
case 3753:
case 1943:
case 2612:
case 1279:
case 1312:
case 2972:
case 4090:
case 1799:
case 1015:
case 957:
case 2490:
case 3222:
case 1537:
case 320:
case 3891:
case 3150:
case 3351:
case 3018:
case 3304:
case 3555:
case 3036:
case 2523:
case 1091:
case 2840:
case 2988:
case 3210:
case 2620:
case 1320:
case 664:
case 1558:
case 731:
case 3565:
case 1927:
case 3815:
case 2245:
case 3107:
case 303:
case 803:
case 1480:
case 2789:
case 583:
case 730:
case 3805:
case 816:
case 2259:
case 1830:
case 3156:
case 409:
case 3742:
case 249:
case 3314:
case 2496:
case 2269:
case 3549:
case 315:
case 3911:
case 1224:
case 2446:
case 290:
case 3233:
case 3599:
case 3737:
case 2264:
case 2031:
case 1229:
case 2906:
case 404:
case 2922:
case 669:
case 2983:
case 1436:
case 1813:
case 143:
case 137:
case 2967:
case 565:
case 2151:
case 754:
case 1041:
case 267:
case 1650:
case 642:
case 3841:
case 35:
case 1542:
case 2211:
case 85:
case 808:
case 3621:
case 1794:
case 1418:
case 2938:
case 417:
case 2440:
case 3013:
case 1977:
case 236:
case 1656:
case 166:
case 1617:
case 3768:
case 3945:
case 2532:
case 3003:
case 1993:
case 2597:
case 2910:
case 2739:
case 3405:
case 2114:
case 2573:
case 1171:
case 2366:
case 1948:
case 791:
case 1049:
case 2847:
case 2159:
case 2627:
case 3444:
case 1327:
case 1124:
case 1094:
case 3904:
case 1688:
case 378:
case 878:
case 1135:
case 3266:
case 1920:
case 3100:
case 2878:
case 2169:
case 3674:
case 3058:
case 3311:
case 938:
case 2662:
case 1837:
case 1221:
case 3110:
case 744:
case 1453:
case 1892:
case 3591:
case 3703:
case 3207:
case 2145:
case 1055:
case 3068:
case 1352:
case 2652:
case 474:
case 3106:
case 2540:
case 1902:
case 2823:
case 3855:
case 1868:
case 1518:
case 735:
case 2643:
case 3395:
case 1398:
case 84:
case 2698:
case 1442:
case 34:
case 3865:
case 2084:
case 1633:
case 553:
case 2333:
case 3894:
case 3354:
case 311:
case 4032:
case 3961:
case 3849:
case 3364:
case 2219:
case 1508:
case 3183:
case 2882:
case 2075:
case 1304:
case 1036:
case 2732:
case 1555:
case 2604:
case 1210:
case 521:
case 2248:
case 3568:
case 3818:
case 3320:
case 2985:
case 2773:
case 3927:
case 1815:
case 1441:
case 2293:
case 103:
case 2539:
case 93:
case 722:
case 3480:
case 1238:
case 1805:
case 1117:
case 490:
case 1156:
case 1742:
case 1314:
case 204:
case 1549:
case 444:
case 3235:
case 2614:
case 4031:
case 1166:
case 2431:
case 520:
case 2170:
case 1763:
case 832:
case 2575:
case 436:
case 435:
case 503:
case 1030:
case 1257:
case 3005:
case 1995:
case 1216:
case 1753:
case 3943:
case 2661:
case 516:
case 848:
case 1361:
case 3312:
case 3799:
case 2929:
case 3015:
case 1160:
case 1206:
case 3537:
case 383:
case 619:
case 883:
case 3836:
case 3413:
case 120:
case 1891:
case 3592:
case 3744:
case 515:
case 972:
case 1954:
case 217:
case 1018:
case 1351:
case 704:
case 1465:
case 2212:
case 1541:
case 1919:
case 4039:
case 2889:
case 2198:
case 2028:
case 3468:
case 861:
case 3044:
case 397:
case 902:
case 454:
case 2740:
case 222:
case 2531:
case 1133:
case 672:
case 2202:
case 1909:
case 3129:
case 3976:
case 3580:
case 3657:
case 3638:
case 1899:
case 2127:
case 2073:
case 2659:
case 3185:
case 2669:
case 2335:
case 3271:
case 1369:
case 63:
case 3600:
case 2921:
case 3503:
case 3791:
case 2032:
case 2324:
case 3586:
case 2162:
case 3348:
case 2220:
case 3174:
case 274:
case 3492:
case 80:
case 2746:
case 1042:
case 4084:
case 30:
case 2484:
case 2825:
case 3377:
case 2834:
case 3393:
case 2645:
case 3887:
case 1345:
case 858:
case 3926:
case 1260:
case 1092:
case 1855:
case 3868:
case 3518:
case 3343:
case 2695:
case 526:
case 1395:
case 4089:
case 1780:
case 525:
case 2839:
case 578:
case 14:
case 3442:
case 892:
case 110:
case 392:
case 2654:
case 1951:
case 2078:
case 3741:
case 1354:
case 111:
case 1167:
case 1505:
case 2047:
case 1849:
case 1629:
case 1685:
case 99:
case 2875:
case 3327:
case 2270:
case 914:
case 54:
case 3135:
case 2790:
case 1100:
case 2971:
case 1311:
case 3362:
case 3487:
case 511:
case 1914:
case 4025:
case 2425:
case 3453:
case 3065:
case 1591:
case 2023:
case 712:
case 1207:
case 430:
case 1068:
case 3352:
case 2177:
case 69:
case 15:
case 1415:
case 2090:
case 108:
case 1621:
case 2924:
case 3794:
case 2321:
case 1086:
case 4081:
case 462:
case 3977:
case 3285:
case 3408:
case 866:
case 1768:
case 3617:
case 366:
case 727:
case 1945:
case 3755:
case 2831:
case 2227:
case 484:
case 2723:
case 3430:
case 1405:
case 1288:
case 3171:
case 365:
case 865:
case 3948:
case 977:
case 449:
case 1599:
case 1080:
case 1544:
case 1272:
case 607:
case 3229:
case 2096:
case 2126:
case 3660:
case 3886:
case 7:
case 2747:
case 3813:
case 343:
case 337:
case 837:
case 2778:
case 3041:
case 3587:
case 388:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1741230001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,];
var gg_b = "1741230001/";

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
    if (rr["hasavif"] == 1) rr["haswebp"] = 1;
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
