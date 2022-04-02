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
case 3158:
case 2816:
case 3312:
case 806:
case 2374:
case 2497:
case 3525:
case 3629:
case 3131:
case 4004:
case 803:
case 260:
case 4083:
case 2905:
case 4022:
case 814:
case 3559:
case 3761:
case 1815:
case 1764:
case 2735:
case 14:
case 2037:
case 51:
case 1438:
case 1374:
case 825:
case 2664:
case 505:
case 58:
case 752:
case 3809:
case 1325:
case 1137:
case 3924:
case 2312:
case 162:
case 986:
case 1122:
case 4081:
case 3666:
case 1243:
case 657:
case 3690:
case 3030:
case 2719:
case 387:
case 949:
case 1095:
case 1021:
case 1627:
case 2071:
case 3422:
case 2078:
case 2640:
case 1274:
case 904:
case 1925:
case 3450:
case 720:
case 3261:
case 2053:
case 266:
case 1789:
case 3357:
case 3496:
case 2972:
case 1338:
case 2737:
case 1574:
case 3920:
case 2792:
case 1848:
case 1209:
case 1916:
case 2707:
case 3822:
case 1834:
case 442:
case 1140:
case 1482:
case 2275:
case 1048:
case 1819:
case 1228:
case 427:
case 1905:
case 3662:
case 2144:
case 439:
case 523:
case 376:
case 1793:
case 1063:
case 1104:
case 2780:
case 2399:
case 2826:
case 757:
case 192:
case 412:
case 1059:
case 1970:
case 1634:
case 2012:
case 2375:
case 3061:
case 2604:
case 841:
case 3624:
case 2335:
case 1479:
case 2965:
case 3704:
case 1666:
case 1300:
case 358:
case 3754:
case 323:
case 281:
case 1351:
case 2005:
case 3851:
case 3240:
case 456:
case 198:
case 2348:
case 3267:
case 182:
case 3903:
case 3383:
case 3636:
case 810:
case 3647:
case 2287:
case 486:
case 1655:
case 2695:
case 1543:
case 2931:
case 2919:
case 77:
case 998:
case 3597:
case 2227:
case 1762:
case 1534:
case 3324:
case 3483:
case 1001:
case 2678:
case 1336:
case 628:
case 2019:
case 1265:
case 448:
case 125:
case 3796:
case 3782:
case 3184:
case 4068:
case 2623:
case 1052:
case 1168:
case 3017:
case 3167:
case 997:
case 1609:
case 1527:
case 2444:
case 3613:
case 1966:
case 2064:
case 2189:
case 662:
case 955:
case 1079:
case 113:
case 1276:
case 1060:
case 1204:
case 2234:
case 727:
case 1540:
case 4061:
case 1290:
case 3987:
case 2338:
case 791:
case 2811:
case 1259:
case 589:
case 2033:
case 826:
case 362:
case 1200:
case 1888:
case 2841:
case 862:
case 990:
case 606:
case 1508:
case 2760:
case 847:
case 836:
case 108:
case 603:
case 908:
case 2163:
case 3884:
case 1441:
case 2228:
case 840:
case 3105:
case 196:
case 1914:
case 3678:
case 540:
case 1431:
case 1261:
case 452:
case 3439:
case 1451:
case 3486:
case 463:
case 264:
case 1223:
case 3893:
case 2893:
case 2679:
case 474:
case 2974:
case 2958:
case 3521:
case 1481:
case 2786:
case 4069:
case 2552:
case 2482:
case 2822:
case 183:
case 2864:
case 1885:
case 3600:
case 3379:
case 2212:
case 2808:
case 3513:
case 3046:
case 3270:
case 1024:
case 1130:
case 435:
case 180:
case 819:
case 2102:
case 3475:
case 72:
case 2245:
case 3427:
case 1777:
case 1145:
case 3182:
case 1999:
case 3348:
case 1269:
case 35:
case 3471:
case 700:
case 3966:
case 1414:
case 2181:
case 1032:
case 3515:
case 2041:
case 2198:
case 1286:
case 1985:
case 3953:
case 2436:
case 959:
case 837:
case 1903:
case 2748:
case 2934:
case 1972:
case 3514:
case 3026:
case 2541:
case 707:
case 957:
case 86:
case 3014:
case 1730:
case 1636:
case 2134:
case 256:
case 405:
case 2920:
case 4031:
case 3555:
case 2580:
case 132:
case 3944:
case 1081:
case 149:
case 3025:
case 2161:
case 2602:
case 2795:
case 2024:
case 1035:
case 4043:
case 3675:
case 1857:
case 2715:
case 2473:
case 2964:
case 1912:
case 1073:
case 2684:
case 2868:
case 1691:
case 2514:
case 2431:
case 3799:
case 1871:
case 3746:
case 424:
case 2337:
case 3196:
case 2503:
case 2933:
case 594:
case 2301:
case 1251:
case 2835:
case 724:
case 568:
case 673:
case 3482:
case 745:
case 1563:
case 3115:
case 2297:
case 1114:
case 2131:
case 2183:
case 1942:
case 2401:
case 3290:
case 3664:
case 157:
case 1406:
case 3735:
case 2116:
case 2477:
case 1236:
case 2504:
case 1662:
case 2644:
case 2890:
case 195:
case 1434:
case 2500:
case 1530:
case 156:
case 361:
case 871:
case 1878:
case 3168:
case 2938:
case 3768:
case 1537:
case 3904:
case 3923:
case 586:
case 1946:
case 4035:
case 1579:
case 2647:
case 440:
case 235:
case 2032:
case 742:
case 205:
case 3277:
case 1271:
case 536:
case 272:
case 1874:
case 1800:
case 1018:
case 1700:
case 1725:
case 1429:
case 873:
case 329:
case 1020:
case 886:
case 2202:
case 1092:
case 2578:
case 295:
case 2803:
case 502:
case 3458:
case 910:
case 2784:
case 3943:
case 2232:
case 431:
case 3130:
case 2442:
case 1066:
case 1345:
case 382:
case 2790:
case 438:
case 1089:
case 3462:
case 3910:
case 305:
case 1422:
case 1742:
case 967:
case 1983:
case 1160:
case 3989:
case 3323:
case 639:
case 3192:
case 1153:
case 13:
case 625:
case 2565:
case 2122:
case 3892:
case 2364:
case 2898:
case 3008:
case 754:
case 794:
case 2210:
case 3057:
case 3889:
case 1170:
case 627:
case 966:
case 2574:
case 3977:
case 763:
case 2635:
case 1837:
case 3317:
case 3535:
case 2209:
case 1093:
case 973:
case 2326:
case 2310:
case 3472:
case 1205:
case 1906:
case 3353:
case 2617:
case 307:
case 335:
case 1006:
case 1928:
case 1808:
case 2847:
case 1465:
case 2080:
case 136:
case 1708:
case 2407:
case 1133:
case 299:
case 697:
case 1589:
case 1870:
case 3635:
case 2937:
case 1377:
case 3611:
case 3685:
case 311:
case 1411:
case 4070:
case 3956:
case 4050:
case 430:
case 938:
case 1078:
case 1623:
case 3005:
case 2728:
case 3421:
case 1028:
case 3373:
case 2757:
case 279:
case 675:
case 712:
case 3806:
case 2296:
case 3593:
case 1875:
case 976:
case 925:
case 1427:
case 991:
case 1195:
case 318:
case 2113:
case 1412:
case 1115:
case 392:
case 2217:
case 1260:
case 1118:
case 3532:
case 3527:
case 2216:
case 1026:
case 1950:
case 3473:
case 121:
case 1218:
case 2149:
case 1713:
case 1770:
case 3585:
case 1565:
case 363:
case 706:
case 511:
case 2636:
case 202:
case 2732:
case 2334:
case 1997:
case 3528:
case 2526:
case 3370:
case 930:
case 3488:
case 3617:
case 201:
case 2435:
case 2087:
case 3403:
case 3639:
case 3838:
case 1757:
case 1046:
case 350:
case 2595:
case 3718:
case 3815:
case 858:
case 414:
case 2393:
case 2049:
case 1157:
case 3413:
case 444:
case 2587:
case 2091:
case 3321:
case 768:
case 2907:
case 1034:
case 2642:
case 2866:
case 1335:
case 634:
case 55:
case 1015:
case 147:
case 1498:
case 3152:
case 2782:
case 2922:
case 3901:
case 1850:
case 715:
case 2897:
case 2793:
case 2998:
case 3274:
case 3188:
case 3780:
case 3998:
case 3468:
case 3777:
case 1546:
case 3259:
case 1955:
case 1008:
case 2115:
case 1577:
case 3988:
case 228:
case 209:
case 1864:
case 1828:
case 2586:
case 166:
case 2674:
case 2225:
case 3922:
case 185:
case 1611:
case 1443:
case 2204:
case 2067:
case 3789:
case 3954:
case 3102:
case 2969:
case 828:
case 1640:
case 2081:
case 1513:
case 2208:
case 575:
case 3800:
case 3412:
case 1302:
case 1852:
case 1756:
case 2596:
case 356:
case 2954:
case 2942:
case 1772:
case 2153:
case 2203:
case 3940:
case 2165:
case 1087:
case 1562:
case 3623:
case 210:
case 2940:
case 2242:
case 3502:
case 3251:
case 2814:
case 1873:
case 3863:
case 583:
case 3206:
case 3022:
case 1685:
case 3212:
case 970:
case 3594:
case 1861:
case 936:
case 1334:
case 2692:
case 1045:
case 598:
case 1533:
case 3811:
case 3731:
case 1201:
case 3538:
case 3291:
case 56:
case 248:
case 3220:
case 2077:
case 1923:
case 3173:
case 2008:
case 3499:
case 1654:
case 2977:
case 1456:
case 122:
case 3608:
case 453:
case 1461:
case 2128:
case 1826:
case 60:
case 76:
case 853:
case 994:
case 3227:
case 2271:
case 2745:
case 2805:
case 1958:
case 3431:
case 4000:
case 960:
case 1426:
case 3900:
case 3745:
case 3701:
case 3077:
case 2720:
case 3654:
case 683:
case 726:
case 1235:
case 1360:
case 3300:
case 3894:
case 3071:
case 3334:
case 3876:
case 3711:
case 1525:
case 2456:
case 3406:
case 642:
case 1043:
case 926:
case 2924:
case 2629:
case 3534:
case 863:
case 758:
case 2980:
case 1312:
case 3517:
case 2344:
case 461:
case 2230:
case 1308:
case 160:
case 3511:
case 2850:
case 3758:
case 178:
case 3236:
case 1774:
case 135:
case 874:
case 3080:
case 1075:
case 1234:
case 972:
case 3602:
case 2252:
case 297:
case 1321:
case 3122:
case 618:
case 3708:
case 413:
case 2471:
case 1391:
case 2573:
case 2675:
case 1191:
case 2105:
case 1178:
case 2874:
case 1425:
case 3225:
case 94:
case 984:
case 1490:
case 995:
case 3554:
case 2214:
case 704:
case 1379:
case 950:
case 1194:
case 685:
case 3604:
case 1735:
case 3336:
case 4076:
case 87:
case 3177:
case 2871:
case 827:
case 1504:
case 2304:
case 61:
case 2806:
case 1753:
case 44:
case 2410:
case 1909:
case 1407:
case 2488:
case 3653:
case 3157:
case 2028:
case 3737:
case 4019:
case 3416:
case 481:
case 556:
case 1583:
case 1217:
case 1486:
case 684:
case 2045:
case 2218:
case 1780:
case 1169:
case 3260:
case 85:
case 564:
case 370:
case 395:
case 174:
case 1397:
case 371:
case 3976:
case 545:
case 1884:
case 602:
case 1913:
case 3301:
case 96:
case 1421:
case 1:
case 2618:
case 484:
case 3053:
case 3213:
case 2638:
case 146:
case 2319:
case 593:
case 105:
case 567:
case 3185:
case 3478:
case 3687:
case 539:
case 3541:
case 2947:
case 2649:
case 1995:
case 2133:
case 422:
case 3881:
case 4052:
case 1455:
case 1109:
case 1823:
case 3937:
case 3873:
case 624:
case 3817:
case 2581:
case 3489:
case 120:
case 3744:
case 773:
case 3935:
case 2755:
case 2553:
case 495:
case 3996:
case 2569:
case 3384:
case 2043:
case 1679:
case 2622:
case 3047:
case 1101:
case 1833:
case 2257:
case 2722:
case 4056:
case 3099:
case 600:
case 890:
case 3847:
case 1684:
case 1516:
case 2653:
case 2556:
case 687:
case 2467:
case 1731:
case 1897:
case 2231:
case 710:
case 2614:
case 460:
case 561:
case 1499:
case 123:
case 2856:
case 1584:
case 2220:
case 1317:
case 1632:
case 2142:
case 574:
case 1241:
case 2579:
case 1550:
case 3589:
case 1519:
case 1011:
case 915:
case 1919:
case 2381:
case 2138:
case 508:
case 1337:
case 1131:
case 765:
case 3875:
case 2705:
case 2606:
case 3928:
case 2260:
case 580:
case 3123:
case 3058:
case 6:
case 1686:
case 3015:
case 746:
case 2854:
case 1437:
case 2543:
case 257:
case 1692:
case 877:
case 3289:
case 2395:
case 2261:
case 3354:
case 1787:
case 2839:
case 2088:
case 3837:
case 306:
case 2535:
case 2283:
case 2114:
case 3376:
case 3766:
case 2194:
case 2716:
case 1128:
case 2872:
case 1724:
case 1572:
case 2845:
case 2744:
case 1110:
case 1386:
case 1004:
case 3628:
case 83:
case 1967:
case 3648:
case 879:
case 3820:
case 2136:
case 263:
case 1480:
case 2074:
case 3189:
case 3021:
case 3572:
case 3668:
case 68:
case 488:
case 2352:
case 1198:
case 2521:
case 364:
case 1806:
case 1082:
case 2499:
case 4041:
case 843:
case 721:
case 3476:
case 677:
case 2610:
case 2097:
case 3340:
case 3036:
case 2040:
case 1171:
case 1974:
case 3759:
case 3095:
case 404:
case 2693:
case 2135:
case 59:
case 2188:
case 1650:
case 2322:
case 1749:
case 2345:
case 1123:
case 3524:
case 3934:
case 3508:
case 999:
case 3646:
case 799:
case 2717:
case 2408:
case 1387:
case 3031:
case 1208:
case 1365:
case 2516:
case 2696:
case 3547:
case 3117:
case 1262:
case 455:
case 889:
case 3315:
case 2742:
case 16:
case 2978:
case 497:
case 3258:
case 980:
case 3124:
case 2944:
case 1597:
case 2226:
case 1459:
case 516:
case 353:
case 866:
case 2342:
case 26:
case 2661:
case 3156:
case 2318:
case 1876:
case 2330:
case 4077:
case 2939:
case 1252:
case 3885:
case 7:
case 3316:
case 808:
case 2479:
case 2495:
case 3179:
case 1111:
case 1163:
case 285:
case 1631:
case 1899:
case 3694:
case 962:
case 3736:
case 2819:
case 3387:
case 1968:
case 1255:
case 1359:
case 676:
case 821:
case 1121:
case 3667:
case 2727:
case 1224:
case 2616:
case 2388:
case 3606:
case 1144:
case 1896:
case 1976:
case 3743:
case 1311:
case 36:
case 3979:
case 3846:
case 133:
case 84:
case 3909:
case 1213:
case 3955:
case 3948:
case 2253:
case 2475:
case 3551:
case 623:
case 37:
case 4037:
case 3739:
case 1413:
case 428:
case 1564:
case 1548:
case 1211:
case 1558:
case 1606:
case 1373:
case 2829:
case 441:
case 3153:
case 3709:
case 3207:
case 3530:
case 1010:
case 2140:
case 2178:
case 2029:
case 3958:
case 2315:
case 3762:
case 2522:
case 2585:
case 3676:
case 2694:
case 2419:
case 1614:
case 3689:
case 482:
case 1575:
case 2414:
case 3024:
case 1587:
case 3494:
case 3040:
case 445:
case 1162:
case 3112:
case 1647:
case 3644:
case 1036:
case 2749:
case 3672:
case 126:
case 2566:
case 1943:
case 835:
case 1320:
case 749:
case 2703:
case 3050:
case 110:
case 661:
case 2175:
case 2054:
case 1991:
case 386:
case 2112:
case 3191:
case 3568:
case 3717:
case 2654:
case 4088:
case 2763:
case 733:
case 2867:
case 2215:
case 52:
case 2056:
case 2821:
case 4020:
case 1380:
case 802:
case 1138:
case 2759:
case 616:
case 3041:
case 3132:
case 3271:
case 1570:
case 735:
case 1586:
case 2613:
case 3443:
case 2031:
case 729:
case 3460:
case 3967:
case 2038:
case 3169:
case 3794:
case 1988:
case 2762:
case 1917:
case 513:
case 3250:
case 1981:
case 899:
case 28:
case 186:
case 432:
case 1225:
case 2910:
case 1520:
case 3498:
case 522:
case 289:
case 3194:
case 3510:
case 569:
case 2935:
case 3911:
case 797:
case 2199:
case 951:
case 2339:
case 1215:
case 2179:
case 1644:
case 3199:
case 1381:
case 559:
case 421:
case 2645:
case 468:
case 2870:
case 2182:
case 3778:
case 1744:
case 694:
case 604:
case 509:
case 2809:
case 2627:
case 2756:
case 1781:
case 3509:
case 1466:
case 3133:
case 881:
case 2810:
case 2501:
case 570:
case 3637:
case 103:
case 1358:
case 744:
case 2365:
case 2035:
case 2187:
case 1862:
case 184:
case 3724:
case 2437:
case 3697:
case 3070:
case 1839:
case 2288:
case 1929:
case 3171:
case 2549:
case 3237:
case 793:
case 1272:
case 3614:
case 2241:
case 807:
case 1506:
case 320:
case 2480:
case 2086:
case 1646:
case 2936:
case 3445:
case 1908:
case 1266:
case 2177:
case 2949:
case 1703:
case 512:
case 2063:
case 1277:
case 3520:
case 1751:
case 857:
case 3343:
case 1016:
case 1469:
case 2281:
case 2571:
case 274:
case 1539:
case 2306:
case 2066:
case 2928:
case 2075:
case 2909:
case 3430:
case 3326:
case 2768:
case 1743:
case 905:
case 2256:
case 1593:
case 1514:
case 2323:
case 1249:
case 1098:
case 1070:
case 1626:
case 856:
case 3548:
case 1945:
case 864:
case 2360:
case 3505:
case 475:
case 2171:
case 1174:
case 3147:
case 71:
case 75:
case 2718:
case 1542:
case 1176:
case 1331:
case 1673:
case 1510:
case 3688:
case 2575:
case 1812:
case 2876:
case 3684:
case 330:
case 834:
case 3027:
case 1769:
case 2807:
case 3879:
case 3172:
case 656:
case 2350:
case 783:
case 4048:
case 1831:
case 3681:
case 824:
case 3397:
case 1142:
case 1151:
case 1184:
case 3083:
case 1003:
case 3921:
case 1100:
case 80:
case 2630:
case 3603:
case 3093:
case 1242:
case 2001:
case 1677:
case 2796:
case 3660:
case 301:
case 2830:
case 2752:
case 1670:
case 3703:
case 798:
case 2311:
case 3650:
case 1071:
case 1485:
case 3282:
case 1754:
case 2376:
case 3827:
case 1187:
case 2853:
case 3389:
case 3425:
case 1166:
case 3867:
case 2884:
case 3810:
case 2597:
case 2997:
case 591:
case 829:
case 4027:
case 3166:
case 1238:
case 2813:
case 3560:
case 771:
case 388:
case 3852:
case 1013:
case 2879:
case 750:
case 1629:
case 3405:
case 241:
case 688:
case 153:
case 2857:
case 1633:
case 2340:
case 560:
case 3645:
case 2900:
case 850:
case 18:
case 54:
case 1409:
case 2000:
case 3244:
case 1805:
case 394:
case 2534:
case 3726:
case 3652:
case 876:
case 1189:
case 1811:
case 2058:
case 2269:
case 613:
case 3386:
case 792:
case 3341:
case 3638:
case 804:
case 2070:
case 3232:
case 3193:
case 3394:
case 2666:
case 1517:
case 1332:
case 4093:
case 528:
case 3075:
case 519:
case 3899:
case 3062:
case 1113:
case 1025:
case 1532:
case 4095:
case 3073:
case 3549:
case 3950:
case 3536:
case 1536:
case 4015:
case 66:
case 2643:
case 25:
case 968:
case 2118:
case 188:
case 3119:
case 2406:
case 4089:
case 104:
case 419:
case 159:
case 2726:
case 2284:
case 1051:
case 1012:
case 1120:
case 1072:
case 4:
case 337:
case 2751:
case 3174:
case 118:
case 3519:
case 81:
case 3055:
case 1559:
case 3415:
case 4092:
case 296:
case 3145:
case 2417:
case 3795:
case 5:
case 2014:
case 3441:
case 622:
case 1017:
case 1368:
case 3765:
case 4065:
case 2512:
case 939:
case 3:
case 327:
case 70:
case 3659:
case 1659:
case 3293:
case 208:
case 1417:
case 3769:
case 2537:
case 3447:
case 686:
case 1740:
case 3454:
case 1085:
case 3477:
case 3821:
case 1199:
case 1147:
case 433:
case 3912:
case 3100:
case 2185:
case 1233:
case 1362:
case 69:
case 3728:
case 2190:
case 464:
case 3333:
case 1135:
case 2519:
case 891:
case 291:
case 588:
case 1248:
case 1088:
case 2665:
case 3038:
case 3855:
case 2302:
case 2443:
case 478:
case 3760:
case 1347:
case 2633:
case 1179:
case 3178:
case 2390:
case 1057:
case 2869:
case 1658:
case 1910:
case 2193:
case 2141:
case 2433:
case 3544:
case 2611:
case 3700:
case 3658:
case 689:
case 372:
case 2206:
case 3946:
case 1086:
case 1936:
case 315:
case 1515:
case 2843:
case 2314:
case 2668:
case 884:
case 3180:
case 2195:
case 338:
case 3368:
case 3973:
case 1957:
case 411:
case 3501:
case 1285:
case 2120:
case 3829:
case 2517:
case 1794:
case 3674:
case 1212:
case 1363:
case 2973:
case 3332:
case 74:
case 1097:
case 3054:
case 817:
case 3836:
case 989:
case 1790:
case 3751:
case 2559:
case 3818:
case 3835:
case 2279:
case 928:
case 1064:
case 2461:
case 1759:
case 2430:
case 2886:
case 3078:
case 1313:
case 3512:
case 1083:
case 3626:
case 2184:
case 3526:
case 1915:
case 458:
case 1978:
case 2061:
case 2702:
case 2150:
case 734:
case 2278:
case 3029:
case 3402:
case 563:
case 3655:
case 1675:
case 786:
case 300:
case 3215:
case 2968:
case 1203:
case 333:
case 3961:
case 1931:
case 1327:
case 1975:
case 2044:
case 2222:
case 1467:
case 1733:
case 3790:
case 3020:
case 3127:
case 3783:
case 2608:
case 3060:
case 1940:
case 1230:
case 671:
case 2458:
case 3753:
case 213:
case 741:
case 1911:
case 1610:
case 2474:
case 3278:
case 2180:
case 347:
case 1282:
case 342:
case 2956:
case 1454:
case 2059:
case 2731:
case 3975:
case 217:
case 1545:
case 313:
case 3615:
case 1728:
case 2249:
case 2656:
case 3302:
case 258:
case 818:
case 974:
case 385:
case 1628:
case 15:
case 2713:
case 2060:
case 1339:
case 2691:
case 782:
case 154:
case 1061:
case 3588:
case 2651:
case 3107:
case 1860:
case 487:
case 3309:
case 2624:
case 1643:
case 2625:
case 964:
case 3428:
case 2100:
case 3715:
case 1400:
case 3503:
case 2197:
case 1410:
case 599:
case 222:
case 1139:
case 3032:
case 251:
case 2400:
case 1664:
case 3337:
case 2343:
case 2955:
case 1173:
case 2251:
case 48:
case 2842:
case 1299:
case 3098:
case 4094:
case 2639:
case 1935:
case 2531:
case 4036:
case 417:
case 3823:
case 1232:
case 1340:
case 3121:
case 2415:
case 2970:
case 975:
case 2698:
case 2838:
case 3828:
case 499:
case 1322:
case 3798:
case 1922:
case 273:
case 3398:
case 3407:
case 2823:
case 852:
case 233:
case 3767:
case 609:
case 1717:
case 443:
case 3518:
case 236:
case 2085:
case 2009:
case 127:
case 1292:
case 2472:
case 2103:
case 883:
case 1440:
case 477:
case 42:
case 558:
case 1887:
case 3352:
case 2:
case 351:
case 823:
case 4042:
case 1263:
case 3280:
case 2223:
case 924:
case 2557:
case 3205:
case 2455:
case 1497:
case 3999:
case 4086:
case 1315:
case 1186:
case 3129:
case 449:
case 952:
case 2626:
case 680:
case 215:
case 1291:
case 2824:
case 1375:
case 3154:
case 831:
case 1106:
case 2485:
case 1603:
case 3781:
case 3929:
case 46:
case 1392:
case 993:
case 2747:
case 1430:
case 2799:
case 141:
case 1371:
case 3044:
case 3522:
case 4026:
case 218:
case 3002:
case 2464:
case 1257:
case 3303:
case 3003:
case 2812:
case 2200:
case 1595:
case 2398:
case 2272:
case 2706:
case 1996:
case 2332:
case 89:
case 2987:
case 1707:
case 2422:
case 3139:
case 3241:
case 1471:
case 3493:
case 846:
case 2615:
case 3497:
case 2361:
case 239:
case 3137:
case 3902:
case 2963:
case 2612:
case 265:
case 1719:
case 2562:
case 761:
case 1389:
case 668:
case 1531:
case 322:
case 31:
case 2273:
case 2384:
case 426:
case 33:
case 2554:
case 3633:
case 1452:
case 3947:
case 2157:
case 2158:
case 722:
case 1984:
case 2378:
case 3843:
case 2098:
case 2865:
case 2010:
case 3238:
case 2916:
case 1803:
case 3721:
case 3414:
case 3962:
case 1298:
case 1491:
case 1124:
case 789:
case 3209:
case 1845:
case 2018:
case 3360:
case 1503:
case 1357:
case 2055:
case 2669:
case 630:
case 1645:
case 3616:
case 868:
case 2429:
case 1630:
case 854:
case 3001:
case 2036:
case 3649:
case 2825:
case 1324:
case 3216:
case 345:
case 383:
case 2424:
case 1868:
case 2146:
case 3378:
case 229:
case 953:
case 3159:
case 2316:
case 1488:
case 2126:
case 1210:
case 855:
case 3285:
case 1814:
case 669:
case 3111:
case 4059:
case 269:
case 1038:
case 2961:
case 1146:
case 2515:
case 2925:
case 1341:
case 1091:
case 3833:
case 1005:
case 1350:
case 1881:
case 1055:
case 3861:
case 3411:
case 3004:
case 393:
case 27:
case 1009:
case 1493:
case 3314:
case 4049:
case 3609:
case 2568:
case 246:
case 3625:
case 1960:
case 2975:
case 3146:
case 3561:
case 2906:
case 354:
case 1457:
case 774:
case 1107:
case 2976:
case 1172:
case 3228:
case 875:
case 2293:
case 1778:
case 408:
case 190:
case 3673:
case 3872:
case 2270:
case 3725:
case 3009:
case 1214:
case 3850:
case 1447:
case 3757:
case 2986:
case 870:
case 1014:
case 406:
case 280:
case 529:
case 914:
case 2619:
case 1027:
case 3218:
case 2451:
case 2276:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1648882802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,];
var gg_b = "1648882802/";

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
